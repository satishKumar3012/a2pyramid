// src/pages/EdutechAbout.jsx
import React from 'react';
import styled from 'styled-components';
import EdutechNavbar from '../../components/edutechComponents/homeComponents/EdutechNavbar';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #f8fafc;
  color: #1e293b;
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const SubHeading = styled.h2`
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #2563eb;
`;

const EdutechAbout = () => {
  return (
    <>

    <EdutechNavbar/>
    <AboutSection>
      <Heading>About A2 Pyramid Edutech</Heading>

      <Paragraph>
        <Highlight>A2 Pyramid Edutech</Highlight> is an innovative learning platform committed to reshaping the education landscape with cutting-edge technology. We combine deep expertise in <Highlight>AI/ML</Highlight>, <Highlight>software development</Highlight>, and <Highlight>educational psychology</Highlight> to craft smart solutions that empower students, educators, and institutions.
      </Paragraph>

      <SubHeading>Our Vision</SubHeading>
      <Paragraph>
        To be a global leader in delivering accessible, affordable, and AI-powered education that prepares learners for the future workforce.
      </Paragraph>

      <SubHeading>Our Mission</SubHeading>
      <Paragraph>
        We aim to provide quality education through <Highlight>AI Smart Classrooms</Highlight>, <Highlight>real-time doubt solving</Highlight>, <Highlight>automated exam generation</Highlight>, and <Highlight>skill-based assessments</Highlight>. Our mission is to bridge the gap between knowledge and application for students from <Highlight>Nursery to Class 12</Highlight>.
      </Paragraph>

      <SubHeading>What Makes Us Different?</SubHeading>
      <Paragraph>
        ✅ AI-driven educational tools for personalized learning<br />
        ✅ Industry-level training in Full Stack, AI/ML, and DevOps<br />
        ✅ Gamified quizzes and interactive learning for junior classes<br />
        ✅ Mentorship by real developers and data scientists<br />
        ✅ Trusted by schools, teachers, and students across India
      </Paragraph>
    </AboutSection>
    </>
  );
};

export default EdutechAbout;
