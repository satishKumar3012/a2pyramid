import React, { useState } from 'react';
import { FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 1rem;
  gap: 1rem;
`;

const ContactButton = styled.a`
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &.whatsapp {
    background-color: #25D366;
    &:hover {
      background-color: #1ebc5b;
    }
  }

  &.phone {
    background-color: #2563EB;
    &:hover {
      background-color: #1e4ed8;
    }
  }
`;

const ToggleButton = styled.div`
  background-color: #2563EB;
  padding: 0.75rem;
  border-radius: 9999px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e4ed8;
  }

  svg {
    color: white;
    font-size: 20px;
  }
`;

const EdutechFloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FloatingContainer>
      {isOpen && (
        <IconWrapper>
          <ContactButton
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </ContactButton>
          <ContactButton
            href="tel:+919999999999"
            className="phone"
          >
            <FaPhoneAlt />
          </ContactButton>
        </IconWrapper>
      )}
      <ToggleButton onClick={handleToggle}>
        <FaPhone />
      </ToggleButton>
    </FloatingContainer>
  );
};

export default EdutechFloatingContactButton;
