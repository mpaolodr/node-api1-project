import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { editUser } from "../actions";

const EditForm = props => {
  const { user, editUser } = props;
  const history = useHistory();

  const [editing, setEditing] = useState({
    name: user.name,
    bio: user.bio,
    id: user.id
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setEditing({
      ...editing,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editUser(editing);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={editing.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="bio"
        value={editing.bio}
        onChange={handleChange}
      />
      <button type="submit">Edit User</button>
    </form>
  );
};

export default connect(null, { editUser })(EditForm);
