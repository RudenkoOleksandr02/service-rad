import React, {Fragment, useState} from 'react';
import {connect} from "react-redux";
import classes from './Reviews.module.css'
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import Slider from "../../../components/UI/slider/Slider";
import Media from "react-media";
import ModalImage from "../../../components/UI/modalImage/ModalImage";

const Reviews = ({reviews}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const reviewsJSX = reviews.map(el => {
        return (
            <div className={classes.scale} key={el.id}>
                <Skeleton
                    src={el.image}
                    alt='Partners'
                    classNameSkeleton={classes.skeleton}
                    classNameImage={classes.image}
                    onClick={() => handleImageClick(el.image)}
                />
            </div>
        )
    })

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                small: "(max-width: 768px)",
                medium: "(min-width: 769px) and (max-width: 1000px)",
                large: "(min-width: 1001px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <Slider title='Відгуки' gap={15}>
                            {reviewsJSX}
                        </Slider>}
                        {matches.medium && <Slider title='Відгуки' gap={20}>
                            {reviewsJSX}
                        </Slider>}
                        {matches.large && <Slider title='Відгуки' gap={30}>
                            {reviewsJSX}
                        </Slider>}
                    </Fragment>
                )}
            </Media>
            {selectedImage && (
                <ModalImage
                    onClose={() => setSelectedImage(null)}
                    selectedImage={selectedImage}
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