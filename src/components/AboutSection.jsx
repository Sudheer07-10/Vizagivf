import React from 'react';
import { Award, Users, Smile, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-brand-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Image Area */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-br-[100px] rounded-tl-[100px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img 
                src="/wp-content/uploads/2023/05/group-of-medics-or-doctors-at-hospital.jpg" 
                alt="Vizag IVF Clinic" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10"></div>
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -left-6 -top-6 bg-white/95 backdrop-blur shadow-lg p-6 rounded-2xl border border-brand-rose max-w-[200px] transform -rotate-3">
              <p className="text-brand-primary font-serif italic text-lg text-center">
                "You are stronger than you think"
              </p>
              <div className="flex justify-center mt-2 text-brand-primary-light">
                <Heart size={20} />
              </div>
            </div>
          </div>
          
          {/* Right Content Area */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
              About Vizag IVF
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6 leading-tight">
              A Clinic Built on Empathy, <br/>Expertise & Trust
            </h2>
            
            <p className="text-brand-text/70 mb-8 leading-relaxed text-lg">
              At Vizag IVF Centre, we believe every individual deserves access to respectful, high-quality care at every stage of life. Our team of specialists combines medical excellence with genuine compassion to help you feel heard, informed, and empowered.
            </p>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-brand-primary shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-lg">10+</h4>
                  <p className="text-sm text-brand-text/60">Years of Excellence</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-brand-primary shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-lg">5000+</h4>
                  <p className="text-sm text-brand-text/60">Happy Patients</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-brand-primary shrink-0">
                  <Smile size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-lg">98%</h4>
                  <p className="text-sm text-brand-text/60">Patient Satisfaction</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-brand-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-lg">24/7</h4>
                  <p className="text-sm text-brand-text/60">Patient Support</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
