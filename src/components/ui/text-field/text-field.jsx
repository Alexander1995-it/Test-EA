import React from 'react';
import s from './text-field.module.scss'
import arrow from '../../../common/icons/arrow.svg'


export const TextField = ({setIsOpen, ...props}) => {
    return (
        <div className={s.textFieldContainer}>
            <input type={"email"} {...props}/>
            <button onClick={() => setIsOpen(true)}>
                <img src={arrow}/>
            </button>
        </div>
    );
};

