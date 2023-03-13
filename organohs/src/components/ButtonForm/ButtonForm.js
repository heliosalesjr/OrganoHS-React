import './ButtonForm.css'

const ButtonForm = (props) => {
    return (
        <div>
            <button className='button-form'>
                {props.text}
            </button>
        </div>

    )
}

export default ButtonForm;
