import {
  FETCHING,
  FETCH_DATA,
  ADD_USER,
  DEL_USER,
  EDIT_USER
} from "../actions";

const initialState = {
  isFetching: false,
  data: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };

    case ADD_USER:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };

    case DEL_USER:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };

    case EDIT_USER:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
