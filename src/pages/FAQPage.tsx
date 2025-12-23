import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Brain, Users, Bot, Zap, Settings, Phone, Mail, Send } from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './FAQPage.css';

const FAQPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const faqSections = [
    {
      id: 'edtech',
      title: 'EdTech / Training Platform',
      icon: <Brain size={32} />,
      color: '#2563eb',
      faqs: [
        {
          question: 'What courses do you offer and who are they for?',
          answer: 'We offer skill-based and career-oriented courses for school students, college students, teachers, and working professionals. Courses range from foundational learning to advanced, industry-ready training.'
        },
        {
          question: 'Are the courses beginner-friendly?',
          answer: 'Yes. Most of our courses are designed with zero-to-advanced learning paths, so even beginners can start comfortably and grow step by step.'
        },
        {
          question: 'Are classes live or recorded?',
          answer: 'We offer a hybrid model: live interactive sessions for engagement and doubt-solving, along with recorded content for revision and flexible learning.'
        },
        {
          question: 'Do you provide certificates after course completion?',
          answer: 'Yes. Learners receive a verified certificate after successful completion, which can be used for resumes, college applications, or job profiles.'
        },
        {
          question: 'How do you ensure quality teaching?',
          answer: 'All instructors go through screening, demo evaluation, and continuous performance review to ensure high teaching standards.'
        },
        {
          question: 'Can students ask doubts during the course?',
          answer: 'Absolutely. Learners can ask doubts during live sessions and also use AI-powered doubt support for instant help.'
        },
        {
          question: 'Is there any placement or career support?',
          answer: 'For selected programs, we provide career guidance, resume help, interview preparation, and mentorship, depending on the course type.'
        },
        {
          question: 'What if I miss a class?',
          answer: 'No problem. Recorded sessions are available so you can catch up anytime.'
        },
        {
          question: 'Is there a refund policy?',
          answer: 'Yes. We have a transparent refund policy, clearly mentioned before enrollment, based on course progress and timelines.'
        },
        {
          question: 'How can institutes or schools partner with you?',
          answer: 'Institutes and schools can collaborate with us for custom training programs, AI tools, and co-branded learning solutions.'
        }
      ]
    },
    {
      id: 'mapmyteacher',
      title: 'Map My Teacher',
      icon: <Users size={32} />,
      color: '#059669',
      faqs: [
        {
          question: 'What exactly is Map My Teacher?',
          answer: 'Map My Teacher is a platform that connects students with verified teachers based on subject, teaching style, location, and learning needs.'
        },
        {
          question: 'Is Map My Teacher only for online classes?',
          answer: 'No. It supports online, offline, and hybrid teaching, depending on the teacher\'s offerings.'
        },
        {
          question: 'How are teachers verified on the platform?',
          answer: 'Teachers go through profile verification, qualification checks, and demo evaluation before being listed.'
        },
        {
          question: 'Do students need to pay to browse teachers?',
          answer: 'No. Students can explore teacher profiles for free and choose the best match before enrolling.'
        },
        {
          question: 'How does payment work between students and teachers?',
          answer: 'Payments are handled securely through the platform with automatic revenue split, ensuring transparency for both teachers and students.'
        },
        {
          question: 'Can teachers set their own course price?',
          answer: 'Yes. Teachers have full control over pricing, schedules, and course structure.'
        },
        {
          question: 'What if a student is not satisfied with a teacher?',
          answer: 'We have support, feedback, and resolution mechanisms to handle such cases fairly.'
        },
        {
          question: 'Can teachers promote their profile publicly?',
          answer: 'Yes. Teacher profiles can be shared publicly so students can view details without logging in.'
        },
        {
          question: 'Does Map My Teacher take a commission?',
          answer: 'Yes, the platform takes a small service fee to manage technology, payments, and support.'
        },
        {
          question: 'Who can become a Growth Partner?',
          answer: 'Anyone who helps onboard teachers or students can become a Growth Partner and earn commission.'
        }
      ]
    },
    {
      id: 'aismart',
      title: 'AI Smart',
      icon: <Bot size={32} />,
      color: '#7c3aed',
      faqs: [
        {
          question: 'What is AI Smart?',
          answer: 'AI Smart is an AI-powered education platform that helps schools and institutes with doubt solving, exams, quizzes, revision planning, and smart analytics.'
        },
        {
          question: 'Is AI Smart suitable for schools or coaching institutes?',
          answer: 'Both. We offer separate AI modules tailored for schools and competitive exam institutes.'
        },
        {
          question: 'How does AI help students practically?',
          answer: 'AI provides instant doubt resolution, personalized revision plans, smart quizzes, and exam-ready practice papers.'
        },
        {
          question: 'Will AI replace teachers?',
          answer: 'No. AI is designed to assist teachers, reduce workload, and improve learning outcomes — not replace human teaching.'
        },
        {
          question: 'Is student data safe?',
          answer: 'Yes. We follow strict data security and privacy practices to protect student and institute data.'
        },
        {
          question: 'Can institutes customize AI features?',
          answer: 'Yes. AI modules can be enabled or disabled based on the institute\'s needs.'
        },
        {
          question: 'Does AI Smart work on mobile devices?',
          answer: 'Yes. AI Smart is mobile-friendly and works across devices.'
        },
        {
          question: 'How accurate are AI-generated questions and solutions?',
          answer: 'AI content is generated using exam-level standards and verified logic, with continuous improvement based on feedback.'
        },
        {
          question: 'How is pricing decided?',
          answer: 'Pricing depends on number of users, AI features enabled, and usage limits.'
        },
        {
          question: 'Can AI Smart be integrated into existing systems?',
          answer: 'Yes. We support API-based and custom integrations for schools and institutes.'
        }
      ]
    },
    {
      id: 'friday',
      title: 'Friday – AI Electronics',
      icon: <Zap size={32} />,
      color: '#dc2626',
      faqs: [
        {
          question: 'What is Friday – AI Electronics?',
          answer: 'Friday is an AI-powered electronics and automation solution designed for smart systems, learning, and real-world applications.'
        },
        {
          question: 'Who can use Friday?',
          answer: 'Students, engineers, institutes, startups, and businesses working on electronics, IoT, and automation projects.'
        },
        {
          question: 'Does Friday help with project development?',
          answer: 'Yes. Friday assists in designing, debugging, simulation guidance, and system logic.'
        },
        {
          question: 'Is it suitable for beginners?',
          answer: 'Yes. Friday explains concepts in simple, step-by-step language, making it beginner-friendly.'
        },
        {
          question: 'Can Friday be used in colleges and labs?',
          answer: 'Absolutely. It is ideal for academic labs, workshops, and training programs.'
        },
        {
          question: 'Does it support real hardware integration?',
          answer: 'Yes. Friday is designed to work with real-world electronics and automation setups.'
        },
        {
          question: 'Is coding knowledge required?',
          answer: 'Basic knowledge helps, but Friday can guide users even from scratch.'
        },
        {
          question: 'Can Friday be customized for institutions?',
          answer: 'Yes. Institutions can get custom modules and features based on their curriculum.'
        },
        {
          question: 'Is Friday an AI chatbot or a system?',
          answer: 'Friday is more than a chatbot — it\'s a problem-solving AI assistant for electronics and automation.'
        },
        {
          question: 'How can I get access to Friday?',
          answer: 'Access is provided through subscriptions or institutional partnerships.'
        }
      ]
    },
    {
      id: 'automation',
      title: 'Automation & Development',
      icon: <Settings size={32} />,
      color: '#ea580c',
      faqs: [
        {
          question: 'What kind of automation services do you provide?',
          answer: 'We provide software automation, AI automation, workflow automation, and system integrations.'
        },
        {
          question: 'Who is this service for?',
          answer: 'Startups, schools, institutes, enterprises, and individuals looking to save time and reduce manual work.'
        },
        {
          question: 'Can you automate existing systems?',
          answer: 'Yes. We specialize in automating existing workflows without disrupting current operations.'
        },
        {
          question: 'Do you develop custom software?',
          answer: 'Yes. We build custom web apps, dashboards, AI systems, and internal tools.'
        },
        {
          question: 'How long does automation development take?',
          answer: 'Timelines depend on complexity, usually ranging from a few days to a few weeks.'
        },
        {
          question: 'Is automation expensive?',
          answer: 'Not always. Automation often reduces long-term costs and improves efficiency.'
        },
        {
          question: 'Do you provide maintenance and support?',
          answer: 'Yes. We offer ongoing support, upgrades, and monitoring.'
        },
        {
          question: 'Can automation integrate with payment systems?',
          answer: 'Yes. We support secure payment gateway integrations like Razorpay.'
        },
        {
          question: 'Will automation affect existing staff roles?',
          answer: 'Automation helps staff focus on high-value work, not replace them.'
        },
        {
          question: 'How do we start a project with you?',
          answer: 'You can start by discussing requirements, after which we propose a clear roadmap and cost structure.'
        }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQueryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!queryForm.name || !queryForm.email || !queryForm.subject || !queryForm.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setQueryForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="faq-page">
        {/* Hero Section */}
        <section className="faq-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Frequently Asked Questions</h1>
              <p>Find answers to common questions about our platforms and services</p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="faq-sections">
          <div className="container">
            <div className="sections-grid">
              {faqSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className="section-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="section-icon" style={{ color: section.color }}>
                    {section.icon}
                  </div>
                  <h3>{section.title}</h3>
                  <p>{section.faqs.length} Questions</p>
                  <button
                    className="show-faq-btn"
                    onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                    style={{ backgroundColor: section.color }}
                  >
                    {activeSection === section.id ? 'Hide FAQ' : 'Show FAQ'}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* FAQ Content */}
            <AnimatePresence>
              {activeSection && (
                <motion.div
                  className="faq-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faqSections
                    .filter(section => section.id === activeSection)
                    .map(section => (
                      <div key={section.id} className="faq-list">
                        <h2>{section.title} - FAQ</h2>
                        {section.faqs.map((faq, index) => (
                          <div key={index} className="faq-item">
                            <button
                              className="faq-question"
                              onClick={() => setOpenFAQ(openFAQ === `${section.id}-${index}` ? null : `${section.id}-${index}`)}
                            >
                              <span>{faq.question}</span>
                              {openFAQ === `${section.id}-${index}` ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            <AnimatePresence>
                              {openFAQ === `${section.id}-${index}` && (
                                <motion.div
                                  className="faq-answer"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <p>{faq.answer}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section className="faq-contact">
          <div className="container">
            <motion.div
              className="contact-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Still have doubts? Connect with us</h2>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>WhatsApp/Call</h4>
                    <a href="tel:+919472994483">9472994483</a>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:hr@a2pyramid.com">hr@a2pyramid.com</a>
                  </div>
                </div>
              </div>

              <div className="query-form">
                <h3>Send us your query</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={queryForm.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={queryForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={queryForm.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={4}
                    value={queryForm.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={20} />
                        Send Query
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="form-message success">
                      Thank you! Your query has been sent successfully.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="form-message error">
                      Please fill in all required fields.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;