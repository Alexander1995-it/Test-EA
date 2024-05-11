import React from 'react';
import s from './event-button.module.scss'
import arrow from '../../../common/icons/arrow.svg'

export const EventButton = (props) => {
    return (
        <button className={s.button}>
           <span> {props.children}</span><img src={arrow}/>
        </button>
    );
};

