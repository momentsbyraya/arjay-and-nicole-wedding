import React from 'react'
import GradientLayer from './GradientLayer'

const ImageBanner = ({ src, alt = "Banner image" }) => {
  return (
    <div className="relative z-20 w-screen" style={{ width: '100vw' }}>
      <div className="relative w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
          {/* Two blended brand-light fades (match Details `bg-brand-light`) — no white stack */}
          <GradientLayer
            height="h-40"
            opacity={0.52}
            gradientId="detailBannerFadeA"
            transform="translateY(5px)"
          />
          <GradientLayer
            height="h-28"
            opacity={0.42}
            gradientId="detailBannerFadeB"
            transform="translateY(2px)"
          />

          {/* Bottom edge: soft mix into page background */}
          <svg
            className="absolute bottom-0 left-0 w-full h-[10px] pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1200 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="detailBannerEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(212, 220, 227, 0.2)" />
                <stop offset="55%" stopColor="rgba(212, 220, 227, 0.75)" />
                <stop offset="100%" stopColor="rgb(212, 220, 227)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#detailBannerEdge)" />
          </svg>
          
          {/* Details Title at bottom */}
          <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center items-center pb-0.5 z-10">
            <div className="w-full text-center">
              {/* The in Ballet font */}
              <h1 className="font-ballet text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 text-neutral-dark">
                The
              </h1>
              {/* Details in Tebranos font */}
              <h2 className="font-tebranos text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase mb-4 -mt-6 text-brand">
                Details
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageBanner
