
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form'

function App() {

  const [members, setMembers] = useState([]);

  const newTeamMember = (member) => {
    console.log(member)
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <Banner />
      <Form teamMember={member => newTeamMember(member)}/>
    </div>
  );
}

export default App;
