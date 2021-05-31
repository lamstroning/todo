import MenuItem from './MenuItem';
import {menu} from './config/menu';




export default function Menu() {
    return (
        <div className='menu'>
            {menu.map(item => <MenuItem item={item}/>)}
        </div>
    );
}