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
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-16">
          Our Locations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-[17px] tracking-wide text-gray-800 uppercase mb-4 font-semibold">
                {loc.city}
              </h3>
              
              <div className="flex items-start gap-3 mb-4 flex-grow">
                <MapPin className="text-blue-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {loc.address}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-[15px] pt-4 border-t border-gray-50 mt-auto">
                {loc.phones.map((phone, pIdx) => (
                  <a key={pIdx} href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 text-blue-600 hover:underline font-medium">
                    <Phone size={16} />
                    <span>{phone}</span>
                  </a>
                ))}
                
                <a href={`mailto:${loc.email}`} className="flex items-center gap-1.5 text-blue-600 hover:underline font-medium">
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
