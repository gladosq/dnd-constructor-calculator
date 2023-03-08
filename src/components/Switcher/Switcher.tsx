import s from './Switcher.module.scss';
import {Segmented} from 'antd';
import ConstructorIcon from '../UI/ConstructorIcon/ConstructorIcon';
import RuntimeIcon from '../UI/RuntimeIcon/RuntimeIcon';
import useStore from '../../store/calc';

export default function Switcher() {
    const {switcher, setSwitcher} = useStore();
    
    const switcherOptions = [
        {
            label: 'Runtime',
            value: 'Runtime',
            icon: <RuntimeIcon/>,
        },
        {
            label: 'Constructor',
            value: 'Constructor',
            icon: <ConstructorIcon/>,
        },
    ];

    return (
        <div className={s.wrapper}>
            <Segmented
                options={switcherOptions}
                defaultValue={switcher}
                onChange={(e: any) => {
                    setSwitcher(e);
                }}
            />
        </div>
    )
}