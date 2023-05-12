import logo from '../../assets/image/logo.svg'
import evaCloseFill from '../../assets/image/evaCloseFill2.svg'
import evaCloseFillRed from '../../assets/image/evaCloseRed2.svg'
import evaCheckmark from '../../assets/image/evaCheckmarkCircleWhite.svg'
import evaCheckmarkRed from '../../assets/image/evaCheckmarkCircleRed.svg'
import s from './Advantages.module.scss'

const Advantages = () => {
    return (
        <div className={s.advantagesContainer}>
            <h2 className={s.advantagesTitle}>Наши преимущества</h2>
            <table className={s.advantagesTableContainer}>
                <tr>
                    <th></th>
                    <th className={s.tableHeader}><img className={s.tableHeaderImage} src={logo} alt="logo"/></th>
                    <th className={s.tableHeaderOffice}>В офисе</th>
                </tr>
                <tr className={s.tableRows}>
                    <td className={s.tableDescription}>Заполнение анкеты для каждого банка</td>
                    <td className={s.evaCloseFill}><img src={evaCloseFill} alt="logo"/></td>
                    <td className={s.evaCheckmarkRed}><img src={evaCheckmarkRed} alt="logo"/></td>
                </tr>
                <tr>
                    <td className={s.tableDescription}>Предложения от банкиров в одном месте</td>
                    <td className={s.evaCloseFill}><img src={evaCheckmark} alt="logo"/></td>
                    <td className={s.evaCheckmarkRed}><img src={evaCloseFillRed} alt="logo"/></td>
                </tr>
                <tr>
                    <td className={s.tableDescription}>Сравнение разных предложений</td>
                    <td className={s.evaCloseFill}><img src={evaCheckmark} alt="logo"/></td>
                    <td className={s.evaCheckmarkRed}><img src={evaCloseFillRed} alt="logo"/></td>
                </tr>
                <tr>
                    <td className={s.tableDescription}>Экономия Вашего времени</td>
                    <td className={s.evaCloseFill}><img src={evaCheckmark} alt="logo"/></td>
                    <td className={s.evaCheckmarkRed}><img src={evaCloseFillRed} alt="logo"/></td>
                </tr>
            </table>
        </div>
    )
}

export default Advantages