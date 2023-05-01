import React, { useState } from 'react'
import { usestate} from "react";

const FunctionalComponent = ({nama}) => {
const[value, setValue] = useState (0);  

const handlePlus = () => {
    setValue(value+1);
}

const handleMinus = () => {
    if(value > 0) {
        setValue(value-1);

    }
}

  return (
    <div>
       <h1> Functional Component</h1>
       <p> ini adalah Functional Component dari React</p>
       <p> Perkenalkan saya {nama}</p>
       <button onClick={handleMinus}> - </button>
       
       <span> {'   '} {value} {'   '}</span>
       <button onClick={handlePlus}> + </button>
    </div>
  )
}

export default FunctionalComponent;
