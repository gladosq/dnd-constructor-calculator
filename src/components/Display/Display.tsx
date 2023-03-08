import s from './Display.module.scss';
import useStore from '../../store/calc';

export default function Display() {

    const {result, displayed} = useStore();

    return (
        <div className={s.wrapper}>
            <h1>{displayed}</h1>
        </div>
    )
}