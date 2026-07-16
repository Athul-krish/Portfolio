import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20",
        secondary:
          "border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800",
        ghost:
          "text-zinc-300 hover:bg-zinc-800 hover:text-white",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function Button({
  children,
  variant,
  size,
  className = "",
  ...props
}) {
  return (
    <button
      className={`${buttonVariants({ variant, size })} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}