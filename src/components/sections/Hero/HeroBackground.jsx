export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#09090B]" />

      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[170px]" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />
    </>
  );
}