import React, { useState } from 'react';
import { Calendar, Clock, Map, ArrowRight } from 'lucide-react';

const ItineraryShowcase: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  const itinerary = {
    title: "Kyoto Cultural Experience",
    days: [
      {
        day: 1,
        activities: [
          {
            time: "9:00 AM",
            title: "Visit Fushimi Inari Shrine",
            description: "Explore the iconic red torii gates at this famous shrine.",
            imageUrl: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "12:30 PM",
            title: "Lunch at Nishiki Market",
            description: "Sample local delicacies at Kyoto's famous food market.",
            imageUrl: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "2:30 PM",
            title: "Arashiyama Bamboo Grove",
            description: "Walk through the enchanting bamboo forest and visit nearby temples.",
            imageUrl: "https://images.pexels.com/photos/960853/pexels-photo-960853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "7:00 PM",
            title: "Dinner in Pontocho Alley",
            description: "Enjoy traditional Kyoto cuisine in this atmospheric dining district.",
            imageUrl: "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        ]
      },
      {
        day: 2,
        activities: [
          {
            time: "8:30 AM",
            title: "Morning at Kinkaku-ji (Golden Pavilion)",
            description: "Visit Kyoto's famous golden temple early to avoid crowds.",
            imageUrl: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "11:00 AM",
            title: "Traditional Tea Ceremony",
            description: "Experience the art of Japanese tea preparation with a master.",
            imageUrl: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "2:00 PM",
            title: "Gion District Walking Tour",
            description: "Explore Kyoto's historic geisha district with a local guide.",
            imageUrl: "https://images.pexels.com/photos/16063049/pexels-photo-16063049/free-photo-of-old-red-japanese-umbrella-at-bamboo-path.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "6:30 PM",
            title: "Kaiseki Dinner Experience",
            description: "Enjoy a traditional multi-course Japanese dinner.",
            imageUrl: "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        ]
      },
      {
        day: 3,
        activities: [
          {
            time: "9:00 AM",
            title: "Philosopher's Path Walking Tour",
            description: "Stroll along this scenic canal path lined with cherry trees.",
            imageUrl: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "12:00 PM",
            title: "Lunch at a Traditional Yudofu Restaurant",
            description: "Try Kyoto's famous tofu cuisine near Nanzen-ji Temple.",
            imageUrl: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "2:00 PM",
            title: "Visit Sanjusangen-do Temple",
            description: "See the hall with 1,001 statues of Kannon, the goddess of mercy.",
            imageUrl: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            time: "5:00 PM",
            title: "Kimono Experience",
            description: "Rent a traditional kimono and walk through historic Kyoto.",
            imageUrl: "https://images.pexels.com/photos/5211989/pexels-photo-5211989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        ]
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI-Powered Itinerary Planning</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create perfectly balanced travel plans with our smart itinerary builder
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Itinerary Header */}
          <div className="bg-emerald-600 text-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">{itinerary.title}</h3>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>3 Days</span>
                  <div className="mx-2 w-1 h-1 bg-white rounded-full"></div>
                  <Map className="h-5 w-5 mr-2" />
                  <span>Kyoto, Japan</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="px-5 py-2 bg-white text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition-colors">
                  Use This Itinerary
                </button>
              </div>
            </div>
          </div>
          
          {/* Day Selector */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {itinerary.days.map((day) => (
                <button
                  key={day.day}
                  className={`px-6 py-4 font-medium whitespace-nowrap ${
                    activeDay === day.day
                      ? 'text-emerald-600 border-b-2 border-emerald-500'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                  onClick={() => setActiveDay(day.day)}
                >
                  Day {day.day}
                </button>
              ))}
            </div>
          </div>
          
          {/* Day Content */}
          <div className="p-6">
            {itinerary.days
              .filter((day) => day.day === activeDay)
              .map((day) => (
                <div key={day.day} className="space-y-6">
                  {day.activities.map((activity, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 pb-6 border-b border-gray-100 last:border-0">
                      <div className="w-full md:w-1/4 rounded-lg overflow-hidden">
                        <img
                          src={activity.imageUrl}
                          alt={activity.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                          <span className="text-sm font-medium text-emerald-600">{activity.time}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h4>
                        <p className="text-gray-600 mb-4">{activity.description}</p>
                        <button className="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition-colors">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              This itinerary was generated based on cultural experiences, historical sites, and local cuisine preferences.
            </div>
            <button className="px-5 py-2 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center">
              Create Your Own Itinerary
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryShowcase;