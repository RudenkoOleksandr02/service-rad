import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from "swiper/modules";
import cl from './PrimarySwiper.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Row } from './../../../img/row.svg';

const PrimarySwiper = ({ title, children, gap = 20 }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [showNavigation, setShowNavigation] = useState(true);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();

            // Check if navigation buttons should be visible
            const swiper = swiperRef.current;
            const totalSlides = swiper.slides.length;
            const visibleSlides = swiper.params.slidesPerView === 'auto'
                ? Math.floor(swiper.width / swiper.slides[0].offsetWidth)
                : swiper.params.slidesPerView;

            setShowNavigation(totalSlides > visibleSlides);
        }
    }, [children]);

    const params = {
        modules: [Navigation],
        navigation: {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
        },
        onSwiper: (swiper) => {
            swiperRef.current = swiper;
        },
        spaceBetween: gap,
        speed: 800,
        slidesPerView: 'auto'
    };

    return (
        <div className={cl.wrapper}>
            <div className={cl.inner}>
                <h2>{title}</h2>
                {showNavigation && (
                    <div className={cl.btns}>
                        <button ref={prevRef}><Row className={cl.rowIcon} /></button>
                        <button ref={nextRef}><Row className={cl.rowIcon} /></button>
                    </div>
                )}
            </div>
            <Swiper {...params}>
                {children.map((item, index) => (
                    <SwiperSlide key={index}>
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PrimarySwiper;
