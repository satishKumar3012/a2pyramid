import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionHeading = styled.div`
  text-align: center;
  padding: 40px 20px 10px;

  h2:first-child {
    font-size: 1.2rem;
    font-weight: 600;
    color: #666;
    margin-bottom: 10px;
  }

  h2:last-child {
    font-size: 2.5rem;
    font-weight: bold;
    color: #222;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
`;

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  padding: 20px 40px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CourseCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 2px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 12px;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const CourseFee = styled.p`
  font-size: 1.2rem;
  color: #2ECC71;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #1E88E5;
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976D2;
  }
`;
 
// EdutechCourses Component
const EdutechCourses = () => {
  const courseData = [
    {
      title: 'MERN Stack',
      description: 'Master full-stack development with MongoDB, Express, React, and Node.js for dynamic web apps.',
      fee: '20,000/-',
      link: "https://forms.gle/P7sDPc4fsMcr2DJV7",
      target:"_blank",
      image: 'https://wallpapercave.com/wp/wp8903890.jpg',
    },
    {
      title: 'Data Analytics',
      description: 'Unlock data insights using Excel, SQL, and Python for impactful, data-driven decision-making.',
      fee: '20,000/-',
      link: "https://forms.gle/P7sDPc4fsMcr2DJV7",
      target:"_blank",
      image: "https://www.purplescape.com/wp-content/uploads/2022/08/Old-Blog-Banners-Purplescape-85.jpg",
    },
    {
      title: 'Machine Learning',
      description: 'Learn cutting-edge algorithms and models to develop predictive machine learning applications.',
      fee: '45,000/-',
      link: "https://forms.gle/P7sDPc4fsMcr2DJV7",
      target:"_blank",
      image: 'https://thumbs.dreamstime.com/b/machine-deep-learning-algorithms-artificial-intelligence-ai-automation-modern-technology-business-as-concept-134359416.jpg',
    },
    {
      title: 'DevOps',
      description: 'Become proficient in CI/CD, Docker, and Kubernetes to automate deployments and boost efficiency.',
      fee: '35,000/-',
      link: "https://forms.gle/P7sDPc4fsMcr2DJV7",
      target:"_blank",
      image: 'https://t3.ftcdn.net/jpg/05/12/04/52/360_F_512045284_gsbCu75oyqHo59MccBltJe0sJRck1PPa.jpg',
    },
    {
      title: 'QA Engineering',
      description: 'Master software testing, automation, and quality assurance techniques for delivering bug-free applications.',
      fee: '25,000/-',
      link: "https://forms.gle/P7sDPc4fsMcr2DJV7",
      target:"_blank",
      image: 'https://www.shutterstock.com/image-illustration/quality-assurance-software-flow-qa-260nw-2324541683.jpg',
    }
  ];

  return (
    <>
      <SectionHeading>
        <h2>Featured Courses and Professional Certificates</h2>
        <h2>Learn with the Best</h2>
      </SectionHeading>
      <CoursesContainer>
        {courseData.map((course, index) => (
          <CourseCard key={index}>
            <CourseImage src={course.image} alt={course.title} />
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
            <CourseFee>Course Fee: {course.fee}</CourseFee>
            <Link to={course.link} target={course.target} style={{ textDecoration: 'none' }}>
              <Button>Enroll Now</Button>
            </Link>
          </CourseCard>
        ))}
      </CoursesContainer>
    </>
  );
};

export default EdutechCourses;
