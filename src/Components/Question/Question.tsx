import s from "./Question.module.scss";
import React from "react";


const Question = () => {
    return (
        <div className={s.questionContainer}>
            <h2 className={s.questionTitle}>Появился вопрос? <br/>
                Свяжитесь с нами! </h2>
            <div className={s.btnContainer}>
                <button className={s.btn}>Задать вопрос</button>
            </div>
        </div>
    )
}

export default Question