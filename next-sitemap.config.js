/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://merced-roofing-pros.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/merced-roofing": 0.9,
      "/calculator": 0.85,
      "/services": 0.8,
      "/contact": 0.75,
      "/about": 0.6,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
