// src/pages/GamifiedClassroom/QuizResult.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  background: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Score = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const Message = styled.p`
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const QuizResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation() || {};
  const { score = 0, total = 10 } = state || {};

  const percentage = (score / total) * 100;

  const getMessage = () => {
    if (percentage === 100) return "🎉 Perfect! You're a quiz master!";
    if (percentage >= 80) return "💪 Great job! Keep it up.";
    if (percentage >= 50) return "🙂 Good attempt! Try for a higher score.";
    return "😅 Don’t worry! Come back stronger tomorrow.";
  };

  return (
    <Wrapper>
      <Score>Your Score: {score} / {total}</Score>
      <Message>{getMessage()}</Message>
      <Button onClick={() => navigate('/gamified-classroom')}>
        Go Back to Gamified Classroom
      </Button>
    </Wrapper>
  );
};

export default QuizResult;
