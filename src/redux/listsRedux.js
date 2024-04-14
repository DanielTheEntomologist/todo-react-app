// listsRedux.js

import initialState from "./initialState";

import { nanoid } from "nanoid";

// Action types
const ADD_LIST = "ADD_LIST";
const REMOVE_LIST = "REMOVE_LIST";

// Action creators
export const addList = (title, subtitle) => ({
  type: ADD_LIST,
  payload: { listId: nanoid(), title, subtitle },
});

// Selectors
export const getAll = (state) => {
  return state.lists;
};

export const getAllIds = (state) => {
  return state.lists.map((list) => list.id);
};

export const getLists = {
  all: getAll,
  allIds: getAllIds,
};

// Reducer
const listsReducer = (lists = initialState.lists, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...lists, action.payload];

    case REMOVE_LIST:
      return lists.filter((list) => list.id !== action.payload);
    default:
      return lists;
  }
};

export default listsReducer;
