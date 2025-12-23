import { motion } from 'framer-motion';
import { Brain, Users, Bot, Zap, Settings, ArrowRight } from 'lucide-react';
import './Platforms.css';

const Platforms = () => {
  const platforms = [
    {
      icon: <Brain size={40} />,
      title: 'EdTech / Training Platform',
      description: 'AI, ML, Web Development courses with college training programs and industry-oriented learning.',
      features: ['AI-powered learning', 'Live + recorded sessions', 'Industry mentors'],
      color: '#2563eb'
    },
    {
      icon: <Users size={40} />,
      title: 'Map My Teacher',
      description: 'Connect students with verified teachers through smart discovery and transparent pricing.',
      features: ['Smart teacher discovery', 'Revenue-sharing model', 'Growth partner ecosystem'],
      color: '#059669'
    },
    {
      icon: <Bot size={40} />,
      title: 'AI Smart',
      description: 'AI-powered educational tools for institutes including exam generation and doubt solving.',
      features: ['Exam generation', 'Doubt solving', 'Revision planners'],
      color: '#7c3aed'
    },
    {
      icon: <Zap size={40} />,
      title: 'Friday – AI Electronics',
      description: 'AI-enabled electronic devices with smart assistants and dynamic real-time responses.',
      features: ['Smart assistants', 'Real-time responses', 'Hardware + software intelligence'],
      color: '#dc2626'
    },
    {
      icon: <Settings size={40} />,
      title: 'Automation & Development',
      description: 'Custom software solutions, AI automation, and business workflow optimization.',
      features: ['Web development', 'AI automation', 'Workflow optimization'],
      color: '#ea580c',
      cta: 'Submit Your Project Requirement'
    }
  ];

  return (
    <section className="platforms section" id="platforms">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 mb-6"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/mmt-sales', '_self')}
                >
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-xl">Sales Career Opportunities
                    <br/>
                    Apply Now
                  </span>
                </motion.button>
                
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    Sales Professional Opportunities
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our subsidiary{' '}
                    <a 
                      href="https://mmt.a2pyramid.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-bold hover:underline text-xl"
                    >
                      Map My Teacher
                    </a>
                    {' '}is seeking experienced <span className="font-semibold text-blue-600">Sales Professionals</span> to drive growth and expand our market presence.
                  </p>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Professional Benefits:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Competitive salary with performance-based incentives
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Leadership opportunities in EdTech sector
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Professional development & training programs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional team collaboration" 
                    className="rounded-xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">Be Part of Innovation</p>
                    <p className="text-sm opacity-90">Shape the future of education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Education Platforms & EdTech Solutions
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered learning and automation platforms for students, teachers, and businesses in India
            </p>
          </div>
        </motion.div>

        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              className="platform-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="platform-icon" style={{ color: platform.color }}>
                {platform.icon}
              </div>
              
              <h3>{platform.title}</h3>
              <p>{platform.description}</p>
              
              <ul className="platform-features">
                {platform.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <button 
                className="platform-cta"
                onClick={() => {
                  if (platform.title === 'Map My Teacher') {
                    window.open('https://mmt.a2pyramid.com/', '_blank', 'noopener,noreferrer');
                  } else if (platform.title === 'EdTech / Training Platform') {
                    window.location.href = '/edtech';
                  } else if (platform.title === 'AI Smart') {
                    window.open('https://demo.a2pyramid.com/', '_blank', 'noopener,noreferrer');
                  } else if (platform.title === 'Friday – AI Electronics') {
                    window.location.href = '/friday';
                  } else if (platform.title === 'Automation & Development') {
                    window.open('https://forms.gle/sERK2XhzdfAwLfJr8', '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {platform.cta || 'Learn More'}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;