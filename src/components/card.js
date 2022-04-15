import React from "react";
import "./../css/card.css";

const card = (props) => {
  const cardClass = `card ${props.id % 2 == 0 ? `reverse` : ""}`;
  return (
    <div className={cardClass}>
      {props.icon}
      <h1>{props.text}</h1>
    </div>
  );
};

export default card;
