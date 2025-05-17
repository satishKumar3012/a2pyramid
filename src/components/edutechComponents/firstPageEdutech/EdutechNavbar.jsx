import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";

// Styled Components
const NavbarContainer = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavbarWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: #1f2937;

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #374151;
  font-weight: 500;

  &:hover {
    color: #2563EB;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  padding-right: 3rem;
  border: 1px solid #D1D5DB;
  border-radius: 9999px;
  background-color: #F9FAFB;
  width: 16rem;

  &:focus {
    outline: none;
    border-color: #2563EB;
    box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #2563EB;
  cursor: pointer;
`;

const MobileMenuIcon = styled.div`
  display: block;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: #374151;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  a {
    text-decoration: none;
    color: #374151;
    font-weight: 500;

    &:hover {
      color: #2563EB;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

// Main Component
const EdutechNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo href="/edutech">
          <img src="/img/logo2.png" alt="Logo" />
          Pyramid
        </Logo>

        <NavLinks>
          <NavLink href="/edutech">Home</NavLink>
          <NavLink href="/edutech/about">About</NavLink>
          <NavLink href="/edutech/contact">Contact</NavLink>

          <SearchContainer>
            <SearchInput type="text" placeholder="Search" />
            <SearchButton>
              <FaSearch />
            </SearchButton>
          </SearchContainer>
        </NavLinks>

        <MobileMenuIcon onClick={toggleMobileMenu}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
      </NavbarWrapper>

      <MobileMenu open={mobileOpen}>
        <NavLink href="/edutech" onClick={closeMobileMenu}>Home</NavLink>
        <NavLink href="/edutech/about" onClick={closeMobileMenu}>About</NavLink>
        <NavLink href="/edutech/contact" onClick={closeMobileMenu}>Contact</NavLink>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default EdutechNavbar;
