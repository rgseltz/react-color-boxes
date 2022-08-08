import React, {useState} from "react";
import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = () => {
    // const [boxes, setBoxes] = useState([<div style={{backgroundColor: 'pink', width:'50px', height: '50px'}}/>, <div style={{backgroundColor: 'pink', width:'50px', height: '50px'}}/>, <div style={{backgroundColor: 'pink', width:'50px', height: '50px'}}/>])
    const [boxes, setBoxes] = useState([{backgroundColor: 'pink', width:'50px', height: '50px'}, {backgroundColor: 'green', width:'50px', height: '50px'}, {backgroundColor: 'blue', width:'50px', height: '50px'}])
    return (
        <div>
            <h1>Box List!</h1>
            <ul>
            {boxes.map(({backgroundColor, width, height}) => <li><Box backgroundColor={backgroundColor} width={width} height={height}/></li>)}
            </ul>
        </div>
    )
}

export default BoxList;