import React, {Fragment} from 'react';
import classes from './Services.module.css'
import Slider from "../../../components/UI/slider/Slider";
import Service from "./Service/Service";
import Media from "react-media";
import {connect} from "react-redux";

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
                small: "(max-width: 480px)",
                medium: "(min-width: 481px) and (max-width: 768px)",
                large: "(min-width: 769px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <div>
                            <h2>Наші послуги</h2>
                            {servicesJSX}
                        </div>}
                        {matches.medium && <Slider title='Наші послуги' gap={15}>
                            {servicesJSX}
                        </Slider>}
                        {matches.large && <Slider title='Наші послуги' gap={20}>
                            {servicesJSX}
                        </Slider>}
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