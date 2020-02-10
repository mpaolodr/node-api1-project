import { FETCHING, FETCH_DATA } from "../actions";

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
    default:
      return state;
  }
};
