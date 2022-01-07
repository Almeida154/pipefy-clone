import React from 'react';
import { Container, Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer migração completa de servidor</p>
      <img src={require('../../assets/img/mdchefe.png')} alt="" />
    </Container>
  );
}

export default Card;
