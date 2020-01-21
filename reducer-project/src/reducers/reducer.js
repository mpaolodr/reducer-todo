//DATA
import { data } from "../data";

// THIS IS STEP 1

export const initialState = {
  todos: data
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
