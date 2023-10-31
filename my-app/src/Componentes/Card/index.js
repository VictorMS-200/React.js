import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import './Card.css'

const Card = ({ agent, color, onDelete, changeFavourite }) => {

    function onClickChangeFavourite() {
        changeFavourite(agent.id)
    }

    const propsfavourite = {
        size: 25,
        onClick: onClickChangeFavourite
    }

    return (
        
        <div className='card'>

            {/* A delete button in the card */}
            <AiFillCloseCircle 
                className='delete' 
                size={25} 
                onClick={() => onDelete(agent.id)}
            />

            {/* Header card */}
            <div className='header' style={{ backgroundColor: color }}>
                <img src={agent.image} alt={agent.name} />
            </div>
            
            {/* Bottom card */}
            <div className='bottom'>
                <h4>{agent.name}</h4>
                <h5>{agent.description}</h5>
                {!agent.favourite
                    ? <AiOutlineHeart className='heart' { ...propsfavourite } />
                    : <AiFillHeart className='heart' { ...propsfavourite } color='red'/>
                }
                 
            </div>
        </div>
    );
}

export default Card;