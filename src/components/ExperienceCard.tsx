import React from 'react';
import { Clock, MapPin, Star } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index = 0 }) => {
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
      style={{ animationDelay }}
    >
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={experience.imageUrl} 
          alt={experience.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-800">
          {experience.price}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-emerald-500 mr-1" />
          <span className="text-sm text-gray-600">{experience.location}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
          {experience.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{experience.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {experience.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{experience.duration}</span>
          </div>
          
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm text-gray-700 font-medium">{experience.rating}</span>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="px-4 pb-4">
        <button className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;