import React, {Fragment} from 'react';
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import classes from './Gallery.module.css'
import {connect} from "react-redux";
import Slider from "../../../components/UI/slider/Slider";
import Media from "react-media";

const Gallery = ({gallery}) => {
    const galleryJSX = gallery.map(el => {
        return (
            <Skeleton
                src={el.image}
                alt='Partners'
                classNameSkeleton={classes.skeleton}
                classNameImage={classes.image}
                key={el.id}
            />
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
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        gallery: state.gallery.gallery
    }
}
export default connect(mapStateToProps)(Gallery);