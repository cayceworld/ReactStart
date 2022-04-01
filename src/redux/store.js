import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import containsContent from '../utils/strContains';


export const getFilteredCards = ({ cards, searchValue }, columnId) => cards
  .filter(card => card.columnId === columnId && containsContent(card.title, searchValue));
export  const getAllColumns = state => state.columns; 
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const filterCard = payload => ({type: 'FILTER_CARD', payload});

  console.log(getAllColumns);

const reducer = (state, action) => {
  //console.log(action);
  //console.log(state);
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };

    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid(), }] };

    case 'FILTER_CARD':
      return { ...state, searchValue: action.payload.searchValue }

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