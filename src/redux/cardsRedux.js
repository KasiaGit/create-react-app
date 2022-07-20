import shortid from "shortid";
import strContains from "../utills/strContains";
//selectors
export const getCardsById = ({ cards }, id) => cards.find(card => card.id === id);

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite === true)

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

//action
const create_ADD_CARD = actionName => `app/cards/${actionName}`;
const ADD_CARD = create_ADD_CARD('ADD_CARD');

const create_TOGGLE_CARD_FAVORITE = actionName => `app/cards/${actionName}`;
const TOGGLE_CARD_FAVORITE = create_TOGGLE_CARD_FAVORITE('TOGGLE_CARD_FAVORITE');

const create_REMOVE_CARD = actionName => `app/cards/${actionName}`;
const REMOVE_CARD = create_REMOVE_CARD('REMOVE_CARD');
//actions creator
export const addCard = payload => ({ type: ADD_CARD, payload});

export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload})

export const removeCard = payload => ({ type: REMOVE_CARD, payload});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card);
      case REMOVE_CARD:
        return statePart.filter(card => (card.id !== action.payload.id))
      default:
        return statePart;
    }
  }

  export default cardsReducer;