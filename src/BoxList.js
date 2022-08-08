import React, {useState} from "react";
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import {v4 as uuid} from 'uuid'

const BoxList = () => {
    const [boxes, setBoxes] = useState([{id: uuid(), backgroundColor: 'pink', width:'50px', height: '50px'}, {id: uuid(), backgroundColor: 'green', width:'50px', height: '50px'}, {id: uuid(), backgroundColor: 'blue', width:'50px', height: '50px'}])
    const addBox = (newBox) => {
        setBoxes(boxes => ([...boxes, {...newBox, id:uuid()}]))
    }
    const removeBox = (box) => {
        setBoxes(boxes.filter(b => b.id !== box))
    }

    const handleRemove = (evt) => {
        evt.preventDefault();
        console.log(evt);

    }
    return (
        <div>
            <h1>Box List!</h1>
            <ul>
            {boxes.map(({id, backgroundColor, width, height}) => 
            <li key={id}>
                
                <Box 
                    id={id} 
                    backgroundColor={backgroundColor} 
                    width={width} 
                    height={height}
                    remove={removeBox}
                    />
            </li>)}
            </ul>
            <NewBoxForm addBox={addBox}/>
        </div>
    )
}

export default BoxList;