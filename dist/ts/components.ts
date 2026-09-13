/**
 * Fluid Design System (FDS) - Tier 3 Component Tokens
 * Architecture Tier: 3 (Component Tokens)
 */

export const cardTokens = {
  padding: 'var(--fds-card-padding, var(--fds-space-inset-sm))',
  background: 'var(--fds-card-bg, var(--fds-color-surface-default))',
  gap: 'var(--fds-card-gap, var(--fds-space-gap-tight))',
  border: {
    color: 'var(--fds-card-border-color, var(--fds-color-border-subtle))',
    width: 'var(--fds-card-border-width, var(--fds-border-width-divider))',
    radius: 'var(--fds-card-border-radius, var(--fds-radius-card))',
  },
  image: {
    radius: 'var(--fds-card-image-radius, var(--fds-radius-control))',
    aspectRatio: '16 / 9',
  },
  title: {
    color: 'var(--fds-card-title-color, var(--fds-color-content-primary))',
    fontSize: 'var(--fds-card-title-font-size, var(--fds-font-size-heading-xs))',
    lineHeight: 'var(--fds-card-title-line-height, var(--fds-line-height-heading-xs))',
    fontWeight: 'var(--fds-card-title-font-weight, var(--fds-font-weight-semibold))',
  },
  description: {
    color: 'var(--fds-card-description-color, var(--fds-color-content-secondary))',
    fontSize: 'var(--fds-card-description-font-size, var(--fds-font-size-body-sm))',
    lineHeight: 'var(--fds-card-description-line-height, var(--fds-line-height-body-sm))',
    fontWeight: 'var(--fds-card-description-font-weight, var(--fds-font-weight-regular))',
  },
} as const;

export type CardTokens = typeof cardTokens;
