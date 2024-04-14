// listsRedux.js

import { nanoid } from "nanoid";
import { stringContains } from "../utils/stringContains";
import initialState from "./initialState";

// Selectors
export const getFilteredCards = (state, columnId) => {
  const searchTerm = state.searchTerm;
  const cards = state.cards;

  return cards.filter(
    (card) =>
      card.columnId === columnId && stringContains(card.title, searchTerm)
  );
};
export const getFavoriteCards = (state) => {
  return state.cards.filter((card) => card.isFavorite);
};

// Action types
const ADD_CARD = "ADD_CARD";
const TOGGLE_CARD_FAVORITE = "TOGGLE_CARD_FAVORITE";
const REMOVE_CARD = "REMOVE_CARD";

// Action creators
export const addCard = (columnId, title) => {
  return {
    type: ADD_CARD,
    payload: {
      id: nanoid(),
      columnId: columnId,
      title: title,
      isFavorite: false,
    },
  };
};
export const toggleFavoriteCard = (id) => {
  return {
    type: TOGGLE_CARD_FAVORITE,
    payload: { id: id },
  };
};
export const removeCard = (id) => {
  return {
    type: REMOVE_CARD,
    payload: { id: id },
  };
};

// Reducer
const cardsReducer = (cards = initialState.cards, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...cards, action.payload];
    case TOGGLE_CARD_FAVORITE:
      return cards.map((card) =>
        card.id === action.payload.id
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    case REMOVE_CARD:
      return cards.filter((card) => card.id !== action.payload.id);
    default:
      return cards;
  }
};

export default cardsReducer;
