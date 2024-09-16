import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'active:scale-99 font-semibold no-underline inline-flex items-center justify-center select-none transition-color transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    color: {
      primary: "bg-btn-color text-white hover:bg-btn-color-hover",
      blue: "bg-native-btn-blue text-white hover:bg-native-btn-blue-hover",
      secondary: "bg-white text-secondary border-2 border-solid border-border-color",
      outline: "bg-white/20 hover:bg-white/30 hover:shadow-md border border-black/30 text-black rounded-40",
      social: "bg-white rounded-28 shadow-social hover:shadow-md border border-social-border",
    },
    size: {
      sm: "text-sm px-2 sm:px-4 md:px-6 min-h-btn-sm min-w-btn-sm rounded-20",
      md: "text-base px-2 sm:px-4 md:px-6 min-h-btn-md min-w-btn-md rounded-3xl",
      mdx: "text-base px-2 sm:px-4 md:px-6 min-h-btn-md rounded-3xl",
      lg: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg min-w-btn-lg rounded-28",
      lgx: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg rounded-28",
    },
    icon: {
      sm: 'gap-1',
      md: 'gap-1.5',
      lg: 'gap-2',
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  }
});

export const container = () => 'max-w-wide-screen mx-auto px-3 md:px-4 lg:px-16';
