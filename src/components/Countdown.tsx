import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import style from '../styles/components/Countdown.module.css';

export function Countdown() {
    const {
        minutos,
        segundos,
        hasFinished,
        isActive, startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutos).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(segundos).padStart(2, '0').split('');



    return (
        <div>
            <div className={style.coutdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                < button
                    disabled
                    className={`${style.countdownButton}`}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                    <>
                        { isActive ?
                            (
                                < button
                                    type="button"
                                    className={`${style.countdownButton} ${style.countdownButtonActive}`}
                                    onClick={resetCountdown}
                                >
                                    Abandonar Ciclo
                                </button>
                            ) : (

                                < button
                                    type="button"
                                    className={style.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar um Ciclo
                                </button>
                            )
                        }
                    </>
                )}
        </div >
    );
}