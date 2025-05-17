// src/pages/GamifiedClassroom/QuizHome.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

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
  font-size: 1.1rem;
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

const Countdown = styled.p`
  font-size: 1.3rem;
  color: #f39c12;
  margin-top: 1.5rem;
`;

const QuizHome = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { class: selectedClass, subject } = state || {};
  
  const [isQuizAvailable, setIsQuizAvailable] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  
  useEffect(() => {
    if (!selectedClass || !subject) return;

    const quizStart = new Date();
    quizStart.setHours(18, 0, 0, 0); // 6:00 PM today
    const quizEnd = new Date(quizStart);
    quizEnd.setDate(quizStart.getDate() + 1); // Next day's 6:00 PM

    const now = new Date();
    if (now >= quizStart && now < quizEnd) {
      setIsQuizAvailable(true);
      const countdownInterval = setInterval(() => {
        const remainingTime = quizEnd - new Date();
        if (remainingTime <= 0) {
          clearInterval(countdownInterval);
          setIsQuizAvailable(true);
        } else {
          const hours = Math.floor(remainingTime / 1000 / 60 / 60);
          const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);
    } else {
      setIsQuizAvailable(false);
    }

  }, [selectedClass, subject]);

  const handleStartQuiz = () => {
    if (isQuizAvailable) {
      navigate('/play-quiz', {
        state: { class: selectedClass, subject }
      });
    }
  };

  return (
    <Wrapper>
      <Title>Start Your {subject} Quiz</Title>

      <InfoText>
        Class: {selectedClass} <br />
        Subject: {subject}
      </InfoText>

      {isQuizAvailable ? (
        <>
          <Button onClick={handleStartQuiz}>Start Quiz</Button>
        </>
      ) : (
        <>
          <InfoText>⏳ The quiz will be available soon!</InfoText>
          <Countdown>Time left: {timeLeft}</Countdown>
        </>
      )}
    </Wrapper>
  );
};

export default QuizHome;
