import React from 'react';
import classes from './Service.module.css'
import BtnPrimary from "../../../../components/UI/buttons/primary/BtnPrimary";
import BtnTertiary from "../../../../components/UI/buttons/tertiary/BtnTertiary";
import {connect} from "react-redux";
import {setContactModalActive, setContactModalText} from "../../../../store/contactModal-reducer";
import {scrollToAnchorForLink} from "../../../../utils/scrollToAnchor/scrollToAnchor";
import {useNavigate} from "react-router-dom";

const Service = ({title, description, setContactModalActive, setContactModalText, id}) => {
    const router = useNavigate()
    const handleContactLinkClick = () => {
        router(`/services/` + '#service' + id)
        scrollToAnchorForLink('service' + id)
    };
    const handleOrderClick = () => {
        setContactModalActive(true)
        setContactModalText('Замовлення послуги: ' + title)
    }

    return (
        <div className={classes.service}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={classes.buttons}>
                <BtnPrimary onClick={handleOrderClick}>Замовити послугу</BtnPrimary>
                <div className={classes.linkMore}>
                    <BtnTertiary onClick={handleContactLinkClick}>Дізнатись більше</BtnTertiary>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {setContactModalActive, setContactModalText})(Service);