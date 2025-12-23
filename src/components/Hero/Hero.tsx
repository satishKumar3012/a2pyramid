import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'AI Classroom'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Teachers and Students'
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Developers Working'
    },
    {
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'AI Dashboard'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero" id="main-content">

      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>
              A2 Pyramid – India's Leading 
              <span className="gradient-text">AI Education & EdTech Platform</span>
            </h1>
            
            <p>
              Transforming education in India through AI-powered learning platforms, 
              connecting teachers with students, and delivering smart automation solutions 
              for educational institutions and businesses.
            </p>

            <div className="hero-actions">
              <a href="/platforms" className="btn btn-primary">
                <ArrowRight size={20} />
                Explore Our Platforms
              </a>
              
              <a href="/youtube" className="btn btn-secondary">
                <Play size={20} />
                Watch on YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;