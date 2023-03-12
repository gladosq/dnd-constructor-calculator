import s from './Operations.module.scss';
import useStore from '../../store/calc';
import {CALC_OPERATIONS} from '../../const/const';
import cn from 'classnames';

interface IOperationsProps {
    isConstructor: boolean;
}

export default function Operations({isConstructor}: IOperationsProps) {
    const {setResult, displayed, setOperand} = useStore();

    const buttonHandler = (operandValue: string) => {
        setOperand(operandValue);
        setResult(Number(displayed));
    };

    const itemClasses = cn(s.item, {
        [s.itemRuntime]: isConstructor
    });

    return (
        <ul className={s.list}>
            {CALC_OPERATIONS.map((item) => (
                <li className={itemClasses} key={item}>
                    <button onClick={() => buttonHandler(item)}>{item}</button>
                </li>
            ))}
        </ul>
    )
}