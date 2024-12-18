import React, {Fragment, useState} from 'react';
import {connect} from "react-redux";
import classes from './Awards.module.css'
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import Media from "react-media";
import ModalImageWithSwiper from "../../../components/UI/modalImageWithSwiper/ModalImageWithSwiper";
import SecondarySwiper from "../../../components/UI/secondarySwiper/SecondarySwiper";

const Awards = ({awards}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const awardsJSX = awards.map((el, index) => {
        return (
            <div className={classes.awards} key={el.id}>
                <Skeleton
                    src={el.image}
                    alt='Partners'
                    classNameSkeleton={classes.skeleton}
                    classNameImage={classes.image}
                    onClick={() => handleImageClick(index)}
                />
            </div>
        );
    });

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                small: "(max-width: 999px)",
                medium: "(min-width: 1000px) and (max-width: 1279px)",
                large: "(min-width: 1280px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <SecondarySwiper title='Сертифікати та нагороди' gap={15}>
                            {awardsJSX}
                        </SecondarySwiper>}
                        {matches.medium && <SecondarySwiper title='Сертифікати та нагороди' gap={20}>
                            {awardsJSX}
                        </SecondarySwiper>}
                        {matches.large && <SecondarySwiper title='Сертифікати та нагороди' gap={30}>
                            {awardsJSX}
                        </SecondarySwiper>}
                    </Fragment>
                )}
            </Media>
            {selectedImageIndex !== null && (
                <ModalImageWithSwiper
                    onClose={() => setSelectedImageIndex(null)}
                    selectedImageIndex={selectedImageIndex}
                    images={awards.map((el) => el.image)}
                />
            )}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        awards: state.about.awards
    }
}
export default connect(mapStateToProps)(Awards);