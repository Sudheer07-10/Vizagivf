import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. B. Sireesha Rani",
    role: "Infertility Specialist, Obstetrician & Gynaecologist",
    credentials: "DNB (Ob & Gyn), Diploma in Reproductive Medicine (Germany)",
    experience: "Leading Specialist",
    image: "/wp-content/uploads/2023/08/Dr-B-Sireesha-Rani.png"
  },
  {
    id: 2,
    name: "Dr. Ramesh Baipalli",
    role: "Surgical Gastroenterologist",
    credentials: "M.S. (Gen. Surg), PDCC",
    experience: "Senior Consultant",
    image: "/wp-content/uploads/2023/08/Dr-Ramesh-Baipalli.png"
  },
  {
    id: 3,
    name: "Dr. Pavani Sathineedi",
    role: "Obstetrician & Gynaecologist",
    credentials: "MS OBG, FMAS, FRM",
    experience: "Consultant",
    image: "/wp-content/uploads/2023/08/Female-Doctor-Icon.png"
  },
  {
    id: 4,
    name: "Dr. Sravya Naramchetti",
    role: "Obstetrician & Gynaecologist",
    credentials: "MBBS, MS OBGY",
    experience: "Consultant",
    image: "/wp-content/uploads/2023/08/Female-Doctor-Icon.png"
  }
];

const DoctorsSection = () => {
  return (
    <section className="py-20 bg-brand-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            Meet Our Specialists
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
            Expert Doctors. Exceptional Care.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-3xl p-6 shadow-sm border border-brand-primary-light/10">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-brand-rose">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-brand-text text-sm mb-1">{doctor.name}</h3>
                  <p className="text-xs text-brand-primary font-medium mb-2 leading-tight">{doctor.role}</p>
                  <p className="text-[10px] text-brand-text/60 mb-1">{doctor.credentials}</p>
                  <p className="text-[10px] text-brand-text/60 font-medium">{doctor.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/our-doctors" 
            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-brand-primary-light hover:bg-brand-primary transition-colors gap-2"
          >
            View All Doctors 
            <ArrowRight size={16} />
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default DoctorsSection;
