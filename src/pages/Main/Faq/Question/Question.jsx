import React, {useRef, useState} from 'react';
import classes from './Question.module.css'
import {ReactComponent as Row} from "./row.svg";
import {CSSTransition} from "react-transition-group";

const Question = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null)

    return (
        <div className={classes.wrapper} onClick={() => setIsOpen(isOpen => !isOpen)}>
            <div className={classes.containerQuestion}>
                <p>{question}</p>
                <div>
                    <Row className={`${classes.row} ${isOpen && classes.rotated}`}/>
                </div>
            </div>
            <CSSTransition
                nodeRef={answerRef}
                in={isOpen}
                timeout={300}
                classNames={{
                    enter: classes['my-answer-enter'],
                    enterActive: classes['my-answer-enter-active'],
                    exit: classes['my-answer-exit'],
                    exitActive: classes['my-answer-exit-active']
                }}
            >
                <div ref={answerRef} className={`${classes.containerAnswer} ${isOpen && classes.show}`}>
                    <p>
                        {answer}
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Question;