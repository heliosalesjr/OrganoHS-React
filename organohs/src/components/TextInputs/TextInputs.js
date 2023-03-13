import './TextInputs.css';

const TextInputs = (props) => {
    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder= {props.placeholder}/>
        </div>

    )
}

export default TextInputs