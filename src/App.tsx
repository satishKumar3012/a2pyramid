import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ToastContainer } from './components/ui/Toast';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Platforms from './components/Platforms/Platforms';
import YouTube from './components/YouTube/YouTube';
import About from './components/About/About';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/InteractiveElements/ScrollProgress';
import BackToTop from './components/InteractiveElements/BackToTop';
import WhatsAppButton from './components/InteractiveElements/WhatsAppButton';
import Chatbot from './components/InteractiveElements/Chatbot';
import LoadingSpinner from './components/InteractiveElements/LoadingSpinner';
import MMTSalesPage from './pages/MMTSalesPage';

// Lazy load pages for better performance
const AboutA2Pyramid = React.lazy(() => import('./pages/AboutA2Pyramid'));
const ContactA2Pyramid = React.lazy(() => import('./pages/ContactA2Pyramid'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const FridayPage = React.lazy(() => import('./pages/FridayPage'));
const PlatformsPage = React.lazy(() => import('./pages/PlatformsPage'));
const EdTech = React.lazy(() => import('./pages/EdTech'));
const WebDevCourse = React.lazy(() => import('./pages/courses/WebDevCourse'));
const AiMlCourse = React.lazy(() => import('./pages/courses/AiMlCourse'));
const DevOpsCourse = React.lazy(() => import('./pages/courses/DevOpsCourse'));
const DataAnalyticsCourse = React.lazy(() => import('./pages/courses/DataAnalyticsCourse'));
const AutomationCourse = React.lazy(() => import('./pages/courses/AutomationCourse'));

const HomePage = () => (
  <div className="home-page">
    <Header />
    <Hero />
    <Platforms />
    <YouTube />
    <About />
    <Team />
    <Testimonials />
    <FAQ />
    <Footer />
  </div>
);

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We apologize for the inconvenience. Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Router>
          <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <ScrollProgress />
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutA2Pyramid />} />
                <Route path="/contact" element={<ContactA2Pyramid />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/friday" element={<FridayPage />} />
                <Route path="/platforms" element={<PlatformsPage />} />
                <Route path="/mmt-sales" element={<MMTSalesPage />} />
                <Route path="/edtech" element={<EdTech />} />
                <Route path="/edtech/web-dev" element={<WebDevCourse />} />
                <Route path="/edtech/ai-ml" element={<AiMlCourse />} />
                <Route path="/edtech/devops" element={<DevOpsCourse />} />
                <Route path="/edtech/data-analytics" element={<DataAnalyticsCourse />} />
                <Route path="/edtech/automation" element={<AutomationCourse />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
            
            <Chatbot />
            <WhatsAppButton />
            <BackToTop />
            <ToastContainer />
          </div>
        </Router>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;