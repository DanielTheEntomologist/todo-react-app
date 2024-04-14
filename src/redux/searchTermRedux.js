// listsRedux.js

import initialState from "./initialState";

// Selectors
export const getSearchTerm = (state) => {
  return state.searchTerm;
};

// Action types
const CHANGE_SEARCH_TERM = "CHANGE_SEARCH_TERM";

// Action creators
export const changeSearchTerm = (term) => {
  return {
    type: CHANGE_SEARCH_TERM,
    payload: { term: term },
  };
};

// Reducer
const searchTermReducer = (term = initialState.searchTerm, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return action.payload.term;
    default:
      return term;
  }
};

export default searchTermReducer;
