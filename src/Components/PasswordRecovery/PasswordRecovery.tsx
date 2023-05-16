import React, {useState} from "react";
import s from "../Login/Login.module.scss";
import logo from "../../assets/image/logo.svg";
import PasswordRecoveryButtonGroup from "../UI/PasswordRecoveryButtonGroup";
import {useFormik} from "formik";
import {Box, IconButton, InputAdornment} from "@mui/material";
import {RedditTextField} from "../UI/СustomInputForm";
import {VisibilityOff} from "@mui/icons-material";
import eye from "../../assets/image/evaEyeOff2Fill2.svg";
import {NavLink} from "react-router-dom";
import {ROUTS} from "../../routes/routsEnum";
import arrow from "../../assets/image/arrowInLeft.svg";

type FormikErrorType = {
    email?: string,
    phone?: string,
}

const PasswordRecovery = () => {
    const [open, setOpen] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Заполните поле';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный email';
            }
            if (!values.phone) {
                errors.phone = 'Заполните поле'
            }
            // else if (values.question.length > 70) {
            //     errors.question = 'Question length must be lower than 70 symbols'
            // }

            return errors
        },
        onSubmit: (values) => {
            formik.resetForm()
        }
    })

    return (
        <div className={s.loginContainer}>
            <img className={s.loginLogo} src={logo} alt="logo"/>
            <div className={s.loginArea}>
                <h2 className={s.loginAreaTitle}>Забыли пароль</h2>
                <div className={s.navLogin}>
                    <PasswordRecoveryButtonGroup setOpen={setOpen}/>
                </div>

                {open}
                <div>
                    <Box
                        className={s.accountLoginContainer}
                        component="form"
                        noValidate
                    >
                        <RedditTextField
                            label="E-mail"
                            id="reddit-input"
                            variant="filled"
                            style={{marginTop: 24, width: "568px", height: "60px"}}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ?
                            <div
                                style={{
                                    color: '#C63636',
                                    marginBottom: -21,
                                }}>{formik.errors.email}</div> : null}

                    </Box>
                    <div className={s.accountLoginPassword}>
                        <NavLink to={ROUTS.PASS_RECOVERY} className={s.accountLoginPasswordLink}> Забыли пароль?</NavLink>
                    </div>
                </div>
                <div className={s.accountLoginBtnContainer}>
                    <button className={s.accountLoginBtn} type={'submit'}>
                        Войти
                    </button>
                </div>
                <div className={s.wrapperTextRegistration}>
                    <button className={s.accountLoginBtnArrow}
                            onClick={() => setOpen(false)}>
                        <img src={arrow} alt="arrow"/> Все варианты входа
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PasswordRecovery