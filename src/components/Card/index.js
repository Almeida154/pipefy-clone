import React from 'react';
import { Container, Label } from './styles';

function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map((label, index) => (
          <Label key={index} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}

export default Card;
