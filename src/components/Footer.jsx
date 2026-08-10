import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary-dark text-white pt-24 pb-12 relative overflow-hidden">
      
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white rounded-b-[100px] z-10 -mt-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-16 border-b border-white/10 pb-16">
          
          {/* Appointment Form Area */}
          <div className="lg:w-1/2 bg-brand-primary p-8 md:p-12 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-serif mb-2">Book Your Appointment</h3>
            <p className="text-brand-rose/80 mb-8">Take the first step towards your fertility journey.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name *" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors" />
                <input type="tel" placeholder="Phone Number *" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors" />
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none">
                  <option value="" className="text-brand-text">Select Service</option>
                  <option value="ivf" className="text-brand-text">IVF</option>
                  <option value="iui" className="text-brand-text">IUI</option>
                  <option value="icsi" className="text-brand-text">ICSI</option>
                  <option value="consultation" className="text-brand-text">General Consultation</option>
                </select>
              </div>
              <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors" />
              
              <button type="button" className="w-full bg-white text-brand-primary font-bold rounded-xl px-4 py-4 hover:bg-brand-rose transition-colors mt-4">
                Confirm Appointment
              </button>
            </form>
          </div>

          {/* Links & Info Area */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif mb-8">We're Here <br/>for You.</h2>
              <p className="text-white/80 max-w-md mb-12">
                Providing comprehensive fertility care with a focus on compassion, safety, and evidence-based medicine.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-brand-primary-light">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link to="/about-us" className="text-white/80 hover:text-white transition-colors">About the Clinic</Link></li>
                  <li><Link to="/treatments" className="text-white/80 hover:text-white transition-colors">Our Services</Link></li>
                  <li><Link to="/our-doctors" className="text-white/80 hover:text-white transition-colors">Meet the Team</Link></li>
                  <li><Link to="/patient-resources" className="text-white/80 hover:text-white transition-colors">Patient Resources</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-brand-primary-light">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/80">
                    <MapPin size={20} className="shrink-0 mt-0.5 text-brand-primary-light" />
                    <span>Vizag IVF Centre, Maharanipeta, Visakhapatnam, AP</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Phone size={20} className="shrink-0 text-brand-primary-light" />
                    <span>+91 99999 99999</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Mail size={20} className="shrink-0 text-brand-primary-light" />
                    <span>info@vizagivfcentre.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Vizag IVF Centre. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
