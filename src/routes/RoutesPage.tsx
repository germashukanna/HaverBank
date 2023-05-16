import {Route, Routes} from "react-router-dom";
import {ROUTS} from "./routsEnum";
import Login from "../Components/Login";
import ManePage from "../Components/pages/manePage";
import PasswordRecovery from "../Components/PasswordRecovery";


export const RoutesPage = () => {
    return(
        <div>
            <Routes>
                <Route path={ROUTS.LOGIN} element={<Login/>}/>
                <Route path={ROUTS.DEFAULT} element={<ManePage/>}/>
                {/*<Route path={ROUTS.ACCOUNT_LOGIN} element={<AccountLogin/>}/>*/}
                {/*<Route path={ROUTS.REGISTRATION} element={<Registration/>}/>*/}
                {/*<Route path={ROUTS.EMAIL_CONFIRMATION} element={<EmailConfirmation/>}/>*/}
                <Route path={ROUTS.PASS_RECOVERY} element={<PasswordRecovery/>}/>
                {/*<Route path={ROUTS.NEW_PASS} element={<CreateNewPassword/>}/>*/}
            </Routes>
        </div>
    )

}