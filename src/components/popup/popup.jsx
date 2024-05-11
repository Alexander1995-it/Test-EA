import React from 'react';
import close from '../../common/icons/close.svg'
import s from './popup.module.scss'
import {ButtonClose} from "../ui/button-close/button-close";

export const Popup = ({setIsOpen}) => {

    return (
        <div className={s.popup}>
            <div className={s.popup__content}>
                <div className={s.container}>
                    <div className={s.popupInformation}>
                        <div className={s.popupInformation__status}>SUCCESS!</div>
                        <div className={s.popupInformation__description}>You have successfully subscribed to the email
                            newsletter
                        </div>
                        <ButtonClose onClick={() => setIsOpen(false)}>Close</ButtonClose>
                    </div>
                </div>
                <img onClick={() => setIsOpen(false)} className={s.closeImg} src={close}/>
            </div>
        </div>
    );
};

