module.exports = {
  siteUrl: 'https://dazzle-delta.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/private-page'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://dazzle-delta.vercel.app/server-sitemap.xml'
    ],
  },
}
  