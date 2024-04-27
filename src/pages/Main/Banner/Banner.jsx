import React from 'react';
import classes from "./Banner.module.css";
import BtnSecondary from "../../../components/UI/buttons/secondary/BtnSecondary";
import bannerImg from './../../../img/banner.png'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setContactModalActive, setContactModalText} from "../../../store/contactModal-reducer";
import Skeleton from "../../../components/UI/skeleton/Skeleton";

const Banner = ({setContactModalActive, setContactModalText}) => {
    const handleOrderClick = () => {
        const text = 'Бажаєте оформити замовлення або дізнатись більше інформації про наше обладнання та отримати консультацію?'
        setContactModalActive(true)
        setContactModalText(text)
    }

    return (
        <section className={classes.banner}>
            <div className={classes.content}>
                <h1>Service Rad - ветеринарне обладнання для вашої клініки</h1>
                <p>Втілюємо ефективні рішення для вдосконалення вашої роботи</p>
                <div className={classes.buttons}>
                    <BtnSecondary onClick={handleOrderClick}>Замовити обладнання</BtnSecondary>
                    <Link to='/products'>Дізнатись більше</Link>
                </div>
            </div>
            <div>
                <Skeleton
                    src={bannerImg}
                    alt='banner image'
                    classNameSkeleton={classes.skeleton}
                    classNameImage={classes.image}
                />
            </div>
        </section>
    );
};

export default connect(null, {setContactModalActive, setContactModalText})(Banner);