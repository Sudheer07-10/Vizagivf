import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { getCurrentLocation } from '../data/locationData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LocationsSection from '../components/LocationsSection';
import SEO from '../components/SEO';


const ContactUs = () => {
  const location = useLocation();
  const currentLocation = getCurrentLocation(location.pathname);

  return (
    <>
    <SEO title="Contact Us" description="Get in touch with Vizag IVF Centre. Please call or email us for an appointment." />
    <PageLayout 
      title="Contact Us" 
      subtitle="Please call or email us and we will be happy to assist you. Getting an accurate diagnosis can be one of the most impactful experiences that you can have."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <div className="bg-brand-rose p-8 md:p-12 rounded-[40px] shadow-lg">
          <h2 className="text-3xl font-serif text-brand-primary mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary outline-none" placeholder="Your phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-medium py-4 rounded-full transition-colors">
              Request Appointment
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="flex items-start gap-4">
            <div className="bg-brand-primary/10 p-4 rounded-full text-brand-primary flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-brand-text mb-2">{currentLocation.name}</h3>
              <p className="text-brand-text/70 leading-relaxed">
                {currentLocation.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-primary/10 p-4 rounded-full text-brand-primary flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-brand-text mb-2">Phone</h3>
              <p className="text-brand-text/70 leading-relaxed">
                {currentLocation.phones ? currentLocation.phones.join(', ') : currentLocation.phone}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-primary/10 p-4 rounded-full text-brand-primary flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-brand-text mb-2">Email</h3>
              <p className="text-brand-text/70 leading-relaxed">
                {currentLocation.email}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-primary/10 p-4 rounded-full text-brand-primary flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-brand-text mb-2">Working Hours</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Monday - Saturday: 10:00 AM - 6:00 PM <br/>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
    <LocationsSection />
    </>
  );
};

export default ContactUs;