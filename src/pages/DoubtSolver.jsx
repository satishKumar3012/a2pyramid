import React, { useState } from 'react';
import styled from 'styled-components';
import { askDoubtSolver } from '../services/api';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 70px;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto 2rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const AnswerBox = styled.div`
  background-color: #f8f9fa;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;

  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const DoubtSolver = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await askDoubtSolver(question);
      setAnswer(response);
    } catch (error) {
      setAnswer("Error getting answer.",error);
    }
  };

  return (
    <Container>
      <Title>Doubt Solver Assistant</Title>
      <TextArea
        placeholder="Ask your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button onClick={handleSubmit}>Ask</Button>
      {answer && (
        <AnswerBox>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </AnswerBox>
      )}
    </Container>
  );
};

export default DoubtSolver;
