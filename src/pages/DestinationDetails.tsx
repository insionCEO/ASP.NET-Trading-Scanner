import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Clock, Calendar, Users, Heart, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { destinations } from '../utils/mockData';

const DestinationDetails: React.FC = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${destination.imageUrl})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.name}</h1>
              <div className="flex items-center text-white/90 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{destination.location}</span>
                <div className="mx-4 h-1 w-1 bg-white/50 rounded-full"></div>
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span>{destination.rating} (2,345 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {destination.name}</h2>
                <p className="text-gray-600 mb-8">{destination.description}</p>
                
                {/* Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-6 w-6 text-emerald-500 mb-2" />
                    <h3 className="font-medium text-gray-900">Best Time</h3>
                    <p className="text-sm text-gray-600">March - June</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-6 w-6 text-emerald-500 mb-2" />
                    <h3 className="font-medium text-gray-900">Duration</h3>
                    <p className="text-sm text-gray-600">3-5 days</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-500 mb-2" />
                    <h3 className="font-medium text-gray-900">Group Size</h3>
                    <p className="text-sm text-gray-600">2-8 people</p>
                  </div>
                </div>

                {/* Photos Grid */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Photos</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <img
                      key={i}
                      src={destination.imageUrl}
                      alt={`${destination.name} ${i}`}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  ))}
                </div>

                {/* Map */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location</h3>
                <div className="h-96 bg-gray-100 rounded-lg mb-12">
                  {/* Map component will go here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Interactive Map Coming Soon
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <button className="flex items-center text-gray-700 hover:text-rose-500">
                      <Heart className="h-6 w-6 mr-2" />
                      Save
                    </button>
                    <button className="flex items-center text-gray-700 hover:text-emerald-500">
                      <Share2 className="h-6 w-6 mr-2" />
                      Share
                    </button>
                  </div>
                  <button className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors mb-4">
                    Plan Your Trip
                  </button>
                  <button className="w-full py-3 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50 transition-colors">
                    View Travel Guide
                  </button>
                </div>

                {/* Weather Widget */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Weather</h3>
                  {/* Weather component will go here */}
                  <div className="text-gray-500">Weather information coming soon</div>
                </div>

                {/* Similar Destinations */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Similar Destinations</h3>
                  <div className="space-y-4">
                    {destinations.slice(0, 3).map((dest) => (
                      <div key={dest.id} className="flex items-center space-x-4">
                        <img
                          src={dest.imageUrl}
                          alt={dest.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{dest.name}</h4>
                          <p className="text-sm text-gray-600">{dest.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetails;