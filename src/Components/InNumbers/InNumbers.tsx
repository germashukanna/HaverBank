import group1 from '../../assets/image/banks/Group 1.svg'
import group2 from '../../assets/image/banks/Group 2.svg'
import group3 from '../../assets/image/banks/Group 3.svg'
import group4 from '../../assets/image/banks/Group 4.svg'
import group5 from '../../assets/image/banks/Group 5.svg'
import group6 from '../../assets/image/banks/Group 6.svg'
import group7 from '../../assets/image/banks/Group 7.svg'
import group8 from '../../assets/image/banks/Group 8.svg'
import group9 from '../../assets/image/banks/Group 9.svg'
import group10 from '../../assets/image/banks/Group 10.svg'
import s from './InNumbers.module.scss'

const InNumbers = () => {
    return (
        <div className={s.inNumbersContainer}>
            <h2 className={s.inNumbersTitle}>HaverBank в цифрах</h2>
            <div className={s.box}>
                <div className={s.gridBlock1}>
                    <div className={s.gridBlock1Title}>Более 1000</div>
                    <p className={s.gridBlock1Description}>Заявок на ипотеку поданых через наш сайт</p>
                </div>
                <div className={s.gridBlock2}>
                    <div className={s.gridBlock2Title}>До 40%</div>
                    <p className={s.gridBlock2Description}>Экономия Вашего времени в процессе получения предложений от
                        банкиров</p>
                </div>
                <div className={s.gridBlock3}>
                    <div className={s.gridBlock3Title}>Свыше 93%</div>
                    <p className={s.gridBlock3Description}>Наших клиентов получили более дешевые проценты по ипотеке по
                        сравнению с изначальным</p>
                </div>
                <div className={s.gridBlock4}>
                    <div className={s.gridBlock4Title}>200+ банкиров</div>
                    <p className={s.gridBlock4Description}>Готовы дать Вам предложение по Вашей ипотеке</p>
                    <div className={s.groupContainer}>
                        <img className={s.group1} src={group1} alt="group1"/>
                        <img className={s.group2} src={group2} alt="group2"/>
                        <img className={s.group3} src={group3} alt="group3"/>
                        <img className={s.group4} src={group4} alt="group4"/>
                        <img className={s.group5} src={group5} alt="group5"/>
                        <img className={s.group6} src={group6} alt="group6"/>
                        <img className={s.group7} src={group7} alt="group7"/>
                        <img className={s.group8} src={group8} alt="group8"/>
                        <img className={s.group9} src={group9} alt="group9"/>
                        <div className={s.group10}><img  src={group10} alt="group10"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InNumbers