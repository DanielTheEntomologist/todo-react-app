// listsRedux.js

import initialState from "./initialState";

// Action types
const ADD_LIST = "ADD_LIST";
const REMOVE_LIST = "REMOVE_LIST";

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
