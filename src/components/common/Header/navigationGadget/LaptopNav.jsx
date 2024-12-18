import React, {useRef, useState} from 'react';
import classes from "../Header.module.css";
import {CSSTransition} from "react-transition-group";
import BtnTertiary from "../../../UI/buttons/tertiary/BtnTertiary";
import {ReactComponent as RowIcon} from '../../../../img/row.svg'
import Navigation from "../Navigation/Navigation";

const LaptopNav = ({handleOrderClick, numbers}) => {
    const [showSecondPhone, setShowSecondPhone] = useState(false);
    const [arrowRotated, setArrowRotated] = useState(false);
    const mobileRef = useRef(null);
    const rowRef = useRef(null)

    const toggleSecondPhone = () => {
        setShowSecondPhone(prevState => !prevState);
        setArrowRotated(prevState => !prevState);
    };
    const handleMouseEnter = () => {
        setShowSecondPhone(true);
        setArrowRotated(true)
    };

    const handleMouseLeave = () => {
        setShowSecondPhone(false);
        setArrowRotated(false)
    };

    return (
        <>
            <Navigation/>
            <div
                className={classes.contact}
            >
                <div className={classes.firstPhone} onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     onTouchStart={toggleSecondPhone}>
                    <a href={'tel:' + numbers.phoneNumber1}>{numbers.phoneNumber1}</a>
                    <CSSTransition
                        nodeRef={rowRef}
                        in={arrowRotated}
                        timeout={300}
                        classNames={{
                            enter: classes['my-row-enter'],
                            enterActive: classes['my-row-enter-active'],
                            exit: classes['my-row-exit'],
                            exitActive: classes['my-row-exit-active']
                        }}
                    >
                        <RowIcon ref={rowRef} className={`${classes.row} ${arrowRotated ? classes.rotated : ''}`}/>
                    </CSSTransition>
                </div>
                <CSSTransition
                    nodeRef={mobileRef}
                    in={showSecondPhone}
                    timeout={300}
                    classNames={{
                        enter: classes['my-phone-enter'],
                        enterActive: classes['my-phone-enter-active'],
                        exit: classes['my-phone-exit'],
                        exitActive: classes['my-phone-exit-active']
                    }}
                    unmountOnExit
                >
                    <div className={classes.secondPhone}>
                        <a href={'tel:' + numbers.phoneNumber2} ref={mobileRef}>{numbers.phoneNumber2}</a>
                    </div>
                </CSSTransition>
            </div>
            <BtnTertiary onClick={handleOrderClick} widthRow={13} letterSpacing='-0.6px'>Зв’язатися з нами</BtnTertiary>
        </>
    );
};

export default LaptopNav;