import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Stethoscope, Heart, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[550px] w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet !bg-white/50 !opacity-100 !w-3 !h-3', bulletActiveClass: '!bg-brand-primary !scale-125' }}
        loop={true}
        className="w-full h-full"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div 
            className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/smiling_baby.png')" }}
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="w-full max-w-3xl space-y-6 md:space-y-8 flex flex-col items-start animate-fade-in-up">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-brand-primary text-xs font-bold tracking-widest uppercase shadow-sm">
                  Advanced IVF & Fertility Care
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-text leading-tight drop-shadow-sm">
                  Bringing Hope <br className="hidden sm:block" />
                  <span className="italic text-brand-primary">and Building Families</span> <br className="hidden sm:block" />
                  with Expert Care.
                </h1>
                
                <div className="pt-4 md:pt-6">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-3.5 md:py-4 border border-transparent text-base font-medium rounded-full text-white bg-brand-primary hover:bg-brand-primary-dark transition-all gap-2 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    <Calendar size={20} className="mr-1" />
                    Book Your Appointment
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div 
            className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/images/treatments/iui_consult.png')" }}
          >
            <div className="absolute inset-0 bg-brand-rose/80 backdrop-blur-[2px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
              <div className="w-full max-w-4xl space-y-6 md:space-y-8 flex flex-col items-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-text leading-tight drop-shadow-sm">
                  IVF is <span className="text-brand-primary border-b-4 border-brand-primary pb-1">NOT</span> your only option.
                </h1>
                
                <p className="text-lg md:text-2xl text-brand-text/80 max-w-2xl leading-relaxed font-medium">
                  We offer a wide range of fertility treatments tailored to your unique needs.
                </p>

                <div className="pt-4 md:pt-6">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-3.5 md:py-4 border border-transparent text-base font-medium rounded-full text-white bg-brand-primary hover:bg-brand-primary-dark transition-all gap-2 group shadow-lg"
                  >
                    Explore Your Care Plan
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>

      {/* Floating Badges overlaying the swiper (visible on large screens) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-6">
            <div className="bg-white shadow-xl rounded-2xl p-5 flex items-center gap-4 w-[280px] border border-brand-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary flex-shrink-0">
                <UserCheck size={28} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm text-brand-text/60 font-medium uppercase tracking-wider">Experienced</span>
                <span className="text-lg font-bold text-brand-text">Specialists</span>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-5 flex items-center gap-4 w-[280px] border border-brand-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary flex-shrink-0">
                <Stethoscope size={28} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm text-brand-text/60 font-medium uppercase tracking-wider">Advanced</span>
                <span className="text-lg font-bold text-brand-text">Technology</span>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-5 flex items-center gap-4 w-[280px] border border-brand-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary flex-shrink-0">
                <Heart size={28} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm text-brand-text/60 font-medium uppercase tracking-wider">Personalized</span>
                <span className="text-lg font-bold text-brand-text">Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
