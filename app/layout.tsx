import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/lib/data";
import CursorGlow from "@/components/CursorGlow";

// Inter — body font
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

// Fraunces — display/serif font for headings and italic subtitle
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/600-italic.css";

// JetBrains Mono — monospace for labels, eyebrows, and nav
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

const { meta, profile } = portfolio;

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const theme = stored === "light" ? "light" : "dark";
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: {
    default: meta.title,
    template: `%s - ${profile.name}`,
  },
  description: meta.description,
  keywords: meta.keywords,
  authors: [{ name: profile.name, url: meta.siteUrl }],
  creator: profile.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    url: meta.siteUrl,
    title: meta.title,
    description: meta.description,
    siteName: `${profile.name} - Portfolio`,
    images: [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: meta.description,
    url: meta.siteUrl,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, profile.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.department,
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <CursorGlow />
      </body>
    </html>
  );
}
