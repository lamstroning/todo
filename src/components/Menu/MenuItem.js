import {useState} from 'react';
import clsx from 'clsx';

export default function MenuItem({item}) {
    const [open, setOpen] = useState(false);

    const renderBody = item => {
        if (item.children)
            return (
                <div className={clsx('menu__body', {menu__body_show: open})}>
                    {item.children.map(item => <MenuItem item={item}/>)}
                </div>
            );
    }

    return (
        <div className='menu__item'>
            <button
                onClick={() => setOpen(!open)}
                className='menu__title'
            >
                {item.title}
            </button>
            <div className={clsx('menu__body', {menu__body_show: open})}>
                {renderBody(item)}
            </div>
        </div>
    )
}