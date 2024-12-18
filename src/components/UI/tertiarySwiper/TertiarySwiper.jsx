import React, {useEffect, useRef} from 'react';
import {Navigation} from "swiper/modules";
import cl from './TertiarySwiper.module.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {ReactComponent as Row} from './../../../img/row.svg';

const TertiarySwiper = ({title, children, gap = 20}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

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
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: "auto"
            }
        }
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.inner}>
                <h2>{title}</h2>
                <div className={cl.btns}>
                    <button ref={prevRef}><Row className={cl.rowIcon}/></button>
                    <button ref={nextRef}><Row className={cl.rowIcon}/></button>
                </div>
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

export default TertiarySwiper;