import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: auto;
  color: #1e1e1e;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const Section = styled.section`
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  color: #1a237e;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 2rem;
  color: #283593;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 25px;
  color: #444;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  font-size: 1.1rem;

  strong {
    color: #1a237e;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 14px 32px;
  background-color: #1a73e8;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0f5bd8;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const AboutAISmart = () => {
  return (
    <AboutContainer>
      <Section>
        <Heading>About AI Smart Class</Heading>
        <Paragraph>
          AI Smart Class is a cutting-edge educational platform designed to revolutionize the learning experience through the integration of artificial intelligence. Our mission is to provide personalized, efficient, and engaging educational tools that cater to the unique needs of each student.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Our Mission</SubHeading>
        <Paragraph>
          To empower educators and learners by harnessing the power of AI to create a more adaptive, interactive, and effective educational environment.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Our Vision</SubHeading>
        <Paragraph>
          To be at the forefront of educational innovation, ensuring that every learner has access to tools that support their individual learning journey and foster a lifelong love for learning.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Core Values</SubHeading>
        <List>
          <ListItem><strong>Innovation:</strong> Continuously integrating the latest AI technologies to enhance learning experiences.</ListItem>
          <ListItem><strong>Accessibility:</strong> Ensuring that our tools are available and beneficial to all learners, regardless of their background.</ListItem>
          <ListItem><strong>Personalization:</strong> Adapting educational content to meet the unique needs of each student.</ListItem>
          <ListItem><strong>Collaboration:</strong> Working closely with educators, students, and institutions to refine and improve our offerings.</ListItem>
        </List>
      </Section>

      <Section>
        <SubHeading>What We Offer</SubHeading>
        <List>
          <ListItem><strong>Doubt Solver:</strong> An AI-powered assistant that provides instant answers to student queries, ensuring continuous learning without interruptions.</ListItem>
          <ListItem><strong>Exam Paper Generator:</strong> Tools that help educators create customized exam papers tailored to their curriculum and student needs.</ListItem>
          <ListItem><strong>Smart Quiz Generator:</strong> Dynamic quizzes that adapt to student performance, reinforcing learning and identifying areas for improvement.</ListItem>
          <ListItem><strong>Performance Metrics:</strong> Comprehensive analytics that track student progress, helping educators make informed decisions.</ListItem>
          <ListItem><strong>Gamified Classroom:</strong> Engaging game-based learning modules that make education fun and interactive.</ListItem>
          <ListItem><strong>Mental Health Support:</strong> Resources and tools to support the emotional well-being of students, recognizing the importance of mental health in education.</ListItem>
          <ListItem><strong>Skill Progress Tracking:</strong> Monitoring tools that help students and educators track the development of specific skills over time.</ListItem>
          <ListItem><strong>Attendance Report:</strong> Efficient tracking of student attendance, ensuring accountability and consistency.</ListItem>
          <ListItem><strong>Revision Planner:</strong> Personalized study plans that help students organize their revision schedules effectively.</ListItem>
        </List>
      </Section>

      <Section>
        <SubHeading>Our Team</SubHeading>
        <Paragraph>
          Behind AI Smart Class is a dedicated team of educators, developers, and AI specialists committed to transforming the educational landscape. Our diverse backgrounds and shared passion for learning drive us to create tools that make a real difference in the classroom.
        </Paragraph>
      </Section>

      <CTASection>
        <CTAButton href="#">Join Our Community</CTAButton>
      </CTASection>
    </AboutContainer>
  );
};

export default AboutAISmart;
