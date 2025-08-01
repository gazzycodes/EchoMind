export const theme = {
  colors: {
    // Dark theme inspired by Notion/Spotify
    background: {
      primary: '#0f0f0f',      // Main background
      secondary: '#1a1a1a',    // Card/panel background
      tertiary: '#2a2a2a',     // Elevated elements
      hover: '#333333',        // Hover states
    },
    text: {
      primary: '#ffffff',      // Main text
      secondary: '#b3b3b3',    // Secondary text
      muted: '#666666',        // Muted text
      accent: '#1db954',       // Spotify green accent
    },
    accent: {
      primary: '#1db954',      // Main accent (Spotify green)
      secondary: '#1ed760',    // Lighter accent
      tertiary: '#169c46',     // Darker accent
      purple: '#8b5cf6',       // Purple accent for variety
      blue: '#3b82f6',         // Blue accent
      orange: '#f59e0b',       // Orange for focus mode
    },
    border: {
      primary: '#333333',      // Main borders
      secondary: '#404040',    // Lighter borders
      focus: '#1db954',        // Focus borders
    },
    slider: {
      track: '#404040',        // Slider track
      thumb: '#1db954',        // Slider thumb
      fill: '#1db954',         // Slider fill
    },
    button: {
      primary: '#1db954',      // Primary button
      secondary: '#333333',    // Secondary button
      danger: '#ef4444',       // Danger button
      disabled: '#666666',     // Disabled state
    },
    status: {
      success: '#22c55e',      // Success state
      warning: '#f59e0b',      // Warning state
      error: '#ef4444',        // Error state
      info: '#3b82f6',         // Info state
    }
  },
  
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    }
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    full: '9999px',   // Full rounded
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(29, 185, 84, 0.3)',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  }
};

export type Theme = typeof theme;
