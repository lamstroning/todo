import CreateTask from '../Tasks/CreateTask';

export default function PageBody() {
    return (
        <div className='page-body'>
            <div className='page-body__control'>
                <div className='page-body__title'>
                    Создать задачу
                </div>
            </div>
            <div className='page-body__view'>
                <CreateTask/>
            </div>
        </div>
    )
}