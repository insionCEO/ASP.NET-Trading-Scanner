import React, { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { popularSearches } from '../utils/mockData';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search destinations, landmarks, activities..."
          className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100 focus:bg-white border border-gray-200 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 focus:outline-none transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        {query && (
          <button 
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setQuery('')}
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
      
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 animate-fadeIn">
          <div className="p-4">
            <h4 className="text-sm font-medium text-gray-500 mb-2">POPULAR SEARCHES</h4>
            <div className="space-y-2">
              {popularSearches.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  onClick={() => setQuery(item)}
                >
                  <MapPin className="h-4 w-4 text-emerald-500 mr-2" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;