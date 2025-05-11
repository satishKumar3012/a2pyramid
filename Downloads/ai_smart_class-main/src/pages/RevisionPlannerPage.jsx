import React, { useState } from 'react';
import styled from 'styled-components';
import { generateRevisionNotes } from '../services/api';

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
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  flex: 1 1 250px;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
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
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const NotesSection = styled.div`
  margin-top: 2rem;
`;

const NotesTitle = styled.h3`
  font-size: 1.4rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const NotesBox = styled.pre`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  white-space: pre-wrap;
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Courier New', Courier, monospace;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const DownloadButton = styled(Button)`
  background-color: #28a745;
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

const RevisionPlannerPage = () => {
  const [classNum, setClassNum] = useState('');
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState('');
  const [revisionNotes, setRevisionNotes] = useState([]);

  const handleGenerateRevision = async () => {
    try {
      const notes = await generateRevisionNotes(classNum, subject, topics.split(','));
      setRevisionNotes(notes);
    } catch (error) {
      setRevisionNotes(['❌ Error generating revision notes. Please try again.'],error);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([revisionNotes.join('\n\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `Class${classNum}_${subject}_RevisionNotes.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Title>Generate Revision Planner</Title>

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

      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleGenerateRevision}>Generate</Button>
      </div>

      {revisionNotes.length > 0 && (
        <NotesSection>
          <NotesTitle>Revision Notes:</NotesTitle>
          <NotesBox>{revisionNotes.join('\n\n')}</NotesBox>
          <div style={{ textAlign: 'center' }}>
            <DownloadButton onClick={handleDownload}>Download as .txt</DownloadButton>
          </div>
        </NotesSection>
      )}
    </Container>
  );
};

export default RevisionPlannerPage;
