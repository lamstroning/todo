export default function SearchRow() {
    return (
        <div className='input-container'>
            <i className='input-container__icon icon icon_color-light icon_search'/>
            <input
                className='input-container__field'
                placeholder='Поиск...'
            />
        </div>
    )
}