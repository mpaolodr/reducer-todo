import React from "react";

const Todo = ({ todo, dispatch }) => {
  //THIS IS STEP 4
  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };
  return (
    <div className="ind-todo">
      <h2
        className={todo.completed.toString()}
        onClick={() => toggleCompleted(todo.id)}
      >
        {todo.item}
      </h2>
    </div>
  );
};

export default Todo;
