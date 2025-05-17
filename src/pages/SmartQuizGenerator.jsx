import React, { useState } from 'react';
import styled from 'styled-components';
import { generateQuiz } from '../services/api';

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1 1 200px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 150px;

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

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const QuizSection = styled.div`
  margin-top: 2rem;
`;

const QuizTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #007bff;
  display: inline-block;
`;

const QuizCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem; 
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
`;

const SmartQuizGenerator = () => {
  const [classNum, setClassNum] = useState('');
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState('');
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateQuiz = async () => {
    setLoading(true);
    try {
      const quizzes = await generateQuiz(classNum, subject, topics.split(','));
      setQuizData(quizzes);
    } catch (error) {
      setQuizData(['❌ Error generating quiz. Please try again.'],error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>🎯 Smart Quiz Generator</Title>

      <InputGroup>
        <Input
          type="number"
          placeholder="Class Number"
          value={classNum}
          onChange={(e) => setClassNum(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Topics (comma separated)"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
        />
      </InputGroup>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Button onClick={handleGenerateQuiz} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Quiz'}
        </Button>
      </div>

      <QuizSection>
        {quizData.length > 0 && <QuizTitle>Generated Quiz:</QuizTitle>}
        {quizData.map((quiz, idx) => (
          <QuizCard key={idx}>
            {quiz}
          </QuizCard>
        ))}
      </QuizSection>
    </Container>
  );
};

export default SmartQuizGenerator;
