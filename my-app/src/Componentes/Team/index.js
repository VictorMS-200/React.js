import Card from '../Card';
import './Team.css'
import hexToRgba from 'hex-to-rgba';


const Team = ({ agents, team, onDelete, changeColor, changeFavourite }) => {

    return (
        // if the array (agents) is empty, the section will not be shown
        (agents.length > 0) &&
        <section 
            className='team' 
            style={{ backgroundColor: hexToRgba(team.color, 0.4), backgroundImage: 'url(/imagens/fundo.png)'}}>
            
            {/* input to change the header card color and the background */}
            <input 
                className='inputColor' 
                type="color"
                value={team.color} 
                onChange={e => changeColor(e.target.value, team.id)}
            />
            
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
                
            {/* A map to show all agents register in the array (agents) */}
            <div className='agent'>
                {agents.map(agent => 
                    <Card 
                        agent={agent} 
                        key={agent.id} 
                        color={team.color}
                        onDelete={onDelete}
                        changeFavourite={changeFavourite}
                    />    
                )}
            </div>

        </section>
    );
}

export default Team;