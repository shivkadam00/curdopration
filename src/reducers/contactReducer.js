const initialState = {
    contacts: localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : [],
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        const newContacts = [...state.contacts, action.payload];
        localStorage.setItem('contacts', JSON.stringify(newContacts));
        return {
          ...state,
          contacts: newContacts,
        };
      case 'DELETE_CONTACT':
        const updatedContacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: updatedContacts,
        };
      case 'EDIT_CONTACT':
        const editedContacts = state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        localStorage.setItem('contacts', JSON.stringify(editedContacts));
        return {
          ...state,
          contacts: editedContacts,
        };
      case 'TOGGLE_CHECKED':
        const updatedCheckedContacts = state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, checked: action.payload.checked }
            : contact
        );
        localStorage.setItem(
          'contacts',
          JSON.stringify(updatedCheckedContacts)
        );
        return {
          ...state,
          contacts: updatedCheckedContacts,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  