import React from 'react';

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-brand-rose py-16 md:py-24 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#fdf0f0] to-transparent rounded-l-[100px] hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
