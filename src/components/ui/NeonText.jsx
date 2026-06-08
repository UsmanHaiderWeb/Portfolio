// Display heading in Orbitron with a configurable neon glow.
const GLOW = {
  cyan: 'text-glow-cyan',
  magenta: 'text-glow-magenta',
  lime: 'text-glow-lime',
  none: '',
}

export default function NeonText({ as: Tag = 'h2', glow = 'cyan', className = '', style, children }) {
  return (
    <Tag className={`font-display text-white ${GLOW[glow] ?? ''} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
