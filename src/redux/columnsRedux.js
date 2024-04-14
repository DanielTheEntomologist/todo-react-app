// listsRedux.js

import { nanoid } from "nanoid";
import initialState from "./initialState";

// selectors
export const getListColumns = (state, listId) => {
  const columns = state.columns;
  return columns.filter((column) => column.listId === listId);
};
export const getAllColumns = (state) => {
  return state.columns;
};

// Action types
const ADD_COLUMN = "ADD_COLUMN";

// Action creators
export const addColumn = (listId, title, icon) => {
  return {
    type: ADD_COLUMN,
    payload: { listId: listId, id: nanoid(), title: title, icon: icon },
  };
};

// Reducer
const columnsReducer = (columns = initialState.columns, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...columns, action.payload];
    default:
      return columns;
  }
};

export default columnsReducer;
