import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Stethoscope, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="overflow-hidden relative bg-cover bg-center min-h-[calc(100vh-100px)] flex items-center justify-center"
      style={{ backgroundImage: "url('/smiling_baby.png')" }}
    >
      {/* Light Overlay for text readability */}
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-16">
        <div className="flex flex-col gap-8 md:gap-10">

          {/* Top Text Content */}
          <div className="w-full max-w-3xl space-y-6 md:space-y-8 flex flex-col items-start">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-brand-primary text-xs font-bold tracking-widest uppercase shadow-sm">
              Advanced IVF & Fertility Care
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-text leading-tight drop-shadow-sm">
              Bringing Hope <br className="hidden sm:block" />
              <span className="italic text-brand-primary">and Building Families</span> <br className="hidden sm:block" />
              with Expert Care.
            </h1>

            <p className="text-base md:text-lg text-brand-text/90 max-w-2xl leading-relaxed font-medium">
              Your dream of parenthood is our priority. We provide comprehensive IVF, fertility, and gynecological care in a safe, supportive, and advanced clinical environment.
            </p>

            <div className="pt-2 md:pt-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3.5 md:py-4 border border-transparent text-base font-medium rounded-full text-white bg-brand-primary hover:bg-brand-primary-dark transition-all gap-2 group shadow-md hover:shadow-lg"
              >
                Book Your Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="mt-4 md:mt-8 flex flex-wrap gap-3 md:gap-4 w-full">
            <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-3 md:p-4 flex items-center gap-3 w-[calc(50%-6px)] sm:w-auto min-w-[180px] md:min-w-[200px] border border-brand-rose hover:-translate-y-1 transition-transform">
              <div className="bg-brand-primary/10 p-1.5 md:p-2 rounded-full text-brand-primary flex-shrink-0">
                <UserCheck size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-xs text-brand-text/60 font-medium">Experienced</span>
                <span className="text-xs md:text-sm font-bold text-brand-text whitespace-nowrap">Specialists</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-3 md:p-4 flex items-center gap-3 w-[calc(50%-6px)] sm:w-auto min-w-[180px] md:min-w-[200px] border border-brand-rose hover:-translate-y-1 transition-transform">
              <div className="bg-brand-primary/10 p-1.5 md:p-2 rounded-full text-brand-primary flex-shrink-0">
                <Stethoscope size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-xs text-brand-text/60 font-medium">Advanced</span>
                <span className="text-xs md:text-sm font-bold text-brand-text whitespace-nowrap">Technology</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-3 md:p-4 flex items-center gap-3 w-full sm:w-auto min-w-[180px] md:min-w-[200px] border border-brand-rose hover:-translate-y-1 transition-transform">
              <div className="bg-brand-primary/10 p-1.5 md:p-2 rounded-full text-brand-primary flex-shrink-0">
                <Heart size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-xs text-brand-text/60 font-medium">Personalized</span>
                <span className="text-xs md:text-sm font-bold text-brand-text whitespace-nowrap">Care</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
