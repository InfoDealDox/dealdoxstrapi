"use strict";

module.exports = {
  async index(ctx) {
    // 1. Define your static URLs here
    const staticUrls = [
      {
        loc: "https://www.dealdox.io/",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 1.0,
      },
      {
        loc: "https://www.dealdox.io/pricing",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/cpq-mobile-app",
        lastmod: "2025-01-10T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/services-cpq",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/cpq-integrations",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/quoting-software",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/approval-software",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/mobile-app",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/salesforce-cpq-integration",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/microsoft-dynamics-365-cpq-integration",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/freshworks-cpq-integration",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/hubspot-cpq-integration",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/sugarcrm-cpq-integration",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/our-team",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/contact",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/blogs",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/success-stories",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/glossary",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/news",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/demo",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/security",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/sales",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/why-dealdox",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/become-partner",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/alternative-to-salesforce-cpq",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/alternative-to-sap-cpq",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/alternative-to-oracle-cpq",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/alternative-to-zoho-cpq",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/alternative-to-hubspot-cpq",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/alternate-to-dealhub-cpq",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/terms-of-use",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/privacy-policy",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/cookie-preference",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.8,
      },
      {
        loc: "https://www.dealdox.io/glossary/quote-to-cash-solution",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.64,
      },
      {
        loc: "https://www.dealdox.io/glossary/accelerate-revenue-growth",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.64,
      },
      {
        loc: "https://www.dealdox.io/localized-deal-documents",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.64,
      },
      {
        loc: "https://www.dealdox.io/glossary/guided-selling-solutions",
        lastmod: "2024-12-15T10:35:42+00:00",
        priority: 0.64,
      },
    ];

    // 2. Fetch dynamic URLs from Strapi (e.g., blog posts)
    const blogEntries = await strapi.entityService.findMany("api::blog.blog", {
      fields: ["slug", "updatedAt"],
      sort: { updatedAt: "desc" },
    });

    const glossaryEntries = await strapi.entityService.findMany(
      "api::glossary.glossary",
      {
        fields: ["slug", "updatedAt"],
        sort: { updatedAt: "desc" },
      }
    );

    const successEntries = await strapi.entityService.findMany(
      "api::successstory.successstory",
      {
        fields: ["slug", "updatedAt"],
        sort: { updatedAt: "desc" },
      }
    );

    // // 3. Map dynamic data to sitemap URL format
    const blogUrls = blogEntries.map((blog) => ({
      loc: `https://www.dealdox.io/blog/${blog.slug}`,
      lastmod: new Date(blog.updatedAt).toISOString(),
      priority: 0.7,
    }));

    const glossaryUrl = glossaryEntries.map((glossary) => ({
      loc: `https://www.dealdox.io/glossary/${glossary.slug}`,
      lastmod: new Date(glossary.updatedAt).toISOString(),
      priority: 0.7,
    }));
    const successStoryUrl = glossaryEntries.map((success) => ({
      loc: `https://www.dealdox.io/success-story/${success.slug}`,
      lastmod: new Date(success.updatedAt).toISOString(),
      priority: 0.7,
    }));

    // // 4. Combine static and dynamic URLs
    const urls = [...staticUrls, ...blogUrls, ...glossaryUrl,...successStoryUrl];

    // 5. Generate XML sitemap string
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

    // 6. Set response content type and body
    ctx.set("Content-Type", "application/xml");
    ctx.body = xml;
  },
};
