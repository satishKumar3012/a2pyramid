import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap, Users, Bot } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: 'EdTech & Training',
      icon: <GraduationCap size={20} />,
      faqs: [
        {
          question: 'What courses are available on the EdTech platform?',
          answer: 'We offer courses in AI, Machine Learning, Web Development, Automation, and other industry-relevant technologies designed for students and working professionals.'
        },
        {
          question: 'Are certifications provided?',
          answer: 'Yes, certifications are provided after successful course completion and are aligned with industry standards.'
        },
        {
          question: 'What is the mode of learning?',
          answer: 'Learning is flexible and includes live sessions, recorded lectures, hands-on projects, and practical assignments.'
        },
        {
          question: 'Are the courses suitable for beginners?',
          answer: 'Yes, our courses are structured from beginner to advanced levels, making them suitable even for learners with no prior technical background.'
        },
        {
          question: 'Do the courses include real-world projects?',
          answer: 'Yes, every course includes practical projects that simulate real-world industry scenarios.'
        },
        {
          question: 'Is placement or career guidance provided?',
          answer: 'We provide career guidance, resume support, and interview preparation to help learners become job-ready.'
        }
      ]
    },
    {
      category: 'Map My Teacher',
      icon: <Users size={20} />,
      faqs: [
        {
          question: 'How does teacher onboarding work?',
          answer: 'Teachers can register, create a verified profile, list their subjects, teaching style, and availability on the platform.'
        },
        {
          question: 'How are payments handled?',
          answer: 'Payments are managed securely through integrated payment systems with transparent revenue sharing between teachers and the platform.'
        },
        {
          question: 'Can I take demo classes?',
          answer: 'Yes, students can request demo classes before enrolling to ensure the teaching style matches their expectations.'
        },
        {
          question: 'Is Map My Teacher available for online and offline teaching?',
          answer: 'Yes, teachers can offer online classes, offline classes, or both, depending on their preference.'
        },
        {
          question: 'How does Map My Teacher help teachers grow?',
          answer: 'The platform helps teachers reach more students, build their brand, and earn through a structured and transparent system.'
        },
        {
          question: 'Are teacher profiles visible to the public?',
          answer: 'Yes, teacher profiles can be shared publicly so students can explore courses and teacher details easily.'
        }
      ]
    },
    {
      category: 'AI Smart & Friday',
      icon: <Bot size={20} />,
      faqs: [
        {
          question: 'How does AI Smart help educational institutes?',
          answer: 'AI Smart automates tasks like doubt solving, exam paper generation, revision planning, and personalized learning support.'
        },
        {
          question: 'What makes Friday electronics special?',
          answer: 'Friday devices are AI-enabled and designed to respond dynamically, adapt to user behavior, and perform intelligent tasks in real time.'
        },
        {
          question: 'Is my data secure with AI platforms?',
          answer: 'Yes, data security and privacy are a top priority, and all platforms follow secure data handling practices.'
        },
        {
          question: 'Can AI Smart be customized for institutions?',
          answer: 'Yes, AI Smart solutions can be customized based on the needs of schools, colleges, and coaching institutes.'
        },
        {
          question: 'Do Friday products require technical knowledge to use?',
          answer: 'No, Friday products are designed to be user-friendly and easy to operate without technical expertise.'
        },
        {
          question: 'Is support provided after deployment?',
          answer: 'Yes, we provide continuous support, updates, and maintenance for both AI Smart platforms and Friday products.'
        }
      ]
    }
  ];

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Frequently Asked Questions - A2 Pyramid AI Education</h2>
          <p className="faq-subtitle">Get answers about our AI education platforms, EdTech solutions, and automation services in India</p>
        </motion.div>

        <div className="faq-categories">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="faq-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">
                <span className="category-icon">{category.icon}</span>
                {category.category}
              </h3>
              
              <div className="faq-items">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="faq-item">
                      <button
                        className="faq-question"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          className={`chevron ${isOpen ? 'open' : ''}`}
                          size={20}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            className="faq-answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;