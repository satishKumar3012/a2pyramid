import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './YouTube.css';

const YouTube = () => {
  return (
    <section className="youtube section" id="youtube">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">See A2 Pyramid in Action</h2>
          <p className="youtube-subtitle">
            Watch our teaching sessions, platform demos, and company vision
          </p>
        </motion.div>

        <motion.div
          className="laptop-mockup"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="laptop-frame">
            <div className="laptop-screen">
              <div className="video-placeholder">
                <div className="play-button">
                  <Play size={48} />
                </div>
                <div className="video-overlay">
                  <h3>A2 Pyramid Platform Overview</h3>
                  <p>Discover how our platforms are transforming education and technology</p>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </motion.div>

        <div className="youtube-features">
          <motion.div
            className="feature-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="feature-item">
              <h4>Teaching Sessions</h4>
              <p>Live and recorded educational content</p>
            </div>
            <div className="feature-item">
              <h4>Platform Demos</h4>
              <p>Interactive walkthroughs of our tools</p>
            </div>
            <div className="feature-item">
              <h4>Product Explainers</h4>
              <p>Detailed feature demonstrations</p>
            </div>
            <div className="feature-item">
              <h4>Company Vision</h4>
              <p>Our mission and future roadmap</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;