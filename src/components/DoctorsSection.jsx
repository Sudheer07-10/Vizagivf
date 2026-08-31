import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Calendar, X } from 'lucide-react';
import { coreDoctors, getCurrentLocation } from '../data/locationData';

const DoctorsSection = () => {
  const location = useLocation();
  const currentLocation = getCurrentLocation(location.pathname);
  const displayDoctors = [...coreDoctors, ...(currentLocation.doctors || [])];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '9am-2pm',
    reasons: ''
  });

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Appointment Request for ${selectedDoctor?.name}`;
    const body = `Name: ${formData.name}%0D%0A
Phone: ${formData.phone}%0D%0A
Email: ${formData.email}%0D%0A
Date: ${formData.date}%0D%0A
Time: ${formData.time}%0D%0A
Reasons: ${formData.reasons}`;
    
    window.location.href = `mailto:vizagivf@gmail.com?subject=${subject}&body=${body}`;
    closeModal();
  };

  return (
    <section className="py-20 bg-brand-rose relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            Meet Our Specialists
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
            Expert Doctors. Exceptional Care, now in AP & Telangana.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-3xl p-6 shadow-sm border border-brand-primary-light/10 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-brand-rose">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="font-bold text-brand-text text-[15px] mb-1">{doctor.name}</h3>
                  <p className="text-xs text-brand-primary font-medium mb-1 leading-tight">{doctor.role}</p>
                  {doctor.credentials && <p className="text-[11px] text-brand-text/60 mb-1 leading-tight">{doctor.credentials}</p>}
                  <p className="text-[11px] text-brand-text/50 font-medium mt-auto">{doctor.location}</p>
                </div>
              </div>
              <button 
                onClick={() => openModal(doctor)}
                className="mt-auto w-full py-2.5 bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/our-doctors" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-brand-primary-light hover:bg-brand-primary transition-colors gap-2"
          >
            View All Doctors 
            <ArrowRight size={16} />
          </Link>
        </div>
        
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-text/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-brand-rose p-6 flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-serif text-2xl text-brand-text">Book Consultation</h3>
                <p className="text-sm text-brand-text/70 mt-1">with {selectedDoctor?.name}</p>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-white rounded-full transition-colors">
                <X size={24} className="text-brand-text/60" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-text/70 mb-1 uppercase tracking-wider">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Enter your name" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-brand-text/70 mb-1 uppercase tracking-wider">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-brand-text/70 mb-1 uppercase tracking-wider">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Your email (optional)" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-text/70 mb-1 uppercase tracking-wider">Preferred Date</label>
                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-text/70 mb-1 uppercase tracking-wider">Preferred Time</label>
                    <select name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all appearance-none bg-white">
                      <option value="9am-2pm">9:00 AM - 2:00 PM</option>
                      <option value="4pm-7pm">4:00 PM - 7:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-brand-text/70 mb-1 uppercase tracking-wider">Reasons / Details</label>
                  <textarea name="reasons" value={formData.reasons} onChange={handleChange} rows="3" className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none" placeholder="Briefly describe your concern..."></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl font-bold transition-colors mt-2">
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DoctorsSection;
