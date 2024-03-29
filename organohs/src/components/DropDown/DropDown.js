import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                {props.itens.map(item => {
                    <option value=""></option>
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}


export default DropDown