import axios from "axios";

// action types
export const FETCH_DATA = "FETCH_DATA";
export const FETCHING = "FETCHING";

// action creator
export const fetchData = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get("http://localhost:8000/api/users")
    .then(res => {
      dispatch({ type: FETCH_DATA, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
