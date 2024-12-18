import React, {Fragment, useState} from 'react';
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import classes from './Gallery.module.css'
import {connect} from "react-redux";
import Media from "react-media";
import ModalImageWithSwiper from "../../../components/UI/modalImageWithSwiper/ModalImageWithSwiper";
import SecondarySwiper from "../../../components/UI/secondarySwiper/SecondarySwiper";

const Gallery = ({gallery}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const galleryJSX = gallery.map((el, index) => {
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
                        {matches.small && <SecondarySwiper title='Галерея' gap={15}>
                            {galleryJSX}
                        </SecondarySwiper>}
                        {matches.medium && <SecondarySwiper title='Галерея' gap={20}>
                            {galleryJSX}
                        </SecondarySwiper>}
                        {matches.large && <SecondarySwiper title='Галерея' gap={30}>
                            {galleryJSX}
                        </SecondarySwiper>}
                    </Fragment>
                )}
            </Media>
            {selectedImageIndex !== null && (
                <ModalImageWithSwiper
                    onClose={() => setSelectedImageIndex(null)}
                    selectedImageIndex={selectedImageIndex}
                    images={gallery.map((el) => el.image)}
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