import React from 'react';
import { ChevronRight } from 'lucide-react';
import DestinationCard from './DestinationCard';
import { destinations } from '../utils/mockData';

const DiscoverSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Discover Amazing Places</h2>
            <p className="text-gray-600">Explore top destinations recommended by our AI based on global trends</p>
          </div>
          <button className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
            View All Destinations
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;