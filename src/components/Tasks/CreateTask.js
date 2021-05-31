import Input from '../Base/Input';

export default function CreateTask() {
    return (
        <div className='container'>
            <div className='row'>
                <Input
                    label='Название'
                />
            </div>
            <div className='row row_offset-2'>
                <Input
                    label='Категория'
                />
            </div>
        </div>
    )
}