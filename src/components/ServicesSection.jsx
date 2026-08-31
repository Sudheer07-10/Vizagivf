import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Baby, Beaker, Syringe, Activity, ShieldCheck, Droplet, Users, Snowflake, ShieldAlert } from 'lucide-react';

const services = [
  { id: 1, title: "IUI", description: "Intrauterine Insemination for fertility assistance.", icon: <Syringe size={28} />, link: "/iui" },
  { id: 2, title: "TESA", description: "Testicular Sperm Aspiration for male infertility.", icon: <ShieldCheck size={28} />, link: "/tesa-and-tese" },
  { id: 3, title: "ICSI", description: "Intracytoplasmic Sperm Injection technique.", icon: <Beaker size={28} />, link: "/icsi" },
  { id: 4, title: "IVF", description: "In-Vitro Fertilization complete care.", icon: <Baby size={28} />, link: "/ivf" },
  { id: 5, title: "Urinary Leakage Issues", description: "Advanced treatments for urinary incontinence.", icon: <Droplet size={28} />, link: "/urinary-leakage" },
  { id: 6, title: "PCOD / PCOS Issues", description: "Comprehensive management for PCOD/PCOS.", icon: <Activity size={28} />, link: "/pcod-pcos" },
  { id: 7, title: "Fibroid Issues", description: "Expert care for uterine fibroids.", icon: <ShieldAlert size={28} />, link: "/fibroids" },
  { id: 8, title: "Tubal Blocks", description: "Diagnosis and treatment for blocked fallopian tubes.", icon: <Activity size={28} />, link: "/tubal-blocks" },
  { id: 9, title: "Semen Freezing", description: "Safe storage and preservation of semen.", icon: <Snowflake size={28} />, link: "/semen-banking" },
  { id: 10, title: "Embryo Freezing", description: "Advanced cryopreservation for embryos.", icon: <Snowflake size={28} />, link: "/embryo-freezing" },
  { id: 11, title: "Endometriosis", description: "Specialized treatment for endometriosis.", icon: <Activity size={28} />, link: "/endometriosis" },
  { id: 12, title: "Recurrent Miscarriage", description: "Care and solutions for recurrent pregnancy loss.", icon: <ShieldCheck size={28} />, link: "/recurrent-miscarriage" },
  { id: 13, title: "Hysteroscopy", description: "Minimally invasive diagnostic and surgical care.", icon: <Activity size={28} />, link: "/hysteroscopic-surgery" },
  { id: 14, title: "Male Infertility Issues", description: "Comprehensive evaluation and treatment for men.", icon: <Users size={28} />, link: "/male-infertility" }
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
            Comprehensive Gynaecology & Fertility Services
          </h2>
          <div className="flex justify-center items-center">
             <div className="h-px w-12 bg-brand-primary/30"></div>
             <div className="w-2 h-2 rounded-full bg-brand-primary mx-3"></div>
             <div className="h-px w-12 bg-brand-primary/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-brand-gray/20 rounded-2xl p-6 border border-brand-primary/5 hover:border-brand-primary/30 hover:shadow-lg transition-all group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-white text-brand-primary flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-text mb-2">
                {service.title}
              </h3>
              <p className="text-brand-text/70 text-sm mb-6 flex-grow">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="inline-flex items-center text-brand-primary font-medium text-sm hover:text-brand-primary-dark transition-colors group/link mt-auto"
              >
                Learn More 
                <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
