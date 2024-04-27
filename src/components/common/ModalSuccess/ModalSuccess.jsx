import React from 'react';
import Modal from "../../UI/modal/Modal";
import classes from './ModalSuccess.module.css'
import successImg from './success.png'
import {connect} from "react-redux";
import {setSuccessModalActive} from "../../../store/successModal-reducer";

const ModalSuccess = ({isSuccessActive, setSuccessModalActive}) => {
    return (
        <Modal
            stylesModal={{background: '#fff', width: '560px'}}
            stylesBtn={{width1: '20px', height: '20px', width2: '25px', color: '#4F4F4F'}}
            active={isSuccessActive}
            setActive={setSuccessModalActive}
        >
            <div className={classes.success}>
                <div className={classes.wrappImg}>
                    <img src={successImg} alt='success'/>
                </div>
                <p className={classes.text}>
                    Дякуємо, ваш запит прийнято. <br/>
                    Протягом найближчого часу наш менеджер зв’яжеться з Вами.
                </p>
            </div>
        </Modal>
    );
};

const mapStateToProps = (state) => {
    return {
        isSuccessActive: state.successModal.isSuccessActive
    }
}

export default connect(mapStateToProps, {setSuccessModalActive})(ModalSuccess);