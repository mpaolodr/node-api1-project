import React, { useEffect } from "react";
import { connect } from "react-redux";

// actions
import { fetchData } from "../actions";

const Display = props => {
  const { fetchData, data } = props;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="display-container">
      {data.length !== 0 ? (
        data.map(user => {
          return (
            <div className="user-card">
              <h3>{user.name}</h3>
              <h3>{user.bio}</h3>

              <div className="btn-container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.userReducer.data
  };
};

export default connect(mapStateToProps, { fetchData })(Display);
