import React, { useState } from "react";
import Display from "./Display";
import { Select } from "semantic-ui-react";

const activities = [
  { key: "st", value: "st", text: "Strike" },
  { key: "ba", value: "ba", text: "Ball" },
  { key: "hi", value: "hi", text: "Hit" },
  { key: "fo", value: "fo", text: "Foul" }
];

export default function Dashboard({intitialActivity = "", initialStrikes = 0, initialBalls = 0}) {
  const [state, setState] = useState({ balls: initialBalls, strikes: initialStrikes, activity:intitialActivity });

  function updateStats() {
    switch(state.activity) {
        case "st":
            if(state.strikes === 2) 
                setState({...state,balls: 0, strikes: 0})
            else 
                setState({...state, strikes: state.strikes + 1})
            break;
        case "ba":
            if(state.balls === 3) 
                setState({...state,balls: 0, strikes: 0})
             else 
                setState({...state,balls: state.balls + 1})
            break;
        case "hi":
            setState({...state,balls: 0 , strikes: 0})
            break;
        case "fo":
            if(state.strikes < 2) 
                setState({...state,strikes: state.strikes + 1})
            break;
        default:
            console.log("activity is not selected")
    }
  }
  return (
    <div>
        <Select placeholder="Select Activity" options={activities} onChange={(e, data) => state.activity = data.value } />
        <button onClick={() => updateStats()}> Update Stats</button>
        <Display balls={state.balls} strikes={state.strikes} />
    </div>
  );
}
