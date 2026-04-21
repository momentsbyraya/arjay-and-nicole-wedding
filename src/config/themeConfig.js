// Theme configuration — brand + neutral palette (Tailwind utility class strings)
export const themeConfig = {
  backgrounds: {
    primary: 'bg-neutral-light',
    secondary: 'bg-white',
    accent: 'bg-brand',
    light: 'bg-white',
    theme: 'bg-brand-light',
    alt: 'bg-brand',
    subtle: 'bg-neutral-light',
    crumpledPaper: 'bg-[url("/assets/images/crumpled-paper.png")] bg-cover bg-center bg-no-repeat',
  },

  text: {
    primary: 'text-neutral-dark',
    secondary: 'text-brand',
    accent: 'text-brand',
    muted: 'text-neutral-dark/65',
    dark: 'text-neutral-dark',
    theme: 'text-brand-dark',
    inverted: 'text-white',
    pause: 'text-white',
    custom: 'text-neutral-dark',
  },

  borders: {
    primary: 'border-neutral-dark',
    secondary: 'border-brand',
    accent: 'border-brand',
    theme: 'border-brand-dark',
    soft: 'border-brand',
    strong: 'border-brand-dark',
  },

  buttons: {
    primary: 'bg-brand',
    secondary: 'bg-brand-light',
    hover: 'hover:bg-brand-dark',
    text: 'text-neutral-dark',
    theme: 'bg-brand',
  },

  hover: {
    primary: 'hover:bg-brand-dark',
    secondary: 'hover:bg-brand',
    theme: 'hover:bg-brand-dark',
  },

  container: {
    maxWidth: 'max-w-[1300px]',
    padding: 'px-4 sm:px-6 lg:px-8',
    center: 'mx-auto',
  },

  calendar: {
    weddingDate: '2026-07-25',
    highlightColor: 'bg-brand',
    heartColor: 'text-brand-dark',
    textColor: 'text-neutral-dark',
    headerColor: 'text-neutral-dark',
    dayNamesColor: 'text-brand-dark',
    background: 'bg-brand-light',
  },

  paragraph: {
    background: 'bg-white',
  },

  cssVariables: {
    '--brand-light': '#D4DCE3',
    '--brand': '#8698AA',
    '--brand-dark': '#64798C',
    '--neutral-light': '#F5F7FA',
    '--neutral-dark': '#1F2A37',
    '--white': '#FFFFFF',
    '--primary-bg': '#F5F7FA',
    '--secondary-bg': '#FFFFFF',
    '--accent-bg': '#8698AA',
    '--accent-hover': '#64798C',
    '--primary-text': '#1F2A37',
    '--secondary-text': '#64798C',
    '--accent-text': '#64798C',
    '--muted-text': '#64798C',
    '--border-color': '#8698AA',
    '--custom-theme': '#8698AA',
  },
}

export const themePresets = {
  darkElegant: {
    backgrounds: {
      primary: 'bg-neutral-light',
      secondary: 'bg-white',
      accent: 'bg-brand',
    },
    text: {
      primary: 'text-neutral-dark',
      secondary: 'text-brand',
      accent: 'text-brand-dark',
    },
  },
  lightRomantic: {
    backgrounds: {
      primary: 'bg-neutral-light',
      secondary: 'bg-white',
      accent: 'bg-brand-light',
    },
    text: {
      primary: 'text-neutral-dark',
      secondary: 'text-brand',
      accent: 'text-brand-dark',
    },
  },
  warmAutumn: {
    backgrounds: {
      primary: 'bg-neutral-light',
      secondary: 'bg-white',
      accent: 'bg-brand',
    },
    text: {
      primary: 'text-neutral-dark',
      secondary: 'text-brand',
      accent: 'text-brand-dark',
    },
  },
}

export const getThemeColor = (type, variant = 'primary') => {
  return themeConfig[type]?.[variant] || themeConfig.text.primary
}

export const applyThemePreset = (presetName) => {
  const preset = themePresets[presetName]
  if (preset) {
    Object.assign(themeConfig, preset)
  }
}
