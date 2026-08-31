import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    review: "The team here made me feel so comfortable during my IVF journey. Dr. Ramesh and his staff are incredibly compassionate and skilled.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 2,
    name: "Anjali M.",
    review: "I finally found a clinic that listens. They took the time to understand my fertility concerns and gave me a personalized plan.",
    rating: 5,
    date: "3 months ago"
  },
  {
    id: 3,
    name: "Sneha V.",
    review: "From my first consultation to the successful delivery, the support has been phenomenal. Thank you Vizag IVF for making our dream come true.",
    rating: 5,
    date: "5 months ago"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            Patient Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
            Real Families. Real Stories.
          </h2>
          <div className="flex justify-center items-center">
             <div className="h-px w-12 bg-brand-primary/30"></div>
             <div className="w-2 h-2 rounded-full bg-brand-primary mx-3"></div>
             <div className="h-px w-12 bg-brand-primary/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-brand-gray/30 rounded-3xl p-8 relative">
              <Quote size={40} className="text-brand-primary/10 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-primary-light text-brand-primary-light" />
                ))}
              </div>
              
              <p className="text-brand-text/80 mb-6 italic min-h-[80px]">
                "{testimonial.review}"
              </p>
              
              <div className="flex justify-between items-center border-t border-brand-primary/10 pt-4">
                <span className="font-bold text-brand-text">{testimonial.name}</span>
                <span className="text-xs text-brand-text/50">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
