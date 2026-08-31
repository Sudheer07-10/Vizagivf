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
const locationPaths = ["", "/visakhapatnam", "/vizianagaram", "/srikakulam", "/gajuwaka"];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-x-hidden font-sans flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {locationPaths.map((loc) => {
              // Ensure we don't end up with "//" for the root home path
              const homePath = loc === "" ? "/" : loc;
              return (
                <React.Fragment key={loc}>
                  {/* Core Pages */}
                  <Route path={homePath} element={<Home />} />
                  <Route path={`/about-us${loc}`} element={<AboutUs />} />
                  <Route path={`/contact-us${loc}`} element={<ContactUs />} />
                  <Route path={`/our-doctors${loc}`} element={<OurDoctors />} />
                  
                  {/* Dynamic Treatment / Surgery Pages */}
                  <Route path={`/assisted-hatching${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/counselling${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/embryo-donation${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fertility-enhancing-surgeries/adhesiolysis${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fertility-enhancing-surgeries${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fertility-enhancing-surgeries/myomectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fertility-enhancing-surgeries/ovarian-cystectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fertility-enhancing-surgeries/ovarian-drilling${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fertility-enhancing-surgeries/removal-of-ectopic-pregnancy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fertility-enhancing-surgeries/tubal-surgery${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/gallery${loc}`} element={<Gallery />} />
                  <Route path={`/hello-world${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/hysteroscopic-surgery${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/hysteroscopic-surgery/myomectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/hysteroscopic-surgery/polypectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/hysteroscopic-surgery/septum-resection${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/hysteroscopic-surgery/tubal-cannulation${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/icsi${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/imsi${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/iui${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/ivf${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/adhesiolysis${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/laparoscopic-hysterectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/laparoscopic-tubectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/myomectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/ovarian-cystectomy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/ovarian-drilling${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/removal-of-ectopic-pregnancy${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/laparoscopic-surgery/tubal-surgery${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/oocyte-donation${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/oocyte-freezing${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/preimplantation-genetic-screening${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/semen-banking${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/surgeries${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/tesa-and-tese${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/treatments${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/vitrification${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/urinary-leakage${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/pcod-pcos${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/fibroids${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/tubal-blocks${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/embryo-freezing${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/endometriosis${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/recurrent-miscarriage${loc}`} element={<TreatmentDetail />} />
                  <Route path={`/male-infertility${loc}`} element={<TreatmentDetail />} />
                </React.Fragment>
              );
            })}
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;