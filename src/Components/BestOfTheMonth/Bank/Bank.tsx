import React from "react";
import s from './Bank.module.scss'


type BankPropsType = {
    img: string
    description: string
}

const Bank: React.FC<BankPropsType> = ({img, description}) => {
    return(
        <div className={s.bankContainer}>
            <div className={s.bankTop}>
                <img className={s.bankTopImage} src={img}/>
                <p className={s.bankTopDescription}>{description}</p>
            </div>
                <p className={s.bankTopBid}>Ставка в год</p>
                <p className={s.bankTopBidNumber}>12,19%</p>
                <p className={s.bankTopBidYears}>до $700 000</p>
                <p className={s.bankTopBidYears}>до 30 лет</p>
        </div>
    )
}

export default Bank