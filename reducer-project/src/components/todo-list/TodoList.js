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
  console.log(state.todos);

  return (
    <div className="todo-list-container">
      <h2>TodoList</h2>
      <AddTodo dispatch={dispatch} />
      {state.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
