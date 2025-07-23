// import React from 'react';
// import Navbar from './components/Navbar';
// import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import DoubtSolver from './pages/DoubtSolver';
// import ExamPaperGenerator from './pages/ExamPaperGenerator';
// import SmartQuizGenerator from './pages/SmartQuizGenerator';
// import PerformanceMetrics from './pages/PerformanceMetrics';
// import GamifiedClassroom from './pages/GamifiedClassroom';
// import MentalHealthSupport from './pages/MentalHealthSupport';
// import SkillProgressTracking from './pages/SkillProgressTracking';
// import AttendanceReport from './pages/AttendanceReport';
// import RevisionPlannerPage from './pages/RevisionPlannerPage';
// import HomePage from './pages/HomePage';
// import NotFound from './pages/NotFound';
// import styled from 'styled-components';
// import FooterAISmart from './components/FooterAISmart';
// import AboutAISmart from './pages/AboutAISmart';
// import ContactAISmart from './pages/ContactAISmart';
// import Home from './pages/Home';
// import EdutechHome from './pages/Edutech/EdutechHome';
// import EdutechAbout from './pages/Edutech/EdutechAbout';
// import EdutechContact from './pages/Edutech/EdutechContact';
// import TempLogin from './components/TempLogin';


// // Edutech first page components links
// // import EdutechHeader from './components/edutechComponents/firstPageEdutech/EdutechHeader';
// // import EdutechNavbar from './components/edutechComponents/homeComponents/EdutechNavbar';
// import EdutechHeroSection from './components/edutechComponents/firstPageEdutech/EdutechHeroSection';
// import EdutechNavbar from './components/edutechComponents/firstPageEdutech/EdutechNavbar';
// import EdutechFloatingContactButton from './components/edutechComponents/firstPageEdutech/EdutechFloatingContactButton';
// import EdutechChatBot from './components/edutechComponents/firstPageEdutech/EdutechChatbot';
// import EdutechCollaborationSection from './components/edutechComponents/firstPageEdutech/EdutechCollaborationSection';
// import EdutechCourses from './components/edutechComponents/firstPageEdutech/EdutechCourses';
// import EdutechVoiceOfSuccess from './components/edutechComponents/firstPageEdutech/EdutechVoiceOfSuccess';
// import EdutechFeaturedCourses from './components/edutechComponents/firstPageEdutech/EdutechFeaturedCourses';
// import EdutechMeetOurInstructors from './components/edutechComponents/firstPageEdutech/EdutechMeetOurInstructors';
// import EdutechFAQAccordion from './components/edutechComponents/firstPageEdutech/EdutechFAQAccordion';
// import EdutechJoinNow from './components/edutechComponents/firstPageEdutech/EdutechJoinNow';
// import EdutechFooter from './components/edutechComponents/firstPageEdutech/EdutechFooter';
// import EdutechErrorPage from './components/edutechComponents/EdutechErrorPage';
// // private route
// import PrivateRoute from "./components/PrivateRoute";

// const Button = styled.button`
//   padding: 12px 24px;
//   background-color: #4B8DF8;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease, transform 0.2s ease;

//   &:hover {
//     background-color: #2e6cd1;
//   }

//   &:focus {
//     outline: none;
//   }

//   @media (max-width: 480px) {
//     padding: 10px 20px;
//     font-size: 0.9rem;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;
// `;

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const path = location.pathname; // === '/' || location.pathname === '/edutech';

//   const shouldHideDashboardLayout =
//     path === '/' || path.startsWith('/edutech')|| path === "/ai-smart-login";


//   return (
//     <>
//       {!shouldHideDashboardLayout && (
//         <>
//           <Navbar />
//           <main style={{ padding: '20px' }}>
//             <h1>Welcome to the AI Smart Class Dashboard 🚀</h1>
//             <ButtonContainer>
//               <a href="#/ai-smart-class" style={{ textDecoration: 'none' }}>
//                 <Button>Home</Button>
//               </a>
//               <a href="#/about-ai-smart-class" style={{ textDecoration: 'none' }}>
//                 <Button>About</Button>
//               </a>
//               <a href="#/contact-ai-smart-class" style={{ textDecoration: 'none' }}>
//                 <Button>Contact</Button>
//               </a>
//             </ButtonContainer>
//           </main>
//         </>
//       )}
//       {children}
//       <FooterAISmart />
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/edutech" element={<EdutechHome />} /> */}
//           <Route path="/edutech/about" element={<EdutechAbout />} />
//           <Route path="/edutech/contact" element={<EdutechContact />} />

// {/* Edutech First pages links */}
//            <Route 
//           path="/edutech" 
//           element={
//             <>
//               {/* <EdutechHeader /> */}
//               <EdutechNavbar />
//               <EdutechHeroSection />
//               {/* <EdutechFloatingContactButton /> */}
//               {/* <EdutechChatBot /> */}
//               <EdutechCollaborationSection />
//               <EdutechCourses />
//               <EdutechVoiceOfSuccess />
//               {/* <FeaturedPrograms /> */}
//               <EdutechFeaturedCourses />
//               <EdutechMeetOurInstructors />
//               <EdutechFAQAccordion />
//               <EdutechJoinNow />
//               {/* <EdutechFooter /> */}
//             </>
//           } 
//         />


//         {/* edutech error page */}
//           <Route path='/edutech/*' element={<>
//           <EdutechNavbar />
//           <EdutechErrorPage />
//           </>} />

//           <Route path="/ai-smart-class" element={<HomePage />} />
//           <Route path="/about-ai-smart-class" element={<AboutAISmart />} />
//           <Route path="/contact-ai-smart-class" element={<ContactAISmart />} />

//           {/* <Route path="/doubt-solver" element={<DoubtSolver />} /> */}
//           <Route
//             path="/doubt-solver"
//             element={
//             <PrivateRoute>
//                 <DoubtSolver />
//              </PrivateRoute> 
//             }
//           />
//           <Route path="/exam-paper-generator" element={<ExamPaperGenerator />} />
//           <Route path="/smart-quiz-generator" element={<SmartQuizGenerator />} />
//           <Route path="/performance-metrics" element={<PerformanceMetrics />} />

//           {/* gamified classroom links */}
//           <Route path="/gamified-classroom" element={<GamifiedClassroom />} />
          


//           <Route path="/mental-health-support" element={<MentalHealthSupport />} />
//           <Route path="/skill-progress-tracking" element={<SkillProgressTracking />} />
//           <Route path="/attendance-report" element={<AttendanceReport />} />
//           <Route path="/revision-planner" element={<RevisionPlannerPage />} />
//           <Route path="/ai-smart-login" element={<TempLogin />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import TempLogin from './components/TempLogin';


// Edutech first page components links
// import EdutechHeader from './components/edutechComponents/firstPageEdutech/EdutechHeader';
// import EdutechNavbar from './components/edutechComponents/homeComponents/EdutechNavbar';
import EdutechHeroSection from './components/edutechComponents/firstPageEdutech/EdutechHeroSection';
import EdutechNavbar from './components/edutechComponents/firstPageEdutech/EdutechNavbar';
import EdutechFloatingContactButton from './components/edutechComponents/firstPageEdutech/EdutechFloatingContactButton';
import EdutechChatBot from './components/edutechComponents/firstPageEdutech/EdutechChatbot';
import EdutechCollaborationSection from './components/edutechComponents/firstPageEdutech/EdutechCollaborationSection';
import EdutechCourses from './components/edutechComponents/firstPageEdutech/EdutechCourses';
import EdutechVoiceOfSuccess from './components/edutechComponents/firstPageEdutech/EdutechVoiceOfSuccess';
import EdutechFeaturedCourses from './components/edutechComponents/firstPageEdutech/EdutechFeaturedCourses';
import EdutechMeetOurInstructors from './components/edutechComponents/firstPageEdutech/EdutechMeetOurInstructors';
import EdutechFAQAccordion from './components/edutechComponents/firstPageEdutech/EdutechFAQAccordion';
import EdutechJoinNow from './components/edutechComponents/firstPageEdutech/EdutechJoinNow';
import EdutechFooter from './components/edutechComponents/firstPageEdutech/EdutechFooter';
import EdutechErrorPage from './components/edutechComponents/EdutechErrorPage';
// private route
import PrivateRoute from "./components/PrivateRoute";

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
    path === '/' || path.startsWith('/edutech')|| path === "/ai-smart-login";


  return (
    <>
      {!shouldHideDashboardLayout && (
        <>
          <Navbar />
          <main style={{ padding: '20px' }}>
            <h1>Welcome to the AI Smart Class Dashboard 🚀</h1>
            <ButtonContainer>
              <a href="#/ai-smart-class" style={{ textDecoration: 'none' }}>
                <Button>Home</Button>
              </a>
              <a href="#/about-ai-smart-class" style={{ textDecoration: 'none' }}>
                <Button>About</Button>
              </a>
              <a href="#/contact-ai-smart-class" style={{ textDecoration: 'none' }}>
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
          {/* <Route path="/edutech" element={<EdutechHome />} /> */}
          <Route path="/edutech/about" element={<EdutechAbout />} />
          <Route path="/edutech/contact" element={<EdutechContact />} />

{/* Edutech First pages links */}
           <Route 
          path="/edutech" 
          element={
            <>
              {/* <EdutechHeader /> */}
              <EdutechNavbar />
              <EdutechHeroSection />
              {/* <EdutechFloatingContactButton /> */}
              {/* <EdutechChatBot /> */}
              <EdutechCollaborationSection />
              <EdutechCourses />
              <EdutechVoiceOfSuccess />
              {/* <FeaturedPrograms /> */}
              <EdutechFeaturedCourses />
              <EdutechMeetOurInstructors />
              <EdutechFAQAccordion />
              <EdutechJoinNow />
              {/* <EdutechFooter /> */}
            </>
          } 
        />


        {/* edutech error page */}
          <Route path='/edutech/*' element={<>
          <EdutechNavbar />
          <EdutechErrorPage />
          </>} />

          <Route path="/ai-smart-class" 
          element={
            <PrivateRoute>
          <HomePage />
            </PrivateRoute>
          } 

          />
          <Route
           path="/about-ai-smart-class"
           element={
            <PrivateRoute>
            <AboutAISmart />
            </PrivateRoute>
          } 

          />
          <Route
           path="/contact-ai-smart-class"
           element={
            <PrivateRoute>
            <ContactAISmart />
            </PrivateRoute>
          } 

          />

          {/* <Route path="/doubt-solver" element={<DoubtSolver />} /> */}
          <Route
            path="/doubt-solver"
            element={
            <PrivateRoute>
                <DoubtSolver />
             </PrivateRoute> 
            }
          />
          <Route
           path="/exam-paper-generator" 
           element={
            <PrivateRoute>
           <ExamPaperGenerator />
            </PrivateRoute>
           }
            />
          <Route
           path="/smart-quiz-generator" 
           element={
            <PrivateRoute>
           <SmartQuizGenerator />
            </PrivateRoute>
           }
            />
          <Route
           path="/performance-metrics"
            element={
            <PerformanceMetrics />
            }
             />

          {/* gamified classroom links */}
          <Route path="/gamified-classroom" element={<GamifiedClassroom />} />
          


          <Route path="/mental-health-support" element={<MentalHealthSupport />} />
          <Route path="/skill-progress-tracking" element={<SkillProgressTracking />} />
          <Route path="/attendance-report" element={<AttendanceReport />} />
          {/* revision planner */}
          <Route 
          path="/revision-planner"
           element={
            <PrivateRoute>
           <RevisionPlannerPage />
            </PrivateRoute>
           }
           />

          <Route path="/ai-smart-login" element={<TempLogin />} />
          <Route
           path="*"
           element={
            <PrivateRoute>
            <NotFound />
            </PrivateRoute>
          }
           />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;