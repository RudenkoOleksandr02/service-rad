import React, {useRef, useState} from 'react';
import classes from './dropDownList.module.css';
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {ReactComponent as RowIcon} from '../../../img/row.svg'

const DropDownList = ({children, title = '', mainLink = '/', handleLinkClick = () => {}}) => {
    const [showDropDownList, setShowDropDownList] = useState(false);
    const dropDownListRef = useRef(null);
    const toggleShowCategories = () => {
        setShowDropDownList(!showDropDownList)
    };
    const handleMouseEnter = () => {
        setShowDropDownList(true);
    };

    const handleMouseLeave = () => {
        setShowDropDownList(false);
    };

    return (
        <div
            className={classes.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={classes.mainLink}>
                <Link onClick={handleLinkClick} to={mainLink}>{title}</Link>
                <div className={classes.rowWrap} onClick={toggleShowCategories}>
                    <RowIcon
                        className={`${classes.row} ${showDropDownList ? classes.rotated : ''}`}
                    />
                </div>
            </div>
            <CSSTransition
                nodeRef={dropDownListRef}
                in={showDropDownList}
                timeout={300}
                classNames={{
                    enter: classes['my-dropDownList-enter'],
                    enterActive: classes['my-dropDownList-enter-active'],
                    exit: classes['my-dropDownList-exit'],
                    exitActive: classes['my-dropDownList-exit-active']
                }}
                unmountOnExit
            >
                <div className={classes.dropDownList} ref={dropDownListRef}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};

export default DropDownList;