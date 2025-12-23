import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Computer Science Professor, IIT Delhi',
      platform: 'EdTech Platform',
      rating: 5,
      text: 'A2 Pyramid has transformed how we deliver AI and ML education. The practical approach aligns perfectly with industry needs, making our students job-ready from day one.',
      avatar: 'PS',
      location: 'New Delhi'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Senior Mathematics Teacher',
      platform: 'Map My Teacher',
      rating: 5,
      text: 'Map My Teacher connected me with brilliant students across India. The transparent fee structure and growth opportunities have been exceptional.',
      avatar: 'RK',
      location: 'Mumbai'
    },
    {
      name: 'Ananya Patel',
      role: 'Engineering Student, NIT Surat',
      platform: 'AI Smart',
      rating: 5,
      text: 'AI Smart\'s doubt-solving feature is incredible! It helped me crack my JEE Advanced and now excelling in my B.Tech. The personalized study plans are game-changing.',
      avatar: 'AP',
      location: 'Surat'
    },
    {
      name: 'Vikram Singh',
      role: 'Tech Startup Founder',
      platform: 'Automation Services',
      rating: 5,
      text: 'A2 Pyramid\'s automation solutions scaled our EdTech startup from 1000 to 50,000 users. Their AI-driven approach reduced our operational costs by 60%.',
      avatar: 'VS',
      location: 'Bangalore'
    },
    {
      name: 'Dr. Meera Joshi',
      role: 'Principal, Modern College Pune',
      platform: 'EdTech Platform',
      rating: 5,
      text: 'The comprehensive training programs have revolutionized our curriculum. Our placement rates increased by 40% after implementing A2 Pyramid\'s solutions.',
      avatar: 'MJ',
      location: 'Pune'
    },
    {
      name: 'Arjun Reddy',
      role: 'Software Engineer, TCS',
      platform: 'Friday AI Electronics',
      rating: 5,
      text: 'Friday\'s AI assistant has made my daily workflow incredibly efficient. The voice commands and smart automation features are perfectly suited for Indian work culture.',
      avatar: 'AR',
      location: 'Hyderabad'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Community Says</h2>
          <p className="testimonials-subtitle">Trusted by students, educators, and professionals across India</p>
        </motion.div>

        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-container">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0.7,
                    scale: index === currentIndex ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="testimonial-content">
                    <div className="stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p>"{testimonial.text}"</p>
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="avatar-circle">{testimonial.avatar}</div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <div className="author-meta">
                        <span className="platform-used">{testimonial.platform}</span>
                        <span className="author-location">📍 {testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;