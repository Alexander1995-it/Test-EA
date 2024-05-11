import React, {useEffect, useState} from 'react';
import s from './countdown-timer.module.scss'
import BorderLabelTime from "../ui/border-label-time/border-label-time";

const CountdownTimer = () => {
    const targetDate = new Date('2024-07-24T00:00:00');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timeRemaining, setTimeRemaining] = useState(targetDate - currentTime);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
            setTimeRemaining(targetDate - new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000).toString().padStart(2, '0');
    return (
        <div className={s.countdownTimerWrapper}>
            <div className={s.timerWrapper}>
                <div className={s.timer}>{days}</div>
                <div className={s.colon}>:</div>
               <BorderLabelTime width={width}>{width < 768 ? 'DD' : 'Days'}</BorderLabelTime>
            </div>
            <div className={s.timerWrapper}>
                <div className={s.timer}>{hours}</div>
                <div className={s.colon}>:</div>
                <BorderLabelTime width={width}>{width < 768 ? 'HH' : 'Hours'}</BorderLabelTime>
            </div>
            <div className={s.timerWrapper}>
                <div className={s.timer}>{minutes}</div>
                <div className={s.colon}>:</div>
               <BorderLabelTime width={width}>{width < 768 ? 'MM' : 'Minutes'}</BorderLabelTime>
            </div>
            <div className={s.secondsWrapper}>
                <div className={s.timer}>{seconds}</div>
                <BorderLabelTime width={width}>{width < 768 ? 'SS' : 'Seconds'}</BorderLabelTime>
            </div>
        </div>
    );
};

export default CountdownTimer;