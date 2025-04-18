import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, User, Globe, Compass, MapPin, Calendar, X } from 'lucide-react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Globe className="h-8 w-8 text-emerald-500 mr-2" />
          <span className={`text-2xl font-bold ${isScrolled ? 'text-emerald-600' : 'text-white'}`}>
            Wanderly
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            <Compass className="h-5 w-5 mr-1" />
            <span>Explore</span>
          </Link>
          <Link to="/" className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            <MapPin className="h-5 w-5 mr-1" />
            <span>Destinations</span>
          </Link>
          <Link to="/" className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            <Calendar className="h-5 w-5 mr-1" />
            <span>Itineraries</span>
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className={`p-2 rounded-full ${
              isScrolled ? 'bg-gray-100 text-gray-700' : 'bg-white/20 text-white'
            } hover:bg-emerald-100 hover:text-emerald-600 transition-colors`}
          >
            <Search className="h-5 w-5" />
          </button>
          <Link 
            to="/signin"
            className="px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className={`p-2 rounded-full ${
              isScrolled ? 'bg-gray-100 text-gray-700' : 'bg-white/20 text-white'
            }`}
          >
            <Search className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full ${
              isScrolled ? 'bg-gray-100 text-gray-700' : 'bg-white/20 text-white'
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 animate-slideDown">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">Search Destinations</h3>
              <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <SearchBar />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 animate-slideIn">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-emerald-500 mr-2" />
              <span className="text-2xl font-bold text-emerald-600">Wanderly</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center text-gray-800 hover:text-emerald-500 transition-colors text-lg">
              <Compass className="h-6 w-6 mr-3" />
              <span>Explore</span>
            </Link>
            <Link to="/" className="flex items-center text-gray-800 hover:text-emerald-500 transition-colors text-lg">
              <MapPin className="h-6 w-6 mr-3" />
              <span>Destinations</span>
            </Link>
            <Link to="/" className="flex items-center text-gray-800 hover:text-emerald-500 transition-colors text-lg">
              <Calendar className="h-6 w-6 mr-3" />
              <span>Itineraries</span>
            </Link>
            <Link to="/signin" className="flex items-center text-gray-800 hover:text-emerald-500 transition-colors text-lg">
              <User className="h-6 w-6 mr-3" />
              <span>Sign In</span>
            </Link>
          </nav>
          
          <div className="mt-auto pt-8">
            <Link
              to="/signup"
              className="w-full py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors block text-center"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;