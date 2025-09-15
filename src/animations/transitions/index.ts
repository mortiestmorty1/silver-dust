// Re-export all transition variants for easy importing
export * from '../framer-motion/variants'

// Common transition configurations
export const TRANSITIONS = {
  // Page transitions
  PAGE: {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  },
  
  // Quick transitions
  QUICK: {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.2,
  },
  
  // Smooth transitions
  SMOOTH: {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3,
  },
  
  // Spring transitions
  SPRING: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  
  // Bounce transitions
  BOUNCE: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
  
  // Slow transitions
  SLOW: {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.6,
  },
} as const

// Easing functions
export const EASING = {
  EASE_IN: [0.4, 0, 1, 1],
  EASE_OUT: [0, 0, 0.2, 1],
  EASE_IN_OUT: [0.4, 0, 0.2, 1],
  EASE_IN_CUBIC: [0.4, 0, 1, 1],
  EASE_OUT_CUBIC: [0, 0, 0.2, 1],
  EASE_IN_OUT_CUBIC: [0.4, 0, 0.2, 1],
  EASE_IN_QUART: [0.5, 0, 1, 1],
  EASE_OUT_QUART: [0, 0, 0.5, 1],
  EASE_IN_OUT_QUART: [0.5, 0, 0.5, 1],
} as const

export type TransitionKey = keyof typeof TRANSITIONS
export type EasingKey = keyof typeof EASING
