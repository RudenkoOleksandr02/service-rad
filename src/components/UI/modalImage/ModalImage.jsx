import React from 'react';
import classes from './ModalImage.module.css';

const ModalImage = ({ children, onClose }) => {
    return (
        <div className={classes.modalBackdrop} onClick={onClose}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={classes.closeButton} onClick={onClose}>Закрыть</button>
                {children}
            </div>
        </div>
    );
};

export default ModalImage;