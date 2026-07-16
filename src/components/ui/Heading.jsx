export default function Heading({
  title,
  subtitle,
}) {
  return (
    <div className="mb-16 text-center">

      <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

    </div>
  );
}