import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const contactsFromLocalStorage = localStorage.getItem('contacts');
if (contactsFromLocalStorage) {
  const parsedContacts = JSON.parse(contactsFromLocalStorage);
  store.dispatch({ type: 'LOAD_CONTACTS', payload: parsedContacts });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
