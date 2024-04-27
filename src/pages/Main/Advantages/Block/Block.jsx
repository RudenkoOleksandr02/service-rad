import React from 'react';
import classes from './../Advantages.module.css'
const Block = ({img, title, description}) => {
    return (
        <div className={classes.block}>
            <img src={img} alt={title}/>
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
    );
};

export default Block;