import React, {useEffect} from 'react';
import Skeleton from "../../../components/UI/skeleton/Skeleton";
import Markdown from "react-markdown";
import classes from './Service.module.css'
import BtnPrimary from "../../../components/UI/buttons/primary/BtnPrimary";
import {connect} from "react-redux";
import {setContactModalActive, setContactModalText} from "../../../store/contactModal-reducer";
import {scrollToAnchorForElement} from "../../../utils/scrollToAnchor/scrollToAnchor";

const Service = ({id, title, small_description, descriptions, image, setContactModalActive, setContactModalText}) => {
    useEffect(() => {
        scrollToAnchorForElement('service' + id)
    }, []);
    const handleOrderClick = () => {
        setContactModalActive(true)
        setContactModalText('Замовлення послуги: ' + title)
    }

    const descriptionsJSX = descriptions.map(el => {
        return <div key={el.id} className={classes.description}>
            <h3>{el.title}</h3>
            <div>
                <Markdown>{el.description}</Markdown>
            </div>
        </div>
    })

    return (
        <section className={classes.wrapper} id={'service' + id}>
            <div className={classes.banner}>
                <div className={classes.inner}>
                    <h2>{title}</h2>
                    <p>{small_description}</p>
                    <BtnPrimary onClick={handleOrderClick}>Замовити послугу</BtnPrimary>
                </div>
                <div className={classes.wrapSkeleton}>
                    <Skeleton
                        src={image}
                        alt={title}
                        classNameImage={classes.image}
                        classNameSkeleton={classes.skeleton}
                    />
                </div>
            </div>
            <div  className={classes.descriptions}>
                {descriptionsJSX}
            </div>
        </section>
    );
};
export default connect(null, {setContactModalActive, setContactModalText})(Service);