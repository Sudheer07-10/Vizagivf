import React from 'react';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';

const AboutUs = () => {
  return (
    <>
      <SEO title="About Us" description="Learn more about Vizag IVF Centre and our expert doctors." />
      <PageLayout 
      title="About Us" 
      subtitle="Vizag IVF Centre is a state-of-art speciality infertility clinic located in Visakhapatnam and has branches in Vizianagaram and Gajuwaka."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative rounded-[40px] rounded-br-[120px] overflow-hidden shadow-2xl border-4 border-white aspect-square md:aspect-[4/3] lg:aspect-square">
          <img 
            src="/wp-content/uploads/2023/06/happy-couple-enjoying-vizagivf-scaled-e1689949830314-1024x683.jpg" 
            alt="About Vizag IVF Centre" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-brand-text/80 text-lg leading-relaxed">
          <p>
            <strong className="text-brand-text font-serif text-2xl mb-4 block">Our Commitment to You</strong>
            VIZAG IVF CENTRE provides the best quality, comprehensive, holistic care to Infertile couples and women at a reasonable cost. 
          </p>
          <p>
            An interdisciplinary team of expert and caring professionals is committed to meet the medical as well as emotional needs for couples trying to conceive. 
          </p>
          <p>
            The architecture is soothing and dignified, with a clean, modern design, ensuring you feel completely at ease throughout your entire fertility journey with us.
          </p>

          <div className="pt-8">
            <div className="bg-brand-rose p-8 rounded-3xl border border-brand-primary/10">
              <h3 className="font-serif text-2xl text-brand-primary mb-2">3 Branches</h3>
              <p className="text-sm">Conveniently located in Visakhapatnam, Vizianagaram, and Gajuwaka.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default AboutUs;