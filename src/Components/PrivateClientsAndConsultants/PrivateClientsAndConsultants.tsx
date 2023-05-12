import PrivateClients from "../Mortgage/PrivateClients";
import ai from "../../assets/image/ai.svg";
import consultants from "../../assets/image/consultants.svg";
import s from './PrivateClientsAndConsultants.module.scss'


const PrivateClientsAndConsultants = () => {
  return (
      <div className={s.privateClientsAndConsultantsContainer}>
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
  )
}

export default PrivateClientsAndConsultants