import s from './Placeholder.module.scss';
import PlaceholderIcon from '../UI/PlaceholderIcon/PlaceholderIcon';

export default function Placeholder() {

    return (
        <div className={s.wrapper}>
            <PlaceholderIcon/>
            <p>Перетащите сюда</p>
            <span>любой элемент<br/> из левой панели</span>
        </div>
    )
}