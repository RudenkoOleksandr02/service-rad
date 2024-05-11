import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import classes from './Slider.module.css';
import { ReactComponent as Row } from './../../../img/row.svg';

const Slider = ({ children, title = 'NAME', gap = 25}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [showNextSlide, setShowNextSlide] = useState(false)
    const slideRef = useRef(null);
    const sliderContainerRef = useRef(null);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [startX, setStartX] = useState(null)

    useLayoutEffect(() => {
        const sliderWidth = sliderContainerRef.current.offsetWidth;
        const slideWidth = slideRef.current.offsetWidth + gap / 2
        setSliderWidth(sliderWidth);
        setSlideWidth(slideWidth)
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setSliderWidth(sliderContainerRef.current.offsetWidth);
            setSlideWidth(slideRef.current.offsetWidth + gap / 2)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [gap]);

    useEffect(() => {
        const showSlides = Math.floor(sliderWidth / (slideWidth));
        const totalSlides = children.length;
        const isNextSlide = currentIndex + showSlides < totalSlides;
        setShowNextSlide(isNextSlide);
    }, [currentIndex, slideWidth, children, gap, sliderWidth]);

    const goToPrevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        if (showNextSlide) {
            setCurrentIndex(prevIndex => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const sliderStyles = {
        transform: `translateX(-${currentIndex * (slideWidth + gap / 2)}px)`,
        gap: `0 ${gap}px`
    };

    const handleTouchStart = (event) => {
        setStartX(event.touches[0].clientX)
    }
    const handleTouchMove = (event) => {
        if (!startX) return;

        const currentX = event.touches[0].clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToNextSlide();
            } else {
                if (currentIndex) {
                    goToPrevSlide();
                }
            }
            setStartX(null);
        }
    };
    const handleTouchEnd = (event) => {
        setStartX(null)
    };

    return (
        <div className={classes.slider} ref={sliderContainerRef}>
            <h2>{title}</h2>
            {sliderWidth < slideWidth * children.length &&
                <div className={classes.buttons}>
                    <button onClick={goToPrevSlide} disabled={currentIndex === 0}>
                        <Row className={classes.rowIcon}/>
                    </button>
                    <button onClick={goToNextSlide} disabled={!showNextSlide}>
                        <Row className={classes.rowIcon}/>
                    </button>
                </div>
            }
            <div
                className={classes.content}
                style={sliderStyles}
                onTouchStart={e => handleTouchStart(e)}
                onTouchMove={e => handleTouchMove(e)}
                onTouchEnd={e => handleTouchEnd(e)}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index} ref={slideRef}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
