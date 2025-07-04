import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 1 },
        background: { color: 'red' },
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: ['#2563eb', '#D4B678', '#ffffff'] },
          shape: { type: 'circle' },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.4,
            width: 1,
          },
        },
        detectRetina: true,
      }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticlesBackground;
