import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is IVF and how does it work?",
    answer: "In Vitro Fertilization (IVF) is a complex series of procedures used to help with fertility and assist with the conception of a child. During IVF, mature eggs are collected from ovaries and fertilized by sperm in a lab. Then the fertilized egg (embryo) is transferred to a uterus."
  },
  {
    question: "How long does a complete IVF cycle take?",
    answer: "One full cycle of IVF takes about three to four weeks. Sometimes these steps are split into different parts and the process can take longer depending on your specific treatment plan."
  },
  {
    question: "What are the success rates of IVF?",
    answer: "Success rates vary depending on several factors, primarily the patient's age and the cause of infertility. We pride ourselves on having some of the highest success rates in the region, using advanced technology and personalized care plans."
  },
  {
    question: "Is the IVF procedure painful?",
    answer: "Most of our patients report only mild discomfort. The egg retrieval process is performed under light anesthesia, so you will not feel pain during the procedure. You may experience some cramping and bloating afterwards."
  },
  {
    question: "When should we consider consulting a fertility specialist?",
    answer: "Generally, if you are under 35 and have been trying to conceive for a year, or over 35 and have been trying for six months, it's a good time to seek an evaluation. However, if you have known fertility issues or underlying conditions, you can consult us anytime."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-rose">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-text/70 text-lg">
            Find answers to some of the most common questions about our fertility treatments.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-brand-primary-light/20 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-brand-text text-[15px] md:text-lg">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-brand-primary/10 text-brand-primary'}`}>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 text-brand-text/70 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
