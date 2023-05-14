import useModal from "../../../hooks/useModal";
import s from "../QuestionModal/OpenQuestionModal/OpenQuestionModal.module.scss";
import {InformationalModal} from "./InformationalModal";
import React from "react";

type InformationalModalOpen = {
    type: string
}

const InformationalModalOpen: React.FC<InformationalModalOpen> = ({type}) => {
    const {itemModalOpen, toggle} = useModal()

    return (
        <>
            <button onClick={toggle} className={s.openModalButton}  type={"submit"}>
                Задать вопрос
            </button>
            <InformationalModal open={itemModalOpen} hide={toggle}/>
        </>
    )
}

export default InformationalModalOpen