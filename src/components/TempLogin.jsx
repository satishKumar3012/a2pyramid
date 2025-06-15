import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 1.5rem auto;
  max-width: 100%;
  height: auto;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #2c5364;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: #2c5364;
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.85rem;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #2c5364;
  color: white;
  padding: 0.85rem 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #203a43;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.85rem;
    font-size: 0.9rem;
  }
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const TempLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Ady@a2pyramid' && password === 'water@a2py') {
      setError('');
      console.log('Login successful');
      const token = Cookies.get('token_cookie');
      console.log('Token from cookies:', token);
      navigate('/ai-smart-class');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <LoginWrapper>
      <FormContainer>
        <Logo src="/ai-smart-class-logo.PNG" alt="AI Smart Class Logo" />
        <Title>Ai-Smart-Class Login</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form><br/>
       {/* <p style={{ textAlign: "center", fontSize: "1rem" }}>
  New here?{" "}
  <a
    href="/ai-smart-register"
    style={{
      display: "inline-block",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#007BFF",
      borderRadius: "5px",
      transition: "background-color 0.3s",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#339DFF")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
  >
    Register
  </a>
</p> */}

        
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </FormContainer>
    </LoginWrapper>
  );
};

export default TempLogin;