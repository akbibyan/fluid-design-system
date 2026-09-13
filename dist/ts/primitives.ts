/**
 * Fluid Design System (FDS) - Tier 1 Global Primitives
 * Architecture Tier: 1 (Global / Primitives)
 */

export const colors = {
  base: {
    white: '#ffffff',
    black: '#000000',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    'caption-sm': '11px',
    'caption-md': '12px',
    'body-sm': '14px',
    'body-md': '16px',
    'body-lg': '18px',
    'heading-xs': '20px',
    'heading-sm': '24px',
    'heading-md': '28px',
    'heading-lg': '32px',
    'heading-xl': '40px',
    'heading-2xl': '48px',
  },
  lineHeight: {
    'caption-sm': '14px',
    'caption-md': '16px',
    'body-sm': '20px',
    'body-md': '24px',
    'body-lg': '28px',
    'heading-xs': '28px',
    'heading-sm': '32px',
    'heading-md': '36px',
    'heading-lg': '40px',
    'heading-xl': '48px',
    'heading-2xl': '56px',
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.01em',
  },
} as const;

export const spacing = {
  gridBase: '8px',
  0: '0px',
  '050': '4px',
  100: '8px',
  150: '12px',
  200: '16px',
  250: '20px',
  300: '24px',
  400: '32px',
  500: '40px',
  600: '48px',
  700: '56px',
  800: '64px',
  900: '72px',
  1000: '80px',
  1200: '96px',
  1600: '128px',
} as const;

export const radius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
} as const;

export const border = {
  width: {
    none: '0px',
    thin: '1px',
    medium: '2px',
    thick: '4px',
    heavy: '8px',
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    none: 'none',
  },
} as const;

export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Radius = typeof radius;
export type Border = typeof border;
