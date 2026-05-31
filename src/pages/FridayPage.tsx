import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Zap, Users, GraduationCap, Building, Wrench, Rocket, ChevronDown, ChevronUp, CheckCircle, MessageSquare, Phone, Mail } from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './FridayPage.css';

const FridayPage = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const workingSteps = [
    {
      step: '1',
      title: 'Describe Your Project',
      description: 'Tell Friday about your electronics or automation challenge',
      icon: <MessageSquare size={24} />
    },
    {
      step: '2',
      title: 'AI Analysis',
      description: 'Friday understands hardware requirements and logic',
      icon: <Zap size={24} />
    },
    {
      step: '3',
      title: 'Step-by-Step Guidance',
      description: 'Get components, circuits, code, and debugging help',
      icon: <CheckCircle size={24} />
    },
    {
      step: '4',
      title: 'Build Confidently',
      description: 'Execute your project in the real world with AI support',
      icon: <Rocket size={24} />
    }
  ];

  const problems = [
    {
      problem: "I don't know where my circuit is wrong",
      solution: "Friday analyzes your circuit and pinpoints exact issues with debugging steps"
    },
    {
      problem: "Too many component options, which to choose?",
      solution: "Friday recommends optimal components based on your project requirements"
    },
    {
      problem: "Theory is clear but practical implementation confuses me",
      solution: "Friday bridges theory-practice gap with real-world implementation guidance"
    },
    {
      problem: "Automation logic seems complex",
      solution: "Friday breaks down complex automation into simple, manageable steps"
    },
    {
      problem: "No lab support or mentor available",
      solution: "Friday acts as your 24/7 virtual lab assistant and electronics mentor"
    }
  ];

  const targetUsers = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Students',
      description: 'Diploma, B.Tech, ITI students learning electronics and automation'
    },
    {
      icon: <Users size={32} />,
      title: 'Engineers',
      description: 'Professional engineers working on hardware and IoT projects'
    },
    {
      icon: <Building size={32} />,
      title: 'Colleges & Institutes',
      description: 'Educational institutions enhancing lab experiences'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Makers & Hobbyists',
      description: 'DIY enthusiasts building electronics projects'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Startups',
      description: 'Hardware startups developing IoT and automation solutions'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'B.Tech Student, NIT Patna',
      feedback: 'Friday helped me debug my microcontroller project in minutes. It explained exactly where my code was wrong and how to fix it.'
    },
    {
      name: 'Dr. Priya Gupta',
      role: 'Electronics Faculty, IIT Delhi',
      feedback: 'We use Friday in our lab sessions. Students get instant help with circuit analysis and component selection.'
    },
    {
      name: 'Amit Kumar',
      role: 'Hardware Engineer, Tech Mahindra',
      feedback: 'Friday saves me hours on automation projects. The step-by-step guidance is incredibly practical and accurate.'
    },
    {
      name: 'Neha Patel',
      role: 'Founder, IoT Startup',
      feedback: 'Friday accelerated our prototype development. It\'s like having an electronics expert available 24/7.'
    }
  ];

  const faqs = [
    {
      question: 'What exactly can Friday help with?',
      answer: 'Friday assists with electronics design, circuit debugging, component selection, automation logic, coding for microcontrollers, and real-world project implementation.'
    },
    {
      question: 'Is Friday beginner-friendly?',
      answer: 'Yes. Friday explains concepts in simple, step-by-step language and provides beginner-friendly guidance while being powerful enough for advanced users.'
    },
    {
      question: 'Does Friday work with real hardware?',
      answer: 'Absolutely. Friday is designed specifically for real-world electronics and automation projects, not just theoretical concepts.'
    },
    {
      question: 'Is coding knowledge required?',
      answer: 'Basic knowledge helps, but Friday can guide users from scratch with coding explanations and examples.'
    },
    {
      question: 'Can institutes use Friday?',
      answer: 'Yes. Institutions can get custom modules and features based on their curriculum and lab requirements.'
    },
    {
      question: 'Is Friday a chatbot or a system?',
      answer: 'Friday is more than a chatbot — it\'s a comprehensive AI assistant for electronics and automation problem-solving.'
    },
    {
      question: 'Is data secure?',
      answer: 'Yes. We follow strict data security and privacy practices to protect user projects and information.'
    },
    {
      question: 'How do I get access?',
      answer: 'Access is provided through subscriptions or institutional partnerships. Contact us for demo and pricing.'
    }
  ];

  return (
    <>
      <Header />
      <main className="friday-page">
        {/* Hero Section */}
        <section className="friday-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Friday – Your AI Assistant for Electronics & Automation</h1>
              <p>
                Transform your electronics and automation projects with AI-powered guidance. 
                From circuit design to debugging, Friday is your virtual lab assistant.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">
                  <ArrowRight size={20} />
                  Get Started with Friday
                </button>
                <button className="btn btn-secondary">
                  <Play size={20} />
                  Watch How Friday Works
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Friday */}
        <section className="what-is-friday">
          <div className="container">
            <motion.div
              className="content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>What is Friday?</h2>
              <p>
                Friday is an AI-powered electronics and automation assistant designed for students, engineers, 
                and makers working on real-world hardware projects. Unlike generic AI tools, Friday specializes 
                in electronics, IoT, and automation systems.
              </p>
              <p>
                Friday acts as your virtual lab assistant, electronics mentor, and automation guide — helping you 
                design, understand, debug, and build practical electronics projects with confidence.
              </p>
              <div className="features-grid">
                <div className="feature">
                  <Zap className="feature-icon" />
                  <h4>Electronics Expertise</h4>
                  <p>Specialized in circuits, components, and hardware design</p>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <h4>Real-World Focus</h4>
                  <p>Practical guidance for actual project implementation</p>
                </div>
                <div className="feature">
                  <Users className="feature-icon" />
                  <h4>Beginner to Expert</h4>
                  <p>Suitable for students, professionals, and institutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Friday Works */}
        <section className="how-friday-works">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How Friday Works
            </motion.h2>
            <div className="steps-flow">
              {workingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index < workingSteps.length - 1 && <div className="step-arrow">→</div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Friday */}
        <section className="why-friday">
          <div className="container">
            <motion.div
              className="content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Why Use Friday?</h2>
              <div className="benefits-grid">
                <div className="benefit">
                  <h4>Saves Time</h4>
                  <p>Get instant solutions instead of hours of research and trial-and-error</p>
                </div>
                <div className="benefit">
                  <h4>Reduces Mistakes</h4>
                  <p>Avoid costly hardware errors with AI-powered validation and debugging</p>
                </div>
                <div className="benefit">
                  <h4>Beginner-Friendly</h4>
                  <p>Complex concepts explained in simple, understandable language</p>
                </div>
                <div className="benefit">
                  <h4>Real-World Focus</h4>
                  <p>Practical guidance for actual implementation, not just theory</p>
                </div>
                <div className="benefit">
                  <h4>24/7 Availability</h4>
                  <p>Access expert-level guidance anytime, anywhere</p>
                </div>
                <div className="benefit">
                  <h4>Scalable Learning</h4>
                  <p>Grows with you from student projects to professional systems</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems Friday Solves */}
        <section className="problems-solved">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Problems Friday Solves
            </motion.h2>
            <div className="problems-grid">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  className="problem-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="problem">
                    <h4>Problem</h4>
                    <p>"{item.problem}"</p>
                  </div>
                  <div className="solution">
                    <h4>Friday's Solution</h4>
                    <p>{item.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="video-section">
          <div className="container">
            <motion.div
              className="video-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>See Friday in Action</h2>
              <div className="laptop-frame">
                <div className="laptop-screen">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Friday Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Target Users */}
        <section className="target-users">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Who is Friday For?
            </motion.h2>
            <div className="users-grid">
              {targetUsers.map((user, index) => (
                <motion.div
                  key={index}
                  className="user-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="user-icon">{user.icon}</div>
                  <h3>{user.title}</h3>
                  <p>{user.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Users Say About Friday
            </motion.h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p>"{testimonial.feedback}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFAQ(openFAQ === `faq-${index}` ? null : `faq-${index}`)}
                  >
                    <span>{faq.question}</span>
                    {openFAQ === `faq-${index}` ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openFAQ === `faq-${index}` && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Friday in Education & Industry */}
        <section className="education-industry">
          <div className="container">
            <motion.div
              className="content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Friday in Education & Industry</h2>
              <div className="applications-grid">
                <div className="application">
                  <h4>College Labs</h4>
                  <p>Enhance practical learning with AI-powered lab assistance and real-time debugging support</p>
                </div>
                <div className="application">
                  <h4>Training Programs</h4>
                  <p>Accelerate skill development with personalized guidance for electronics and automation courses</p>
                </div>
                <div className="application">
                  <h4>Industrial Learning</h4>
                  <p>Bridge the gap between academic knowledge and industry requirements with practical AI mentoring</p>
                </div>
                <div className="application">
                  <h4>Skill Development</h4>
                  <p>Support government and private skill development initiatives with scalable AI-powered training</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Build Smarter with Friday</h2>
              <p>Ready to transform your electronics and automation projects?</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">
                  Request Demo
                </button>
                <button className="btn btn-secondary">
                  Get Early Access
                </button>
                <div className="contact-info">
                  <div className="contact-item">
                    <Phone size={20} />
                    <span>+91 9472994483</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={20} />
                    <span>contact@a2pyramid.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FridayPage;