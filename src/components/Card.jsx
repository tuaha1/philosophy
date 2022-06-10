import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function Card(props) {
  return (
    <Link style={{ color: "black" }} to={`/${data[props.index].name}`}>
      <div className="card">
        <img src={props.image} />
        <h1>{props.name}</h1>
      </div>
    </Link>
  );
}

export default Card;
