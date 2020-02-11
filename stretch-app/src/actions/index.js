import axios from "axios";

// action types
export const FETCH_DATA = "FETCH_DATA";
export const FETCHING = "FETCHING";
export const ADD_USER = "ADD_USER";
export const DEL_USER = "DEL_USER";
export const EDIT_USER = "EDIT_USER";

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

// ADD USER
export const addUser = userObj => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .post("http://localhost:8000/api/users", userObj)
    .then(res => {
      dispatch({ type: ADD_USER, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// DELETE USER
export const deleteUser = id => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .delete(`http://localhost:8000/api/users/${id}`)
    .then(res => {
      axios
        .get("http://localhost:8000/api/users")
        .then(res => dispatch({ type: DEL_USER, payload: res.data }))
        .catch(err => console.log(err));
    })
    .catch();
};

// EDIT USER
export const editUser = userObj => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .put(`http://localhost:8000/api/users/${userObj.id}`, userObj)
    .then(res => dispatch({ type: EDIT_USER, payload: res.data }))
    .catch(err => console.log(err));
};
