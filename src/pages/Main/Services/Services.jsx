import React, {Fragment} from 'react';
import classes from './Services.module.css'
import Slider from "../../../components/UI/slider/Slider";
import Service from "./Service/Service";
import Media from "react-media";
import {connect} from "react-redux";
import MySwiper from "../../../components/UI/primarySwiper/PrimarySwiper";

const Services = ({services}) => {
    const servicesJSX = (
        services.map(service => {
            return <Service
                key={service.id}
                title={service.title}
                description={service["pre_description"]}
                id={service.id}
            />
        })
    )

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 999px)",
                large: "(min-width: 1000px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <div>
                            <h2>Наші послуги</h2>
                            {servicesJSX}
                        </div>}
                        {matches.medium && <MySwiper title='Наші послуги' gap={15}>
                            {servicesJSX}
                        </MySwiper>}
                        {matches.large && <MySwiper title='Наші послуги' gap={20}>
                            {servicesJSX}
                        </MySwiper>}
                    </Fragment>
                )}
            </Media>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        services: state.services.services
    }
}

export default connect(mapStateToProps)(Services);