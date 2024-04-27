import React, {useEffect, useState} from 'react';
import classes from './Services.module.css'
import SectionForm from "../../components/common/SectionForm/SectionForm";
import Breadcrumbs from "../../components/UI/breadcrumbs/Breadcrumbs";
import {connect} from "react-redux";
import {getServices} from "../../store/services-reducer";
import Preloader from "../../components/UI/preloader/preloader";
import Service from "./Service/Service";
import {getGallery} from "../../store/gallery-reducer";
import Gallery from "./Gallery/Gallery";
const Services = ({getServices, services, getGallery}) => {
    const [isLoadingServices, setIsLoadingServices] = useState(true);
    const [isLoadingGallery, setIsLoadingGallery] = useState(true);

    useEffect(() => {
        setIsLoadingServices(true)
        setIsLoadingGallery(true)
        getServices()
            .then(() => setIsLoadingServices(false))
        getGallery()
            .then(() => setIsLoadingGallery(false))
    }, []);

    const servicesJSX = services.map((el, index) => {
        if (!index) {
            return <div key={el.id} className={classes.serviceWithGallery}>
                <Service
                    title={el.title}
                    small_description={el["small_description"]}
                    descriptions={el.descriptions}
                    image={el.image}
                    id={el.id}
                />
                <Gallery/>
            </div>
        } else {
            return <Service
                key={el.id}
                title={el.title}
                small_description={el["small_description"]}
                descriptions={el.descriptions}
                image={el.image}
                id={el.id}
            />
        }
    })

    if (isLoadingServices || isLoadingGallery) return <Preloader/>

    return (
        <section className={classes.services}>
            <div className={classes.wrapper}>
                <Breadcrumbs links={[
                    {title: 'Послуги', path: 'services'}
                ]}/>
                <h1>Послуги</h1>
                {servicesJSX}
            </div>
            <SectionForm/>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        services: state.services.services
    }
}

export default connect(mapStateToProps, {getServices, getGallery})(Services);