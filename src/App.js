import React from 'react';
import Form from './components/Form';
import List from './components/List';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="sm">
      <h1>Add Todo</h1>
      <Form />
      <List />
    </Container>
  );
};

export default App;
