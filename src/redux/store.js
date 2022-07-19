import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utills/strContains';
import { useSelector } from 'react-redux';

//selectors

export const AllColumn = () => {
  const getAllColumns = useSelector( state => state.columns )
  return(getAllColumns);
};

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload});

export const updateSearch = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});

const reducer = (state, action) => {
  switch(action.type)
    {
    case 'ADD_COLUMN':
        return {...state, columns: [...state.columns, {id:shortid(), ...action.payload }]}
    case 'ADD_CARD':
        return {...state, cards: [...state.cards, {id:shortid(), ...action.payload}]}  
    case 'UPDATE_SEARCHSTRING':
        return {...state, searchString: action.payload}
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