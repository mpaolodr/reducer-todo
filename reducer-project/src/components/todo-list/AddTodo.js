import React, { useState } from "react";

//THIS IS STEP 3
const AddTodo = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState({
    item: "",
    id: null,
    completed: false
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

    setNewTodo({ item: "", id: null, completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        value={newTodo.item}
        onChange={handleChanges}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
