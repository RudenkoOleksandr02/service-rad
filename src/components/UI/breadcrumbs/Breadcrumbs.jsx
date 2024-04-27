import React from 'react';
import {Link} from "react-router-dom";
import crumb from './../../../img/crumb.png';
import home from './../../../img/home.png'
import classes from './Breadcrumbs.module.css'

const Breadcrumbs = ({links}) => {
    const breadcrumbs = links.map((link, index) => {
        const isLast = index === links.length - 1;
        return (
            <div className={classes.crumbs} key={index}>
                <img src={crumb} alt='crumb'/>
                {isLast ? (
                    <span className={classes.disabledLink}>{link.title}</span>
                ) : (
                    <Link to={'/' + link.path}>{link.title}</Link>
                )}
            </div>
        );
    });

    return (
        <nav className={classes.nav}>
            <Link to='/'>
                <img src={home} alt='home' className={classes.homeImg}/>
                Головна сторінка
            </Link>
            {breadcrumbs}
        </nav>
    );
};

export default Breadcrumbs;