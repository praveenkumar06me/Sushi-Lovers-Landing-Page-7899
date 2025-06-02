import React from 'react';
import { motion } from 'framer-motion';

const FeaturedSushi = () => {
  const featuredItems = [
    {
      name: 'Dragon Roll',
      description: 'Eel, cucumber, avocado topped with sliced avocado',
      price: '$18',
      image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Salmon Nigiri',
      description: 'Fresh Atlantic salmon over seasoned rice',
      price: '$12',
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Tuna Sashimi',
      description: 'Premium bluefin tuna, sliced to perfection',
      price: '$22',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="py-20 bg-sushi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sushi-dark mb-4 font-japanese">
            Featured <span className="text-sushi-red">Sushi</span>
          </h2>
          <p className="text-xl text-sushi-gray max-w-2xl mx-auto">
            Discover our chef's special selections, crafted with the finest ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-sushi-dark">{item.name}</h3>
                  <span className="text-2xl font-bold text-sushi-red">{item.price}</span>
                </div>
                <p className="text-sushi-gray mb-4">{item.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-sushi-red to-sushi-orange text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSushi;