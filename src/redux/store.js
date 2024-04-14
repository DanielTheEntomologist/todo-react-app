import { createStore, combineReducers } from "redux";
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

export const getListColumns = (state, listId) => {
  const columns = state.columns;
  return columns.filter((column) => column.listId === listId);
};

export const getAllLists = (state) => {
  return state.lists;
};

export const getAllListIds = (state) => {
  return state.lists.map((list) => list.id);
};

export const getFavoriteCards = (state) => {
  return state.cards.filter((card) => card.isFavorite);
};

//action creators
export const addColumn = (listId, title, icon) => {
  return {
    type: "ADD_COLUMN",
    payload: { listId: listId, id: nanoid(), title: title, icon: icon },
  };
};
export const addCard = (columnId, title) => {
  return {
    type: "ADD_CARD",
    payload: {
      id: nanoid(),
      columnId: columnId,
      title: title,
      isFavorite: false,
    },
  };
};
export const changeSearchTerm = (term) => {
  return {
    type: "CHANGE_SEARCH_TERM",
    payload: { term: term },
  };
};
export const addList = (title, description) => {
  return {
    type: "ADD_LIST",
    payload: { id: nanoid(), title: title, description: description },
  };
};
export const toggleFavoriteCard = (id) => {
  return {
    type: "TOGGLE_CARD_FAVORITE",
    payload: { id: id },
  };
};

export const removeCard = (id) => {
  return {
    type: "REMOVE_CARD",
    payload: { id: id },
  };
};

//reducers
const columnsReducer = (columns = initialState.columns, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return [...columns, action.payload];
    default:
      return columns;
  }
};

const listsReducer = (lists = initialState.lists, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [...lists, action.payload];
    default:
      return lists;
  }
};

const cardsReducer = (cards = initialState.cards, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...cards, action.payload];
    case "TOGGLE_CARD_FAVORITE":
      return cards.map((card) =>
        card.id === action.payload.id
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    case "REMOVE_CARD":
      return cards.filter((card) => card.id !== action.payload.id);
    default:
      return cards;
  }
};

const searchTermReducer = (term = initialState.searchTerm, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TERM":
      return action.payload.term;
    default:
      return term;
  }
};

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchTerm: searchTermReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
