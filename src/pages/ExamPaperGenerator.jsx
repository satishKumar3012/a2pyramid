import React, { useState } from 'react';
import styled from 'styled-components';
import { generateExamPaper } from '../services/api';

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1 1 200px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 150px;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
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
  white-space: nowrap;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const PaperSection = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1.5rem;
  }

  ol {
    padding-left: 1.2rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`;

const GeneratedPaper = styled.div`
  margin-top: 2rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ExamGenerator = () => {
  const [classNum, setClassNum] = useState('');
  const [subject, setSubject] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [examPaper, setExamPaper] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGenerateExam = async () => {
    try {
      const response = await generateExamPaper(classNum, subject, totalQuestions);

      if (response && Array.isArray(response)) {
        setExamPaper(response);
        setErrorMsg('');
      } else {
        setExamPaper([]);
        setErrorMsg('No exam paper generated.');
      }
    } catch (error) {
      console.error("Error:", error);
      setExamPaper([]);
      setErrorMsg('Error generating exam paper.');
    }
  };

  const handleDownload = () => {
    const textContent = examPaper.map(section => {
      const questions = section.questions
        .split('\n')
        .filter(line => line.trim() !== '')
        .map((q, idx) => `${idx + 1}. ${q.replace(/^\d+\.\s*/, '')}`)
        .join('\n');
      return `${section.difficulty} Questions:\n${questions}`;
    }).join('\n\n');

    const blob = new Blob([textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `Class${classNum}_${subject}_ExamPaper.txt`;
    link.click();
  };

  return (
    <Container>
      <Title>📝 Generate Exam Paper</Title>

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
          type="number"
          placeholder="Total Questions"
          value={totalQuestions}
          onChange={(e) => setTotalQuestions(e.target.value)}
        />
      </InputGroup>

      <ButtonGroup>
        <Button onClick={handleGenerateExam}>Generate</Button>
        {examPaper.length > 0 && (
          <Button onClick={handleDownload}>Download as .txt</Button>
        )}
      </ButtonGroup>

      <div>
        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        {examPaper.length > 0 && (
          <GeneratedPaper>
            <h3>Generated Exam Paper:</h3>
            {examPaper.map((section, idx) => (
              <PaperSection key={idx}>
                <h4>{section.difficulty} Questions:</h4>
                <ol>
                  {section.questions
                    .split('\n')
                    .filter(line => line.trim() !== '')
                    .map((question, i) => (
                      <li key={i}>{question.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                </ol>
              </PaperSection>
            ))}
          </GeneratedPaper>
        )}
      </div>
    </Container>
  );
};

export default ExamGenerator;
