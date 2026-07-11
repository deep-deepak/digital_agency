import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#14132B" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Ascendly Digital Marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ascendlydigital.com/" />
        <meta property="og:title" content="Ascendly | Digital Marketing Agency" />
        <meta property="og:description" content="Ascendly is a growth-driven digital marketing agency offering SEO, paid media, social media marketing, content marketing, and conversion-focused web design." />
        <meta property="og:image" content="https://ascendlydigital.com/cover.jpg" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
