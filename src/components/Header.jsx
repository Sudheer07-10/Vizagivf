import React, { useState } from 'react';
import { Calendar, ChevronDown, MapPin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // To track which mobile dropdown is open
  const location = useLocation();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  let currentLocSuffix = '';
  const knownLocations = ['/visakhapatnam', '/vizianagaram', '/srikakulam'];
  for (const loc of knownLocations) {
    if (location.pathname.endsWith(loc)) {
      currentLocSuffix = loc;
      break;
    }
  }

  const getPath = (basePath) => {
    if (basePath === '/') return currentLocSuffix || '/';
    return basePath + currentLocSuffix;
  };

  const getLocSwitcherPath = (targetLoc) => {
    let base = location.pathname;
    if (currentLocSuffix) {
      base = base.replace(currentLocSuffix, '');
    }
    if (base === '/') base = '';
    return base + targetLoc;
  };

  return (
    <header className="w-full bg-brand-rose border-b border-brand-primary-light/20 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={getPath("/")} className="flex items-center gap-2">
              <img 
                src="/wp-content/uploads/2023/05/vizagivf.png" 
                alt="Vizag IVF Centre" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 text-sm">
            <Link to={getPath("/")} className="text-brand-primary font-medium hover:text-brand-primary-dark transition-colors">
              Home
            </Link>
            <Link to={getPath("/about-us")} className="text-brand-text hover:text-brand-primary transition-colors">
              About Us
            </Link>
            <div className="relative group flex items-center cursor-pointer text-brand-text hover:text-brand-primary transition-colors py-2">
              <span className="mr-1 font-medium">Services</span>
              <ChevronDown size={14} className="mt-0.5" />
              
              {/* Dropdown Menu for Services */}
              <div className="absolute top-full left-0 w-56 bg-white border border-brand-primary-light/20 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to={getPath("/ivf")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">IVF Treatment</Link>
                  <Link to={getPath("/iui")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">IUI Treatment</Link>
                  <Link to={getPath("/icsi")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">ICSI</Link>
                  <Link to={getPath("/laparoscopic-surgery")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Laparoscopic Surgery</Link>
                  <Link to={getPath("/hysteroscopic-surgery")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Hysteroscopic Surgery</Link>
                  <Link to={getPath("/")} className="block px-4 py-2.5 text-sm font-medium text-brand-primary bg-brand-rose/50 hover:bg-brand-rose border-t border-brand-primary-light/10">View All Services &rarr;</Link>
                </div>
              </div>
            </div>
            <Link to={getPath("/our-doctors")} className="text-brand-text hover:text-brand-primary transition-colors">
              Our Doctors
            </Link>
            <div className="relative group flex items-center cursor-pointer text-brand-text hover:text-brand-primary transition-colors py-2">
              <span className="mr-1 font-medium">Patient Resources</span>
              <ChevronDown size={14} className="mt-0.5" />
              
              {/* Dropdown Menu for Patient Resources */}
              <div className="absolute top-full left-0 w-48 bg-white border border-brand-primary-light/20 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to={getPath("/counselling")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Counselling</Link>
                  <Link to={getPath("/gallery")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Gallery</Link>
                  <Link to={getPath("/semen-banking")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Semen Banking</Link>
                  <Link to={getPath("/oocyte-freezing")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Oocyte Freezing</Link>
                </div>
              </div>
            </div>
            <Link to={getPath("/contact-us")} className="text-brand-text hover:text-brand-primary transition-colors">
              Contact Us
            </Link>
            <div className="relative group flex items-center cursor-pointer text-brand-text hover:text-brand-primary transition-colors py-2">
              <MapPin size={16} className="mr-1" />
              <span className="mr-1 font-medium">Locations</span>
              <ChevronDown size={14} className="mt-0.5" />
              
              {/* Dropdown Menu for Locations */}
              <div className="absolute top-full left-0 w-48 bg-white border border-brand-primary-light/20 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to={getLocSwitcherPath("/visakhapatnam")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Visakhapatnam</Link>
                  <Link to={getLocSwitcherPath("/vizianagaram")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Vizianagaram</Link>
                  <Link to={getLocSwitcherPath("/srikakulam")} className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-rose hover:text-brand-primary">Srikakulam</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link 
              to={getPath("/contact-us")} 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-brand-primary hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors gap-2"
            >
              <Calendar size={18} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-text hover:text-brand-primary p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-brand-primary-light/10 flex flex-col z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col py-4 px-4 space-y-1">
            <Link to={getPath("/")} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-brand-text hover:bg-brand-rose hover:text-brand-primary rounded-lg transition-colors">
              Home
            </Link>
            <Link to={getPath("/about-us")} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-brand-text hover:bg-brand-rose hover:text-brand-primary rounded-lg transition-colors">
              About Us
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex justify-between items-center px-4 py-3 text-base font-medium text-brand-text hover:bg-brand-rose hover:text-brand-primary rounded-lg transition-colors"
              >
                <span>Services</span>
                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="pl-6 pr-4 py-2 space-y-1 bg-brand-rose/30 rounded-lg mx-2 mb-1">
                  <Link to={getPath("/ivf")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">IVF Treatment</Link>
                  <Link to={getPath("/iui")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">IUI Treatment</Link>
                  <Link to={getPath("/icsi")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">ICSI</Link>
                  <Link to={getPath("/laparoscopic-surgery")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Laparoscopic Surgery</Link>
                  <Link to={getPath("/hysteroscopic-surgery")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Hysteroscopic Surgery</Link>
                  <Link to={getPath("/")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm font-medium text-brand-primary">View All Services &rarr;</Link>
                </div>
              )}
            </div>

            <Link to={getPath("/our-doctors")} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-brand-text hover:bg-brand-rose hover:text-brand-primary rounded-lg transition-colors">
              Our Doctors
            </Link>
            
            {/* Mobile Patient Resources Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleDropdown('resources')}
                className="flex justify-between items-center px-4 py-3 text-base font-medium text-brand-text hover:bg-brand-rose hover:text-brand-primary rounded-lg transition-colors"
              >
                <span>Patient Resources</span>
                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'resources' && (
                <div className="pl-6 pr-4 py-2 space-y-1 bg-brand-rose/30 rounded-lg mx-2 mb-1">
                  <Link to={getPath("/counselling")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Counselling</Link>
                  <Link to={getPath("/gallery")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Gallery</Link>
                  <Link to={getPath("/semen-banking")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Semen Banking</Link>
                  <Link to={getPath("/oocyte-freezing")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Oocyte Freezing</Link>
                </div>
              )}
            </div>

            <Link to={getPath("/contact-us")} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-brand-text hover:bg-brand-rose hover:text-brand-primary rounded-lg transition-colors">
              Contact Us
            </Link>

            {/* Mobile Locations Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleDropdown('locations')}
                className="flex justify-between items-center px-4 py-3 text-base font-medium text-brand-text hover:bg-brand-rose hover:text-brand-primary rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-brand-primary" />
                  <span>Locations</span>
                </div>
                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'locations' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'locations' && (
                <div className="pl-6 pr-4 py-2 space-y-1 bg-brand-rose/30 rounded-lg mx-2 mb-1">
                  <Link to={getLocSwitcherPath("/visakhapatnam")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Visakhapatnam</Link>
                  <Link to={getLocSwitcherPath("/vizianagaram")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Vizianagaram</Link>
                  <Link to={getLocSwitcherPath("/srikakulam")} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-brand-text hover:text-brand-primary">Srikakulam</Link>
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 px-2 pb-2">
              <Link 
                to={getPath("/contact-us")} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-brand-primary hover:bg-brand-primary-dark transition-colors gap-2"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

