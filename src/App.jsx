import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurDoctors from './pages/OurDoctors';
import Home from './pages/Home';
import TreatmentDetail from './pages/TreatmentDetail';
import Gallery from './pages/Gallery';
// Treatments and Surgeries hub pages can also point to TreatmentDetail or a custom hub if we build one
// For now, let's map all the legacy routes to TreatmentDetail

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-x-hidden font-sans flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/our-doctors" element={<OurDoctors />} />
            
            {/* Location Landing Pages */}
            <Route path="/visakhapatnam" element={<Home />} />
            <Route path="/vijayanagaram" element={<Home />} />
            <Route path="/srikakulam" element={<Home />} />
            
            {/* Dynamic Treatment / Surgery Pages */}
            <Route path="/assisted-hatching" element={<TreatmentDetail />} />
            <Route path="/counselling" element={<TreatmentDetail />} />
            <Route path="/embryo-donation" element={<TreatmentDetail />} />
            <Route path="/fertility-enhancing-surgeries/adhesiolysis" element={<TreatmentDetail />} />
            <Route path="/fertility-enhancing-surgeries" element={<TreatmentDetail />} />
            <Route path="/fertility-enhancing-surgeries/myomectomy" element={<TreatmentDetail />} />
            <Route path="/fertility-enhancing-surgeries/ovarian-cystectomy" element={<TreatmentDetail />} />
            <Route path="/fertility-enhancing-surgeries/ovarian-drilling" element={<TreatmentDetail />} />
            <Route path="/fertility-enhancing-surgeries/removal-of-ectopic-pregnancy" element={<TreatmentDetail />} />
            <Route path="/fertility-enhancing-surgeries/tubal-surgery" element={<TreatmentDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/hello-world" element={<TreatmentDetail />} />
            <Route path="/hysteroscopic-surgery" element={<TreatmentDetail />} />
            <Route path="/hysteroscopic-surgery/myomectomy" element={<TreatmentDetail />} />
            <Route path="/hysteroscopic-surgery/polypectomy" element={<TreatmentDetail />} />
            <Route path="/hysteroscopic-surgery/septum-resection" element={<TreatmentDetail />} />
            <Route path="/hysteroscopic-surgery/tubal-cannulation" element={<TreatmentDetail />} />
            <Route path="/icsi" element={<TreatmentDetail />} />
            <Route path="/imsi" element={<TreatmentDetail />} />
            <Route path="/iui" element={<TreatmentDetail />} />
            <Route path="/ivf" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/adhesiolysis" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/laparoscopic-hysterectomy" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/laparoscopic-tubectomy" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/myomectomy" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/ovarian-cystectomy" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/ovarian-drilling" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/removal-of-ectopic-pregnancy" element={<TreatmentDetail />} />
            <Route path="/laparoscopic-surgery/tubal-surgery" element={<TreatmentDetail />} />
            <Route path="/oocyte-donation" element={<TreatmentDetail />} />
            <Route path="/oocyte-freezing" element={<TreatmentDetail />} />
            <Route path="/preimplantation-genetic-screening" element={<TreatmentDetail />} />
            <Route path="/semen-banking" element={<TreatmentDetail />} />
            <Route path="/surgeries" element={<TreatmentDetail />} />
            <Route path="/tesa-and-tese" element={<TreatmentDetail />} />
            <Route path="/treatments" element={<TreatmentDetail />} />
            <Route path="/vitrification" element={<TreatmentDetail />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;