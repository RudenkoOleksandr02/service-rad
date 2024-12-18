import React, {Fragment} from 'react';
import classes from './Partners.module.css'
import {connect} from "react-redux";
import Media from "react-media";
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import PrimarySwiper from "../../../components/UI/primarySwiper/PrimarySwiper";

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
                small: "(max-width: 999px)",
                medium: "(min-width: 1000px) and (max-width: 1279px)",
                large: "(min-width: 1280px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <PrimarySwiper title='Наші партнери' gap={15}>
                            {partnersJSX}
                        </PrimarySwiper>}
                        {matches.medium && <PrimarySwiper title='Наші партнери' gap={20}>
                            {partnersJSX}
                        </PrimarySwiper>}
                        {matches.large && <PrimarySwiper title='Наші партнери' gap={30}>
                            {partnersJSX}
                        </PrimarySwiper>}
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
