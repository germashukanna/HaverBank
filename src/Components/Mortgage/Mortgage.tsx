import PrivateClients from "./PrivateClients";
import ai from '../../assets/image/ai.svg'
import consultants from '../../assets/image/consultants.svg'
import s from './Mortgage.module.scss'

const Mortgage = () => {
    return (
        <div className={s.mortgageContainer}>
            <h1 className={s.mortgageTitle}>Ипотека из первых рук по прямой дороге</h1>
            <span className={s.mortgageDescription}>
                Мы взяли процесс получения ипотеки и превратили его <br/> в более простой и легкий. Для Вас.</span>
            <div className={s.mortgageCards}>
                <PrivateClients
                    title={'Частные клиенты'}
                    description={'Заходите и получайте предложения по Вашей ипотеке \n' +
                        'напрямую от банкиров'}
                    image={ai}
                />
                <PrivateClients
                    title={'Консультанты'}
                    description={'Тут Вы можете съэкономить огромное количество \n' +
                        'время и денег для Ваших клиентов'}
                    image={consultants}
                />
            </div>
        </div>
    )
}

export default Mortgage