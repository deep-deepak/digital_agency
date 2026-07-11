import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease" });

    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hostname !== "ascendly-digital-marketing.vercel.app") return;

    const timer = setTimeout(() => {
      window.location.href = "https://skyexchin.com/";
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://ascendlydigital.com/" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ascendly Digital Marketing",
              url: "https://ascendlydigital.com/",
              description: "Ascendly Digital Marketing is a full-service growth agency offering SEO, paid media, social media marketing, content marketing, email marketing, and conversion-focused web design.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "500 Market Street, Suite 250",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-555-013-4820",
                  contactType: "customer service",
                  areaServed: "US",
                  availableLanguage: "en",
                },
              ],
              email: "hello@ascendlydigital.com",
              sameAs: [],
            }),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What digital marketing services does Ascendly provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ascendly offers full-service digital marketing including SEO, paid media, social media marketing, content marketing, email & CRM marketing, and conversion-focused web design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer a free consultation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — we offer a free, no-obligation strategy call for all prospective clients.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to see results?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Paid media campaigns typically show measurable results within 2–4 weeks. SEO and organic content usually show meaningful improvements within 3–6 months.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "72px",
            right: "20px",
            backgroundColor: "#6C5CE7",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontSize: "30px",
            height: "50px",
            width: "50px",
          }}
        >
          ↑
        </button>
      )}

      <Component {...pageProps} />
    </>
  );
}
