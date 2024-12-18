import React from 'react';
import logo from './../../../img/logo.png'
import classes from './Footer.module.css'

import whatsapp from './../../../img/whatsapp.png';
import facebook from './../../../img/facebook.png';
import instagram from './../../../img/instagram.png';
import telegram from './../../../img/telegram.png';
import youtube from './../../../img/youtube.png';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {scrollToAnchorForLink} from "../../../utils/scrollToAnchor/scrollToAnchor";

const Footer = ({contacts, categories}) => {
    const handleQuestionsLinkClick = () => {
        scrollToAnchorForLink('questions')
    };


    const pathCategoriesJSX = categories.map((el) => (
        <Link key={el.id} to={'/products/' + el.link}>
            {el.name}
        </Link>
    ));

    const socialLinks = (<>
        <a href={"https://wa.me/" + contacts.whatsapp}><img src={whatsapp} alt='whatsapp'/></a>
        <a href={contacts.facebook}><img src={facebook} alt='facebook'/></a>
        <a href={contacts.instagram}><img src={instagram} alt='instagram'/></a>
        <a href={"https://t.me/" + contacts.telegram}><img src={telegram} alt='telegram'/></a>
        <a href={contacts.youtube}><img src={youtube} alt='youtube'/></a>
    </>)
    const infoLinks = (<>
    <Link to='/about'>Про нас</Link>
        <Link to='/services'>Наші послуги</Link>
        <Link to='/#questions' onClick={handleQuestionsLinkClick}>Найчастіші питання</Link>
    </>)
    const productLinks = (<>
        {pathCategoriesJSX}
    </>)
    const contactLinks = (<>
        <span className={classes.email}>{contacts.email}</span>
        <a href={'tel:' + contacts.phoneNumber1} className={classes.numberPhone}>{contacts.phoneNumber1}</a>
        <a href={'tel:' + contacts.phoneNumber2} className={classes.numberPhone}>{contacts.phoneNumber2}</a>
    </>)


    return (
        <footer>
            <div className={classes.wrapper}>
                <div>
                    <div className={classes.wrapperLogo}>
                        <img src={logo} alt='logo' className={classes.logo}/>
                    </div>
                    <div className={classes.social}>
                        <p>Ми в соціальних мережах:</p>
                        <div className={classes.links}>
                            {socialLinks}
                        </div>
                    </div>

                    <div className={classes.contactMobile}>
                        <div>
                            {contactLinks}
                        </div>
                        <div>
                            {socialLinks}
                        </div>
                    </div>

                </div>
                <div className={classes.navigation}>
                    <div className={classes.section}>
                        <span className={classes.title}>ІНФОРМАЦІЯ</span>
                        {infoLinks}
                    </div>
                    <div className={classes.section}>
                        <span className={classes.title}>ПРОДУКЦІЯ</span>
                        {productLinks}
                    </div>
                    <div className={classes.section}>
                        <span className={classes.title}>КОНТАКТИ</span>
                        {contactLinks}
                        <div className={`${classes.social} ${classes.tablet}`}>
                            {socialLinks}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bottom}>
                <span>
                    © 2023 Service Rad
                </span>
            </div>
        </footer>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        contacts: state.contacts.contacts
    }
}
export default connect(mapStateToProps)(Footer);