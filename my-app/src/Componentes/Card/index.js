import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ agent, color, onDelete, changeFavourite }) => {

    function onClickChangeFavourite() {
        changeFavourite(agent.id)
    }

    const propsfavourite = {
        size: 28,
        onClick: onClickChangeFavourite
    }

    return (
        
        <div className='card'>

            {/* A delete button in the card */}
            <AiFillCloseCircle 
                className='delete' 
                size={30} 
                onClick={() => onDelete(agent.id)}
            />

            {/* Header card */}
            <div className='header' style={{ backgroundColor: color, backgroundImage: `url(${agent.background})`, backgroundPosition: 'center', backgroundSize: '100%' }}>
                <img src={agent.image} alt={agent.name} />
            </div>
            
            {/* Bottom card */}
            <div className='bottom' style={{ }}>
                <h4 style={{ color: color }}>{agent.name}</h4>
                <p>{agent.description}</p>
                <div className='buttons'>
                    <Link to={`/agents/${agent.id}`} className='btn'>See more</Link>
                    {!agent.favourite
                        ? <AiOutlineHeart className='heart' { ...propsfavourite } />
                        : <AiFillHeart className='heart' { ...propsfavourite } color='#ff0000'/>
                    }
                </div>
                 
            </div>
        </div>
    );
}

export default Card;