import React, {useEffect, useRef, useState} from 'react';
import classes from "./../Header.module.css";
import {CSSTransition} from "react-transition-group";
import BtnTertiary from "../../../UI/buttons/tertiary/BtnTertiary";
import {ReactComponent as PhoneIcon} from '../../../../img/phone.svg';
import logo from './../../../../img/logo.png'
import CloseBtn from "../../../UI/closeBtn/closeBtn";
import Navigation from "../Navigation/Navigation";

const TabletNav = ({handleOrderClick, numbers}) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);

    const handleOpenMenu = () => {
        setIsOpenMenu(true)
        const body = document.body;
        body.classList.add('body-scroll-lock');

    }
    const handleCloseMenu = () => {
        setIsOpenMenu(false)
        const body = document.body;
        body.classList.remove('body-scroll-lock');
    }

    const menu = (
        <>
            <CSSTransition
                nodeRef={menuRef}
                in={isOpenMenu}
                timeout={300}
                classNames={{
                    enter: classes['my-menu-enter'],
                    enterActive: classes['my-menu-enter-active'],
                    exit: classes['my-menu-exit'],
                    exitActive: classes['my-menu-exit-active']
                }}
                unmountOnExit
            >
                <div ref={menuRef} className={classes.menu}>
                    <CloseBtn
                        setIsOpen={handleCloseMenu}
                        styles={{width1: '25px', width2: '33px', height: '25px', color: '#3462C3'}}
                    />
                    <Navigation handleLinkClick={handleCloseMenu}/>
                    <BtnTertiary onClick={handleOrderClick} ewidth={183} fontSize={15} widthRow={12}>Звʼязатися з нами</BtnTertiary>
                    <div className={classes.contact}>
                        <a href={'tel:' + numbers.phoneNumber1} className={classes.item}><PhoneIcon/> {numbers.phoneNumber1}</a>
                        <a href={'tel:' + numbers.phoneNumber2} className={classes.item}><PhoneIcon/> {numbers.phoneNumber2}</a>
                    </div>
                    <img src={logo} alt='logo' className={classes.logo}/>
                </div>
            </CSSTransition>
        </>
    )

    return (
        <>
            <button className={classes.buttonNav} onClick={handleOpenMenu}>
                <div className={classes.item}></div>
                <div className={classes.item}></div>
                <div className={classes.item}></div>
            </button>
            {menu}
        </>
    );
};

export default TabletNav;