import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const supportNumbers = [
    { number: '919472994483', label: 'Support 1' },
    { number: '919074303904', label: 'Support 2' }
  ];

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {supportNumbers.map((support, index) => (
        <motion.button
          key={support.number}
          className="whatsapp-button group relative"
          onClick={() => handleWhatsAppClick(support.number)}
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Contact ${support.label} on WhatsApp`}
        >
          <MessageCircle size={24} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {support.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default WhatsAppButton;