// src/pages/GamifiedClassroom/QuizPlay.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fefefe;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const QuestionBox = styled.div`
  margin-bottom: 2rem;
`;

const OptionButton = styled.button`
  display: block;
  margin: 0.5rem 0;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  width: 100%;
  text-align: left;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  background: ${props => props.selected ? '#007bff' : '#fff'};
  color: ${props => props.selected ? '#fff' : '#333'};

  &:hover {
    background: #e9f0ff;
  }
`;

const Timer = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const QuizPlay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location || {};
  const { class: userClass, subject } = state || {};

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  // Dummy questions (replace with API or DB later)
  const dummyQuestions = Array.from({ length: 10 }, (_, i) => ({
    question: `Sample Q${i + 1} for ${subject} Class ${userClass}?`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  }));

  // Load questions on mount
  useEffect(() => {
    if (!userClass || !subject) {
      navigate('/gamified-classroom');
    } else {
      setQuestions(dummyQuestions);
    }
  }, []);

  // Timer
  useEffect(() => {
    if (index >= questions.length) return;

    if (timeLeft === 0) {
      handleNext(); // auto move
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    const correct = questions[index].answer;
    if (selectedOption === correct) {
      setScore(prev => prev + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      navigate('/gamified-classroom-result', {
        state: {
          total: questions.length,
          score,
        },
      });
    }
  };

  if (index >= questions.length) return null;

  return (
    <Wrapper>
      <Timer>⏳ Time Left: {timeLeft}s</Timer>

      <QuestionBox>
        <h2>
          Q{index + 1}: {questions[index].question}
        </h2>
        {questions[index].options.map((opt, idx) => (
          <OptionButton
            key={idx}
            onClick={() => handleOptionSelect(opt)}
            selected={selectedOption === opt}
          >
            {opt}
          </OptionButton>
        ))}
      </QuestionBox>

      <button
        onClick={handleNext}
        disabled={!selectedOption}
        style={{ padding: '0.6rem 1.5rem', borderRadius: '6px' }}
      >
        {index === questions.length - 1 ? 'Finish Quiz' : 'Next'}
      </button>
    </Wrapper>
  );
};

export default QuizPlay;
