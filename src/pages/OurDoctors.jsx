import React from 'react';
import PageLayout from '../components/PageLayout';

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

const OurDoctors = () => {
  return (
    <PageLayout 
      title="Our Specialists" 
      subtitle="Meet our dedicated team of experienced fertility specialists and surgeons who are committed to helping you build your family."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
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
  );
};

export default OurDoctors;