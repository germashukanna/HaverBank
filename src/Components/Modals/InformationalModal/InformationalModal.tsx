import React from "react";
import {BasicModal} from "../BasicModals";
import {FormGroup} from "@mui/material";
import closeImg from '../../../assets/image/closeModal.svg'
import frameImg from '../../../assets/image/Frame 105.svg'
import s from './InformationalModal.module.scss'


type InformationalModalType = {
    open: boolean
    hide: () => void
}

export const InformationalModal: React.FC<InformationalModalType> = ({open, hide}) => {

    return (
        <>
            <BasicModal open={open}>
                <form className={s.formAddNewPack}>
                    <div className={s.headerModalAddNewPack}>
                        <button onClick={hide}><img src={closeImg} alt=""/></button>
                    </div>
                    <FormGroup>
                        <img className={s.frameImg} src={frameImg} alt="frameImg"/>
                        <h2 className={s.label}>Мы получили ваш вопрос</h2>
                        <p className={s.labelDescription}>Описание формы</p>

                    </FormGroup>
                </form>
            </BasicModal>
        </>
    )
}

export default InformationalModal





