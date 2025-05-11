import React from 'react';
import styled from 'styled-components';
import EdutechNavbar from '../../components/edutechComponents/homeComponents/EdutechNavbar';

const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background-color: #f9f9fc;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 15px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 12px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 14px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  margin-top: 40px;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
  font-weight: 500;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const EdutechContact = () => {
  return (
    <>
      <EdutechNavbar />
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Subtitle>Have questions or suggestions? We’d love to hear from you.</Subtitle>

      <Form>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" required />

        <Button type="submit">Send Message</Button>
      </Form>

      <ContactInfo>
        <p>Email: <a href="mailto:studypyramid@gmail.com">studypyramid@gmail.com</a></p>
        <p>Phone: +91 1234567890</p>
        <p>Address: 123 Edutech Lane, Learning City, Country</p>

        <SocialLinks>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </SocialLinks>
      </ContactInfo>
    </ContactWrapper>
    </>
  );
};

export default EdutechContact;
