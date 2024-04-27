import React, {Fragment} from 'react';
import classes from './Partners.module.css'
import {connect} from "react-redux";
import Slider from "../../../components/UI/slider/Slider";
import Media from "react-media";
import Skeleton from "../../../components/UI/skeleton/Skeleton";

const Partners = ({partners}) => {
    const partnersJSX = partners.map(el => {
        return (
            <div className={classes.partner} key={el.id}>
                <Skeleton
                    src={el.image}
                    alt='Partners'
                    classNameSkeleton={classes.skeleton}
                    classNameImage={classes.image}
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
                        {matches.small && <Slider title='Наші партнери' gap={15}>
                            {partnersJSX}
                        </Slider>}
                        {matches.medium && <Slider title='Наші партнери' gap={20}>
                            {partnersJSX}
                        </Slider>}
                        {matches.large && <Slider title='Наші партнери' gap={30}>
                            {partnersJSX}
                        </Slider>}
                    </Fragment>
                )}
            </Media>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        partners: state.about.partners
    }
}
export default connect(mapStateToProps)(Partners);
