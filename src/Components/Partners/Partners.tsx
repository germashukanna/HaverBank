import Partner from "./Partner";
import renaissanceCredit from '../../assets/image/Rectangle 44.svg'
import bankSinara from '../../assets/image/Rectangle 44 (1).svg'
import bankSinaraGreen from '../../assets/image/Rectangle 44 (2).svg'
import bankFolk from '../../assets/image/Rectangle 44 (3).svg'
import s from './Partners.module.scss'


const Partners = () => {
    return (
        <div className={s.partnersContainer}>
            <h2 className={s.partnersTitle}>НАШИ ПАРТНЕРЫ</h2>
            <div className={s.banks}>
                <Partner img={renaissanceCredit} description={'Ренессанс Кредит'}/>
                <Partner img={bankSinara} description={'Банк Синара'}/>
                <Partner img={bankSinaraGreen} description={'Банк Синара'}/>
                <Partner img={bankSinara} description={'Народный наш'}/>
                <Partner img={bankFolk} description={'Банк Синара'}/>
            </div>
        </div>
    )
}

export default Partners