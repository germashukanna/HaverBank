import Review from "./Review";
import manager1 from '../../assets/image/manager1.svg'
import manager2 from '../../assets/image/manager2.svg'
import manager3 from '../../assets/image/manager3.svg'
import manager4 from '../../assets/image/manager4.svg'
import s from './Reviews.module.scss'

const Reviews = () => {
    return (
        <div className={s.reviewsContainer}>
            <div className={s.projects}>
                <div className={s.manager4}>
                    <Review image={manager4}
                            name={'Владимир Сотов'}
                            jobTitle={'Мененджер банка'}
                            review={'Заботливая и вовлеченная техподдержка, простой и удобный ' +
                                'интерфейс, отсутствие багов'}/>
                </div>
                <div className={s.manager3}>
                    <Review image={manager3}
                            name={'Владимир Сотов'}
                            jobTitle={'Мененджер банка'}
                            review={'Первое время даже разделу с сотрудниками радовались, и что зарплата рассчитывает сколько отчислений с нее отправлять. Только меня смутило с самого начала, что отчисления эти меньше, чем были в "небе".\n' +
                                'На мое недоумение сказали, что видимо процентная ставка указана неверно и ошибок в расчетах быть не может.\n' +
                                'Подробнее на Отзовик:\n' +
                                'https://otzovik.com/ \n' + 'review_6696411.html'}/>
                </div>
                <div className={s.manager31}>
                    <Review image={manager3}
                            name={'Владимир Сотов'}
                            jobTitle={'Мененджер банка'}
                            review={'Первое время даже разделу с сотрудниками радовались, и что зарплата рассчитывает сколько отчислений с нее отправлять. Только меня смутило с самого начала, что отчисления эти меньше, чем были в "небе".\n' +
                                'На мое недоумение сказали, что видимо процентная ставка указана неверно и ошибок в расчетах быть не может.\n' +
                                'Подробнее на Отзовик:\n' +
                                'https://otzovik.com/  \n' + 'review_6696411.html'}/>
                </div>
                <div className={s.manager41}>
                    <Review image={manager4}
                            name={'Владимир Сотов'}
                            jobTitle={'Мененджер банка'}
                            review={'Заботливая и вовлеченная техподдержка, простой и удобный ' +
                                'интерфейс, отсутствие багов'}/>
                </div>
                <div className={s.manager2}>
                    <Review image={manager2}
                            name={'Владимир Сотов'}
                            jobTitle={'Мененджер банка'}
                            review={'Заботливая и вовлеченная техподдержка, простой и удобный ' +
                                'интерфейс, отсутствие багов'}/>
                </div>
                <div className={s.manager1}>
                    <Review image={manager1}
                            name={'Владимир Сотов'}
                            jobTitle={'Мененджер банка'}
                            review={'Первое время даже разделу с сотрудниками радовались, и что зарплата рассчитывает сколько отчислений с нее отправлять. Только меня смутило с самого начала, что отчисления эти меньше, чем были в "небе".\n' +
                                'На мое недоумение сказали, что видимо процентная ставка указана неверно и ошибок в расчетах быть не может.\n' +
                                'Подробнее на Отзовик:\n' +
                                'https://otzovik.com/  \n' + 'review_6696411.html'}/>
                </div>
            </div>
        </div>
    )
}

export default Reviews