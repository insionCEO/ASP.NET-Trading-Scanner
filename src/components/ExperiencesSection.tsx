import React from 'react';
import { ChevronRight } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../utils/mockData';

const ExperiencesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Unique Experiences</h2>
            <p className="text-gray-600">Immerse yourself in authentic activities curated by local experts</p>
          </div>
          <button className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
            View All Experiences
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors">
            View All Experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;