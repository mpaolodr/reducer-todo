import React, { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState({
    item: "",
    id: null,
    completed: false,
    due: ""
  });

  //handle changes in input field
  const handleChanges = e => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        ...newTodo,
        id: `1${Math.floor(Math.random() * 20)}${Math.floor(
          Math.random() * 20
        )}20`
      }
    });

    setNewTodo({ item: "", id: null, completed: false, due: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        required
        value={newTodo.item}
        onChange={handleChanges}
      />
      <input
        type="date"
        name="due"
        required
        value={newTodo.due}
        onChange={handleChanges}
      />
      <button type="submit" className="submitBtn">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
