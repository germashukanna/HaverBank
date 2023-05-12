import React from "react";
import s from './Partner.module.scss'

type PartnerPropsType = {
    img: string;
    description: string
}

const Partner: React.FC<PartnerPropsType> = ({img, description}) => {
    return(
        <div className={s.partnerContainer}>
            <img className={s.partnerImage} src={img} alt=""/>
            <div className={s.partnerDescription}>{description}</div>
        </div>
    )
}

export default Partner