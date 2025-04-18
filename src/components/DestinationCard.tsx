import React, { useState } from 'react';
import { Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, index = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
            <div className="flex items-center text-white/90 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{destination.location}</span>
            </div>
          </div>
          <button 
            className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
              isLiked ? 'bg-rose-500 text-white' : 'bg-black/30 text-white hover:bg-rose-500 hover:text-white'
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {destination.tags.slice(0, 3).map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="text-white text-sm">{destination.rating}</span>
          </div>
          <div className="text-white/80 text-xs">
            {destination.savedCount.toLocaleString()} travelers saved
          </div>
        </div>
      </div>
      
      {/* Hover info - only visible on larger screens */}
      <div 
        className={`absolute inset-0 bg-black/75 backdrop-blur-sm p-6 flex flex-col justify-center items-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } md:flex hidden`}
      >
        <p className="text-white text-center mb-4">{destination.description}</p>
        <Link 
          to={`/destination/${destination.id}`}
          className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;