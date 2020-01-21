//DATA
import { data } from "../data";

// THIS IS STEP 1

export const initialState = {
  todos: data
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.payload.item !== "") {
        const names = state.todos.map(todo => todo.item.toLowerCase());
        if (names.indexOf(action.payload.item.toLowerCase()) === -1) {
          return { ...state, todos: [...state.todos, action.payload] };
        } else {
          alert("Item already exists");
          return { ...state, todos: [...state.todos] };
        }
      } else {
        alert("please input something");
      }
      break;

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.completed === false;
        })
      };

    default:
      return state;
  }
};
