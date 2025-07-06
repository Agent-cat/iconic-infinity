import { useEffect, useState } from "react";
import iconic from "../assets/iconic1.png"
const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          onLoadingComplete?.();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // Update every 50ms for smoother animation

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#10162A] z-[9999] flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Logo-based Loading Animation */}
        <div className="w-48 h-48 mb-8 relative">
          <div className="relative w-full h-full">
            {/* Main logo container with rotating border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FFD600] border-r-[#0057FF] animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#FFD600] border-l-[#0057FF] animate-spin animation-reverse"></div>
            
            {/* Logo in center */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#FFD600]/20 to-[#0057FF]/20 p-6 animate-pulse">
              <img 
                src={iconic}
                alt="ICONIC Logo" 
                className="w-full h-full scale-110 object-contain filter brightness-110"
              />
            </div>
            
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#FFD600] rounded-full -translate-x-1/2 -translate-y-1"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#0057FF] rounded-full -translate-x-1/2 translate-y-1"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-[#FFD600] font-display font-bold text-3xl animate-pulse">
          ICONIC INFINITY GROUP
        </div>
        <div className="mt-3 text-[#FFD600]/70 text-lg animate-bounce">
          Loading Excellence...
        </div>
        
        {/* Progress indicator */}
        <div className="mt-6 w-64 h-1 bg-[#334155]/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0057FF] to-[#FFD600] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
