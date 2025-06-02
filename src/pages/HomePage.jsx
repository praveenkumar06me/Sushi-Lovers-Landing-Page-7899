import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedSushi from '../components/FeaturedSushi';
import About from '../components/About';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedSushi />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;