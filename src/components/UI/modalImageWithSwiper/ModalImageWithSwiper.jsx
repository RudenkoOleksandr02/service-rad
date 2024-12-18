import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import classes from './ModalImageWithSwiper.module.css';
import CloseBtn from "../closeBtn/closeBtn";
import Preloader from "../preloader/preloader";
import {ReactComponent as Row} from './../../../img/row.svg';

const ModalImageWithSwiper = ({onClose, images, selectedImageIndex}) => {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isSwiperReady, setIsSwiperReady] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = images[currentIndex];
        img.onload = () => {
            setLoading(false);
        };
        img.onerror = () => {
            setLoading(false);
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [currentIndex, images]);

    return (
        <div className={classes.modalBackdrop} onClick={onClose}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.closeBtn}>
                    <CloseBtn
                        setIsOpen={onClose}
                        styles={{width1: '40px', height: '40px', width2: '40px', color: '#b5b8bd'}}
                    />
                </div>
                {loading && <Preloader color='white' />}
                {!loading && (
                    <div className={classes.swiper}>
                        <button ref={prevRef} className={classes.prevBtn}>
                            <Row className={`${classes.rowIcon}`} />
                        </button>
                        <Swiper
                            initialSlide={selectedImageIndex}
                            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                            slidesPerView={1}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            modules={[Navigation]}
                            onSwiper={() => setIsSwiperReady(true)}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image}
                                        alt={`Slide ${index}`}
                                        className={classes.selectedImage}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button ref={nextRef} className={classes.nextBtn}>
                            <Row className={`${classes.rowIcon}`} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalImageWithSwiper;
