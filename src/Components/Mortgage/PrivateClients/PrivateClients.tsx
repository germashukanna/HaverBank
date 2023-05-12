import arrow from '../../../assets/image/arrow.svg'
import s from './PrivateClients.module.scss'
import React from "react";

type PrivateClientsPropsType = {
    title: string,
    description: string,
    image: string
}

const PrivateClients: React.FC<PrivateClientsPropsType> = ({title, description, image}) => {
    return (
        <div className={s.privateClientsContainer}>
            <div className={s.privateClientsHeader}>
                <h2 className={s.privateClientsTitle}>{title}</h2>
               <img className={s.privateClientsBtn} src={arrow} alt="arrow"/>
            </div>
            <span className={s.privateDescription}>{description}</span>
            <img className={s.privateImage} src={image} alt="ai"/>
        </div>
    )
}

export default PrivateClients