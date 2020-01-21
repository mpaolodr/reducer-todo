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
          return { ...state, todos: [...state.todos] };
        }
      } else {
        alert("please input  something");
      }
    default:
      return state;
  }
};

// if (names.indexOf(action.payload.item.toLowerCase()) === -1) {
//     return [...state.todos, action.payload];
//   } else {
//     return [...state.todos];
//   }
// }
