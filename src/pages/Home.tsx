import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DiscoverSection from '../components/DiscoverSection';
import ExperiencesSection from '../components/ExperiencesSection';
import AIFeatures from '../components/AIFeatures';
import ItineraryShowcase from '../components/ItineraryShowcase';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DiscoverSection />
      <AIFeatures />
      <ExperiencesSection />
      <ItineraryShowcase />
      <Footer />
    </div>
  );
};

export default Home;