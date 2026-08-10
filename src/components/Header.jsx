import React from 'react';
import { Calendar, ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-brand-rose border-b border-brand-primary-light/20 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/wp-content/uploads/2023/05/vizagivf.png" 
                alt="Vizag IVF Centre" 
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">
            <Link to="/" className="text-brand-primary font-medium hover:text-brand-primary-dark transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="text-brand-text hover:text-brand-primary transition-colors">
              About Us
            </Link>
            <div className="relative group flex items-center cursor-pointer text-brand-text hover:text-brand-primary transition-colors py-2">
              <span className="mr-1 font-medium">Services</span>
              <ChevronDown size={14} className="mt-0.5" />
              
              {/* Dropdown Menu for Services */}
              <div className="absolute top-full left-0 w-56 bg-white border border-brand-primary-light/20 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/ivf" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">IVF Treatment</Link>
                  <Link to="/iui" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">IUI Treatment</Link>
                  <Link to="/icsi" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">ICSI</Link>
                  <Link to="/laparoscopic-surgery" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Laparoscopic Surgery</Link>
                  <Link to="/hysteroscopic-surgery" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Hysteroscopic Surgery</Link>
                  <Link to="/" className="block px-4 py-2.5 text-sm font-medium text-brand-primary bg-brand-rose/50 hover:bg-brand-rose border-t border-brand-primary-light/10">View All Services &rarr;</Link>
                </div>
              </div>
            </div>
            <Link to="/our-doctors" className="text-brand-text hover:text-brand-primary transition-colors">
              Our Doctors
            </Link>
            <div className="relative group flex items-center cursor-pointer text-brand-text hover:text-brand-primary transition-colors py-2">
              <span className="mr-1 font-medium">Patient Resources</span>
              <ChevronDown size={14} className="mt-0.5" />
              
              {/* Dropdown Menu for Patient Resources */}
              <div className="absolute top-full left-0 w-48 bg-white border border-brand-primary-light/20 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/counselling" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Counselling</Link>
                  <Link to="/gallery" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Gallery</Link>
                  <Link to="/semen-banking" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Semen Banking</Link>
                  <Link to="/oocyte-freezing" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Oocyte Freezing</Link>
                </div>
              </div>
            </div>
            <Link to="/contact-us" className="text-brand-text hover:text-brand-primary transition-colors">
              Contact Us
            </Link>
            <div className="relative group flex items-center cursor-pointer text-brand-text hover:text-brand-primary transition-colors py-2">
              <MapPin size={16} className="mr-1" />
              <span className="mr-1 font-medium">Locations</span>
              <ChevronDown size={14} className="mt-0.5" />
              
              {/* Dropdown Menu for Locations */}
              <div className="absolute top-full left-0 w-48 bg-white border border-brand-primary-light/20 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/visakhapatnam" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Visakhapatnam</Link>
                  <Link to="/vijayanagaram" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Vijayanagaram</Link>
                  <Link to="/srikakulam" className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Srikakulam</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contact-us" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-brand-primary hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors gap-2"
            >
              <Calendar size={18} />
              Book Appointment
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
