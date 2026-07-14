import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { portfolio } from "@/lib/data";

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function Contact() {
  const { profile } = portfolio;

  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "GitHub",
      value: displayUrl(profile.github),
      href: profile.github,
      icon: Github,
      external: true,
    },
    {
      label: "LinkedIn",
      value: displayUrl(profile.linkedin),
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: profile.resumeUrl,
      icon: FileDown,
      external: true,
      download: true,
    },
  ];

  return (
    <section id="contact">
      <div className="section-shell py-20 sm:py-28">
        <SectionHeader
          index="07"
          label="Contact"
          title="Let's talk"
          description="Open to internship opportunities in AI, Machine Learning, and Data Science."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <FadeIn key={link.label} delay={i * 0.06}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={link.download}
                  className="card-lift group flex min-h-24 items-center justify-between gap-4 rounded-sm border border-ink-600 bg-ink-900 px-6 py-5"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <Icon size={18} className="shrink-0 text-signal" />
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase text-mist">
                        {link.label}
                      </p>
                      <p className="mt-1 break-words text-sm leading-relaxed text-paper-100">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
