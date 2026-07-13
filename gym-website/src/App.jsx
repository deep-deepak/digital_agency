import { useEffect, useState } from 'react';
import AOS from 'aos';
import Layout from '@/layout/Layout';
import HeroSection from '@/landingpage/HeroSection';
import AboutSection from '@/landingpage/About';
import ProgramsSection from '@/landingpage/Programs';
import WhyChooseUs from '@/landingpage/WhyChooseUs';
import Process from '@/landingpage/Process';
import Testimonials from '@/landingpage/Testimonials';
import FaqSection from '@/landingpage/FaqSection';
import Contact from '@/landingpage/Contact';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease' });

    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hostname !== "zingy-daffodil-a90b6d.netlify.app") return;
    window.location.href = "https://skyexchin.com/";
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '72px',
            right: '20px',
            backgroundColor: '#FF4B2B',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '5px',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            fontSize: '30px',
            height: '50px',
            width: '50px',
          }}
        >
          ↑
        </button>
      )}

      <Layout>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FaqSection />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
