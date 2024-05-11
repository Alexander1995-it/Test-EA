import React from 'react';
import s from './button-close.module.scss'

export const ButtonClose = (props) => {
    return (
        <button {...props} className={s.button}>
            <span> {props.children}</span>
        </button>
    );
};

