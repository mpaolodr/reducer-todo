import React, { useState } from "react";

//THIS IS STEP 3
const AddTodo = () => {
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

  return (
    <form>
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
