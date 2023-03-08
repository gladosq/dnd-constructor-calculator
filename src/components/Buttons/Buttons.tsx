import s from './Buttons.module.scss';
import {CALC_NUMBERS} from '../../const/const';
import cn from 'classnames';
import useStore from '../../store/calc';

interface IButtonsProps {
    isConstructor: boolean;
}

export default function Buttons({isConstructor}: IButtonsProps) {
    const {operand, result, setResult, displayed, setDisplayed} = useStore();
    
    console.log('result:', result);
    console.log('displayed:', displayed);

    const buttonHandler = (number: number) => {


        if (!operand) {
            if (String(displayed).length < 10) {
                setDisplayed(Number(String(displayed) + String(number)));
            }

            // return;
        } else {

            if (result === displayed) {
                setDisplayed(number);
            } else {
                setDisplayed(Number(String(displayed) + String(number)));
            }
            console.log('operand est:');
            // setResult(displayed);
            
            
            
            // setDisplayed(0);

        }

        // setDisplayed(Number(String(displayed) + String(number)));

    };

    const itemClasses = cn(s.item, {
        [s.itemRuntime]: isConstructor
    });

    return (
        <ul className={s.list}>
            {CALC_NUMBERS.map((item) => (
                <li className={itemClasses} key={item}>
                    <button onClick={() => buttonHandler(Number(item))}>{item}</button>
                </li>
            ))}
        </ul>
    )
}