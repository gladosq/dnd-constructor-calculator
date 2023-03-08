import s from './Equal.module.scss';
import useStore from '../../store/calc';

export default function Equal() {

    const {operand, setDisplayed, displayed, result, firstVariable, secondVariable, setSecondVariable} = useStore();

    console.log('equal rerender');

    const equalHandler = () => {
        if (operand === '' || operand === '0') {

        } else if (operand === '/') {
            setSecondVariable(firstVariable / secondVariable);

        } else if (operand === '+') {
            setDisplayed(result + displayed);
        }

    };

    return (
        <div className={s.wrapper}>
            <button onClick={equalHandler}>=</button>
        </div>
    )
}