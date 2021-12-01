import React from "react";
import "./card_style.css";

export const Card = (props) => {
  return (
    <div className="card_style">
      <img
        alt="monsters"
        src={`https://robohash.org/${props.eachItem.id}?set=set2&size=180x180`}
      ></img>
      <h3>{props.eachItem.name}</h3>
      <h3>{props.eachItem.email}</h3>
    </div>
  );
};
