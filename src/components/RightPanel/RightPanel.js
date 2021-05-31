import Menu from '../Menu/Menu';
import SearchRow from '../SearchRow';

export default function RightPanel() {
    return (
        <div className='right-panel'>
            <SearchRow/>
            <div className='right-panel__body'>
                <Menu/>
            </div>
        </div>
    )
}