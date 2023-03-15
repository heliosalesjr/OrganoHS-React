import './TextInputs.css';

const TextInputs = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`

    const typed = (e) => {
        props.altered(e.target.value)
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input  value={props.valor} onChange={typed} required={props.obrigatorio} placeholder= {modifiedPlaceholder}/>
        </div>

    )
}

export default TextInputs