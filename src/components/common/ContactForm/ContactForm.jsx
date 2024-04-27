import React, {useState} from 'react';
import classes from "./ContactFrom.module.css";
import PrimaryInput from "../../UI/inputs/PrimaryInput";
import MobileInput from "../../UI/inputs/MobileInput";
import BtnSecondary from "../../UI/buttons/secondary/BtnSecondary";
import {sendEmail} from "../../../utils/email/email";

const ContactForm = (
    {
        setContactModalActive,
        setSuccessModalActive,
        text = ''
    }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [isNameError, setIsNameError] = useState(false)
    const [isLastNameError, setIsLastNameError] = useState(false)
    const [isPhoneNumberError, setIsPhoneNumberError] = useState(false)
    const handleSendEmail = () => {
        if (name.length && lastName.length && phoneNumber.length === 17) {
            setIsNameError(false)
            setIsLastNameError(false)
            setIsPhoneNumberError(false)
            setName('')
            setLastName('')
            setPhoneNumber('')

            sendEmail(name, lastName, phoneNumber, text)

            if (setContactModalActive) {
                setContactModalActive(false)
            }
            setSuccessModalActive(true)
        } else {
            setIsNameError(Boolean(!name))
            setIsLastNameError(Boolean(!lastName))
            setIsPhoneNumberError(phoneNumber.length !== 17)
        }
    }

    return (
        <div className={classes.contactForm}>
            <form onSubmit={e => {
                e.preventDefault()
            }}>
                <label htmlFor='name'>
                    Ваше імʼя
                    {isNameError && <span style={{
                        fontSize: '26px',
                        color: '#d15b5b'
                    }}>*</span>}
                </label>
                <PrimaryInput
                    id='name'
                    type='text'
                    placeholder="Ім'я"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor='lastName'>
                    Ваше прізвище
                    {isLastNameError && <span style={{
                        fontSize: '26px',
                        color: '#d15b5b'
                    }}>*</span>}
                </label>
                <PrimaryInput
                    id='lastName'
                    type='text'
                    placeholder="Прізвище"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor='phoneNumber'>
                    Ваш номер телефону
                    {isPhoneNumberError && <span style={{
                        fontSize: '26px',
                        color: '#d15b5b'
                    }}>*</span>}
                </label>
                <MobileInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                <BtnSecondary
                    onClick={handleSendEmail}
                    styles={{
                        width: '100%',
                        marginTop: '20px'
                    }}>
                    Замовити дзвінок
                </BtnSecondary>
            </form>
        </div>
    );
};

export default ContactForm;