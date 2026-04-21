import React from 'react'

/** Matches Tailwind `brand-light` / `--brand-light` (no harsh white band) */
const BR = 212
const BG = 220
const BB = 227

const GradientLayer = ({ height, opacity, gradientId, transform = 'translateY(8px)' }) => {
  const solidEndOpacity = Math.min(opacity + 0.18, 0.92)

  const waveAmplitude = opacity * 8
  const waveFrequency = 0.02

  const generateWavePath = (width, height, amplitude, frequency) => {
    let path = `M 0 ${height} L 0 ${amplitude} `
    for (let x = 0; x <= width; x += 2) {
      const y = amplitude + Math.sin(x * frequency) * amplitude
      path += `L ${x} ${y} `
    }
    path += `L ${width} ${height} Z`
    return path
  }

  return (
    <svg
      className={`absolute bottom-0 left-0 w-full ${height} pointer-events-none`}
      style={{ transform }}
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={`rgba(${BR}, ${BG}, ${BB}, 0)`} />
          <stop offset="50%" stopColor={`rgba(${BR}, ${BG}, ${BB}, ${opacity * 0.45})`} />
          <stop offset="82%" stopColor={`rgba(${BR}, ${BG}, ${BB}, ${opacity * 0.72})`} />
          <stop offset="100%" stopColor={`rgba(${BR}, ${BG}, ${BB}, ${solidEndOpacity})`} />
        </linearGradient>
      </defs>
      <path
        d={generateWavePath(1200, 120, waveAmplitude, waveFrequency)}
        fill={`url(#${gradientId})`}
      />
    </svg>
  )
}

export default GradientLayer
