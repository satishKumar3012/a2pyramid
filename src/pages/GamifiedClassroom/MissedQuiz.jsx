// src/pages/GamifiedClassroom/MissedQuiz.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components for layout
const Wrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;

const MissedQuiz = () => {
  const navigate = useNavigate();
  const [nextQuizDate, setNextQuizDate] = useState('');

  useEffect(() => {
    // Set the next available quiz time (next day's 6 PM)
    const now = new Date();
    const nextQuiz = new Date(now);
    nextQuiz.setDate(now.getDate() + 1); // Next day
    nextQuiz.setHours(18, 0, 0, 0); // 6 PM

    const formattedDate = nextQuiz.toLocaleString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    setNextQuizDate(formattedDate);
  }, []);

  const handleBackToDashboard = () => {
    navigate('/student-dashboard');
  };

  return (
    <Wrapper>
      <Title>You Missed Today's Quiz!</Title>

      <InfoText>
        Unfortunately, you missed today's quiz. Don't worry, you can try again tomorrow!
      </InfoText>

      <InfoText>
        Your next quiz will be available on: <strong>{nextQuizDate}</strong>
      </InfoText>

      <Button onClick={handleBackToDashboard}>Back to Dashboard</Button>
    </Wrapper>
  );
};

export default MissedQuiz;
