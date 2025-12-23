import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Youtube, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Platforms',
      links: [
        { name: 'EdTech Training', href: 'https://a2pyramid.com/#/edutech' },
        { name: 'Map My Teacher', href: 'https://mmt.a2pyramid.com/' },
        { name: 'AI Smart', href: 'https://a2pyramid.com/#/ai-smart-class' },
        { name: 'Friday', href: '/friday' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'YouTube Channel', href: 'https://www.youtube.com/@mapmyteacher' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '/contact' }
      ]
    }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: 'a2pyramidedutech@gmail.com', href: 'mailto:a2pyramidedutech@gmail.com' },
    { icon: <Phone size={16} />, text: '+91 947299483', href: 'tel:+91947299483' },
    { icon: <MapPin size={16} />, text: 'Tilak Nagar Bailey Road, Patna - 800014' }
  ];

  const socialLinks = [
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@mapmyteacher', color: '#ff0000' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/a2-pyramid-edutech-809886214/', color: '#0077b5' }
  ];

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <img src="/logo.png" alt="A2 Pyramid" className="footer-logo" />
              <h3>A2 Pyramid</h3>
            </div>
<p>India's leading AI education and EdTech company, transforming learning through innovative technology solutions.</p>
            
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  {info.icon}
                  {info.href ? (
                    <a href={info.href} className="contact-link">{info.text}</a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="social-link"
                  style={{ '--social-color': social.color } as React.CSSProperties}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 All Rights Reserved to A2 Pyramid Edutech Pvt. Ltd.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;