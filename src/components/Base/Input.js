export default function Input({label, placeholder, type = 'text'}) {
    return (
        <>
            <div className='form-control'>
                <div className='form-control__label'>
                    {label}
                </div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className='form-control__field'
                />
            </div>
        </>
    )
}