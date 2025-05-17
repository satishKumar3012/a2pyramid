import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { FaChevronDown, FaSearch, FaBars } from "react-icons/fa";

const NavbarContainer = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1120px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #4a4a4a;

  & img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #4a4a4a;
  padding-right: 2.75rem;
  text-decoration: none;

  &:hover {
    color: #3b82f6;
  }
`;

const ExploreDropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ExploreDropdownMenu = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 12rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  font-weight: bold;
  font-size: 0.875rem;
  z-index: 50;
`;

const ExploreLink = styled(Link)`
  padding: 0.5rem;
  display: block;
  color: #374151;
  text-decoration: none;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
  }

  & input {
    padding-left: 2.5rem;
    padding-right: 3.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 20rem;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 9999px;
    outline: none;
  }

  & button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #2563eb;
    }
  }
`;

const UserDropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 1.5rem;
  }
`;

const UserDropdownMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 10rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  z-index: 50;

  & a,
  & button {
    padding: 0.75rem;
    display: block;
    text-align: left;
    color: #374151;
    background-color: white;
    text-decoration: none;
    border: none;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: block;
  font-size: 2rem;
  color: #4a4a4a;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const EdutechNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const exploreDropdownRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/a2/students/get-student",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target)) {
        setShowExploreDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/a2/students/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo to="/">
          <img src="/img/logo2.png" alt="Logo" />
          <div>Pyramid</div>
        </Logo>

        <NavLink to="/about">About</NavLink>

        <div className="flex items-center space-x-6">
          <ExploreDropdownContainer ref={exploreDropdownRef}>
            <div
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              onClick={() => setShowExploreDropdown(!showExploreDropdown)}
            >
              <span>Courses</span>
              <FaChevronDown className="text-sm" />
            </div>

            {showExploreDropdown && (
              <ExploreDropdownMenu>
                <ExploreLink to="/curriculum-ai-ml">AI ML</ExploreLink>
                <ExploreLink to="/curriculum-data-analytics">Data Analytics</ExploreLink>
                <ExploreLink to="/curriculum-data-science">Data Science</ExploreLink>
                <ExploreLink to="/curriculum-mern-stack">Mern Stack</ExploreLink>
                <ExploreLink to="/curriculum-devops">DevOps</ExploreLink>
                <ExploreLink to="/curriculum-qa">QA</ExploreLink>
              </ExploreDropdownMenu>
            )}
          </ExploreDropdownContainer>
        </div>

        <NavLink to="/contact">Contact</NavLink>

        <div className="flex items-center">
          {user ? (
            <UserDropdownContainer ref={dropdownRef}>
              <img
                src={user.avatar || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer mr-6"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <UserDropdownMenu>
                  <Link to="/profile">Your Profile</Link>
                  <button onClick={handleLogout}>Logout</button>
                </UserDropdownMenu>
              )}
            </UserDropdownContainer>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/auth/a2/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link to="/auth/a2/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Sign Up</Link>
            </div>
          )}

          <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
          </MobileMenuIcon>
        </div>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default EdutechNavbar;
