/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://127.0.0.1:8080',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // ...other options
};
