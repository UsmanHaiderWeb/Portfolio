// Small techno section label, e.g. "02 / ABOUT", with a neon tick.
export default function Eyebrow({ index, children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-x-2 font-techno text-[11px] tracking-[0.35em] uppercase text-neon-cyan ${className}`}
    >
      <span className="w-4 h-px bg-neon-cyan/70" />
      {index ? <span className="text-white/40">{index}</span> : null}
      <span className="text-white/55">{children}</span>
    </span>
  )
}
