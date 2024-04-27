import React, {Fragment} from 'react';
import BtnPrimary from "../../../components/UI/buttons/primary/BtnPrimary";
import classes from './Product.module.css'
import Media from "react-media";
import {connect} from "react-redux";
import {setContactModalActive, setContactModalText} from "../../../store/contactModal-reducer";
import Skeleton from "../../../components/UI/skeleton/Skeleton";

const Product = ({title, description, img, setContactModalActive, setContactModalText}) => {
    const handleClick = () => {
        setContactModalActive(true);
        setContactModalText('Замовлення: ' + title);
    }


    const button = (
        <BtnPrimary
            onClick={handleClick}
            style={{padding: '10px 30px'}}
        >
            Замовити
        </BtnPrimary>
    )
    const characteristics = description.map(el => {
        return (
            <div key={el.id}>
                <p>{el.characteristic}</p>
                <p>{el.data}</p>
            </div>
        );
    });

    const desktopProduct = (
        <>
            <Skeleton
                src={img}
                alt={title}
                classNameImage={classes.image}
                classNameSkeleton={classes.skeleton}
            />
            <div className={classes.content}>
                <div className={classes.inner}>
                    <h3>{title}</h3>
                    <div>
                        {button}
                    </div>
                </div>
                <div className={classes.wrap_characteristics}>
                    <strong>Основні характеристики:</strong>
                    <div className={classes.characteristics}>
                        {characteristics}
                    </div>
                </div>
            </div>
        </>
    )
    const tabletProduct = (
        <>
            <div className={classes.inner}>
                <h3>{title}</h3>
            </div>
            <div className={classes.cover}>
                <Skeleton
                    src={img}
                    alt={title}
                    classNameImage={classes.image}
                    classNameSkeleton={classes.skeleton}
                />
                <div className={classes.content}>
                    <div className={classes.wrap_characteristics}>
                        <strong>Основні характеристики:</strong>
                        <div className={classes.characteristics}>
                            {characteristics}
                        </div>
                        <div className={classes.btn}>
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                small: "(max-width: 768px)",
                large: "(min-width: 769px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && tabletProduct}
                        {matches.large && desktopProduct}
                    </Fragment>
                )}
            </Media>
        </section>
    );
};

export default connect(null, {setContactModalActive, setContactModalText})(Product);
