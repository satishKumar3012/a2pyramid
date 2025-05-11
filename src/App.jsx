import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DoubtSolver from './pages/DoubtSolver';
import ExamPaperGenerator from './pages/ExamPaperGenerator';
import SmartQuizGenerator from './pages/SmartQuizGenerator';
import PerformanceMetrics from './pages/PerformanceMetrics';
import GamifiedClassroom from './pages/GamifiedClassroom';
import MentalHealthSupport from './pages/MentalHealthSupport';
import SkillProgressTracking from './pages/SkillProgressTracking';
import AttendanceReport from './pages/AttendanceReport';
import RevisionPlannerPage from './pages/RevisionPlannerPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import styled from 'styled-components';
import FooterAISmart from './components/FooterAISmart';
import AboutAISmart from './pages/AboutAISmart';
import ContactAISmart from './pages/ContactAISmart';
import Home from './pages/Home';
import EdutechHome from './pages/Edutech/EdutechHome';
import EdutechAbout from './pages/Edutech/EdutechAbout';
import EdutechContact from './pages/Edutech/EdutechContact';
import QuizPlay from './pages/GamifiedClassroom/QuizPlay';
import QuizResult from './pages/GamifiedClassroom/QuizResult';
import QuizHome from './pages/GamifiedClassroom/QuizHome';
import QuizStats from './pages/GamifiedClassroom/QuizStats';
import MissedQuiz from './pages/GamifiedClassroom/MissedQuiz';

const Button = styled.button`
  padding: 12px 24px;
  background-color: #4B8DF8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2e6cd1;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname; // === '/' || location.pathname === '/edutech';

  const shouldHideDashboardLayout =
    path === '/' || path.startsWith('/edutech');

  return (
    <>
      {!shouldHideDashboardLayout && (
        <>
          <Navbar />
          <main style={{ padding: '20px' }}>
            <h1>Welcome to the AI Smart Class Dashboard 🚀</h1>
            <ButtonContainer>
              <a href="/ai-smart-class" style={{ textDecoration: 'none' }}>
                <Button>Home</Button>
              </a>
              <a href="/about-ai-smart-class" style={{ textDecoration: 'none' }}>
                <Button>About</Button>
              </a>
              <a href="/contact-ai-smart-class" style={{ textDecoration: 'none' }}>
                <Button>Contact</Button>
              </a>
            </ButtonContainer>
          </main>
        </>
      )}
      {children}
      <FooterAISmart />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edutech" element={<EdutechHome />} />
          <Route path="/edutech/about" element={<EdutechAbout />} />
          <Route path="/edutech/contact" element={<EdutechContact />} />
          <Route path="/ai-smart-class" element={<HomePage />} />
          <Route path="/about-ai-smart-class" element={<AboutAISmart />} />
          <Route path="/contact-ai-smart-class" element={<ContactAISmart />} />
          <Route path="/doubt-solver" element={<DoubtSolver />} />
          <Route path="/exam-paper-generator" element={<ExamPaperGenerator />} />
          <Route path="/smart-quiz-generator" element={<SmartQuizGenerator />} />
          <Route path="/performance-metrics" element={<PerformanceMetrics />} />

          {/* gamified classroom links */}
          <Route path="/gamified-classroom" element={<GamifiedClassroom />} />
          <Route path="/gamified-classroom-play-quiz" element={<QuizPlay />} />
          <Route path="/gamified-classroom-result" element={<QuizResult />} />
          <Route path="/gamified-classroom-quiz-home" element={<QuizHome />} />
          <Route path="/gamified-classroom-quiz-stats" element={<QuizStats />} />
          <Route path="/gamified-classroom-missed-quiz" element={<MissedQuiz />} />


          <Route path="/mental-health-support" element={<MentalHealthSupport />} />
          <Route path="/skill-progress-tracking" element={<SkillProgressTracking />} />
          <Route path="/attendance-report" element={<AttendanceReport />} />
          <Route path="/revision-planner" element={<RevisionPlannerPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
