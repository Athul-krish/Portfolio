export default function Badge({ children }) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-zinc-700
      bg-zinc-900
      px-4
      py-2
      text-sm
      text-zinc-300
      "
    >
      {children}
    </span>
  );
}