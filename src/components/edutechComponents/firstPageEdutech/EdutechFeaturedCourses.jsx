import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Section = styled.section`
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  padding: 4rem 1rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const HeadingSmall = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const HeadingLarge = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
  line-height: 1.2;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media(min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CourseCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${({ show }) => (show ? fadeInUp : 'none')} 0.6s ease forwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CourseContent = styled.div`
  padding: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const CourseDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #4b5563;
`;

const CourseLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;

const EdutechFeaturedCourses = () => {
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('courses');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setShowCourses(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      name: 'MERN Stack Development',
      description: `Master full-stack web development using MongoDB, Express.js, React.js, and Node.js. 
      Learn front-end & back-end programming, build RESTful APIs, handle authentication, and deploy apps.`,
      image: '/img/webdev.webp',
    },
    {
      name: 'Machine Learning / AI',
      description: `Explore intelligent systems with ML algorithms, deep learning, and real-world dataset applications using tools like Python, TensorFlow, and OpenAI APIs.`,
      image: '/img/AI.webp',
    },
    {
      name: 'Data Analytics',
      description: `Clean, analyze, and visualize data using Excel, SQL, Python, and Tableau. Ideal for beginners wanting to generate insights for businesses.`,
      image: '/img/algo.jpg',
    },
    {
      name: 'Data Science',
      description: `Dive into data wrangling, visualization, and machine learning using Python libraries. Tackle real-world datasets in finance, healthcare, and more.`,
      image: '/img/webdev.webp',
    },
    {
      name: 'DevOps',
      description: `Implement CI/CD pipelines, Docker, Kubernetes, Jenkins, and cloud infrastructure with AWS/Azure to streamline development and deployment.`,
      image: '/img/machine_learning.avif',
    },
    {
      name: 'Quality Assurance (QA)',
      description: `Learn manual and automated testing with tools like Selenium, Postman, and JUnit. Understand bug tracking and real-world test planning.`,
      image: '/img/cloud_comp.webp',
    }
  ];

  return (
    <Section id="courses">
      <Container>
        <HeadingSmall>Dive into expert articles to sharpen your skills.</HeadingSmall>
        <HeadingLarge>Empower Your Learning</HeadingLarge>
        <Grid>
          {courses.map((course, index) => (
            <CourseCard key={index} show={showCourses}>
              <CourseImage src={course.image} alt={course.name} />
              <CourseContent>
                <CourseTitle>{course.name}</CourseTitle>
                <CourseDesc>{course.description}</CourseDesc>
                {/* Optional Course Link */}
                {/* <CourseLink href="#">Explore</CourseLink> */}
              </CourseContent>
            </CourseCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default EdutechFeaturedCourses;
