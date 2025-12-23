import { motion } from 'framer-motion';
import { Brain, CheckCircle, Zap, Users, Target, Lightbulb, Cpu, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  const steps = [
    { icon: <Target size={20} />, title: 'Identify Problems', desc: 'Real-world gaps in education & automation' },
    { icon: <Brain size={20} />, title: 'Build AI Solutions', desc: 'Intelligent platforms powered by AI' },
    { icon: <Lightbulb size={20} />, title: 'Integrate Technology', desc: 'Practical, hands-on learning approach' },
    { icon: <Zap size={20} />, title: 'Scale & Partner', desc: 'Growth through platforms & collaboration' }
  ];

  const benefits = [
    { icon: <CheckCircle size={20} />, title: 'Industry-Ready Skills', desc: 'Practical learning for real market needs' },
    { icon: <Brain size={20} />, title: 'Smart AI Solutions', desc: 'Dynamic, intelligent automation tools' },
    { icon: <Target size={20} />, title: 'Transparent Systems', desc: 'Clear processes for growth & collaboration' },
    { icon: <Zap size={20} />, title: 'Scalable Platforms', desc: 'Solutions that grow from individuals to institutions' },
    { icon: <Users size={20} />, title: 'Trust-Based Ecosystem', desc: 'Strong relationships across all stakeholders' }
  ];

  const whyChoose = [
    { icon: <Target size={16} />, text: 'Practical-first approach' },
    { icon: <Cpu size={16} />, text: 'AI at the core' },
    { icon: <Zap size={16} />, text: 'Multi-platform ecosystem' },
    { icon: <Lightbulb size={16} />, text: 'Long-term vision' }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div className="about-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="section-title">About A2 Pyramid - AI Education Company in India</h2>
          <p className="about-subtitle">Leading EdTech innovation through AI-powered learning solutions</p>
        </motion.div>

        <motion.div 
          className="about-intro" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          viewport={{ once: true }}
        >
          <motion.div 
            className="intro-icon"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Brain size={24} />
          </motion.div>
          <h3>What is A2 Pyramid?</h3>
          <p>A2 Pyramid is India's premier <strong>AI education and EdTech company</strong> specializing in <strong>AI-powered learning platforms</strong>, teacher-student connections, smart automation systems, and innovative educational technology solutions for students, educators, and businesses across India.</p>
          <motion.button 
            className="learn-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        <div className="about-section">
          <h3 className="section-subtitle">How Our AI Education Platform Works</h3>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="step-card" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="step-number">
                  {index + 1}
                </div>
                <div className="step-icon">
                  {step.icon}
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <h3 className="section-subtitle">Benefits of A2 Pyramid's AI Learning Solutions</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="benefit-card" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="why-choose" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h3>Why Choose A2 Pyramid?</h3>
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <motion.div 
                key={index} 
                className="why-item"
                whileHover={{ scale: 1.1, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="why-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;