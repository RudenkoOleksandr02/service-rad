import React from 'react';
import classes from './BtnTertiaty.module.css'
import { ReactComponent as RowIcon } from './../row.svg';

const BtnTertiary = ({children, onClick, ...props}) => {
    return (
        <button
            style={{fontSize: props.fontSize, letterSpacing: props.letterSpacing, width: props.width}}
            className={classes.btn}
            onClick={onClick}
        >
            <RowIcon className={classes.rowIcon} style={{width: props.widthRow}}/>
            {children}
        </button>
    );
};

export default BtnTertiary;