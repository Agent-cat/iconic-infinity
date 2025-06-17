import { useEffect, useState } from "react";

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
    <div className="fixed inset-0 bg-iconic-dark z-[9999] flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Modern Loading Animation */}
        <div className="w-32 h-32 mb-8 relative">
          <div className="relative w-full h-full">
            {/* Outer ring with gradient */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-iconic-gold border-r-iconic-blue animate-spin"></div>
            
            {/* Inner ring with reverse animation */}
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-iconic-gold border-l-iconic-blue animate-spin animation-reverse"></div>
            
            {/* Center logo with glow effect */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-iconic-gold/20 to-iconic-blue/20 p-4 animate-pulse">
              <img 
                src="/4fa324e0-d92d-45ae-92ab-42b0e8a621a1.png" 
                alt="ICONIC Logo" 
                className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
              />
            </div>
            
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-iconic-gold"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 90}deg) translateX(40px)`,
                    animation: `particle-${i} 2s infinite ease-in-out`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-iconic-gold font-display font-bold text-3xl animate-pulse">
          ICONIC Infinity Group
        </div>
        <div className="mt-3 text-iconic-gold/70 text-lg">
          Loading Excellence... {progress}%
        </div>
        
        {/* Progress bar with gradient */}
        <div className="mt-6 w-64 h-2 bg-iconic-slate/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-iconic-blue via-iconic-gold to-iconic-blue rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes particle-0 {
            0%, 100% { transform: rotate(0deg) translateX(40px); opacity: 1; }
            50% { transform: rotate(180deg) translateX(40px); opacity: 0.5; }
          }
          @keyframes particle-1 {
            0%, 100% { transform: rotate(90deg) translateX(40px); opacity: 1; }
            50% { transform: rotate(270deg) translateX(40px); opacity: 0.5; }
          }
          @keyframes particle-2 {
            0%, 100% { transform: rotate(180deg) translateX(40px); opacity: 1; }
            50% { transform: rotate(360deg) translateX(40px); opacity: 0.5; }
          }
          @keyframes particle-3 {
            0%, 100% { transform: rotate(270deg) translateX(40px); opacity: 1; }
            50% { transform: rotate(450deg) translateX(40px); opacity: 0.5; }
          }
          
          .animation-reverse {
            animation-direction: reverse;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;