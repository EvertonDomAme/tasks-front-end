import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./CardInfo.css";

const CardInfo = (props) => {
  const _id = props.match.params.id;
  const [todo, setTodo] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getTodoById();
  });

  const getTodoById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setTodo(result);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await Api.fetchDelete(_id);
    const result = await response.json();
    alert(result.message);
    props.history.push("/");
  };

  return (
    <div className="cardInfoContainer">
      <h1 className="cardInfoTxt">Task information</h1>
      <div className="infoContent">
        <div className="infoTxt">
          <h3 className="titleInfo">{todo.title}</h3>
          <h4 className="descriptionInfo">{todo.description}</h4>
        </div>
        <div className="infoSpan">
        <span className="priorityInfo">{todo.priority}</span>
        <span className="statusInfo">{todo.status}</span>
        <span className="deadlineInfo">{todo.deadline}</span>
        </div>
        <h5 className="birthInfo">{todo.birthdate}</h5>
        <label className="checkboxLabel">
          <input className="checkboxInput" type="checkbox" />
          <span className="checkboxSpan">
            <i></i>
          </span>
        </label>
        <div className="editBtn">
          <Link to={`/update/${todo._id}`} className="updtBtn">
            Update
          </Link>
          <button className="updtButton" onClick={onOpenModal}>
            Delete
          </button>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Are you sure?</h2>
        <button className="keepBtn" onClick={onCloseModal}>
          NO
        </button>
        <button className="delBtn" onClick={handleDelete}>
          YES
        </button>
      </Modal>
    </div>
  );
};

export default CardInfo;
