import React from 'react';
import classes from "../Header.module.css";
import BtnTertiary from "../../../UI/buttons/tertiary/BtnTertiary";
import Navigation from "../Navigation/Navigation";

const DesktopNav = ({handleOrderClick, numbers}) => {
    return (
        <>
            <Navigation/>
            <div className={classes.contact}>
                <a href={'tel:' + numbers.phoneNumber1} className={classes.item}>{numbers.phoneNumber1}</a>
                <a href={'tel:' + numbers.phoneNumber2} className={classes.item}>{numbers.phoneNumber2}</a>
            </div>
            <BtnTertiary onClick={handleOrderClick}>Зв’язатися з нами</BtnTertiary>
        </>
    );
};

export default DesktopNav;