import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getAwards, getContent, getPartners, getReviews} from "../../store/about-reducer";
import Preloader from "../../components/UI/preloader/preloader";
import Content from "./Content/Content";
import classes from './About.module.css'
import SectionForm from "../../components/common/SectionForm/SectionForm";
import Breadcrumbs from "../../components/UI/breadcrumbs/Breadcrumbs";
import Partners from "./Partners/Partners";
import Reviews from "./Reviews/Reviews";
import Awards from "./Awards/Awards";

const About = ({content, getContent, getPartners, getReviews, getAwards}) => {
    const [isContentLoading, setIsContentLoading] = useState(true);
    const [isPartnersLoading, setIsPartnersLoading] = useState(true);
    const [isReviewsLoading, setIsReviewsLoading] = useState(true);
    const [isAwardsLoading, setIsAwardsLoading] = useState(true);

    useEffect(() => {
        setIsContentLoading(true)
        setIsPartnersLoading(true)
        setIsReviewsLoading(true)
        setIsAwardsLoading(true)

        getContent()
            .then(() => setIsContentLoading(false))
        getPartners()
            .then(() => setIsPartnersLoading(false))
        getReviews()
            .then(() => setIsReviewsLoading(false))
        getAwards()
            .then(() => setIsAwardsLoading(false))
    }, [])

    if (isContentLoading || isPartnersLoading || isReviewsLoading || isAwardsLoading) {
        return <Preloader/>
    }

    return (
        <section className={classes.about}>
            <div className={classes.wrapper}>
                <Breadcrumbs links={[
                    {title: 'Про нас', path: 'about'}
                ]}/>
                <h1>Про нас</h1>
                <Content/>
                <Partners/>
                <Reviews/>
            </div>
            <div className={classes.awards}>
                <div className={classes.awardsInner}>
                    <Awards/>
                </div>
            </div>
            <SectionForm/>
        </section>
    );
};

export default connect(null, {
    getContent,
    getPartners,
    getReviews,
    getAwards
})(About);