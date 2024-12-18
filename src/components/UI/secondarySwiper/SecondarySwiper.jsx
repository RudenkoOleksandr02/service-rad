import React, {useEffect, useRef} from 'react';
import cl from "./SecondarySwiper.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Scrollbar} from "swiper/modules";
import { ReactComponent as Row } from './../../../img/row.svg';

const SecondarySwiper = ({title, children, gap = 20}) => {
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
        modules: [Navigation, FreeMode, Scrollbar],
        navigation: {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
        },
        onSwiper: (swiper) => {
            swiperRef.current = swiper;
        },
        spaceBetween: gap,
        speed: 800,
        freeMode: true,
        breakpoints: {
            0: {
                slidesPerView: "auto",
            },
            480: {
                freeMode: false,
                slidesPerView: "auto"
            },
            1280: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                freeMode: false
            }
        }
    }

    return (
        <div className={cl.wrapper}>
            <h2>{title}</h2>
            <div className={cl.swiperInner}>
                <button ref={prevRef} className={cl.prevBtn}><Row className={`${cl.rowIcon}`}/></button>
                <Swiper {...params} scrollbar={{
                    hide: true,
                }}>
                    {children.map((item, index) => (
                        <SwiperSlide key={index}>
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button ref={nextRef} className={cl.nextBtn}><Row className={`${cl.rowIcon}`}/></button>
            </div>
        </div>
    );
};

export default SecondarySwiper;