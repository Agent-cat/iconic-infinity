import React, { useState } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ParticlesBackground from '../components/ParticlesBackground';
import InnovationSection from '../components/InnovationSection';
import WhyChooseSection from '../components/WhyChooseSection';
import LoadingScreen from '../components/LoadingScreen';
import VerticalsSection from '../components/VerticalsSection';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-black">
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      {!isLoading && (
        <>
          <ParticlesBackground/>
          <Hero />
          <AboutSection />
          <VerticalsSection />
          <InnovationSection />
          <WhyChooseSection />
        </>
      )}
    </div>
  );
};

export default Home;
