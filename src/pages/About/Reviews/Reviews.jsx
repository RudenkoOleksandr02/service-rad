import React, {Fragment} from 'react';
import {connect} from "react-redux";
import classes from './Reviews.module.css'
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import Slider from "../../../components/UI/slider/Slider";
import Media from "react-media";

const Reviews = ({reviews}) => {
    const reviewsJSX = reviews.map(el => {
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
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        reviews: state.about.reviews
    }
}
export default connect(mapStateToProps)(Reviews);