import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { coreDoctors, getCurrentLocation } from '../data/locationData';
import SEO from '../components/SEO';


const OurDoctors = () => {
  const location = useLocation();
  const currentLocation = getCurrentLocation(location.pathname);
  const displayDoctors = [...coreDoctors, ...(currentLocation.doctors || [])];

  return (
    <>
      <SEO title="Our Specialists" description="Meet our expert doctors at Vizag IVF Centre." />
      <PageLayout 
      title="Our Specialists" 
      subtitle="Meet our dedicated team of experienced fertility specialists and surgeons who are committed to helping you build your family."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-brand-rose rounded-[30px] p-8 text-center shadow-sm border border-brand-primary-light/10">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md mb-6 relative">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="font-serif text-2xl text-brand-text mb-2">{doctor.name}</h3>
            <p className="text-brand-primary font-medium text-sm mb-3 uppercase tracking-wider">{doctor.role}</p>
            <p className="text-brand-text/70 text-sm mb-2">{doctor.credentials}</p>
            <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-brand-primary mt-2">
              {doctor.experience}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
    </>
  );
};

export default OurDoctors;