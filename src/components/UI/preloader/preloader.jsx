import React from 'react';
import preloader from './preloader.gif';
import classes from './preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;