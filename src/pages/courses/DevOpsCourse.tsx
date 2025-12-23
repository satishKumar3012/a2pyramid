import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { 
  Server, 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  ShoppingCart,
  Download,
  Phone
} from 'lucide-react';

const DevOpsCourse = () => {
  const courseData = {
    id: 'devops',
    icon: <Server size={48} />,
    name: 'DevOps Training',
    description: 'Infrastructure automation and deployment pipeline management',
    duration: '5-7 Months',
    eligibility: 'Minimum 2 Years Experience Required',
    price: '₹45,000',
    color: '#dc2626',
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
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20 lg:py-32 mt-16 lg:mt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                  {courseData.icon}
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {courseData.name}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-red-100 leading-relaxed">
                {courseData.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <Clock size={32} className="mx-auto mb-4 text-red-200" />
                <h3 className="text-lg font-semibold mb-2">Duration</h3>
                <p className="text-red-100">{courseData.duration}</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <Users size={32} className="mx-auto mb-4 text-red-200" />
                <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                <p className="text-red-100">{courseData.eligibility}</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <Award size={32} className="mx-auto mb-4 text-red-200" />
                <h3 className="text-lg font-semibold mb-2">Price</h3>
                <p className="text-2xl font-bold text-white">{courseData.price}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={20} />
                Buy Now - {courseData.price}
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-900 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Syllabus
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Curriculum
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courseData.modules.map((module, moduleIndex) => (
              <motion.div
                key={moduleIndex}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: moduleIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                  <BookOpen size={24} style={{ color: courseData.color }} />
                  {module.title}
                </h4>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Master DevOps Engineering?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart size={20} />
                  Enroll Now - {courseData.price}
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-900 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
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
      
      <Footer />
    </div>
  );
};

export default DevOpsCourse;