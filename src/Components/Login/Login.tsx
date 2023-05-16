import React, {useState} from "react";
import LoginButton from "./LoginButton";
import {NavLink} from "react-router-dom";
import {ROUTS} from "../../routes/routsEnum";
import logo from '../../assets/image/logo.svg'
import ButtonGroup from "../UI/LiginButtonGroup";
import s from "./Login.module.scss";
import AccountLogin from "./AccountLogin";



const Login = () => {
    const [open, setOpen] = useState<boolean>(false)


    return (
        <div className={s.loginContainer}>
            <img className={s.loginLogo} src={logo} alt="logo"/>
            <div className={s.loginArea}>
                <h2 className={s.loginAreaTitle}>Войдите в аккаунт</h2>

                <div className={s.navLogin}>
                    <ButtonGroup/>
                </div>

                {open
                    ? <AccountLogin setOpen={setOpen}/>
                    : (<>
                            <div className={s.loginButtonContainer}>
                                <LoginButton setOpen={setOpen}/>
                            </div>
                            <div className={s.registrationContainer}>
                                <div className={s.wrapperTextAccount}>
                                    У вас нет аккаунта?
                                </div>
                                <div className={s.wrapperTextRegistration}>
                                    <NavLink to={ROUTS.REGISTRATION} className={s.navlink}> Зарегистрируйтесь</NavLink>
                                </div>
                            </div>
                            <div className={s.wrapperTextSignIn}>Click “Sign In” to agree toHaver Bank <NavLink
                                to={ROUTS.REGISTRATION} className={s.link}>Terms
                                of Service</NavLink>
                                and acknowledge that Haver Bank <NavLink to={ROUTS.REGISTRATION} className={s.link}>Privacy
                                    Policy</NavLink>
                                applies to you.
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Login