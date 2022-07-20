import shortid from "shortid";
import { useSelector } from "react-redux";
//selector

export const AllColumn = () => {
  const getAllColumns = useSelector( state => state.columns )
  return(getAllColumns);
};

export const getColumnsByList = ({ columns }, id) => columns.filter(column => column.listId === id)

//action 
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN')

//actions creator
export const addColumn = payload => ({ type: ADD_COLUMN, payload });


const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }

  export default columnsReducer;