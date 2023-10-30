import './Label.css'

const CampoTexto = ({ type = 'text', label, value, required, placeholder, onChange }) => {

    const onType = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className={`label-all label-${type}`}>
            <label><strong>{label}</strong></label>
            <input 
                type={type}
                value={value} 
                onChange={onType} 
                required={required} 
                placeholder={placeholder}/>
        </div>
    );
}

export default CampoTexto;
