import React from "react";
import "./card_style.css";

export const Card = (props) => {
  return (
    <div className="card_style">
      <img
        src={`https://robohash.org/${props.eachItem.id}`}
        alt="monsters"
        width={150}
        height={150}
      />
      <h3>{props.eachItem.name}</h3>
      <h4>{props.eachItem.email}</h4>
    </div>
  );
};
