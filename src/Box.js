import React from "react";

const Box = ({id, remove, backgroundColor, width, height}) => {
    return (
    <>
    <div id={id} style={{backgroundColor, width, height}}>
    </div>
    <button onClick={() => remove(id)}>X</button>
    </>
    )
}

export default Box;