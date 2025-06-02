import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      color: 'text-sushi-red'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      info: '123 Sakura Street, Downtown',
      color: 'text-sushi-orange'
    },
    {
      icon: FaClock,
      title: 'Hours',
      info: 'Mon-Sun: 11AM - 10PM',
      color: 'text-sushi-green'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'info@sakurasushi.com',
      color: 'text-sushi-red'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-sushi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sushi-dark mb-4 font-japanese">
            Visit <span className="text-sushi-red">Us</span>
          </h2>
          <p className="text-xl text-sushi-gray max-w-2xl mx-auto">
            Come experience the finest sushi in a warm, welcoming atmosphere
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className={`${item.color} text-2xl`}>
                  <item.icon />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sushi-dark">{item.title}</h3>
                  <p className="text-sushi-gray">{item.info}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sushi-red to-sushi-orange text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Make Reservation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Map/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant Interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Experience Sakura</h3>
                <p className="text-lg">Where tradition meets innovation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;