import React, { useEffect, useState } from 'react';
import { Activity, LogOut } from 'lucide-react';

interface Star {
  id: number;
  size: number;
  left: string;
  top: string;
  delay: number;
}

const ComingSoon: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 150;
      const newStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: Math.random() * 4,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  const handleLogout = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden text-white">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 z-20"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-twinkle absolute rounded-full bg-white opacity-80"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <div className="text-center z-10 p-6">
        <Activity className="h-16 w-16 text-primary-400 mx-auto mb-6 animate-pulse" />

        <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 tracking-wide animate-float">
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto mb-12">
          Our blockchain platform is under development. We're building something revolutionary.
        </p>

        <div className="relative w-full max-w-md mx-auto h-2 bg-dark-700 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">Development in progress: 5%</p>
      </div>
    </div>
  );
};

export default ComingSoon;
