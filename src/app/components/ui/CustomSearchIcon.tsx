/*
 * The site's search mark: a minimalist magnifying glass drawn as one stroke.
 * The circle is almost complete — it starts where the handle meets it (lower
 * right, 45°), runs the long way round and stops just above that junction,
 * leaving a small opening at about four o'clock. The short handle continues
 * from the junction down to the right. Rounded caps and joins, no fill,
 * border or shadow. Same family as the custom close mark (CloseIcon).
 *
 * Geometry (viewBox 31): centre 13.5/13.5, radius 10, stroke 2.6;
 * arc from 45° clockwise to 15°; handle from the 45° point to 27.5/27.5.
 */

export const SEARCH_ICON_COLOR = '#48463F';

export default function CustomSearchIcon({
  className = '',
  sizeClass = 'h-[18px] w-[18px]',
}: {
  className?: string;
  /** Tailwind size of the mark; the proportions never change. */
  sizeClass?: string;
}) {
  return (
    <svg
      viewBox="0 0 31 31"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${sizeClass} shrink-0 text-[#48463F] ${className}`}
    >
      <path d="M27.5 27.5 20.57 20.57A10 10 0 1 1 23.16 16.09" />
    </svg>
  );
}
