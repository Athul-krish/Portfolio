export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-[#09090B]" />

      <div
        className="absolute left-1/2 top-40 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]"
      />
    </>
  );
}