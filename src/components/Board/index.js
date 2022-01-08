import React from 'react';
import { Container } from './styles';

import List from '../List';
import { loadLists } from '../../services/api';

function Board() {
  return (
    <Container>
      {loadLists().map((list, index) => (
        <List key={index} data={list} />
      ))}
    </Container>
  );
}

export default Board;
