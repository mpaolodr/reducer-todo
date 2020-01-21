//DATA
import { data } from "../data";

export const initialState = {
  todos: data
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
