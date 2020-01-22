import React from "react";

const Todo = ({ todo, dispatch }) => {
  //grab present day
  const presentDate = new Date();
  const presentTime = presentDate.getTime();

  //convert todo.due to time
  const newDate = new Date(todo.due);
  const todoDue = newDate.getTime();

  //function to dispatch toggle completed action
  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };
  return (
    <div
      className={todo.completed ? "ind-todo true" : "ind-todo"}
      onClick={() => toggleCompleted(todo.id)}
    >
      <h2 className={todo.completed.toString()}>{todo.item}</h2>
      {presentTime > todoDue ? (
        <h2 className="due">Task overdue</h2>
      ) : (
        <h2 classname="on-time">{todo.due}</h2>
      )}
    </div>
  );
};

export default Todo;
