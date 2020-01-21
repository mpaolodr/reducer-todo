import React, { useReducer } from "react";

// THIS IS STEP 2
//import reducer
import { DataReducer, initialState } from "../../reducers/reducer";

//components
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoList = () => {
  // still step 2
  const [state, dispatch] = useReducer(DataReducer, initialState);

  return (
    <div className="todo-list-container">
      <h2>TodoList</h2>
      <AddTodo />
      {state.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
