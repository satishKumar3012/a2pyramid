// src/components/SectionCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex: 1;
  padding: 2rem;
  border: 2px solid #ffffff33;
  border-radius: 16px;
  cursor: pointer;
  min-width: 280px;
  max-width: 350px;
  background-color: #ffffff10;
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right,blue,skyblue);
    color: #fff;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: inherit;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.3rem;
  color: inherit;
`;

const SectionCard = ({ title, description, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default SectionCard;
