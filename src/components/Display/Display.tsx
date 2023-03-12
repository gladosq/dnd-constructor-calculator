import s from './Display.module.scss';
import useStore from '../../store/calc';
import cn from 'classnames';

export default function Display() {
    const {displayed} = useStore();

    const wrapperClasses = cn(s.wrapper, {
        [s.wrapperError]: displayed === Infinity
    });

    return (
        <div className={wrapperClasses}>
            <h1>{displayed === Infinity ? 'Не определено' : displayed}</h1>
        </div>
    )
}