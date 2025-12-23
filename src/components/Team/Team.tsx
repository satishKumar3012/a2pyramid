import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Aditya Apurv',
      role: 'CEO & Founder',
      bio: 'Visionary leader driving innovation in EdTech and AI, focused on transforming education through technology and strategic partnerships.',
      image: 'https://a2pyramid.com/img/aditya.png',
      linkedin: '#'
    },
    {
      name: 'Satish Kumar',
      role: 'CTO',
      bio: 'Technology architect specializing in AI/ML systems, leading technical innovation and scalable platform development.',
      image: 'https://a2pyramid.com/img/satish.PNG',
      linkedin: '#'
    },
    {
      name: 'Keshav Nair',
      role: 'COO',
      bio: 'Operations expert focused on scaling educational platforms and ensuring seamless execution across all business initiatives.',
      image: 'https://a2pyramid.com/img/keshav.PNG',
      linkedin: '#'
    }
  ];

  return (
    <section className="team section" id="team">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Leadership Team</h2>
          <p className="team-subtitle">Meet the visionaries behind A2 Pyramid's success</p>
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                
                <a href={member.linkedin} className="linkedin-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;