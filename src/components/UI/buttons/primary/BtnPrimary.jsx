import React from 'react';
import classes from './BtnPrimary.module.css'
import { ReactComponent as RowIcon } from './../row.svg';

const BtnPrimary = ({children, onClick, ...props}) => {
    return (
        <button onClick={onClick} className={classes.btn} {...props}>
            <RowIcon className={classes.rowIcon}/>
            {children}
        </button>
    );
};

export default BtnPrimary;