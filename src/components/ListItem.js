import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, toggleChecked } from '../actions/contactActions';
import EditForm from './EditForm';

const ListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    dispatch(toggleChecked(contact.id, checked));
  };

  return (
    <li>
      {editing ? (
        <EditForm contact={contact} setEditing={setEditing} />
      ) : (
        <>
          <input
            type="checkbox"
            checked={contact.checked}
            onChange={handleCheckboxChange}
          />
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ListItem;
