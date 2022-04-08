import createActionName from "../utils/createActionName";

// actions
const FILTER_CARD = createActionName('searchValue', 'FILTER_CARD');

// action creators
export const filterCard = payload => ({ type: FILTER_CARD, payload });
const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case FILTER_CARD:
      return action.payload.searchValue
    default:
      return statePart;
  }
}

export default searchStringReducer; 