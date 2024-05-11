import React, {useState} from 'react';
import logo from '../../common/icons/logo.svg'
import s from './main.module.scss'
import CountdownTimer from "../../components/countdown-timer/countdown-timer";
import {EventButton} from "../../components/ui/event-button/event-button";
import {TextField} from "../../components/ui/text-field/text-field";
import {Popup} from "../../components/popup/popup";
import leftDecoration from '../../common/icons/left-decoration.svg'
import rightDecoration from '../../common/icons/right-decoration.svg'


const Main = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={s.main}>
            <div className={s.mainWrapper}>
                <div className={s.content}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <img className={s.logo} src={logo}/>
                            <div className={s.information}>
                                <div className={s.informationWrapper}>
                                    <div className={s.information__title}>
                                        Under Construction
                                    </div>
                                    <div className={s.information__description}>
                                        We're making lots of improvements and will be back soon
                                    </div>
                                </div>
                            </div>
                            <div className={s.countdownTimer}><CountdownTimer/></div>
                            <div className={s.eventSection}>
                                <div className={s.eventSection__text}>Check our event page when you wait:</div>
                                <EventButton href="https://www.google.com/" target="_blank">Go to the
                                    event</EventButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.footer}>
                    <div className={s.container}>
                        <div className={s.footer__field}>
                            <TextField setIsOpen={setIsOpen} placeholder={'Enter your Email and get notified'}/>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <Popup setIsOpen={setIsOpen}/>}
            <img className={s.leftDecoration} src={leftDecoration}/>
            <img className={s.rightDecoration} src={rightDecoration}/>
        </div>
    );
};

export default Main;