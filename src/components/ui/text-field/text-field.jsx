import React from 'react';
import s from './text-field.module.scss'
import arrow from '../../../common/icons/arrow.svg'


export const TextField = ({...props}) => {
    return (
        <div className={s.textFieldContainer}>
            <input {...props}/>
            <button>
                <img src={arrow}/>
            </button>
        </div>
    );
};

