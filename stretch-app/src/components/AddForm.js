import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { addUser } from "../actions";

const AddForm = props => {
  const { addUser } = props;
  const history = useHistory();

  const initialFormState = { name: "", bio: "" };
  const [user, setUser] = useState(initialFormState);

  // handle changes
  const handleChange = e => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  // submit handler
  const handleSubmit = e => {
    e.preventDefault();
    addUser(user);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input type="text" name="bio" value={user.bio} onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default connect(null, { addUser })(AddForm);
