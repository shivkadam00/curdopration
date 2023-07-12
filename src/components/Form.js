import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../actions/contactActions';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name,
    //   email,
    };

    dispatch(addContact(newContact));

    setName('');
    // setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <button type="submit">Add </button>
    </form>
  );
};

export default Form;
