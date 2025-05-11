// src/pages/GamifiedClassroom/QuizStats.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  background: #f5f5fa;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const StatsWrapper = styled.div`
  margin: 1.5rem 0;
  font-size: 1.2rem;
  color: #555;
`;

const Stat = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 0.7rem 1.5rem;
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

const QuizStats = () => {
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    averageScore: 0,
    highestScore: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch quiz stats from backend for the student
    // Replace this with the actual API call
    const fetchQuizStats = async () => {
      try {
        // Example: assuming the student ID is in localStorage
        const studentId = localStorage.getItem('studentId');
        const response = await fetch(`/api/stats/${studentId}`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching quiz stats:', error);
      }
    };

    fetchQuizStats();
  }, []);

  const handleBackToDashboard = () => {
    navigate('/student-dashboard');
  };

  return (
    <Wrapper>
      <Title>Your Quiz Stats</Title>

      <StatsWrapper>
        <Stat>Total Quizzes Attempted: {stats.totalQuizzes}</Stat>
        <Stat>Average Score: {stats.averageScore}</Stat>
        <Stat>Highest Score: {stats.highestScore} / 10</Stat>
      </StatsWrapper>

      <Button onClick={handleBackToDashboard}>Back to Dashboard</Button>
    </Wrapper>
  );
};

export default QuizStats;
