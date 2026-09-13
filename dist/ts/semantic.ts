/**
 * Fluid Design System (FDS) - Tier 2 Semantic Tokens
 * Architecture Tier: 2 (Semantic / Alias)
 */

import { colors, spacing, radius, border, typography } from './primitives';

export const semanticLight = {
  surface: {
    canvas: colors.neutral[50],
    default: colors.base.white,
    subtle: colors.neutral[100],
    raised: colors.base.white,
    overlay: colors.base.white,
    sunken: colors.neutral[100],
    inverse: colors.neutral[900],
  },
  content: {
    primary: colors.neutral[900],
    secondary: colors.neutral[600],
    tertiary: colors.neutral[400],
    disabled: colors.neutral[300],
    inverse: colors.base.white,
    brand: colors.blue[600],
  },
  border: {
    subtle: colors.neutral[200],
    default: colors.neutral[300],
    strong: colors.neutral[400],
    interactive: colors.neutral[400],
    focus: colors.blue[500],
    disabled: colors.neutral[200],
  },
  interactive: {
    primary: {
      default: colors.blue[600],
      hover: colors.blue[700],
      active: colors.blue[800],
      subtle: colors.blue[50],
      muted: colors.blue[100],
    },
    neutral: {
      default: colors.neutral[800],
      hover: colors.neutral[900],
      active: colors.neutral[950],
      subtle: colors.neutral[100],
    },
  },
  feedback: {
    success: {
      surface: colors.green[50],
      surfaceSubtle: colors.green[100],
      text: colors.green[700],
      border: colors.green[300],
      icon: colors.green[600],
    },
    warning: {
      surface: colors.orange[50],
      surfaceSubtle: colors.orange[100],
      text: colors.orange[700],
      border: colors.orange[300],
      icon: colors.orange[500],
    },
    error: {
      surface: colors.red[50],
      surfaceSubtle: colors.red[100],
      text: colors.red[700],
      border: colors.red[300],
      icon: colors.red[600],
    },
    info: {
      surface: colors.blue[50],
      surfaceSubtle: colors.blue[100],
      text: colors.blue[700],
      border: colors.blue[300],
      icon: colors.blue[500],
    },
  },
} as const;

export const semanticDark = {
  surface: {
    canvas: colors.neutral[950],
    default: colors.neutral[900],
    subtle: colors.neutral[800],
    raised: colors.neutral[800],
    overlay: colors.neutral[800],
    sunken: colors.neutral[950],
    inverse: colors.neutral[100],
  },
  content: {
    primary: colors.neutral[50],
    secondary: colors.neutral[300],
    tertiary: colors.neutral[500],
    disabled: colors.neutral[600],
    inverse: colors.neutral[950],
    brand: colors.blue[400],
  },
  border: {
    subtle: colors.neutral[800],
    default: colors.neutral[700],
    strong: colors.neutral[600],
    interactive: colors.neutral[600],
    focus: colors.blue[400],
    disabled: colors.neutral[800],
  },
  interactive: {
    primary: {
      default: colors.blue[500],
      hover: colors.blue[400],
      active: colors.blue[600],
      subtle: colors.blue[950],
      muted: colors.blue[900],
    },
    neutral: {
      default: colors.neutral[200],
      hover: colors.neutral[100],
      active: colors.neutral[50],
      subtle: colors.neutral[800],
    },
  },
  feedback: {
    success: {
      surface: colors.green[950],
      surfaceSubtle: colors.green[900],
      text: colors.green[300],
      border: colors.green[700],
      icon: colors.green[400],
    },
    warning: {
      surface: colors.orange[950],
      surfaceSubtle: colors.orange[900],
      text: colors.orange[300],
      border: colors.orange[700],
      icon: colors.orange[400],
    },
    error: {
      surface: colors.red[950],
      surfaceSubtle: colors.red[900],
      text: colors.red[300],
      border: colors.red[700],
      icon: colors.red[400],
    },
    info: {
      surface: colors.blue[950],
      surfaceSubtle: colors.blue[900],
      text: colors.blue[300],
      border: colors.blue[700],
      icon: colors.blue[400],
    },
  },
} as const;

export const semanticLayout = {
  space: {
    pageGutter: spacing[300],
    sectionGap: spacing[800],
    containerPadding: spacing[400],
    inset: {
      xs: spacing['050'],
      sm: spacing[100],
      md: spacing[200],
      lg: spacing[300],
      xl: spacing[400],
    },
    gap: {
      tight: spacing[100],
      normal: spacing[200],
      relaxed: spacing[300],
      loose: spacing[400],
    },
  },
  radius: {
    badge: radius.sm,
    control: radius.md,
    card: radius.lg,
    modal: radius.xl,
    pill: radius.full,
  },
  border: {
    divider: border.width.thin,
    focusRing: border.width.medium,
    emphasis: border.width.thick,
  },
} as const;

export type SemanticTheme = typeof semanticLight;
export type SemanticLayout = typeof semanticLayout;
