import React from 'react';
import classes from './BtnSecondary.module.css'
import { ReactComponent as RowIcon } from './../row.svg';

const BtnSecondary = ({children, styles, onClick}) => {
    return (
        <button className={classes.btn} style={styles} onClick={onClick}>
            <div className={classes.wrappRow}>
                <RowIcon className={classes.rowIcon}/>
            </div>
            <span className={classes.text}>{children}</span>
        </button>
    );
};

export default BtnSecondary;