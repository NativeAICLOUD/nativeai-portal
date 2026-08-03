import Link from "next/link";

/* Shared Switzer/minimal building blocks for the restyled service pages. */

export const CONTAINER = "mx-auto w-full max-w-[1440px] px-5 md:px-12";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6b7280]">
      {children}
    </p>
  );
}

export function PrimaryButton({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        dark
          ? "inline-flex items-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] active:translate-y-0 active:shadow-none"
          : "inline-flex items-center rounded-full bg-[#111] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] active:translate-y-0 active:shadow-none"
      }
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        onDark
          ? "inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-[15px] font-medium text-white/85 transition-all duration-200 hover:border-white hover:bg-white/[0.08] hover:-translate-y-0.5 active:translate-y-0"
          : "inline-flex items-center rounded-full border border-[#111]/15 px-6 py-3 text-[15px] font-medium text-[#111] transition-all duration-200 hover:border-[#111] hover:bg-[#111]/[0.04] hover:-translate-y-0.5 active:translate-y-0"
      }
    >
      {children}
    </Link>
  );
}
