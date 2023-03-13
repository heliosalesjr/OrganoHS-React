import './Form.css'
import TextInputs from '../TextInputs/TextInputs';
import DropDown from '../DropDown/DropDown';
import ButtonForm from '../ButtonForm/ButtonForm';

const Form = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e UI Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    return (
        <section className='form-main'>
            <form  >
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <TextInputs obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextInputs label="Cargo" placeholder="Digite seu cargo"/>
                <TextInputs label="Imagem" placeholder="Selecione sua imagem"/>
                <DropDown label="Times" item={teams}/>
                <ButtonForm text='Clica, mona'/>
            </form>
        </section>

    )
}


export default Form;