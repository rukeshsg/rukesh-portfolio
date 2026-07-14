"use client";

import { motion } from "framer-motion";

export default function LossCurve() {
  const path =
    "M0,10 C 20,12 35,45 55,58 C 75,70 95,74 120,80 C 150,87 180,90 210,92 C 250,94 290,95 320,95.5";

  return (
    <div className="flex items-end gap-4" aria-hidden="true">
      <svg
        viewBox="0 0 320 110"
        className="h-16 w-40 sm:h-20 sm:w-52"
        fill="none"
      >
        <line x1="0" y1="100" x2="320" y2="100" stroke="#24262D" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="100" stroke="#24262D" strokeWidth="1" />
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={i * 106}
            y1="98"
            x2={i * 106}
            y2="102"
            stroke="#33363F"
            strokeWidth="1"
          />
        ))}
        <motion.path
          d={path}
          stroke="#D9A441"
          strokeWidth="1.75"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="pb-1 font-mono text-[11px] leading-tight text-mist">
        <p className="text-signal-dim">loss</p>
        <p>↓ 0.0142</p>
      </div>
    </div>
  );
}
