/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import './Update.css';
import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Update = (props) => {
  const _id = props.match.params.id;
  const history = props.history;

  const [todo, setTodo] = useState({});

  useEffect(() => {
    
    getToDoById();
  }, []);

  const getToDoById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setTodo(result);
  };

  const handleFieldsChange = (event) => {
    const fields = { ...todo };
    fields[event.target.name] = event.target.value;

    setTodo(fields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const todoObjct = { ...todo };

    try {
      const response = await Api.fetchPut(todoObjct, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="updtContent">
      <div className="updtTitle">
        <h1>Task Update box</h1>
      </div>
      <div className="updtBody">
        <form onSubmit={handleSubmit}>
          <div className="form">
          <label htmlFor="floatingInput">Title</label>
            <input
              type="text"
              value={todo.title}
              className="form-control"
              name="title"
              id="floatingInput"
              placeholder="Enter To-Do Title"
              onChange={handleFieldsChange}
            />
          </div>
          <div className="form">
          <label htmlFor="floatingInput">Description</label>
            <textarea
              type="text"
              value={todo.description}
              className="form-control descriptionForm"
              name="description"
              id="floatingInput"
              placeholder="Enter To-Do description"
              onChange={handleFieldsChange}
            />
          </div>
          <div className="selectBox">
            <div className="form">
            <label htmlFor="floatingPriority">Priority</label>
              <select
                value={todo.priority}
                className="form-control"
                name="priority"
                id="floatingPriority"
                onChange={handleFieldsChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="form">
            <label htmlFor="floatingStatus">Status</label>
              <select
                value={todo.status}
                className="form-control"
                name="status"
                id="floatingStatus"
                onChange={handleFieldsChange}
              >
                <option value="To-do">To-do</option>
                <option value="In Progress">In Progress</option>
                <option value="Accomplished">Accomplished</option>
              </select>
            </div>
            <div className="form">
            <label htmlFor="floatingDeadline">Deadline</label>
              <input
                type="date"
                value={todo.deadline}
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                className="form-control"
                name="deadline"
                id="floatingDeadline"
                onChange={handleFieldsChange}
              />
            </div>
          </div>
          <div className="submitBtn">
            <button type="submit" className="btnSubmit">
              Send
            </button>
            <button className="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
