import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className='lista-suspensa'>
            <label><strong>{props.label}</strong></label>
            <select 
                onChange={event => props.onChange(event.target.value)}
                required={props.required}
                value={props.value}>
                <option value=''>Select a option</option>
                {props.options.map((option) => {
                    return <option key={option}>{option}</option>
                })}
            </select>
        </div>
    );
}

export default DropDown;