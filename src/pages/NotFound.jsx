import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #333;
  background-color: #f7f9fc;

  img {
    width: 320px;
    max-width: 80%;
    margin-bottom: 2rem;
    border-radius: 10px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #ff4d4d;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
  }

  a {
    background-color: #0077cc;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005fa3;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;

    img {
      width: 240px;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    img {
      width: 200px;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }

    a {
      font-size: 1rem;
      padding: 0.5rem 1.2rem;
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404 Not Found"
      />
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <Link to="#/ai-smart-class">← Go Back to Homepage</Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
