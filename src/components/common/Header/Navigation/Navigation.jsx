import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCategories} from '../../../../store/categories-reducer';
import classes from './Navigation.module.css';
import {ReactComponent as RowIcon} from '../../../../img/row.svg'
import {CSSTransition} from "react-transition-group";
import {scrollToAnchorForLink} from "../../../../utils/scrollToAnchor/scrollToAnchor";

function Navigation({categories, handleLinkClick = () => {}}) {
    const [showCategories, setShowCategories] = useState(false);
    const categoriesRef = useRef(null);
    const handleContactLinkClick = () => {
        handleLinkClick();
        scrollToAnchorForLink('contacts')
    };

    const toggleShowCategories = () => {
        setShowCategories(!showCategories)
    };
    const handleMouseEnter = () => {
        setShowCategories(true);
    };

    const handleMouseLeave = () => {
        setShowCategories(false);
    };

    const pathCategoriesJSX = categories.map((el) => (
        <Link key={el.id} to={'/products/' + el.link} onClick={handleLinkClick}>
            {el.name}
        </Link>
    ));

    return (
        <nav className={classes.navigate}>
            <div
                className={classes.container}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={classes.products}>
                    <Link onClick={handleLinkClick} to='/products'>Продукція</Link>
                    <div className={classes.rowWrap} onClick={toggleShowCategories}>
                        <RowIcon
                            className={`${classes.row} ${showCategories ? classes.rotated : ''}`}
                        />
                    </div>
                </div>
                <CSSTransition
                    nodeRef={categoriesRef}
                    in={showCategories}
                    timeout={300}
                    classNames={{
                        enter: classes['my-categories-enter'],
                        enterActive: classes['my-categories-enter-active'],
                        exit: classes['my-categories-exit'],
                        exitActive: classes['my-categories-exit-active']
                    }}
                    unmountOnExit
                >
                    <div className={classes.categories} ref={categoriesRef}>
                        {pathCategoriesJSX}
                    </div>
                </CSSTransition>
            </div>
            <Link to='/about' onClick={handleLinkClick}>Про нас</Link>
            <Link to='/services' onClick={handleLinkClick}>Послуги</Link>
            <Link to='/#contacts' onClick={handleContactLinkClick}>
                Контакти
            </Link>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
    };
};

export default connect(mapStateToProps)(Navigation);
