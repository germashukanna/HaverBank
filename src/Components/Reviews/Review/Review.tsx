import s from './Review.module.scss'
import React from "react";

type ReviewPropType = {
    image: string
    name: string
    jobTitle: string
    review: string
}

const Review: React.FC<ReviewPropType> = ({review, name, jobTitle, image}) => {
    return (
        <div className={s.project}>
            <div className={s.img}>
                <img src={image}/>
                <div className={s.overlay}>
                    <div className={s.description}>
                        <h3>{name}</h3>
                        <p>{jobTitle}</p>
                        <div className={s.links}>
                            <div>{review}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review