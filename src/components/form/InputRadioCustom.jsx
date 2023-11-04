// eslint-disable-next-line react/prop-types
const InputRadioCustom = ({ data, handleChange }) => {
    const { id, name, color, defCheck } = data ?? {
        id: 0,
        name: null,
        color: {
            head: 'bg-gray-600',
            body: 'bg-gray-400',
            gradient: 'from-gray-600 via-gray-600 to-gray-400'
        },
        defCheck: false
    }
    return defCheck === true ? (
        <>
            <input type="radio" id={id} name="colorId" value={id} className="hidden" defaultChecked onChange={handleChange}/>
            <label htmlFor={id} className={`cursor-pointer py-2 px-4 my-1 mx-2 bg-gradient-to-r ${color.gradientColor} rounded-md`}>{name}</label>
        </>
    ) : (
        <>
            <input type="radio" id={id} name="colorId" value={id} className="hidden" onChange={handleChange} />
            <label htmlFor={id} className={`cursor-pointer py-2 px-4 my-1 mx-2 bg-gradient-to-r ${color.gradientColor} rounded-md`}>{name}</label>
        </>
    )
}

export default InputRadioCustom