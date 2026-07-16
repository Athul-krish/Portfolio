export default function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-indigo-500 hover:text-white">
      {children}
    </span>
  );
}