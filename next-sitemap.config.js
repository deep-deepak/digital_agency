/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ascendlydigital.com',
  outDir: './build',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: true,
  exclude: ['/404'],
};
