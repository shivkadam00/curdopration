import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <ListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default List;
