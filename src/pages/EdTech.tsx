import { motion } from 'framer-motion';
import './EdTech.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { 
  Code, 
  Brain, 
  Server, 
  BarChart3, 
  Cog, 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  Briefcase,
  Download,
  Phone,
  ArrowRight,
  Star,
  Target,
  BookOpen,
  Zap
} from 'lucide-react';

const EdTech = () => {
  const programs = [
    {
      id: 'web-dev',
      icon: <Code size={32} />,
      name: 'Web Development Training',
      description: 'Full-stack development with modern frameworks and industry practices',
      duration: '4-6 Months',
      eligibility: 'Basic Computer Knowledge',
      price: '₹10,000',
      color: '#2563eb',
      popular: false
    },
    {
      id: 'ai-ml',
      icon: <Brain size={32} />,
      name: 'AI / ML Training',
      description: 'Machine Learning and AI development for real-world applications',
      duration: '6-8 Months',
      eligibility: 'Minimum 2 Years Experience Required',
      price: '₹30,000',
      color: '#7c3aed',
      popular: true
    },
    {
      id: 'devops',
      icon: <Server size={32} />,
      name: 'DevOps Training',
      description: 'Infrastructure automation and deployment pipeline management',
      duration: '5-7 Months',
      eligibility: 'Minimum 2 Years Experience Required',
      price: '₹45,000',
      color: '#dc2626',
      popular: false
    },
    {
      id: 'data-analytics',
      icon: <BarChart3 size={32} />,
      name: 'Data Analytics Training',
      description: 'Business intelligence and data-driven decision making',
      duration: '3-5 Months',
      eligibility: 'Basic Mathematics & Excel',
      price: '₹15,000',
      color: '#059669',
      popular: false
    },
    {
      id: 'automation',
      icon: <Cog size={32} />,
      name: 'Automation Testing Training',
      description: 'Test automation frameworks and quality assurance practices',
      duration: '3-4 Months',
      eligibility: 'Basic Programming Knowledge',
      price: '₹10,000',
      color: '#ea580c',
      popular: false
    }
  ];

  const syllabusData = {
    'web-dev': {
      modules: [
        {
          title: 'Data Structures & Algorithms (DSA)',
          topics: ['Arrays, Strings, Linked Lists', 'Stacks, Queues', 'Trees & Graphs', 'Sorting & Searching', 'Time & Space Complexity', 'Problem-solving sessions']
        },
        {
          title: 'Frontend Development',
          topics: ['HTML5 & Semantic Markup', 'CSS3 & Modern Styling', 'JavaScript & ES6+', 'React & Component Architecture', 'State Management', 'Responsive Design']
        },
        {
          title: 'Backend Development',
          topics: ['Node.js & Express', 'RESTful APIs', 'Database Design', 'Authentication & Security', 'Server Deployment', 'Performance Optimization']
        },
        {
          title: 'Full-Stack Projects',
          topics: ['E-commerce Platform', 'Social Media App', 'Portfolio Website', 'Real-time Chat Application', 'Code Reviews', 'Industry Best Practices']
        }
      ]
    },
    'ai-ml': {
      modules: [
        {
          title: 'Data Structures & Algorithms (DSA)',
          topics: ['Arrays, Strings, Linked Lists', 'Stacks, Queues', 'Trees & Graphs', 'Sorting & Searching', 'Time & Space Complexity', 'Problem-solving sessions']
        },
        {
          title: 'Python for AI',
          topics: ['Python Fundamentals', 'NumPy & Pandas', 'Data Manipulation', 'Scientific Computing', 'Libraries & Frameworks', 'Code Optimization']
        },
        {
          title: 'Machine Learning',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Training & Evaluation', 'Feature Engineering', 'Cross-validation', 'Hyperparameter Tuning']
        },
        {
          title: 'Industry Applications',
          topics: ['Computer Vision', 'Natural Language Processing', 'Recommendation Systems', 'Predictive Analytics', 'Model Deployment', 'MLOps Practices']
        }
      ]
    },
    'devops': {
      modules: [
        {
          title: 'Data Structures & Algorithms (DSA)',
          topics: ['Arrays, Strings, Linked Lists', 'Stacks, Queues', 'Trees & Graphs', 'Sorting & Searching', 'Time & Space Complexity', 'Problem-solving sessions']
        },
        {
          title: 'Infrastructure Fundamentals',
          topics: ['Linux Administration', 'Networking Concepts', 'System Architecture', 'Security Practices', 'Performance Monitoring', 'Troubleshooting']
        },
        {
          title: 'CI/CD & Automation',
          topics: ['Git & Version Control', 'Jenkins & Pipelines', 'Docker & Containerization', 'Kubernetes Orchestration', 'Infrastructure as Code', 'Automated Testing']
        },
        {
          title: 'Cloud & Deployment',
          topics: ['AWS/Azure Basics', 'Cloud Architecture', 'Monitoring & Logging', 'Scalability Planning', 'Disaster Recovery', 'Cost Optimization']
        }
      ]
    },
    'data-analytics': {
      modules: [
        {
          title: 'Data Structures & Algorithms (DSA)',
          topics: ['Arrays, Strings, Linked Lists', 'Stacks, Queues', 'Trees & Graphs', 'Sorting & Searching', 'Time & Space Complexity', 'Problem-solving sessions']
        },
        {
          title: 'Data Fundamentals',
          topics: ['Excel Advanced Functions', 'Data Cleaning Techniques', 'Statistical Analysis', 'Data Types & Formats', 'Quality Assessment', 'Data Governance']
        },
        {
          title: 'Analytics Tools',
          topics: ['SQL for Data Analysis', 'Python for Analytics', 'Tableau/Power BI', 'Data Visualization', 'Dashboard Creation', 'Report Automation']
        },
        {
          title: 'Business Analytics',
          topics: ['KPI Development', 'Business Intelligence', 'Predictive Modeling', 'Market Analysis', 'Customer Segmentation', 'ROI Measurement']
        }
      ]
    },
    'automation': {
      modules: [
        {
          title: 'Data Structures & Algorithms (DSA)',
          topics: ['Arrays, Strings, Linked Lists', 'Stacks, Queues', 'Trees & Graphs', 'Sorting & Searching', 'Time & Space Complexity', 'Problem-solving sessions']
        },
        {
          title: 'Testing Fundamentals',
          topics: ['Software Testing Principles', 'Test Case Design', 'Bug Lifecycle', 'Quality Assurance', 'Testing Methodologies', 'Documentation Standards']
        },
        {
          title: 'Automation Frameworks',
          topics: ['Selenium WebDriver', 'TestNG/JUnit', 'Page Object Model', 'Data-Driven Testing', 'Keyword-Driven Testing', 'Hybrid Frameworks']
        },
        {
          title: 'CI/CD Integration',
          topics: ['Jenkins Integration', 'Git Version Control', 'Automated Reporting', 'Continuous Testing', 'Performance Testing', 'API Testing']
        }
      ]
    }
  };

  const benefits = [
    {
      icon: <Target size={24} />,
      title: 'Industry-Aligned Curriculum',
      description: 'Courses designed with current industry requirements and emerging technologies'
    },
    {
      icon: <Star size={24} />,
      title: 'Affordable Pricing',
      description: 'Transparent, competitive pricing with flexible payment options'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Real Project Exposure',
      description: 'Work on live projects with industry-standard tools and practices'
    },
    {
      icon: <Award size={24} />,
      title: 'Certification & Internship',
      description: 'Industry-recognized certificates and internship opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32 mt-16 lg:mt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Industry-Ready EdTech Training
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Master real-world skills with corporate-style curriculum, internship opportunities, and industry certification
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Programs
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  Talk to Career Advisor
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Training Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of industry-focused training programs designed for career advancement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className={`relative bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${program.popular ? 'border-yellow-400' : 'border-transparent hover:border-blue-200'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${program.color}20`, color: program.color }}>
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {program.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Eligibility: {program.eligibility}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{ color: program.color }}>
                    {program.price}
                  </div>
                  <button 
                    className="px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                    style={{ backgroundColor: program.color, color: 'white' }}
                    onClick={() => {
                      const routeMap = {
                        'web-dev': '/edtech/web-dev',
                        'ai-ml': '/edtech/ai-ml', 
                        'devops': '/edtech/devops',
                        'data-analytics': '/edtech/data-analytics',
                        'automation': '/edtech/automation'
                      };
                      window.location.href = routeMap[program.id];
                    }}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Training Model */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Corporate-Style Training Environment
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience professional development in an environment that mirrors real industry practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={32} />,
                title: 'Live Instructor-Led Training',
                description: 'Interactive sessions with industry experts and real-time doubt resolution'
              },
              {
                icon: <Cog size={32} />,
                title: 'Industry-Standard Tools',
                description: 'Work with the same tools and workflows used in top tech companies'
              },
              {
                icon: <CheckCircle size={32} />,
                title: 'Code Reviews & Mentorship',
                description: 'Professional code review process with personalized mentorship'
              },
              {
                icon: <Zap size={32} />,
                title: 'Agile Project-Based Learning',
                description: 'Learn through real projects using agile methodologies and best practices'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship & Certification */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Internship, Certification & Career Support
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {[
                  {
                    icon: <Award size={32} />,
                    title: 'Industry Certification',
                    description: 'Receive recognized certificates upon successful completion'
                  },
                  {
                    icon: <Briefcase size={32} />,
                    title: 'Paid Live Projects',
                    description: 'Work on real client projects and earn while you learn'
                  },
                  {
                    icon: <Target size={32} />,
                    title: 'Resume-Ready Experience',
                    description: 'Build a portfolio with real-world project experience'
                  },
                  {
                    icon: <Users size={32} />,
                    title: 'Corporate Exposure',
                    description: 'Direct interaction with industry professionals and mentors'
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 flex justify-center text-blue-200">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose A2 Pyramid EdTech
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of professionals who have advanced their careers with our industry-focused training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl mb-12 text-gray-300">
                Join our industry-leading training programs and take the next step in your professional journey
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Syllabus
                </motion.button>
                <motion.button
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  Speak with Career Advisor
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EdTech;