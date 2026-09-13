# Fluid Design System

Fluid Design System is built upon an extensible **3-tier design token architecture** conforming to the W3C Design Tokens Community Group (DTCG) specification.

```
┌─────────────────────────────────────────────────────────────┐
│  Tier 1: Global / Primitive Tokens (Implemented)            │
│  - Raw values: color ramps (50-950), font sizes, 8px grid   │
│  - Agnostic to semantics, branding, and themes             │
└──────────────────────────────┬──────────────────────────────┘
                               │ resolves to
                               ▼
┌─────────────────────────────────────────────────────────────┐
│  Tier 2: Semantic / Alias Tokens (Implemented)              │
│  - Purpose-based: surface, content, border, interactive,    │
│    feedback (success, warning, error, info)                 │
│  - Multi-theme switching: Light & Dark modes                │
│  - Semantic layout: insets, gaps, and semantic radii        │
└──────────────────────────────┬──────────────────────────────┘
                               │ references
                               ▼
┌─────────────────────────────────────────────────────────────┐
│  Tier 3: Component Tokens (Implemented)                     │
│  - Scoped bindings: card.padding, card.bg, card.title.color │
│  - Component-isolated token overrides & theme adaptation    │
└─────────────────────────────────────────────────────────────┘
```

---

## Tier 3: Component Tokens & Card Component

Tier 3 introduces component-scoped design tokens that bind Tier 2 semantic foundations to concrete component structures.

### Card Component (`.fds-card`)
- **Tokens**:
  - `--fds-card-padding`: `var(--fds-space-inset-md)` (**16px padding all around**)
  - `--fds-card-bg`: `var(--fds-color-surface-default)`
  - `--fds-card-gap`: `var(--fds-space-gap-tight)` (8px internal gap)
  - `--fds-card-border-color`: `var(--fds-color-border-subtle)`
  - `--fds-card-border-width`: `var(--fds-border-width-divider)` (1px)
  - `--fds-card-border-radius`: `var(--fds-radius-card)` (12px)
  - `--fds-card-image-radius`: `var(--fds-radius-control)` (8px)
  - `--fds-card-title-color`: `var(--fds-color-content-primary)`
  - `--fds-card-description-color`: `var(--fds-color-content-secondary)`

### Card HTML Markup
```html
<article class="fds-card">
  <div class="fds-card-media">
    <img src="photo.jpg" alt="Cover" class="fds-card-image" />
  </div>
  <div class="fds-card-body">
    <h3 class="fds-card-title">Card Title</h3>
    <p class="fds-card-description">Card description...</p>
  </div>
</article>
```

---

## Tier 2: Semantic / Alias Tokens

Tier 2 maps raw Tier 1 values to purposeful UI roles, enabling **Light & Dark mode themes** and consistent semantic composition.

### 1. Semantic Surfaces
- `--fds-color-surface-canvas`: Base app page background
- `--fds-color-surface-default`: Standard card & container background
- `--fds-color-surface-subtle`: Subtle container fill
- `--fds-color-surface-raised`: Elevated card & popover surface
- `--fds-color-surface-overlay`: Modal dialog & sheet backdrop
- `--fds-color-surface-sunken`: Inset well & code block background
- `--fds-color-surface-inverse`: Inverted surface for toasts and banners

### 2. Semantic Content (Text & Icons)
- `--fds-color-content-primary`: High-emphasis body text and headings
- `--fds-color-content-secondary`: Medium-emphasis descriptions
- `--fds-color-content-tertiary`: Low-emphasis placeholders and hints
- `--fds-color-content-disabled`: Inactive content
- `--fds-color-content-inverse`: Text on inverted surfaces
- `--fds-color-content-brand`: Brand-accentuated text

### 3. Semantic Interactive States
- `primary`: `default`, `hover`, `active`, `subtle`, `muted`
- `neutral`: `default`, `hover`, `active`, `subtle`

### 4. Semantic Feedback (Coordinated surface, text, border, icon)
- `success`: Positive operations, confirmations, green badge
- `warning`: Cautionary states, thresholds, orange badge
- `error`: Destructive actions, validation failures, red badge
- `info`: System announcements, notifications, blue badge

### 5. Semantic Layout & Radii
- **Insets**: `inset-xs` (4px), `inset-sm` (8px), `inset-md` (16px), `inset-lg` (24px), `inset-xl` (32px)
- **Gaps**: `gap-tight` (8px), `gap-normal` (16px), `gap-relaxed` (24px), `gap-loose` (32px)
- **Radii**: `radius-badge` (4px), `radius-control` (8px), `radius-card` (12px), `radius-modal` (16px), `radius-pill` (9999px)

---

## Usage

### CSS Variables (Light & Dark Theme)

Import both primitive and semantic stylesheets:
```html
<link rel="stylesheet" href="path/to/dist/css/global-primitives.css">
<link rel="stylesheet" href="path/to/dist/css/semantic.css">
```

Apply light or dark theme via `data-theme`:
```html
<!-- Light Theme -->
<html data-theme="light">

<!-- Dark Theme -->
<html data-theme="dark">
```

Example component styling:
```css
.card {
  background-color: var(--fds-color-surface-default);
  color: var(--fds-color-content-primary);
  border: var(--fds-border-width-divider) solid var(--fds-color-border-subtle);
  border-radius: var(--fds-radius-card);
  padding: var(--fds-space-inset-lg);
}

.button-primary {
  background-color: var(--fds-color-interactive-primary-default);
  color: var(--fds-color-base-white);
  border-radius: var(--fds-radius-control);
  padding: var(--fds-space-inset-sm) var(--fds-space-inset-md);
}

.button-primary:hover {
  background-color: var(--fds-color-interactive-primary-hover);
}
```

### TypeScript / JavaScript
```ts
import { semanticLight, semanticDark, semanticLayout } from '@fluid-design-system/tokens';

// Access semantic tokens in TypeScript
const currentTheme = isDark ? semanticDark : semanticLight;
const surface = currentTheme.surface.default;
const buttonRadius = semanticLayout.radius.control;
```
