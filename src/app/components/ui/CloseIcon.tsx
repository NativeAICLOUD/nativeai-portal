/*
 * The site-wide close (X) mark: a bold, custom-drawn X in pure black with
 * fully rounded strokes, traced from the brand reference. One diagonal runs
 * corner to corner; the lower-left stroke meets it at the centre; the
 * upper-right stroke is a shorter, detached segment with a visible gap before
 * the crossing. No container, border or shadow — the button around it stays
 * transparent. Pair with CLOSE_BUTTON_CLASS so every popup, menu and overlay
 * closes with the same control.
 *
 * Geometry (viewBox 34, stroke 4 — the reference's 0.13 stroke-to-span ratio):
 * the strokes fill the box edge to edge, so the rendered size is the visual size.
 */

export const CLOSE_COLOR = '#000000';

const CLOSE_BUTTON_BASE =
  'flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-[#000000] opacity-100 shadow-none transition-opacity duration-200 ease-[ease] hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none';

// Transparent hit area slightly larger than the icon; fades to 70% on hover.
export const CLOSE_BUTTON_CLASS = `${CLOSE_BUTTON_BASE} h-10 w-10 md:h-11 md:w-11`;

// The navbar's close control: always a 44×44px target, also on phones, in the
// same blue as the menu's "Let's talk" button.
export const NAV_CLOSE_BUTTON_CLASS = `${CLOSE_BUTTON_BASE} h-11 w-11 !text-[#2563EB]`;
export const NAV_CLOSE_ICON_SIZE = 'h-4 w-4';

export default function CloseIcon({
  className = '',
  sizeClass = 'h-3.5 w-3.5 md:h-4 md:w-4',
}: {
  className?: string;
  /** Tailwind size of the mark; the proportions never change. */
  sizeClass?: string;
}) {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${sizeClass} shrink-0 ${className}`}
    >
      {/* main diagonal, continuous from top-left to bottom-right */}
      <line x1="2" y1="2" x2="32" y2="32" />
      {/* lower-left stroke, joining the main diagonal at the centre */}
      <line x1="2" y1="32" x2="17" y2="17" />
      {/* upper-right stroke: shorter and detached, a gap before the crossing */}
      <line x1="32" y1="2" x2="21.9" y2="12.1" />
    </svg>
  );
}
