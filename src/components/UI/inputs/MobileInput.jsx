import React from 'react';
import {useMask} from "@react-input/mask";
import PrimaryInput from "./PrimaryInput";

const MobileInput = ({phoneNumber, setPhoneNumber}) => {
    const inputRef = useMask(
        {
            mask: '+380(XX)XXX-XX-XX',
            replacement: { 'X': /\d/ },
        });
    const handleFocus = () => {
        if (phoneNumber.length === 0) {
            setPhoneNumber('+380')
        }
    }
    const handleBlur = () => {
        if (phoneNumber === '+380') {
            setPhoneNumber('')
        }
    }

    return (
        <PrimaryInput
            id='phoneNumber'
            type='tel'
            placeholder="+380(XX)XXX-XX-XX"
            ref={inputRef}
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            styles={{fontFamily: '"Montserrat", sans-serif'}}
        />
    );
};

export default MobileInput;