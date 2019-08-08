import React, { useState } from "react";
import Display from "./Display";

export default function Dashboard(){
    const[ball ,setballs] = useState(0);
    const[strike ,setStrike] =useState(0); 
    
    const ballsIncrese = () => {
       if(ball < 4){
           setballs(0)
       }
    } 

    const strikeIncrease = () => {
      if(strike < 3){
          setStrike(0)
      }
    } 

    const foulIncrease = () => {
      
    }

    return(
        <div>
            <button onClick={() => strikeIncrease()}>Strike</button>
            <button onclick = {() => ballsIncrese()}>Ball</button> 
            <button onClick = {() => foulIncrease()}>Foul</button>
            <Display ball = {ball} strike = {strike}/>
        </div>
    )
}
