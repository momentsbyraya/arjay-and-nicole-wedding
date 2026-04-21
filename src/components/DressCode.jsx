import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { dresscode } from '../data'
import './pages/Details.css'

gsap.registerPlugin(ScrollTrigger)

const DressCode = () => {
  const dressCodeTitleRef = useRef(null)
  const dressCodeContentRef = useRef(null)
  const dressImageRef = useRef(null)
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [currentDressImageIndex, setCurrentDressImageIndex] = useState(0)

  const dressSwatches = [
    { key: 'shared-0', colorHex: '#B2BEB5', label: 'Ash Gray' },
    { key: 'shared-1', colorHex: '#708090', label: 'Slate Gray' },
    { key: 'shared-2', colorHex: '#93A8AC', label: 'Dusty Blue' },
  ]
  const dressCodeImages = [
    '/assets/images/dresscode/for square assets.png',
    '/assets/images/dresscode/for square assets (1).png',
  ]

  const section = dresscode.sections?.[0]
  const activeDressCodeImage = dressCodeImages[currentDressImageIndex] || section?.image

  useEffect(() => {
    if (dressCodeTitleRef.current) {
      ScrollTrigger.create({
        trigger: dressCodeTitleRef.current,
        start: 'top 80%',
        animation: gsap.fromTo(
          dressCodeTitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        ),
        toggleActions: 'play none none reverse',
      })
    }

    if (dressCodeContentRef.current) {
      ScrollTrigger.create({
        trigger: dressCodeContentRef.current,
        start: 'top 75%',
        animation: gsap.fromTo(
          dressCodeContentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        ),
        toggleActions: 'play none none reverse',
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (
          trigger.vars &&
          (trigger.vars.trigger === dressCodeTitleRef.current ||
            trigger.vars.trigger === dressCodeContentRef.current)
        ) {
          trigger.kill()
        }
      })
    }
  }, [])

  useEffect(() => {
    if (dressCodeImages.length < 2) return undefined

    const intervalId = window.setInterval(() => {
      setCurrentDressImageIndex(prevIndex => (prevIndex + 1) % dressCodeImages.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [dressCodeImages.length])

  useEffect(() => {
    if (!dressImageRef.current) return

    gsap.fromTo(
      dressImageRef.current,
      { opacity: 0.45, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out' }
    )
  }, [currentDressImageIndex])

  return (
    <div className="relative pb-20 sm:pb-24 md:pb-32">
      <div ref={dressCodeTitleRef} className="text-center mb-10 sm:mb-14">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/images/graphics/single-flower-1.png"
            alt="Flower decoration"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
        <h3 className="relative inline-block px-6 py-3">
          <span className="font-tebranos text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block leading-none uppercase dress-code-title-text">
            {dresscode.mainDressCode?.title || 'Dress Code'}
          </span>
        </h3>
      </div>

      {section && (
        <div ref={dressCodeContentRef} className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-boska text-neutral-dark">
              {section.title}
            </h4>
          </div>

          {section.description && (
            <p className="text-sm sm:text-base font-albert font-thin italic text-neutral-dark text-center mb-5">
              {section.description}
            </p>
          )}

          {activeDressCodeImage && (
            <div className="mb-5">
              <img
                ref={dressImageRef}
                src={activeDressCodeImage}
                alt={section.title}
                className="w-full h-full object-cover rounded dresscode-image-container"
              />
            </div>
          )}

          <div className="flex gap-2 justify-center">
            {dressSwatches.map(({ key, colorHex, label }) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setActiveTooltip(key)}
                onMouseLeave={() => setActiveTooltip(null)}
                onClick={() => setActiveTooltip(activeTooltip === key ? null : key)}
              >
                <div
                  className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded cursor-pointer"
                  style={{ backgroundColor: colorHex }}
                />
                {activeTooltip === key && (
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-brand-dark text-white text-xs rounded whitespace-nowrap z-[9999] pointer-events-none color-swatch-tooltip"
                    style={{ position: 'absolute' }}
                  >
                    {label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-brand-dark"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {dresscode.mainDressCode?.description && (
            <p className="text-base sm:text-lg font-albert font-thin italic text-neutral-dark text-center mt-6">
              {dresscode.mainDressCode.description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default DressCode
