import s from './Buttons.module.scss';
import {CALC_NUMBERS, MAX_DISPLAYED_NUMBERS} from '../../const/const';
import cn from 'classnames';
import useStore from '../../store/calc';
import {isNumberInfinity} from '../../utils/calculate';

interface IButtonsProps {
    isConstructor: boolean;
}

export default function Buttons({isConstructor}: IButtonsProps) {
    const {operand, result, setResult, displayed, setDisplayed, isDisplayActive} = useStore();

    const buttonHandler = (number: number | string) => {
        if (isDisplayActive) return;

        if (number === '.' && String(displayed) === '0') {
            setDisplayed('0.');
            return;
        }

        if (!operand || result !== displayed) {
            if (String(displayed).length < MAX_DISPLAYED_NUMBERS) {
                if (number === '.' && !String(displayed).includes('.')) {
                    setDisplayed(String(displayed + number));
                } else {
                    if (String(displayed).includes('.')) {
                        setDisplayed(Number(String(isNumberInfinity(displayed)) + String(number)));
                    } else {
                        setDisplayed(Number(String(isNumberInfinity(Number(displayed))) + String(number)));
                    }
                }
            }
        } else {
            setDisplayed(number);
        }
    };

    const itemClasses = cn(s.item, {
        [s.itemRuntime]: isConstructor
    });

    return (
        <ul className={s.list}>
            {CALC_NUMBERS.map((item) => (
                <li className={itemClasses} key={item}>
                    <button onClick={() => buttonHandler(item)}>{item}</button>
                </li>
            ))}
        </ul>
    )
}