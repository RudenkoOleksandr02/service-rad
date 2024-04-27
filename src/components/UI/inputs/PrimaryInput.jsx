import React from 'react';
import classes from './PrimaryInput.module.css'

const PrimaryInput = React.forwardRef(
    ({onBlur, onFocus, type, placeholder, value, onChange, id, styles = {}}, ref
    ) => {

    return (
        <input
            name={id}
            id={id}
            className={classes.primary}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref}
            onFocus={onFocus}
            onBlur={onBlur}
            style={styles}
        />
    );
});

export default PrimaryInput;