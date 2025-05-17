import React, { useState } from 'react';
import styled from 'styled-components';
import { askDoubtSolver } from '../services/api';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1c1c1e;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.8rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #2e3a59;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  font-size: 1.1rem;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  resize: vertical;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
   @media (max-width: 480px) {
    width: 90%;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.85rem 2rem;
  font-size: 1.1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease all;
  display: block;
  margin: 0 auto 2rem;
  font-weight: 600;

  &:hover {
    background-color: #256ec1;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const AnswerBox = styled.div`
  background-color: #f0f4f8;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #d6d8db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #2c3e50;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #444;
    white-space: pre-line;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const DoubtSolver = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    try {
      const response = await askDoubtSolver(question);
      setAnswer(response);
    } catch (error) {
      setAnswer('⚠️ Error fetching the answer. Please try again.',error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>🧠 Doubt Solver Assistant</Title>
      <TextArea
        placeholder="Type your doubt here (e.g., Why is the sky blue?)"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        {loading ? 'Processing...' : 'Get Answer'}
      </Button>
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
