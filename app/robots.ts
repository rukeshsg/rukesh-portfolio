import { MetadataRoute } from "next";
import { portfolio } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolio.meta.siteUrl}/sitemap.xml`,
  };
}
