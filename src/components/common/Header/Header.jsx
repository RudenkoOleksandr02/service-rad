import React, {Fragment} from 'react';
import logo from './../../../img/logo.png'
import classes from './Header.module.css'
import Media from 'react-media';
import DesktopNav from "./navigationGadget/DesktopNav";
import LaptopNav from "./navigationGadget/LaptopNav";
import TabletNav from "./navigationGadget/TabletNav";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setContactModalActive, setContactModalText} from "../../../store/contactModal-reducer";

const Header = ({setContactModalActive, setContactModalText, contacts}) => {
    const numbers = {
        phoneNumber1: contacts.phoneNumber1,
        phoneNumber2: contacts.phoneNumber2
    }
    const handleOrderClick = () => {
        const text = 'Бажаєте оформити замовлення або дізнатись більше інформації про наше обладнання та отримати консультацію?'
        setContactModalActive(true)
        setContactModalText(text)
    }

    return (
        <header>
            <div className={classes.logoWrapper}>
                <Link to='/'>
                    <img src={logo} alt='logo' className={classes.logo}/>
                </Link>
            </div>
            <Media queries={{
                small: "(max-width: 850px)",
                medium: "(min-width: 851px) and (max-width: 1075px)",
                large: "(min-width: 1076px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <TabletNav
                            numbers={numbers}
                            handleOrderClick={handleOrderClick}
                        />}
                        {matches.medium && <LaptopNav
                            numbers={numbers}
                            handleOrderClick={handleOrderClick}
                        />}
                        {matches.large && <DesktopNav
                            numbers={numbers}
                            handleOrderClick={handleOrderClick}
                        />}
                    </Fragment>
                )}
            </Media>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts
    }
}

export default connect(mapStateToProps, {setContactModalActive, setContactModalText})(Header);