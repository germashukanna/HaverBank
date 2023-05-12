import Bank from "./Bank";
import renaissanceCredit from '../../assets/image/Rectangle 44.svg'
import bankSinara from '../../assets/image/Rectangle 44 (1).svg'
import bankSinaraGreen from '../../assets/image/Rectangle 44 (2).svg'
import bankFolk from '../../assets/image/Rectangle 44 (3).svg'
import s from './BestOfTheMonth.module.scss'

const BestOfTheMonth = () => {
    return (
        <div className={s.bestOfTheMonthContainer}>
            <h2 className={s.bestOfTheMonthTitle}>Лучшие за месяц</h2>
            <div className={s.bestOfTheMonthBanks}>
                <Bank img={bankSinaraGreen} description={'Ренессанс Кредит'}/>
                <Bank img={bankSinara} description={'Банк Синара'}/>
                <Bank img={bankFolk} description={'Ренессанс Кредит'}/>
                <Bank img={renaissanceCredit} description={'Ренессанс Кредит'}/>
            </div>
        </div>
    )
}

export default BestOfTheMonth