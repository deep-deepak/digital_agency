import Seo from "@/common/Seo";
import Layout from "@/layout/Layout";
import HeroSection from "@/landingpage/HeroSection";
import AboutSection from "@/landingpage/About";
import ServicesSection from "@/landingpage/Services";
import WhyChooseUs from "@/landingpage/WhyChooseUs";
import Process from "@/landingpage/Process";
import Testimonials from "@/landingpage/Testimonials";
import FaqSection from "@/landingpage/FaqSection";
import Contact from "@/landingpage/Contact";

export default function Home() {
  return (
    <>
      <Layout>
        <Seo
          title={"Ascendly Digital Marketing - Growth-Driven Marketing Agency"}
          descrption={"Ascendly Digital Marketing is a full-service growth agency specialising in SEO, paid media, social media marketing, content marketing, email marketing, and conversion-focused web design."}
        />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FaqSection />
        <Contact />
      </Layout>
    </>
  );
}
