import React, {useEffect} from 'react';
import classes from './SectionForm.module.css';
import ContactForm from "../ContactForm/ContactForm";
import { ReactComponent as PhoneIcon } from "./../../../img/phone.svg";
import { connect } from "react-redux";
import { setSuccessModalActive } from "../../../store/successModal-reducer";
import {scrollToAnchorForElement} from "../../../utils/scrollToAnchor/scrollToAnchor";

const SectionForm = ({ setSuccessModalActive, contacts }) => {
    useEffect(() => {
        scrollToAnchorForElement('contacts')
    }, []);

    return (
        <section className={classes.form} id='contacts'>
            <div className={classes.wrapper}>
                <h2>Заповніть форму, щоб зв’язатися з нами</h2>
                <div className={classes.wrappContent}>
                    <div className={classes.info}>
                        <div className={classes.wrappText}>
                            <p>Бажаєте оформити замовлення або дізнатись більше інформації про наше обладнання та
                                отримати
                                консультацію?</p>
                            <p>Залиште свої дані у формі, а ми вам зателефонуємо.</p>
                        </div>
                        <div className={classes.wrappContact}>
                            <span>або зверніться самостійно за номерами:</span>
                            <span className={classes.phoneNumber}>
                                <PhoneIcon className={classes.phoneImg} /> {contacts.phoneNumber1}
                            </span>
                            <span className={classes.phoneNumber}>
                                <PhoneIcon className={classes.phoneImg} /> {contacts.phoneNumber2}
                            </span>
                        </div>
                    </div>
                    <div className={classes.contactForm}>
                        <ContactForm
                            setSuccessModalActive={setSuccessModalActive}
                        />
                        <div className={`${classes.wrappContact} ${classes.wrappContactTablet}`}>
                            <span>або зверніться самостійно за номерами:</span>
                            <span className={classes.phoneNumber}>
                                <PhoneIcon className={classes.phoneImg} /> {contacts.phoneNumber1}
                            </span>
                            <span className={classes.phoneNumber}>
                                <PhoneIcon className={classes.phoneImg} /> {contacts.phoneNumber2}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts
    }
}

export default connect(mapStateToProps, { setSuccessModalActive })(SectionForm);
