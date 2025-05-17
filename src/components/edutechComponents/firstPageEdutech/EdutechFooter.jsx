import styled from 'styled-components';

import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 2.5rem 0;
`;

const FooterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 2.5rem;
  }
`;

const FooterColumn = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  hr {
    border-color: #4b5563;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    .footer-link {
      color: #e5e7eb;
      text-decoration: none;
      &:hover {
        color: #2563eb;
      }
    }
  }
`;

const FooterIcons = styled.li`
  display: flex;
  align-items: center;
  space-between: 1rem;
  cursor: pointer;
  &:hover {
    color: #d946ef;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.875rem;
  hr {
    border-color: #4b5563;
    margin-bottom: 1rem;
  }
`;

export const EdutechFooter = () => {
  return (
    <Footer>
      {/* Main Footer Content */}
      <FooterSection>
        {/* A2 Pyramid Edutech */}
        <FooterColumn>
          <h2>A2 Pyramid Edutech</h2>
          <hr />
          <ul>
            <li><a href="#" className="footer-link">Our Team</a></li>
            <li><a href="#" className="footer-link">Apply As Coach</a></li>
            <li><a href="#" className="footer-link">Hire From Us</a></li>
            <li><a href="#" className="footer-link">Our Alumni</a></li>
          </ul>
        </FooterColumn>

        {/* Our Courses */}
        <FooterColumn>
          <h2>Our Courses</h2>
          <hr />
          <ul>
            <li><a href="#" className="footer-link">Front End</a></li>
            <li><a href="#" className="footer-link">Back End</a></li>
            <li><a href="#" className="footer-link">Full Stack</a></li>
            <li><a href="#" className="footer-link">DSA</a></li>
          </ul>
        </FooterColumn>

        {/* Follow Us */}
        <FooterColumn>
          <h2>Follow Us</h2>
          <hr />
          <ul>
            <FooterIcons>
              <FaInstagram />
              <a href="#">Instagram</a>
            </FooterIcons>
            <FooterIcons>
              <FaYoutube />
              <a href="#">YouTube</a>
            </FooterIcons>
            <FooterIcons>
              <FaFacebook />
              <a href="#">Facebook</a>
            </FooterIcons>
            <FooterIcons>
              <FaLinkedin />
              <a href="#">LinkedIn</a>
            </FooterIcons>
          </ul>
        </FooterColumn>

        {/* Contact Us */}
        <FooterColumn>
          <h2>Contact Us</h2>
          <hr />
          <ul>
            <li>Phone/Email</li>
            <li>+91 9472994483</li>
            <li>+91 9608049406</li>
            <li>studypyramid@gmail.com</li>
          </ul>
        </FooterColumn>
      </FooterSection>

      {/* Footer Bottom */}
      <FooterBottom>
        <hr />
        <p>&copy; 2024 A2 Pyramid Edutech. All rights reserved.</p>
        <p>Privacy Policy | Terms and Conditions</p>
      </FooterBottom>
    </Footer>
  );
};

export default EdutechFooter;
