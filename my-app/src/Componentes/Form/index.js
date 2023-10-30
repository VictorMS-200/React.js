import Button from '../Button';
import Label from '../Label';
import DropDown from '../DropDown';
import { useState } from 'react'
import './Form.css'

const Formulario = ({ functionAgents, onSave, onSaveFunction }) => {

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [role, setRole] = useState('')
    const [functionName, setFunctionName] = useState('')
    const [functionColor, setFunctionColor] = useState('')

    const onSaveForm = (event) => {
        event.preventDefault();
        onSave({
            name,
            country,
            image,
            role,
            favourite: false,

        })
        setName('')
        setCountry('')
        setImage('')
        setRole('')
    }

    const onSaveFunctionForm = (event) => {
        event.preventDefault()
        onSaveFunction({ name: functionName, color: functionColor})
        setFunctionName('')
        setFunctionColor('')
    }

    return (
        <section className='form-container'>
            <form className='form' onSubmit={onSaveForm}>
                <h2>Register a new agent to the list below</h2>

                <Label 
                    required={true} 
                    label="Name" 
                    placeholder="Type your name"
                    value={name}
                    onChange={value => setName(value)} 
                />

                <Label 
                    required={true} 
                    label="Born Country" 
                    placeholder="Type the country that the agent came from"
                    value={country}
                    onChange={value => setCountry(value)} 
                />

                <Label 
                    required={true} 
                    label="Image url" 
                    placeholder="Type the image url of the agent" 
                    value={image}
                    onChange={value => setImage(value)}
                />
                
                <DropDown 
                    required={true} 
                    label="Role" 
                    options={functionAgents}
                    value={role}
                    onChange={value => setRole(value)} 
                />
                <Button>
                    Enviar
                </Button>
            </form>

            <form className='form' onSubmit={onSaveFunctionForm}>
                <h2>Create a custom function</h2>

                <Label 
                    required
                    label="Function name" 
                    placeholder="Type the name of the function"
                    value={functionName}
                    onChange={value => setFunctionName(value)} 
                />

                <Label 
                    required
                    type="color"
                    label="Function color" 
                    placeholder="Choose the color of the function"
                    value={functionColor}
                    onChange={value => setFunctionColor(value)} 
                />
                <Button>
                    Enviar
                </Button>
            </form>
        </section>
    )
}

export default Formulario;