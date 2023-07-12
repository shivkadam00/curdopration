import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../actions/contactActions';

const EditForm = ({ contact, setEditing }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
//   const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedContact = {
      id: contact.id,
      name,
    //   email,
      checked: contact.checked, 
    };

    dispatch(editContact(updatedContact));

    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <button type="submit">Update </button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditForm;
