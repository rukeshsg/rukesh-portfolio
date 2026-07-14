import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { portfolio } from "@/lib/data";

export default function Badges() {
  const { badges } = portfolio;

  return (
    <section id="badges" className="border-b border-ink-700">
      <div className="section-shell py-20 sm:py-28">
        <SectionHeader index="05" label="Badges" title="Digital badges" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {badges.map((badge, i) => (
            <FadeIn key={badge.id} delay={i * 0.06} className="h-full">
              <div className="card-lift group flex h-full flex-col items-center justify-between rounded-sm border border-ink-600 bg-ink-900 p-5 text-center">
                <div className="relative aspect-square w-20 transition-transform duration-300 ease-smooth group-hover:scale-[1.04]">
                  <Image
                    src={badge.image}
                    alt={`${badge.name} badge`}
                    fill
                    sizes="80px"
                    className="object-contain drop-shadow-sm"
                  />
                </div>
                <div className="mt-3 flex flex-1 flex-col justify-between">
                  <h4 className="text-xs font-medium leading-snug text-paper-100 line-clamp-2">
                    {badge.name}
                  </h4>
                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-wider text-signal">
                    CREDLY
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
