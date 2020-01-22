import React, { useReducer } from "react";

//reducer
import { DataReducer, initialState } from "../../reducers/reducer";

//components
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  //function to dispatch clear completed action
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="todo-list">
      <div className="title-container">
        <h2 className="title">TodoList</h2>
        <AddTodo dispatch={dispatch} />
      </div>

      <div className="todo-list-container">
        {state.todos.map(todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>

      <button className="clearBtn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
