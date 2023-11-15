import { useParams } from 'react-router-dom';
import hexToRgba from 'hex-to-rgba';

import agents from '../../agents';
import color from '../../functions';
import styles from './AgentPage.module.css';

export default function AgentPage() {

    const params = useParams();

    const agent = agents.find(agent => agent.id === params.id);

    const colorAgent = color.find(color => color.name === agent.role);

    return (
        <>
            <div>
                <h1 className={styles.title}>Agent Page</h1>
            </div>
            <div style={{ backgroundColor: hexToRgba(colorAgent.color, 0.3) }} className={styles.cardAgent}>

                <div 
                    className={styles.backgroundImage} 
                    style={{ 
                        backgroundColor: colorAgent.color, 
                        backgroundImage: `url(${agent.background})`
                    }}>

                    <img className={styles.image} src={agent.fullPortrait} alt={agent.name} />
                </div>

                <div className={styles.infomation}>
                    <div>
                        <h1 className={styles.title}>{agent.name}</h1>

                        <a>{agent.description}</a>
                    </div>

                    {agent.abilities.map(ability => (
                        <div className={styles.abilities} key={ability.id}>
                            
                            <div className={styles.titleAbility}>
                                <img  className={styles.imageAbility} src={ability.displayIcon}/>
                                <h3>{ability.displayName}</h3>
                            </div>

                            <ul>{ability.description}</ul>
                        </div>
                    )
                    )}
                </div>

            </div>
        </>
    );
}