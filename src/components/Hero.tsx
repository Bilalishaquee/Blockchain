import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignInClick, onSignUpClick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid-pattern">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-[150px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full filter blur-[150px] opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 animate-float">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            </span>
            <br />
            <span className="text-white">Blockchain Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the revolution in decentralized applications. Secure, transparent, and built for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={onSignInClick}
              className="btn-primary flex items-center justify-center gap-2 animate-glow"
            >
              Sign In <ChevronRight size={18} />
            </button>
            <button 
              onClick={onSignUpClick}
              className="btn-secondary flex items-center justify-center gap-2 animate-glow"
            >
              Sign Up <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="neo-box">
              <div className="neo-box-content">
                <h3 className="text-xl font-orbitron mb-3 text-primary-400">Secure</h3>
                <p className="text-gray-300">Advanced encryption and blockchain technology keeps your data safe and private.</p>
              </div>
            </div>
            
            <div className="neo-box">
              <div className="neo-box-content">
                <h3 className="text-xl font-orbitron mb-3 text-primary-400">Decentralized</h3>
                <p className="text-gray-300">No central authority. Your data belongs to you and only you.</p>
              </div>
            </div>
            
            <div className="neo-box">
              <div className="neo-box-content">
                <h3 className="text-xl font-orbitron mb-3 text-primary-400">Transparent</h3>
                <p className="text-gray-300">Full visibility into all transactions and processes on the network.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;