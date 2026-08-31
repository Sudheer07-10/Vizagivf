import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import treatmentsData from '../data/treatments.json';
import SEO from '../components/SEO';


const TreatmentDetail = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const slugMatch = pathParts.join('-'); // e.g. /laparoscopic-surgery/adhesiolysis -> laparoscopic-surgery-adhesiolysis
  
  // Find the corresponding data based on the slug match
  const treatment = treatmentsData.find(t => t.id === slugMatch);

  if (!treatment) {
    // If not found, perhaps redirect to home or show 404
    return <Navigate to="/" replace />;
  }

  return (
    <>
    <SEO 
      title={treatment.title} 
      description={`Learn more about ${treatment.title} and how our expert specialists can assist you.`} 
    />
    <PageLayout 
      title={treatment.title} 
      subtitle={`Learn more about ${treatment.title} and how our expert specialists can assist you.`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-6 text-brand-text/80 text-lg leading-relaxed">
          {treatment.content && treatment.content.length > 0 ? (
            treatment.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : (
            <p>Content for {treatment.title} is being updated. Please check back later.</p>
          )}

          <div className="pt-8 mt-8 border-t border-brand-primary-light/20">
            <h3 className="font-serif text-2xl text-brand-text mb-4">Why Choose Vizag IVF for {treatment.title}?</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-text/70">
              <li>State-of-the-art medical technology</li>
              <li>Experienced fertility specialists</li>
              <li>Compassionate and personalized care</li>
              <li>High success rates</li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="rounded-[30px] overflow-hidden shadow-lg border-4 border-white aspect-square md:aspect-[4/3] lg:aspect-square bg-white flex items-center justify-center">
            <img 
              src={treatment.image} 
              alt={treatment.title} 
              className={`w-full h-full ${treatment.image.includes('logo.png') ? 'object-contain p-8' : 'object-cover'}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/logo.png"; // fallback image
                e.target.className = "w-full h-full object-contain p-8";
              }}
            />
          </div>

          <div className="bg-brand-rose p-8 rounded-[30px] border border-brand-primary-light/20 shadow-sm text-center">
            <h4 className="font-serif text-2xl text-brand-primary mb-3">Book a Consultation</h4>
            <p className="text-brand-text/70 mb-6 text-sm">Our specialists will contact you within 30 minutes between 11 AM and 5 PM.</p>
            <button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-medium py-3 rounded-full transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default TreatmentDetail;
