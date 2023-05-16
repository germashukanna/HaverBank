import React, {useState} from "react";
import s from "./ButtonGroup.module.scss";

const ButtonGroup = () => {
    const buttonData = [
        { id: 1, label: 'Консультант' },
        { id: 2, label: 'Клиент' },
        { id: 3, label: 'Банкир' },
    ];

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const handleClick = (buttonIndex: number) => {
        setActiveButtonIndex(buttonIndex);
    };

    return (
        <div>
            {buttonData.map((button, index) => (
                <button
                    className={s.item}
                    key={button.id}
                    onClick={() => handleClick(index)}
                    style={{
                        color: activeButtonIndex === index ? '#4FF997' : '#0C3845',
                        borderBottomColor: activeButtonIndex === index ? '#4FF997' : 'rgba(12, 56, 69, 0.08)',
                    }}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup