import React, {Fragment, useState} from 'react';
import {connect} from "react-redux";
import classes from './Awards.module.css'
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import Slider from "../../../components/UI/slider/Slider";
import Media from "react-media";
import ModalImage from "../../../components/UI/modalImage/ModalImage";

const Awards = ({awards}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const awardsJSX = awards.map(el => {
        return (
            <div className={classes.awards} key={el.id}>
                <Skeleton
                    src={el.image}
                    alt='Partners'
                    classNameSkeleton={classes.skeleton}
                    classNameImage={classes.image}
                    onClick={() => handleImageClick(el.image)}
                />
            </div>
        );
    });

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                small: "(max-width: 768px)",
                medium: "(min-width: 769px) and (max-width: 1000px)",
                large: "(min-width: 1001px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <Slider title='Сертифікати та нагороди' gap={15}>
                            {awardsJSX}
                        </Slider>}
                        {matches.medium && <Slider title='Сертифікати та нагороди' gap={20}>
                            {awardsJSX}
                        </Slider>}
                        {matches.large && <Slider title='Сертифікати та нагороди' gap={30}>
                            {awardsJSX}
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
        awards: state.about.awards
    }
}
export default connect(mapStateToProps)(Awards);