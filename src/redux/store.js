import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';


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