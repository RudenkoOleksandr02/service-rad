import React, {useEffect} from 'react';
import classes from './Faq.module.css'
import Question from "./Question/Question";
import {connect} from "react-redux";
import {scrollToAnchorForElement} from "../../../utils/scrollToAnchor/scrollToAnchor";
const Faq = ({faq}) => {
    useEffect(() => {
        scrollToAnchorForElement('questions')
    }, []);

    const questions = faq.map((el) => {
        return <Question key={el.id} question={el.question} answer={el.answer}/>
    })

    return (
        <section className={classes.faq} id='questions'>
            <h2>Поширені питання</h2>
            {questions}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        faq: state.faq.faq
    }
}
export default connect(mapStateToProps)(Faq);