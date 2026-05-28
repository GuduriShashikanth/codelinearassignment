import type { ReactElement, ReactNode, SVGProps } from 'react';
import type { IconName } from '../../data/content';

type P = SVGProps<SVGSVGElement>;

/* ---- generic UI icons ---- */
export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="m7.5 12.3 3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronLeft = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="m14 6-6 6 6 6" />
  </svg>
);

export const ChevronRight = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="m10 6 6 6-6 6" />
  </svg>
);

export const ChevronDown = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Bolt = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M13 2 4.5 13.2c-.4.6 0 1.3.7 1.3H11l-1 7.5 8.5-11.2c.4-.6 0-1.3-.7-1.3H12l1-7.5Z" />
  </svg>
);

/* ---- N7 brand "X" glyph used as the logo mark ---- */
export const BrandGlyph = (p: P) => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden {...p}>
    <path
      d="M8 8c3.6 1.2 6 3.6 7.2 7.2C16.4 11.6 18.8 9.2 22 8c-3.2-1.2-5.6-3.6-6.8-7.2C14 4.4 11.6 6.8 8 8Z"
      transform="translate(2 11) scale(0.95)"
      fill="currentColor"
    />
  </svg>
);

/* ---- solution glyphs (thin line icons) ---- */
const wrap = (children: ReactNode, p: P) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    {children}
  </svg>
);

const solutionGlyphs: Record<IconName, (p: P) => ReactElement> = {
  core: (p) =>
    wrap(
      <>
        <path d="M16 4c5 4 5 20 0 24M16 4c-5 4-5 20 0 24" />
        <path d="M5 11c4 2 18 2 22 0M5 21c4-2 18-2 22 0" />
        <circle cx="16" cy="16" r="2.4" />
      </>,
      p,
    ),
  digital: (p) =>
    wrap(
      <>
        <rect x="9" y="9" width="14" height="14" rx="3" />
        <path d="M9 13a4 4 0 1 1 4 4M23 13a4 4 0 1 0-4 4M13 23a4 4 0 1 0 4-4M19 23a4 4 0 1 1-4-4" />
      </>,
      p,
    ),
  open: (p) =>
    wrap(
      <>
        <rect x="5" y="5" width="22" height="22" rx="6" />
        <path d="m12 12 8 8M20 12l-8 8" />
      </>,
      p,
    ),
  origination: (p) =>
    wrap(
      <>
        <path d="M16 5v22M5 16h22M8 8l16 16M24 8 8 24" />
        <circle cx="16" cy="16" r="3.2" />
      </>,
      p,
    ),
  management: (p) =>
    wrap(
      <>
        <path d="M16 4 27 10v12L16 28 5 22V10z" />
        <path d="m12 12 8 8M20 12l-8 8" />
      </>,
      p,
    ),
};

export const SolutionIcon = ({ name, ...p }: { name: IconName } & P) =>
  solutionGlyphs[name](p);
