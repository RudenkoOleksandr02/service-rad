import React from 'react';
import cl from './Modal.module.css'
import CloseBtn from "../closeBtn/closeBtn";

const Modal = ({active, setActive, children, stylesModal, stylesBtn}) => {
    return (
        <div className={active ? `${cl.modal + ' ' + cl.active}` : cl.modal} onClick={() => setActive(false)}>
            <div style={stylesModal} className={active ? `${cl.modal__content + ' ' + cl.active}` : cl.modal__content} onClick={e => e.stopPropagation()}>
                <CloseBtn
                    styles={stylesBtn}
                    setIsOpen={() => setActive(false)}
                />
                {children}
            </div>
        </div>
    );
};

export default Modal;