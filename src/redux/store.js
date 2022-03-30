import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  //console.log(action);
  //console.log(state);
  switch (action.type) {
    case 'PAYLOAD':
      console.log(action.newColumn);
      return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid() }] };

    case 'ADD_CARD':
      console.log(action);
      //console.log(state);
      console.log(action.newCard);
      return { ...state, cards: [...state.cards, { ...action.newCard, id: shortid(), }] };

    case 'FILTER_CARD':
      console.log('filter')
      console.log(action.filteredCard.searchValue)
      return {...state, cards: [...state.cards.filter(card => card.title.toLowerCase().includes(action.filteredCard.searchValue.toLowerCase()))] }


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