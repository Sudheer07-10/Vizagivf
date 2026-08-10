import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Baby, Beaker, Syringe, Scissors, Activity, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "In-Vitro Fertilization (IVF)",
    description: "Complete care and advanced procedures for successful fertilization outside the body.",
    icon: <Baby size={32} />,
    link: "/ivf",
    bgImage: "/images/treatments/ivf_lab.png"
  },
  {
    id: 2,
    title: "Intrauterine Insemination (IUI)",
    description: "Placing sperm directly in the uterus to facilitate fertilization.",
    icon: <Syringe size={32} />,
    link: "/iui",
    bgImage: "/images/treatments/iui_consult.png"
  },
  {
    id: 3,
    title: "Intracytoplasmic Sperm Injection (ICSI)",
    description: "Advanced IVF technique involving direct injection of sperm into the egg.",
    icon: <Beaker size={32} />,
    link: "/icsi",
    bgImage: "/images/treatments/ivf_lab.png"
  },
  {
    id: 4,
    title: "Laparoscopic Surgery",
    description: "Minimally invasive surgical procedures for fertility enhancement.",
    icon: <Scissors size={32} />,
    link: "/laparoscopic-surgery",
    bgImage: "/images/treatments/surgery_room.png"
  },
  {
    id: 5,
    title: "Hysteroscopic Surgery",
    description: "Diagnosis and treatment of uterine conditions affecting fertility.",
    icon: <Activity size={32} />,
    link: "/hysteroscopic-surgery",
    bgImage: "/images/treatments/surgery_room.png"
  },
  {
    id: 6,
    title: "Semen Banking",
    description: "Safe and reliable freezing and storage of sperm for future use.",
    icon: <ShieldCheck size={32} />,
    link: "/semen-banking",
    bgImage: "/images/treatments/cryo_storage.png"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            Our Specialized Care
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
            Comprehensive Fertility Services
          </h2>
          <div className="flex justify-center items-center">
             <div className="h-px w-12 bg-brand-primary/30"></div>
             <div className="w-2 h-2 rounded-full bg-brand-primary mx-3"></div>
             <div className="h-px w-12 bg-brand-primary/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative overflow-hidden border border-brand-primary/10 rounded-2xl group hover:shadow-xl hover:border-brand-primary/30 transition-all"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              <div className="absolute inset-0 bg-brand-rose/90 backdrop-blur-[2px] transition-all group-hover:bg-brand-rose/80" />
              
              <div className="relative p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-white text-brand-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-text/70 mb-8 flex-grow">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primary-dark transition-colors group/link"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
