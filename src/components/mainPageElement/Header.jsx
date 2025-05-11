// src/components/Header.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: #222;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  font-size: 1.5rem;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: linear-gradient(90deg, #00c6ff, #0072ff);
  }
`;

const ProfileWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const ProfileMenu = styled.div`
  position: absolute;
  right: 0;
  top: 2.5rem;
  background: white;
  color: black;
  padding: 0.5rem;
  border-radius: 5px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const ProfilePic = styled.div`
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 50%;
`;

const Header = ({ loggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Brand>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>A2 Pyramid</Link>
      </Brand>

      <NavButtons>
        {loggedIn ? (
          <ProfileWrapper onClick={() => setMenuOpen(!menuOpen)}>
            <ProfilePic />
            <ProfileMenu open={menuOpen}>
              <div>Change Picture</div>
              <div>Settings</div>
              <div>Logout</div>
            </ProfileMenu>
          </ProfileWrapper>
        ) : (
          <>
            <Button to="/register">Register</Button>
            <Button to="/login">Login</Button>
          </>
        )}
      </NavButtons>
    </HeaderWrapper>
  );
};

export default Header;
