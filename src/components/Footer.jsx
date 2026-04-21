import React from 'react'

const Footer = () => {
  const handleFooterClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61571540978411', '_blank', 'noopener,noreferrer')
  }

  return (
    <footer 
      className="w-full pb-4 transition-colors duration-300 hover:bg-brand-dark active:bg-brand-dark cursor-pointer"
      onClick={handleFooterClick}
    >
      {/* Gold accent line on top */}
      <div className="w-full h-0.5 bg-gold-400 mb-4" aria-hidden="true" />
      
      {/* Footer text */}
      <div className="text-center">
        <p className="text-sm sm:text-base font-albert font-thin text-brand-dark transition-colors duration-300 hover:!text-white active:!text-white">
          Made with <ion-icon name="heart" className="inline-block mx-1 align-middle" style={{ fontSize: '1em', verticalAlign: 'middle' }}></ion-icon> by Moments by Raya
        </p>
      </div>
    </footer>
  )
}

export default Footer

