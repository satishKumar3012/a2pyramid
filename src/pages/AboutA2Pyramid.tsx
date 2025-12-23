import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Users, Lightbulb, Shield, BookOpen, Heart } from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './AboutA2Pyramid.css';

const AboutA2Pyramid = () => {
  const platforms = [
    {
      title: 'EdTech & Training',
      description: 'Industry-focused learning in AI, ML, web development, and automation.',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Map My Teacher',
      description: 'A platform connecting students with the right teachers through transparency and trust.',
      icon: <Users size={24} />
    },
    {
      title: 'AI Smart',
      description: 'AI-powered tools for institutes including exam generation, doubt solving, and personalized learning.',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Friday (AI Electronics)',
      description: 'Smart AI-enabled electronic products that respond dynamically and intelligently.',
      icon: <Target size={24} />
    },
    {
      title: 'Automation & Development',
      description: 'Custom web development and AI automation solutions for businesses and institutions.',
      icon: <Shield size={24} />
    }
  ];

  const steps = [
    {
      title: 'Identify Real-World Problems',
      description: 'Understanding gaps in education, training, and automation.',
      icon: <Eye size={24} />
    },
    {
      title: 'Build AI-Driven Solutions',
      description: 'Creating intelligent, scalable, and reliable systems.',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Integrate Education + Technology',
      description: 'Making learning practical, applied, and industry-ready.',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Scale Through Platforms & Partnerships',
      description: 'Growing impact through multiple platforms and collaborations.',
      icon: <Target size={24} />
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology.',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparent and ethical practices.',
      icon: <Shield size={24} />
    },
    {
      title: 'Practical Learning',
      description: 'Focus on real-world applications and industry relevance.',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Trust & Transparency',
      description: 'Open communication and reliable partnerships.',
      icon: <Heart size={24} />
    }
  ];

  const team = [
    {
      name: 'Aditya Apurv',
      role: 'CEO – Vision & Strategy',
      bio: 'Leading A2 Pyramid\'s strategic direction and innovation in AI education.',
      image: 'https://a2pyramid.com/img/aditya.png'
    },
    {
      name: 'Satish Kumar',
      role: 'CTO – Technology & AI Architecture',
      bio: 'Architecting scalable AI solutions and technical infrastructure.',
      image: 'https://a2pyramid.com/img/satish.PNG'
    },
    {
      name: 'Keshav Nair',
      role: 'COO – Operations & Execution',
      bio: 'Ensuring seamless operations and platform execution excellence.',
      image: 'https://a2pyramid.com/img/keshav.PNG'
    }
  ];

  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>About A2 Pyramid</h1>
              <p>
                Building the future of education, artificial intelligence, and automation 
                through innovation and real-world solutions.
              </p>
              <a href="/platforms" className="btn btn-primary">
                <ArrowRight size={20} />
                Explore Our Platforms
              </a>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="who-we-are">
          <div className="container">
            <motion.div
              className="content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Who We Are</h2>
              <p>
                A2 Pyramid is an innovation-driven education and technology company focused on 
                creating AI-powered platforms, smart automation systems, and practical learning solutions.
              </p>
              <p>
                We work at the intersection of education, artificial intelligence, and real-world 
                problem solving, empowering students, teachers, institutions, and businesses to 
                grow in a digital-first world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="vision-mission">
          <div className="container">
            <div className="cards-grid">
              <motion.div
                className="card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>Our Vision</h3>
                <p>
                  To build a future where education and technology work together to create 
                  smarter learning, better opportunities, and sustainable growth.
                </p>
              </motion.div>
              <motion.div
                className="card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>Our Mission</h3>
                <p>
                  To design practical, AI-driven platforms and solutions that solve real 
                  problems in education, automation, and digital transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How A2 Pyramid Works */}
        <section className="how-we-work">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How A2 Pyramid Works
            </motion.h2>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="what-we-build">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What We Build
            </motion.h2>
            <div className="platforms-grid">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="platform-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="platform-icon">{platform.icon}</div>
                  <h3>{platform.title}</h3>
                  <p>{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose A2 Pyramid */}
        <section className="why-choose">
          <div className="container">
            <motion.div
              className="content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Why Choose A2 Pyramid</h2>
              <div className="highlights">
                <div className="highlight">Practical-first approach</div>
                <div className="highlight">AI at the core</div>
                <div className="highlight">Multi-platform ecosystem</div>
                <div className="highlight">Transparent systems</div>
                <div className="highlight">Long-term vision</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="our-values">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="leadership-team">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Leadership Team
            </motion.h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Ready to build the future with A2 Pyramid?</h2>
              <div className="cta-buttons">
                <a href="/platforms" className="btn btn-primary">
                  Explore Platforms
                </a>
                <a href="/contact" className="btn btn-secondary">
                  Contact Us
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

export default AboutA2Pyramid;