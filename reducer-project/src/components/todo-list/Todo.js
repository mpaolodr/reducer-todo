import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="ind-todo">
      <h2>{todo.item}</h2>
    </div>
  );
};

export default Todo;
