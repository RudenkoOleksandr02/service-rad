import React, {useState} from 'react';
import classes from './ModalContactForm.module.css'
import Modal from "../../UI/modal/Modal";
import PrimaryInput from "../../UI/inputs/PrimaryInput";
import BtnSecondary from "../../UI/buttons/secondary/BtnSecondary";
import CloseBtn from "../../UI/closeBtn/closeBtn";
import MobileInput from "../../UI/inputs/MobileInput";
import {sendEmail} from "../../../utils/email/email";
import ContactForm from "../ContactForm/ContactForm";
import {connect} from "react-redux";
import {setActive, setContactModalActive} from "../../../store/contactModal-reducer";
import {setSuccessModalActive} from "../../../store/successModal-reducer";

const ModalContactForm = ({isContactActive, setContactModalActive, setSuccessModalActive, text}) => {
    return (
        <Modal
            active={isContactActive}
            setActive={setContactModalActive}
            stylesModal={{background: '#3462C3'}}
            stylesBtn={{'width1': '20px', width2: '17.6px', height: '20px', color: '#FCFDFF'}}
        >
            <div className={classes.wrappText}>
                <p className={classes.text}>{text}</p>
                <p className={classes.text}>
                    Залиште свої дані у формі, а ми вам зателефонуємо.
                </p>
            </div>
            <ContactForm
                setContactModalActive={setContactModalActive}
                setSuccessModalActive={setSuccessModalActive}
                text={text}
            />
        </Modal>
    );
};

const mapStateToProps = (state) => {
    return {
        isContactActive: state.contactModal.isContactActive,
        text: state.contactModal.text
    }
}

export default connect(mapStateToProps, {setContactModalActive, setSuccessModalActive})(ModalContactForm);