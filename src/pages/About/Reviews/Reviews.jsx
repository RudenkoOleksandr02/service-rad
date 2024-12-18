import React, {Fragment, useState} from 'react';
import {connect} from "react-redux";
import classes from './Reviews.module.css'
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import Media from "react-media";
import ModalImageWithSwiper from "../../../components/UI/modalImageWithSwiper/ModalImageWithSwiper";
import TertiarySwiper from "../../../components/UI/tertiarySwiper/TertiarySwiper";

const Reviews = ({reviews}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const reviewsJSX = reviews.map((el, index) => {
        return (
            <div className={classes.scale} key={el.id}>
                <Skeleton
                    src={el.image}
                    alt='Partners'
                    classNameSkeleton={classes.skeleton}
                    classNameImage={classes.image}
                    onClick={() => handleImageClick(index)}
                />
            </div>
        )
    })

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                small: "(max-width: 999px)",
                medium: "(min-width: 1000px) and (max-width: 1279px)",
                large: "(min-width: 1280px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <TertiarySwiper title='Відгуки' gap={15}>
                            {reviewsJSX}
                        </TertiarySwiper>}
                        {matches.medium && <TertiarySwiper title='Відгуки' gap={20}>
                            {reviewsJSX}
                        </TertiarySwiper>}
                        {matches.large && <TertiarySwiper title='Відгуки' gap={30}>
                            {reviewsJSX}
                        </TertiarySwiper>}
                    </Fragment>
                )}
            </Media>
            {selectedImageIndex !== null && (
                <ModalImageWithSwiper
                    onClose={() => setSelectedImageIndex(null)}
                    selectedImageIndex={selectedImageIndex}
                    images={reviews.map((el) => el.image)}
                />
            )}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        reviews: state.about.reviews
    }
}
export default connect(mapStateToProps)(Reviews);