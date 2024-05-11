import React, {Fragment, useState} from 'react';
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import classes from './Gallery.module.css'
import {connect} from "react-redux";
import Slider from "../../../components/UI/slider/Slider";
import Media from "react-media";
import ModalImage from "../../../components/UI/modalImage/ModalImage";

const Gallery = ({gallery}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };
    const galleryJSX = gallery.map(el => {
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
                        {matches.small && <Slider title='Галерея' gap={15}>
                            {galleryJSX}
                        </Slider>}
                        {matches.medium && <Slider title='Галерея' gap={20}>
                            {galleryJSX}
                        </Slider>}
                        {matches.large && <Slider title='Галерея' gap={30}>
                            {galleryJSX}
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
        gallery: state.gallery.gallery
    }
}
export default connect(mapStateToProps)(Gallery);