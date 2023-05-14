import useModal from "../../../../hooks/useModal";
import s from './OpenQuestionModal.module.scss'
import QuestionModal from "../QuestionModal";

const OpenQuestionModal = () => {

    const {itemModalOpen, toggle} = useModal()

    return (
        <>
            <button onClick={toggle} className={s.openModalButton}>
                Задать вопрос
            </button>
            <QuestionModal open={itemModalOpen} hide={toggle}/>
        </>
    )
}

export default OpenQuestionModal

