
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Verticalcards= ({
  title,
  tagline,
  description,
  imageUrl,
  link,
  index,
}) => {
  // Alternate the layout for even and odd indexes
  const isEven = index % 2 === 0;
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    const currentElement = document.getElementById(`vertical-card-${index}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index]);

  return (
    <div
      id={`vertical-card-${index}`}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } bg-[#0F172A]/50 dark:bg-[#1E293B]/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${isEven ? -100 : 100}px)`,
        transition: 'opacity 1s, transform 1s',
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="md:w-1/2 relative overflow-hidden group h-64 md:h-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 dark:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white z-10">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-[#FFD700] italic">{tagline}</p>
        </div>
      </div>
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-[#FFD700]">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
        </div>
        <button
          asChild
          variant="outline"
          className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 self-start transition-colors duration-300"
        >
          <Link to={link}>Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default Verticalcards;
