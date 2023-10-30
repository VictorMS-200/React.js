import { useEffect, useState } from 'react';
import Banner from './Componentes/Banner';
import Form from './Componentes/Form';
import Team from './Componentes/Team';
import Footer from './Componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // This is the array of the main functions of the agents
  const [functionAgent, setFunction] = useState([
    {
      id: uuidv4(),
      name: 'Duelista',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Sentinela',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Controlador',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'Iniciador',
      color: '#D86EBF'
    }
  ])

  // This is the array that will receive the agents registered in the form
  const [agents, setAgents] = useState([])



  // This function is to change the color of the header card and the background 
  function changeColor(color, id) {
    setFunction(functionAgent.map(agent => {
      if (agent.id === id) {
        agent.color = color
      }
      return agent
    }))
  }

  // This function is to delete an agent from the array (agents)
  function onDelete(id) {
    setAgents(agents.filter(agent => agent.id !== id))
  }

  // This function is to change the favourite status of an agent
  function changeFavourite(id) {
    setAgents(agents.map(agent => {
      if (agent.id === id) {
        agent.favourite = !agent.favourite
        console.log(agent.favourite)
      }
      return agent
    }))
  }

  // This function is to register a new function in the array (functionAgent)
  function onSaveFunction(newFunction) {
    setFunction([...functionAgent, { id: uuidv4(), ...newFunction}])
  }


  return (
    <div className="App">
      <Banner />

      {/* Forms to register a new agents */}
      <Form
        functionAgents={functionAgent.map(functionAgent => functionAgent.name)}
        onSaveFunction={onSaveFunction}
        onSave={contributor => setAgents([...agents, contributor])}
      />
  
      {/* Section to show all agents registered */}
      <section className='teams'>
        <h1>Agents</h1>

        {/* A map to show all agents register in the array (team) */}
        {functionAgent.map(functionAgent => 
          <Team
            key={functionAgent.name}
            agents={agents.filter(agent => agent.cargo === functionAgent.name)}
            team={functionAgent}
            onDelete={onDelete}
            changeColor={changeColor}
            changeFavourite={changeFavourite}
          />

        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;
