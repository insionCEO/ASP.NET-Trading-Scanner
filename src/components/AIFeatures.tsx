import React from 'react';
import { BrainCircuit, Map, Route, Sparkles, ListChecks, LayoutDashboard } from 'lucide-react';

const AIFeatures: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-emerald-500" />,
      title: "AI Travel Recommendations",
      description: "Get personalized destination suggestions based on your preferences, travel history, and current trends."
    },
    {
      icon: <Map className="h-8 w-8 text-emerald-500" />,
      title: "Smart Destination Discovery",
      description: "Discover hidden gems and lesser-known attractions tailored to your interests and travel style."
    },
    {
      icon: <Route className="h-8 w-8 text-emerald-500" />,
      title: "Route Optimization",
      description: "Maximize your time with AI-powered route planning that minimizes travel time and maximizes experiences."
    },
    {
      icon: <ListChecks className="h-8 w-8 text-emerald-500" />,
      title: "Intelligent Itineraries",
      description: "Create perfectly balanced itineraries with the right mix of sightseeing, relaxation, and local experiences."
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-emerald-500" />,
      title: "Real-Time Adjustments",
      description: "Adapt your plans on the go with smart suggestions based on weather, local events, and crowd levels."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-emerald-500" />,
      title: "Personalized Insights",
      description: "Receive custom travel tips and cultural insights to enhance your experience at each destination."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Plan Smarter with AI-Powered Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced artificial intelligence transforms how you discover, plan, and experience travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 p-3 inline-flex rounded-full bg-emerald-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;