import star from '../../assets/image/StarFill2@2x.svg'
import s from './MajorService.module.scss'

const MajorService = () => {
    return (
        <div className={s.majorServiceContainer}>
            <div className={s.majorServiceStar}><img src={star} alt=""/></div>
            <div className={s.majorServiceNumber}>4.9</div>
            <div className={s.majorServiceReview}>На основе 500+ отзывов</div>
            <div className={s.majorServiceHaverBank}>HaverBank крупный сервис</div>
        </div>
    )
}

export default MajorService