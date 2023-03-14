
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form'

function App() {

  const [members, setMembers] = useState([]);

  const onSave = (member) => {
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <Banner />
      <Form onSave={member => teamMember(member)}/>
    </div>
  );
}

export default App;
