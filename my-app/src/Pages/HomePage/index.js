import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './HomePage.css';

import Form from '../../Componentes/Form';
import Team from '../../Componentes/Team';
import agentsJson from '../../agents.json';
import functionsJson from '../../functions.json';

function Home() {

  // This is the array of the main functions of the agents
  const [functionAgent, setFunction] = useState(functionsJson)


  // This is the array that will receive the agents registered in the form
  const [agents, setAgents] = useState(agentsJson)


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
      }
      return agent
    }))
  }


  // This function is to register a new function in the array (functionAgent)
  function onSaveFunction(newFunction) {
    setFunction([...functionAgent, { id: new uuidv4(), ...newFunction}])
  }

  
  // Return of the app
  return (
    <div>
      {/* Forms to register a new agents */}
      <Form
        functionAgents={functionAgent.map(functionAgent => functionAgent.name)}
        onSaveFunction={onSaveFunction}
        onSave={contributor => setAgents([...agents, contributor])}
      />
  
      {/* Section to show all agents registered */}
      <section className='teams'>
        <h1 className='h1'>Agents</h1>

        {/* A map to show all agents register in the array (team) */}
        {functionAgent.map(functionAgent => 
          <Team
            key={functionAgent.id}
            agents={agents.filter(agent => agent.role === functionAgent.name)}
            team={functionAgent}
            onDelete={onDelete}
            changeColor={changeColor}
            changeFavourite={changeFavourite}
          />

        )}
      </section>
    </div>
  );
}

export default Home;
