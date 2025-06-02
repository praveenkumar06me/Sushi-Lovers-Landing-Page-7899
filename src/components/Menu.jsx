import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('rolls');

  const categories = [
    { id: 'rolls', name: 'Specialty Rolls' },
    { id: 'nigiri', name: 'Nigiri & Sashimi' },
    { id: 'appetizers', name: 'Appetizers' }
  ];

  const menuItems = {
    rolls: [
      { name: 'Dragon Roll', description: 'Eel, cucumber, avocado topped with sliced avocado', price: '$18' },
      { name: 'Rainbow Roll', description: 'California roll topped with assorted fresh fish', price: '$16' },
      { name: 'Spider Roll', description: 'Soft shell crab, cucumber, avocado, spicy mayo', price: '$14' },
      { name: 'Philadelphia Roll', description: 'Salmon, cream cheese, cucumber', price: '$12' }
    ],
    nigiri: [
      { name: 'Salmon Nigiri', description: 'Fresh Atlantic salmon over seasoned rice', price: '$6' },
      { name: 'Tuna Nigiri', description: 'Premium bluefin tuna over seasoned rice', price: '$8' },
      { name: 'Yellowtail Nigiri', description: 'Fresh yellowtail over seasoned rice', price: '$7' },
      { name: 'Eel Nigiri', description: 'Grilled eel with sweet sauce over rice', price: '$7' }
    ],
    appetizers: [
      { name: 'Gyoza', description: 'Pan-fried pork dumplings with dipping sauce', price: '$8' },
      { name: 'Edamame', description: 'Steamed young soybeans with sea salt', price: '$6' },
      { name: 'Tempura', description: 'Light and crispy battered vegetables', price: '$10' },
      { name: 'Miso Soup', description: 'Traditional soybean paste soup with tofu', price: '$4' }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-sushi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sushi-dark mb-4 font-japanese">
            Our <span className="text-sushi-red">Menu</span>
          </h2>
          <p className="text-xl text-sushi-gray max-w-2xl mx-auto">
            Explore our carefully curated selection of traditional and contemporary sushi
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`mx-2 mb-4 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-sushi-red to-sushi-orange text-white shadow-lg'
                  : 'bg-white text-sushi-gray hover:text-sushi-red'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-sushi-dark">{item.name}</h3>
                <span className="text-xl font-bold text-sushi-red">{item.price}</span>
              </div>
              <p className="text-sushi-gray">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;