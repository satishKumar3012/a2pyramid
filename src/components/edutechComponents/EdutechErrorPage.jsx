import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: #ffffff;
  color: #1f2937;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const ErrorImage = styled.img`
  margin-top: 0px;
  width: 80%;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

const ErrorHeading = styled.h1`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #16a34a;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const ErrorText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
  color: #374151;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const HomeButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const EdutechErrorPage = () => {
  return (
    <ErrorWrapper>
      <ErrorImage
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
        alt="error-img"
        
      />
      <ErrorHeading>Page not found</ErrorHeading>
      <ErrorText>The page you are requesting does not exist.</ErrorText>
      <Link to="#/edutech">
        <HomeButton>Go to HomePage</HomeButton>
      </Link>
    </ErrorWrapper>
  );
};

export default EdutechErrorPage;
