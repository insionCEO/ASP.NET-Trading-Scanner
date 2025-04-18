import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeIn">
            Discover the world with <span className="text-emerald-400">AI-powered</span> travel planning
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fadeInDelay">
            Explore destinations, plan itineraries, and discover hidden gems tailored to your interests with our advanced AI travel assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInLongDelay">
            <button className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center">
              Start Planning
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-colors">
              Explore Destinations
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 py-4 px-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-white">1M+</p>
            <p className="text-sm text-white/80">Travelers</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-white">190+</p>
            <p className="text-sm text-white/80">Countries</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-white">10K+</p>
            <p className="text-sm text-white/80">Experiences</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-white">4.9</p>
            <p className="text-sm text-white/80">User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;