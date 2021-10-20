import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../../api/api";
import './CardList.css';

const CardList = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    const response = await Api.fetchGetAll();
    const data = await response.json();
    setTodo(data);
  }

  return (
    <div className="cardListContainer">
      {todo.map((todo, index) => (
        <Card data={todo} key={index} />
      ))}
    </div>
  );
};

export default CardList;
