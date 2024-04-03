import { createStore } from "redux";
import initialState from "./initialState";

import { stringContains } from "../utils/stringContains";

import { nanoid } from "nanoid";

//selectors
export const getFilteredCards = (state, columnId) => {
  const searchTerm = state.searchTerm;
  const cards = state.cards;

  return cards.filter(
    (card) =>
      card.columnId === columnId && stringContains(card.title, searchTerm)
  );
};
export const getAllColumns = (state) => {
  return state.columns;
};

//action creators
export const addColumn = (title, icon) => {
  return {
    type: "ADD_COLUMN",
    payload: { id: nanoid(), title: title, icon: icon },
  };
};
export const addCard = (columnId, title) => {
  return {
    type: "ADD_CARD",
    payload: { id: nanoid(), columnId: columnId, title: title },
  };
};
export const changeSearchTerm = (term) => {
  return {
    type: "CHANGE_SEARCH_TERM",
    payload: { term: term },
  };
};

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return { ...state, columns: [...state.columns, action.payload] };
    case "ADD_CARD":
      return { ...state, cards: [...state.cards, action.payload] };
    case "CHANGE_SEARCH_TERM":
      return { ...state, searchTerm: action.payload.term };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
