import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost";
type Size = "sm" | "md";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  icon?: boolean;
  className?: string;
  download?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  icon = false,
  className,
  download = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 whitespace-nowrap rounded-sm font-mono text-xs uppercase leading-none transition-all duration-300 ease-smooth";

  const sizes: Record<Size, string> = {
    md: "px-6 py-3",
    sm: "px-4 py-2.5",
  };

  const styles: Record<Variant, string> = {
    primary:
      "bg-signal text-ink-950 hover:bg-signal-soft hover:-translate-y-0.5",
    ghost:
      "border border-ink-600 text-paper-100 hover:border-signal hover:text-signal hover:-translate-y-0.5",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(base, sizes[size], styles[variant], className)}
      {...props}
      {...(download ? { download: true } : {})}
    >
      {children}
      {icon && (
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
