import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ParticlesBackground from '../components/ParticlesBackground';
import InnovationSection from '../components/InnovationSection';
import WhyChooseSection from '../components/WhyChooseSection';

const Home = () => {
  return (
    <div className="w-full">
      <ParticlesBackground/>
      <Hero />
      <AboutSection />
      <InnovationSection />
      <WhyChooseSection />
    </div>
  );
};

export default Home;
