/**
 * Fluid Design System (FDS) - Tier 3 Component Tokens
 * Architecture Tier: 3 (Component Tokens)
 */

export const cardTokens = {
  padding: 'var(--fds-card-padding, var(--fds-space-inset-md))',
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

export const buttonTokens = {
  padding: {
    block: 'var(--fds-button-padding-block, var(--fds-spacing-150))',
    inline: 'var(--fds-button-padding-inline, var(--fds-spacing-300))',
  },
  fontSize: 'var(--fds-button-font-size, var(--fds-font-size-body-sm))',
  fontWeight: 'var(--fds-button-font-weight, var(--fds-font-weight-semibold))',
  radius: 'var(--fds-button-radius, var(--fds-radius-control))',
  borderWidth: 'var(--fds-button-border-width, var(--fds-border-width-divider))',
  variant: {
    primary: {
      background: {
        default: 'var(--fds-button-primary-background-default, var(--fds-color-interactive-neutral-default))',
        hover: 'var(--fds-button-primary-background-hover, var(--fds-color-interactive-neutral-hover))',
        active: 'var(--fds-button-primary-background-active, var(--fds-color-interactive-neutral-active))',
      },
      content: 'var(--fds-button-primary-content, var(--fds-color-content-inverse))',
      border: 'var(--fds-button-primary-border, var(--fds-color-interactive-neutral-default))',
    },
    secondary: {
      background: {
        default: 'var(--fds-button-secondary-background-default, transparent)',
        hover: 'var(--fds-button-secondary-background-hover, var(--fds-color-surface-subtle))',
      },
      content: 'var(--fds-button-secondary-content, var(--fds-color-content-primary))',
      border: 'var(--fds-button-secondary-border, var(--fds-color-border-interactive))',
    },
    disabled: {
      background: 'var(--fds-button-disabled-background, var(--fds-color-surface-subtle))',
      content: 'var(--fds-button-disabled-content, var(--fds-color-content-disabled))',
      border: 'var(--fds-button-disabled-border, var(--fds-color-border-disabled))',
    },
  },
} as const;

export type ButtonTokens = typeof buttonTokens;
