import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const todo = props.data;
  return (
    <Link to={`/info/${todo._id}`} className="cardLink">
      <div className="card">
        <div className="cardBody">
          <h5 className="cardTitle">{todo.title}</h5>
          <div className="cardSpan">
            <span className="cardPrio">{todo.priority}</span>
            <span className="cardStatus">{todo.status}</span>
            <span className="cardDline">{todo.deadline}</span>
          </div>
        </div>
        <h6 className="cardBirth">{todo.birthdate}</h6>
      </div>
    </Link>
  );
};

export default Card;
