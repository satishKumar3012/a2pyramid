// src/pages/GamifiedClassroom/index.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Subject schedule
const subjectSchedule = {
  1: 'English',
  2: 'Math',
  3: 'Science',
  4: 'SST',
  5: 'GK',
  6: 'Computer',
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: #f5f5fa;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
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
`;

const GamifiedClassroom = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [todaySubject, setTodaySubject] = useState('');
  const [isWithinQuizTime, setIsWithinQuizTime] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const day = new Date().getDay(); // Sunday = 0
    if (day >= 1 && day <= 6) {
      setTodaySubject(subjectSchedule[day]);
    }

    const now = new Date();
    const quizStart = new Date();
    quizStart.setHours(18, 0, 0, 0); // 6:00 PM today

    const quizEnd = new Date();
    if (now.getHours() < 18) {
      // Before 6pm, quiz is from yesterday
      quizStart.setDate(quizStart.getDate() - 1);
    }
    quizEnd.setDate(quizStart.getDate() + 1);
    quizEnd.setHours(18, 0, 0, 0);

    setIsWithinQuizTime(now >= quizStart && now < quizEnd);
  }, []);

  const handleStartQuiz = () => {
    if (!selectedClass || !todaySubject) return;
    navigate('/play', {
      state: {
        class: selectedClass,
        subject: todaySubject,
      },
    });
  };

  return (
    <Wrapper>
      <Title>🎮 Gamified Classroom</Title>

      <Select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="">Select Your Class</option>
        {[6, 7, 8, 9, 10].map(cls => (
          <option key={cls} value={cls}>{`Class ${cls}`}</option>
        ))}
      </Select>

      {todaySubject && (
        <p>
          <strong>Today’s Quiz Subject:</strong> {todaySubject}
        </p>
      )}

      {isWithinQuizTime ? (
        <Button onClick={handleStartQuiz} disabled={!selectedClass}>
          Start Quiz
        </Button>
      ) : (
        <p>⏳ Quiz will be available from 6:00 PM to 6:00 PM next day</p>
      )}
    </Wrapper>
  );
};

export default GamifiedClassroom;
