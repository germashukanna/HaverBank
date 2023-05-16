import google from '../../../assets/image/google.svg'
import facebook from '../../../assets/image/facebook-icon.svg'
import apple from '../../../assets/image/Group.svg'
import mail from '../../../assets/image/e-mail.svg'
import s from './LoginButton.module.scss'
import React from "react";


type LoginButtonPropsType = {
    setOpen: (open: boolean) => void
}

const LoginButton: React.FC<LoginButtonPropsType> = ({setOpen}) => {

    const onClickOpen = () => {
        setOpen(true)
    }

    return (
        <div className={s.loginButtonContainer}>
            <button className={s.loginButton}>
                Продолжить с Google <img className={s.loginImg} src={google} alt="google"/>
            </button>
            <button className={s.loginButton}>
                Продолжить с Facebook <img className={s.loginImg} src={facebook} alt="facebook"/>
            </button>
            <button className={s.loginButton}>
                Продолжить с Apple ID <img className={s.loginImgApple} src={apple} alt="apple"/>
            </button>
            <button className={s.loginButton} onClick={onClickOpen}>
                Продолжить с E-mail <img className={s.loginImgApple} src={mail} alt="mail"/>
            </button>

        </div>
    )
}

export default LoginButton