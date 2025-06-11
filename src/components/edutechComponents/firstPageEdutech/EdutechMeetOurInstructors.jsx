import React, { useState, } from 'react';
import styled, { keyframes } from 'styled-components';

const instructors = [
  { name: 'Aditya Apurv', role: 'CEO, A2 Pyramid', image: '/img/aditya.png', bio: 'Aditya specializes in data analysis and machine learning, guiding students through practical projects in Python and R.' },
  { name: 'Satish Kumar', role: 'CTO, A2 Pyramid', image: '/img/satish.PNG', bio: 'With a keen eye for design, Satish helps students understand the principles of UI/UX and how to create user-friendly applications.' },
  { name: 'Keshav Nair', role: 'COO, A2 Pyramid', image: '/img/keshav.PNG', bio: 'Keshav focuses on teaching the fundamentals of machine learning, from theory to practical implementations in real-world projects.' },
  { name: 'Ankit Dwivedi', role: 'Full-Stack Developer', image: '/img/ankit.jpg', bio: 'Ankit Dwivedi has over 1 year of experience in full-stack development and has worked with various technologies, including React, Node.js, and MongoDB.' },
  { name: 'Yuvraj Maheswari', role: 'ML / Web Dev', image: '/img/yuvraj.jpg', bio: 'A promising new devloper with strong potential for growth and exploration in the field.' },
  { name: 'Sanya Gupta', role: 'ML Intern', image: '/img/sanya_bg_rmv.jpg', bio: 'New ML intern with strong potential for growth. Hard working and punctual in work.' },
  // duplicate entries removed for brevity
];

// Styled Components
const Section = styled.section`
  background-color: #eef2ff;
  padding: 2.5rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

// Modal animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 28rem;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
`;

const CloseButton = styled.button`
  margin-top: 1.5rem;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;

const EdutechMeetOurInstructors = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (instructor) => setSelected(instructor);
  const closeModal = () => setSelected(null);

  return (
    <Section>
      <Container>
        <Heading>Meet Our Team</Heading>
        <Grid>
          {instructors.map((inst, idx) => (
            <Card key={idx} onClick={() => openModal(inst)}>
              <Avatar src={inst.image} alt={inst.name} />
              <Name>{inst.name}</Name>
              <Role>{inst.role}</Role>
            </Card>
          ))}
        </Grid>

        {selected && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <Name>{selected.name}</Name>
              <Role>{selected.role}</Role>
              <p style={{ marginTop: '1rem', color: '#4b5563' }}>{selected.bio}</p>
              <CloseButton onClick={closeModal}>Close</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </Section>
  );
};

export default EdutechMeetOurInstructors;