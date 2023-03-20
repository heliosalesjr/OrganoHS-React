
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {

  const mainTeams = [
    {
      nome: "Programação",
      mainColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      nome: "Front-End",
      mainColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      nome: 'Data-Science',
      mainColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      mainColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      nome: 'UX e UI Design',
      mainColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      mainColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      mainColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
    
  ]

  const [members, setMembers] = useState([]);

  const newTeamMember = (member) => {
    console.log(member)
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <Banner />
      <Form teamMember={member => newTeamMember(member)}/>

      {mainTeams.map (team => <Team key={team.nome} nome={team.nome} mainColor={team.mainColor} secondaryColor={team.secondaryColor}/>)}

    </div>
  );
}

export default App;
