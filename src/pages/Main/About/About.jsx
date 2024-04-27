import React from 'react';
import classes from './About.module.css'
import img from './../../../img/about.jpg'
import BtnTertiary from "../../../components/UI/buttons/tertiary/BtnTertiary";
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import {useNavigate} from "react-router-dom";

const About = () => {
    const router = useNavigate()
    return (
        <section className={classes.about}>
            <h2>Про нас</h2>
            <div className={classes.container}>
                <div className={classes.imgContainer}>
                    <Skeleton
                        src={img}
                        alt='about'
                        classNameSkeleton={classes.skeleton}
                        classNameImage={classes.image}
                    />
                </div>
                <div className={classes.content}>
                    <p><strong>Service Rad</strong> - це команда інженерів з понад 15-річним досвідом впровадження ветеринарних рішень в рентген діагностиці для будь-яких потреб та з підтримкою 24/7.</p>
                    <p>Компанія пропонує цифрові рентгенівські системи  для діагностики від українського виробника, що дозволять Вам отримувати миттєві чіткі, деталізовані знімки для тварин та птахів різних розмірів.</p>
                    <BtnTertiary onClick={() => router(`/about`)}>Дізнатись більше</BtnTertiary>
                </div>
            </div>
        </section>
    );
};

export default About;