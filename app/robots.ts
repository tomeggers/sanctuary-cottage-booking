import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://sanctuarycottage.co.nz/sitemap.xml",
    host: "https://sanctuarycottage.co.nz",
  };
}
