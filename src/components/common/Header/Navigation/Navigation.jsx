import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './Navigation.module.css';
import {scrollToAnchorForLink} from "../../../../utils/scrollToAnchor/scrollToAnchor";
import DropDownList from "../../../UI/dropDownList/dropDownList";

function Navigation({categories, handleLinkClick = () => {}, services}) {
    const handleContactLinkClick = () => {
        handleLinkClick();
        scrollToAnchorForLink('contacts')
    };
    const handleServiceLinkClick = (id) => {
        handleLinkClick();
        scrollToAnchorForLink(id);
    }

    const pathCategoriesJSX = categories.map((el) => (
        <Link key={el.id} to={'/products/' + el.link} onClick={handleLinkClick}>
            {el.name}
        </Link>
    ));

    const pathServiceJSX = services.map(el => (
        <Link key={el.id} to={'/services/#service' + el.id} onClick={() => handleServiceLinkClick('service' + el.id)}>
            {el.title.startsWith('“') && el.title.endsWith('”') ? el.title.slice(1, -1) : el.title}
        </Link>
    ));

    return (
        <nav className={classes.navigate}>
            <DropDownList handleLinkClick={handleLinkClick} title='Продукція' mainLink='/products'>
                {pathCategoriesJSX}
            </DropDownList>
            <DropDownList handleLinkClick={handleLinkClick} title='Послуги' mainLink='/services'>
                {pathServiceJSX}
            </DropDownList>
            <Link to='/about' onClick={handleLinkClick}>Про нас</Link>
            <Link to='/#contacts' onClick={handleContactLinkClick}>
                Контакти
            </Link>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        services: state.services.services
    };
};

export default connect(mapStateToProps)(Navigation);
