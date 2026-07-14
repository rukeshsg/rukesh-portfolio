import { portfolio } from "@/lib/data";

export default function Footer() {
  const { profile } = portfolio;

  return (
    <footer className="section-shell flex flex-col items-center justify-between gap-3 py-8 font-mono text-[11px] uppercase text-mist sm:flex-row">
      <p>Copyright {new Date().getFullYear()} {profile.name}</p>
      <p>Built with Next.js &amp; TypeScript</p>
    </footer>
  );
}
