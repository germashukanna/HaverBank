import React from "react";
import {RedditTextField} from "../../UI/СustomInputForm";
import {Box, IconButton, InputAdornment} from "@mui/material";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import {ROUTS} from "../../../routes/routsEnum";
import arrow from '../../../assets/image/arrowInLeft.svg'
import eye from '../../../assets/image/evaEyeOff2Fill2.svg'
import {VisibilityOff} from "@mui/icons-material";
import s from "./AccountLogin.module.scss";

type FormikErrorType = {
    email?: string,
    password?: string,
}

type AccountLoginPropsType = {
    setOpen: (open: boolean) => void
}

const AccountLogin: React.FC<AccountLoginPropsType> = ({setOpen}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Заполните поле';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный email';
            }
            if (!values.password) {
                errors.password = 'Заполните поле'
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
    // const navigate = useNavigate()
    //
    // const onClickSignIn = () => {
    //     return navigate('/login')
    // }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={s.accountLoginContainer}>
            <div>
                <Box
                    className={s.accountLoginContainer}
                    component="form"
                    noValidate
                >
                    <RedditTextField
                        label="E-mail или телефон"
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
                    <RedditTextField
                        label="Пароль"
                        id="reddit-input"
                        variant="filled"
                        type={showPassword ? 'text' : 'password'}
                        style={{marginTop: 24, width: "568px", height: "60px"}}
                        {...formik.getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff/> : <img src={eye}/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formik.touched.password && formik.errors.password ?
                        <div
                            style={{
                                color: '#C63636',
                                marginBottom: -21
                            }}>{formik.errors.password}</div> : null}
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
    )
}

export default AccountLogin