import s from "./Question.module.scss";
import React from "react";
import OpenQuestionModal from "../Modals/QuestionModal/OpenQuestionModal";


const Question = () => {

    return (
        <div className={s.questionContainer}>
            <h2 className={s.questionTitle}>Появился вопрос? <br/>
                Свяжитесь с нами! </h2>
            <div className={s.btnContainer}>
                <OpenQuestionModal/>
            </div>
        </div>
    )
}

export default Question