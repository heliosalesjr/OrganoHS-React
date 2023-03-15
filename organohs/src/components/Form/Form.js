import './Form.css'
import TextInputs from '../TextInputs/TextInputs';
import DropDown from '../DropDown/DropDown';
import ButtonForm from '../ButtonForm/ButtonForm';
import { useState } from 'react';

const Form = (props) => {

    const teams = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e UI Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    //os três estados:

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [times, setTimes] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        props.teamMember ({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            times: times
        })
    }

    return (
        <section className='form-main'>
            <form  onSubmit={onSave}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <TextInputs 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    altered={valor => setNome(valor)}

                />
                <TextInputs 
                    label="Cargo"
                    obrigatorio={true} 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    altered={valor => setCargo(valor)}

                />
                <TextInputs 
                    label="Imagem" 
                    placeholder="Selecione sua imagem"
                    valor={imagem}
                    altered={valor =>setImagem(valor)}
                
                />

                <DropDown 
                label="Times" 
                item={teams}
                valor={times}
                altered={valor =>setTimes(valor)}

                />
                <ButtonForm text='Clica, mona'/>
            </form>
        </section>

    )
}


export default Form;