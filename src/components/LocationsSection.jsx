import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const locations = [
  {
    city: "VISAKHAPATNAM",
    address: "29-2-4, 1st floor, Opp: Veterinary Hospital, Near Judge Court, Visakhapatnam -530022",
    phones: ["+918712336290", "+919515605006"],
    email: "vizagivf@gmail.com"
  },
  {
    city: "GAJUWAKA",
    address: "10-1-128/9, 80 ft Road, Near Paradise Hotel,Mehar Nagar, Visakhapatnam - 530026",
    phones: ["+91-809 600 8999"],
    email: "vizagivf@gmail.com"
  },
  {
    city: "VIZIANAGARAM",
    address: "Opp. More super market, 100 ft Ring Road, Ice Factory Junction, Vizianagaram 535002",
    phones: ["+919494986622", "+919494986611"],
    email: "vizagivf@gmail.com"
  },
  {
    city: "SRIKAKULAM",
    address: "Day & Night Jn., Convent Road, New Bridge Road, Srikakulam-01",
    phones: ["+917799772221", "+917799772223"],
    email: "vizagivf@gmail.com"
  }
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-brand-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            Visit Us
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
            Our Locations
          </h2>
          <div className="flex justify-center items-center">
             <div className="h-px w-12 bg-brand-primary/30"></div>
             <div className="w-2 h-2 rounded-full bg-brand-primary mx-3"></div>
             <div className="h-px w-12 bg-brand-primary/30"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm p-8 border border-brand-primary/10 flex flex-col h-full hover:shadow-xl hover:border-brand-primary/30 transition-all">
              <h3 className="text-xl font-bold text-brand-text mb-4">
                {loc.city}
              </h3>
              
              <div className="flex items-start gap-3 mb-4 flex-grow">
                <MapPin className="text-brand-primary shrink-0 mt-1" size={20} />
                <p className="text-brand-text/70 text-[15px] leading-relaxed">
                  {loc.address}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-[15px] pt-4 border-t border-brand-primary/10 mt-auto">
                {loc.phones.map((phone, pIdx) => (
                  <a key={pIdx} href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark transition-colors font-medium">
                    <Phone size={16} />
                    <span>{phone}</span>
                  </a>
                ))}
                
                <a href={`mailto:${loc.email}`} className="flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark transition-colors font-medium">
                  <Mail size={16} />
                  <span>{loc.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
