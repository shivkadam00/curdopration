export const addContact = (contact) => {
    return {
      type: 'ADD_CONTACT',
      payload: contact,
    };
  };
  
  export const deleteContact = (id) => {
    return {
      type: 'DELETE_CONTACT',
      payload: id,
    };
  };
  
  export const editContact = (contact) => {
    return {
      type: 'EDIT_CONTACT',
      payload: contact,
    };
  };
  
  export const toggleChecked = (id, checked) => {
    return {
      type: 'TOGGLE_CHECKED',
      payload: { id, checked },
    };
  };
  