import React from 'react';
import preloaderGray from './preloader-gray.png';
import preloaderWhite from './preloader-white.png';
import classes from './preloader.module.css'

const Preloader = ({color = 'gray'}) => {
    const preloader = color === 'white' ? preloaderWhite : preloaderGray

    return (
        <div className={classes.preloader}>
            <img src={preloader} alt='preloader'/>
        </div>
    );
};

export default Preloader;