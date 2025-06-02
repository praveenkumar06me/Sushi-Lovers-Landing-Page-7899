import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sushi-dark mb-6 font-japanese">
              The Art of <span className="text-sushi-red">Sushi</span>
            </h2>
            <p className="text-lg text-sushi-gray mb-6">
              For over 20 years, Sakura Sushi has been dedicated to bringing authentic Japanese flavors 
              to our community. Our master chefs, trained in traditional techniques, create each piece 
              with precision and passion.
            </p>
            <p className="text-lg text-sushi-gray mb-8">
              We source only the finest ingredients, from premium fish flown in daily from Japan's 
              Tsukiji market to perfectly seasoned sushi rice prepared using time-honored methods.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sushi-red mb-2">20+</div>
                <div className="text-sushi-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sushi-red mb-2">5</div>
                <div className="text-sushi-gray">Master Chefs</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sushi Chef"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-sushi-red text-white p-4 rounded-full shadow-lg"
            >
              <span className="text-2xl">🍣</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-sushi-orange text-white p-4 rounded-full shadow-lg"
            >
              <span className="text-2xl">🥢</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;