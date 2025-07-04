import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Verticalcards = ({
  title,
  tagline,
  description,
  imageUrl,
  link,
  index,
}) => {
  const isEven = index % 2 === 0;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const currentElement = document.getElementById(`vertical-card-${index}`);
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [index]);

  return (
    <div
      id={`vertical-card-${index}`}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } w-full max-w-4xl mx-auto bg-[#22223b] rounded-3xl overflow-hidden shadow-2xl z-50 border border-[#23263a] mb-16 transition-all duration-500`}
      style={{
        opacity: isVisible ? 1 : 1,
        transform: isVisible
          ? "translateX(0)"
          : `translateX(${isEven ? -100 : 100}px)`,
        transition: "opacity 1s, transform 1s",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="md:w-1/2 relative overflow-hidden group h-80 md:h-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full z-50 h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 dark:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white z-10">
          <h3 className="text-2xl font-extrabold drop-shadow-lg">{title}</h3>
          <p className="text-[#FFD700] italic font-medium">{tagline}</p>
        </div>
      </div>
      <div className="md:w-1/2 p-12 flex flex-col justify-between bg-[#2a2a40]">
        <div>
          <h3 className="text-3xl font-bold mb-3 text-[#FFD700] drop-shadow-lg">
            {title}
          </h3>
          <p className="text-gray-200 mb-8 leading-relaxed">{description}</p>
        </div>
        <Link
          to={link}
          className="inline-block px-8 py-3 rounded-lg border-2 border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#FFD700]/20 hover:text-white transition-colors duration-300 shadow-md"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Verticalcards;
