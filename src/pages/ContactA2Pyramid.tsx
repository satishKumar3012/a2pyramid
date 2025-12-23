import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, GraduationCap, Users, Bot, Settings, ArrowRight } from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ContactA2Pyramid.css';

const ContactA2Pyramid = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    userType: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'a2pyramidedutech@gmail.com',
      link: 'mailto:a2pyramidedutech@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+91 947299483',
      link: 'tel:+91947299483'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office Location',
      content: 'Tilak Nagar Bailey Road, Patna - 800014',
      link: '#map'
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      content: 'Monday – Saturday\n10:00 AM – 7:00 PM (IST)',
      link: null
    }
  ];

  const supportTypes = [
    {
      icon: <GraduationCap size={32} />,
      title: 'EdTech & Training Support',
      description: 'Courses, certifications, learning modes',
      note: 'Use the contact form or email us.'
    },
    {
      icon: <Users size={32} />,
      title: 'Map My Teacher Queries',
      description: 'Teacher onboarding, demos, payments',
      note: 'Use the contact form or email us.'
    },
    {
      icon: <Bot size={32} />,
      title: 'AI Smart & Friday',
      description: 'AI tools, customization, smart products',
      note: 'Use the contact form or email us.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Automation & Development Projects',
      description: 'Web development, AI automation, business solutions',
      note: 'Use the contact form or email us.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        userType: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Contact A2 Pyramid</h1>
              <p>
                Have a question, idea, or project in mind?<br />
                We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info">
          <div className="container">
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="info-content">
                      {info.content}
                    </a>
                  ) : (
                    <p className="info-content">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="container">
            <motion.div
              className="form-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userType">I am a:</label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select...</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="institution">Institution</option>
                      <option value="business">Business / Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message success">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    Please fill in all required fields.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="map-section">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Find Us on Map
            </motion.h2>
            <motion.div
              className="map-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.129674468288!2d85.06636667394548!3d25.612120314772522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e1!3m2!1sen!2sin!4v1765963880210!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* Support Types */}
        <section className="support-types">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How Can We Help You?
            </motion.h2>
            <div className="support-grid">
              {supportTypes.map((support, index) => (
                <motion.div
                  key={index}
                  className="support-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="support-icon">{support.icon}</div>
                  <h3>{support.title}</h3>
                  <p>{support.description}</p>
                  <span className="support-note">{support.note}</span>
                </motion.div>
              ))}
            </div>
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
              <h2>Let's build something meaningful together.</h2>
              <div className="cta-buttons">
                <a href="/platforms" className="btn btn-primary">
                  Explore Our Platforms
                </a>
                <a href="#contact-form" className="btn btn-secondary">
                  <ArrowRight size={20} />
                  Send Us a Message
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactA2Pyramid;