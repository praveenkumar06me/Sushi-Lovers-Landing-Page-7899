import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaYelp, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-sushi-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sushi-red to-sushi-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">桜</span>
              </div>
              <span className="text-2xl font-bold font-japanese">Sakura Sushi</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience authentic Japanese cuisine crafted with passion and tradition. 
              Every bite tells a story of culinary excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Contact', 'Reservations'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-sushi-orange transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Sakura Street</p>
              <p>Downtown, City 12345</p>
              <p>+1 (555) 123-4567</p>
              <p>info@sakurasushi.com</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Sakura Sushi. All rights reserved. Made with ❤️ for sushi lovers.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;