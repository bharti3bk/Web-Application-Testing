import React from "react";

export default function Display(props) {
  return (
    <div className="display">
      <p> {props.balls}</p>
      <p> {props.strikes}</p>
    </div>
  );
}