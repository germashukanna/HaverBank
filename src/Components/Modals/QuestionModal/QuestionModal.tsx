import React, {useState} from "react";
import {useFormik} from "formik";
import {BasicModal} from "../BasicModals";
import {Box, FormGroup} from "@mui/material";
import closeImg from '../../../assets/image/closeModal.svg'
import frameImg from '../../../assets/image/Frame 104.svg'
import s from './QuestionModal.module.scss'
import {RedditTextField} from "../../UI/СustomInputForm";
import useModal from "../../../hooks/useModal";
import InformationalModalOpen from "../InformationalModal";


type CardsModalType = {
    open: boolean
    hide: () => void
}

type FormikErrorType = {
    name?: string,
    phone?: string,
    email?: string,
    message?: string,
}

const QuestionModal: React.FC<CardsModalType> = ({open, hide}) => {

    const {itemModalOpen, toggle} = useModal()
    const [openModal, setOpenModal] = useState()

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.name) {
                errors.name = 'Заполните поле'
            }
            if (!values.phone) {
                errors.phone = 'Заполните поле'
            }
            if (!values.email) {
                errors.email = 'Заполните поле';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный email';
            }
            if (!values.message) {
                errors.message = 'Заполните поле'
            }
            // else if (values.question.length > 70) {
            //     errors.question = 'Question length must be lower than 70 symbols'
            // }

            return errors
        },
        onSubmit: (values) => {
            toggle()
            hide()
            formik.resetForm()
        }
    })

    return (
        <>
            <BasicModal open={open}>
                <form className={s.formAddNewPack} onSubmit={formik.handleSubmit}>
                    <div className={s.headerModalAddNewPack}>
                        <button onClick={hide}><img src={closeImg} alt=""/></button>
                    </div>
                    <FormGroup>
                        <img className={s.frameImg} src={frameImg} alt="frameImg"/>
                        <h2 className={s.label}>Заполните поля ниже</h2>
                        <p className={s.labelDescription}>Описание формы</p>
                        <>

                            <Box
                                component="form"
                                noValidate
                            >
                                <RedditTextField
                                    label="Ваше имя"
                                    id="reddit-input"
                                    variant="filled"
                                    style={{marginTop: 11, textAlign: "end", width: "568px", height: "60px"}}
                                    {...formik.getFieldProps('name')}
                                />
                                {formik.touched.name && formik.errors.name ?
                                    <div
                                        style={{color: '#C63636', marginBottom: -21}}>{formik.errors.name}</div> : null}
                                <RedditTextField
                                    label="Ваш телефон"
                                    id="reddit-input"
                                    variant="filled"
                                    style={{marginTop: 26, textAlign: "end", width: "568px", height: "60px"}}
                                    {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone ?
                                    <div style={{
                                        color: '#C63636',
                                        marginBottom: -21
                                    }}>{formik.errors.phone}</div> : null}
                                <RedditTextField
                                    label="E-mail"
                                    id="reddit-input"
                                    variant="filled"
                                    style={{marginTop: 24, textAlign: "end", width: "568px", height: "60px"}}
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ?
                                    <div style={{
                                        color: '#C63636',
                                        marginBottom: -21
                                    }}>{formik.errors.email}</div> : null}
                                <RedditTextField
                                    label="Ваше сообщение"
                                    id="reddit-input"
                                    variant="filled"
                                    multiline
                                    rows={5}
                                    style={{marginTop: 24, textAlign: "end", width: "568px", height: "160px"}}
                                    {...formik.getFieldProps('message')}
                                />
                                {formik.touched.message && formik.errors.message ?
                                    <div style={{
                                        color: '#C63636',
                                        fontWeight: '12px',
                                        marginBottom: -21
                                    }}>{formik.errors.message}</div> : null}
                            </Box>
                        </>
                        <InformationalModalOpen type="submit"/>
                        </FormGroup>
                </form>
            </BasicModal>
        </>
    )
}

export default QuestionModal


