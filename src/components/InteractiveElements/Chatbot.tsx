import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';
import './Chatbot.css';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const knowledgeBase = {
    'a2 pyramid': 'A2 Pyramid is India\'s leading AI education and EdTech company. We build smart learning platforms, connect teachers with students, and provide automation solutions for educational institutions and businesses.',
    'edtech': 'Our EdTech platform offers AI, ML, Web Development, and automation courses with industry mentorship, live sessions, and practical projects for students and professionals.',
    'map my teacher': 'Map My Teacher connects students with verified teachers across India. Teachers can create profiles, offer demo classes, and earn through transparent revenue sharing.',
    'ai smart': 'AI Smart provides automated solutions for educational institutes including exam generation, doubt solving, revision planning, and personalized learning support.',
    'friday': 'Friday is our AI-enabled electronics product line designed to respond dynamically, adapt to user behavior, and perform intelligent tasks in real-time.',
    'automation': 'We provide AI automation services, web development, and custom software solutions to streamline business processes and reduce operational costs.',
    'contact': 'You can reach us at +91 9472994483, email a2pyramidedutech@gmail.com, or visit our office at Tilak Nagar Bailey Road, Patna - 800014.',
    'courses': 'We offer courses in AI, Machine Learning, Web Development, and Automation designed for beginners to advanced levels with certifications and career guidance.',
    'demo': 'Yes! You can request demo classes on Map My Teacher or book a consultation for our other platforms. Would you like me to guide you to the contact page?'
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (lowerInput.includes(key.toLowerCase())) {
        return response;
      }
    }

    // Check for user type
    if (lowerInput.includes('student')) {
      return 'Great! As a student, you can explore our EdTech courses, use AI Smart for doubt solving, or find teachers on Map My Teacher. Which platform interests you most?';
    }
    
    if (lowerInput.includes('teacher')) {
      return 'Perfect! Teachers can join Map My Teacher to connect with students, create verified profiles, and earn through our transparent system. Would you like to know about the onboarding process?';
    }
    
    if (lowerInput.includes('business') || lowerInput.includes('institute')) {
      return 'Excellent! We offer AI Smart solutions for educational institutes and automation services for businesses. Our solutions can be customized based on your specific needs. Shall I connect you with our team?';
    }

    // Check for common greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return 'Hello! Welcome to A2 Pyramid. I can help you learn about our AI education platforms, EdTech solutions, and automation services. What would you like to know?';
    }

    // Check for help requests
    if (lowerInput.includes('help') || lowerInput.includes('assist')) {
      return 'I\'m here to help! I can provide information about A2 Pyramid\'s platforms: EdTech courses, Map My Teacher, AI Smart tools, Friday electronics, and automation services. What interests you?';
    }

    return 'I\'d be happy to help! I can provide information about A2 Pyramid\'s platforms, courses, and services. You can also contact our team directly at +91 9472994483 for detailed assistance.';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const currentInput = inputText;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentInput,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(currentInput),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen && !hasShownWelcome) {
            setTimeout(() => {
              const welcomeMessage: Message = {
                id: 'welcome',
                text: 'Hi! I\'m A2 Bot, your AI assistant from A2 Pyramid. I can help you learn about our EdTech platforms, AI Smart tools, Map My Teacher, and automation services. How can I assist you today?',
                isBot: true,
                timestamp: new Date()
              };
              setMessages([welcomeMessage]);
              setHasShownWelcome(true);
            }, 500);
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 z-40 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">A2 Pyramid AI</h4>
                <span className="text-xs text-green-500">Online</span>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <Bot size={12} className="text-primary-600" />
                    </div>
                  )}
                  <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot 
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' 
                      : 'bg-primary-600 text-white'
                  }`}>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot size={12} className="text-primary-600" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me about A2 Pyramid..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button 
                  onClick={handleSendMessage}
                  className="px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;