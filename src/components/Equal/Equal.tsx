import s from './Equal.module.scss';
import useStore from '../../store/calc';
import {MAX_DISPLAYED_NUMBERS} from '../../const/const';
import cn from 'classnames';
import React from 'react';

interface IEqualProps {
    isConstructor: boolean;
}

export default function Equal({isConstructor}: IEqualProps) {
    const {operand, setDisplayed, setOperand, displayed, result} = useStore();

    const equalHandler = () => {
        switch (operand) {
            case '/':
                displayed > result
                    ? setDisplayed(Number((result / Number(displayed)).toFixed(MAX_DISPLAYED_NUMBERS)))
                    : setDisplayed(Number((result / Number(displayed)).toFixed(2).slice(0, MAX_DISPLAYED_NUMBERS)));
                break;
            case '+':
                setDisplayed(Number(String(Number(displayed) + Number(result)).slice(0, MAX_DISPLAYED_NUMBERS)));
                break;
            case 'x':
                setDisplayed(Number(String((result * Number(displayed)).toFixed(2)).slice(0, MAX_DISPLAYED_NUMBERS)));
                break;
            case '-':
                setDisplayed(Number(String(result - Number(displayed)).slice(0, MAX_DISPLAYED_NUMBERS)));
                break;
            default:
                /*--- Если оператор не выбран,
                нажатие на кнопку равно сбрасывает
                значение на дисплее до нуля ---*/
                setDisplayed(0);
        }

        setOperand('');
    };

    const buttonWrapper = cn(s.wrapper, {
        [s.wrapperRuntime]: isConstructor
    });

    return (
        <div className={buttonWrapper}>
            <button onClick={equalHandler}>=</button>
        </div>
    )
}