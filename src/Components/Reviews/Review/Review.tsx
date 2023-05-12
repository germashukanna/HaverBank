import s from './Review.module.scss'
import React from "react";

type ReviewPropType = {
    image: string
    name: string
    jobTitle: string
    review: string
}

const Review: React.FC<ReviewPropType> =
    ({review, name, jobTitle, image}) => {
        return (
            <div className={s.project}>
                <div className={s.imgContainer}>
                    <img className={s.img} src={image}/>
                    <div className={s.name}>
                        <h3 className={s.reviewName}>{name}</h3>
                        <p className={s.reviewJobTitle}>{jobTitle}</p>
                    </div>
                </div>
                <div className={s.review}>{review}</div>
            </div>
        )
    }

export default Review