import { motion } from 'framer-motion';
import { Brain, Users, Bot, Zap, Settings, ArrowRight } from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './PlatformsPage.css';

const PlatformsPage = () => {
  const platforms = [
    {
      icon: <Brain size={48} />,
      title: 'EdTech / Training Platform',
      description: 'AI, ML, Web Development courses with college training programs and industry-oriented learning.',
      features: ['AI-powered learning', 'Live + recorded sessions', 'Industry mentors', 'Practical projects'],
      color: '#2563eb',
      link: 'https://a2pyramid.com/#/edutech'
    },
    {
      icon: <Users size={48} />,
      title: 'Map My Teacher',
      description: 'Connect students with verified teachers through smart discovery and transparent pricing.',
      features: ['Smart teacher discovery', 'Revenue-sharing model', 'Growth partner ecosystem', 'Verified profiles'],
      color: '#059669',
      link: 'https://mmt.a2pyramid.com/'
    },
    {
      icon: <Bot size={48} />,
      title: 'AI Smart',
      description: 'AI-powered educational tools for institutes including exam generation and doubt solving.',
      features: ['Exam generation', 'Doubt solving', 'Revision planners', 'Smart analytics'],
      color: '#7c3aed',
      link: 'https://a2pyramid.com/#/ai-smart-class'
    },
    {
      icon: <Zap size={48} />,
      title: 'Friday – AI Electronics',
      description: 'AI-enabled electronic devices with smart assistants and dynamic real-time responses.',
      features: ['Smart assistants', 'Real-time responses', 'Hardware + software intelligence', 'IoT integration'],
      color: '#dc2626',
      link: '/friday'
    },
    {
      icon: <Settings size={48} />,
      title: 'Automation & Development',
      description: 'Custom software solutions, AI automation, and business workflow optimization.',
      features: ['Web development', 'AI automation', 'Workflow optimization', 'Custom solutions'],
      color: '#ea580c',
      link: '/automation'
    }
  ];

  return (
    <>
      <Header />
      <main className="platforms-page">
        <section className="platforms-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Our Platforms</h1>
              <p>Comprehensive AI-powered learning and automation solutions for students, teachers, and businesses</p>
            </motion.div>
          </div>
        </section>

        <section className="platforms-grid-section">
          <div className="container">
            <div className="platforms-grid">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.title}
                  className="platform-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="platform-header">
                    <div className="platform-icon" style={{ backgroundColor: platform.color }}>
                      {platform.icon}
                    </div>
                    <h3>{platform.title}</h3>
                  </div>
                  
                  <p className="platform-description">{platform.description}</p>
                  
                  <ul className="platform-features">
                    {platform.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                  {platform.title !== 'Automation & Development' && (
                    <button 
                      className="platform-explore"
                      onClick={() => {
                        if (platform.link.startsWith('http')) {
                          window.open(platform.link, '_blank', 'noopener,noreferrer');
                        } else {
                          window.location.href = platform.link;
                        }
                      }}
                    >
                      Explore Details
                      <ArrowRight size={16} />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlatformsPage;