import shortid from "shortid";
import containsContent from '../utils/strContains';
import createActionName from "../utils/createActionName";

//selectors
export const getFilteredCards = ({ cards, searchValue }, columnId) => cards
  .filter(card => card.columnId === columnId && containsContent(card.title, searchValue));
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true);

//actions
const ADD_CARD = createActionName('cards', 'ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('cards', 'TOGGLE_CARD_FAVORITE');
const DELETE_CARD = createActionName('cards', 'DELETE_CARD');

//action creators
export const toggleFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const addCard = payload => ({ type: ADD_CARD, payload });
export const deleteCard = payload => ({ type: DELETE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card);
    case DELETE_CARD:
      console.log(statePart);
      return statePart.filter(card => (card.id !== action.payload.id))
    default:
      return statePart;
  }
}

export default cardsReducer;
