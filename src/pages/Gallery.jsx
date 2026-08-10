import React from 'react';
import PageLayout from '../components/PageLayout';

const images = [
  { src: '/images/embryology_lab_clean.png', alt: 'Embryology Lab' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_Infra_2.jpg', alt: 'Clinic Infrastructure' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_Infra_3.jpg', alt: 'Clinic Infrastructure' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_Infra_4.jpg', alt: 'Clinic Infrastructure' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_Infra_5.jpg', alt: 'Clinic Infrastructure' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_Infra_6.jpg', alt: 'Clinic Infrastructure' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_Infra_7.jpg', alt: 'Clinic Infrastructure' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_Infra_8.jpg', alt: 'Clinic Infrastructure' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_CME_2016_1.jpg', alt: 'Medical Conference' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_CME_2017_1.jpg', alt: 'Medical Conference' },
  { src: '/wp-content/uploads/2023/05/VizagIVF_CME_2019_1-scaled.jpg', alt: 'Medical Conference' },
  { src: '/wp-content/uploads/2023/06/happy-couple-enjoying-vizagivf-scaled-e1689949830314-1024x683.jpg', alt: 'Happy Patients' },
];

const Gallery = () => {
  return (
    <PageLayout 
      title="Photo Gallery" 
      subtitle="Take a visual tour of Vizag IVF Centre, featuring our state-of-the-art infrastructure, advanced laboratories, and memorable medical events."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-square cursor-pointer border-4 border-white">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              onError={(e) => {
                // Fallback just in case an image is missing
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium px-4 text-center">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Gallery;
