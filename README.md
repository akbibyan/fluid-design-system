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
│  Tier 3: Component Tokens (Phase 3)                         │
│  - Scoped bindings: button.bg, card.border, input.padding   │
│  - Isolated component customizations                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Tier 2: Semantic / Alias Tokens

Tier 2 maps raw Tier 1 values to purposeful UI roles, enabling **Light & Dark mode themes** and consistent semantic composition.

### 1. Semantic Surfaces
- `--fds-semantic-color-surface-canvas`: Base app page background
- `--fds-semantic-color-surface-default`: Standard card & container background
- `--fds-semantic-color-surface-subtle`: Subtle container fill
- `--fds-semantic-color-surface-raised`: Elevated card & popover surface
- `--fds-semantic-color-surface-overlay`: Modal dialog & sheet backdrop
- `--fds-semantic-color-surface-sunken`: Inset well & code block background
- `--fds-semantic-color-surface-inverse`: Inverted surface for toasts and banners

### 2. Semantic Content (Text & Icons)
- `--fds-semantic-color-content-primary`: High-emphasis body text and headings
- `--fds-semantic-color-content-secondary`: Medium-emphasis descriptions
- `--fds-semantic-color-content-tertiary`: Low-emphasis placeholders and hints
- `--fds-semantic-color-content-disabled`: Inactive content
- `--fds-semantic-color-content-inverse`: Text on inverted surfaces
- `--fds-semantic-color-content-brand`: Brand-accentuated text

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
  background-color: var(--fds-semantic-color-surface-default);
  color: var(--fds-semantic-color-content-primary);
  border: var(--fds-semantic-border-width-divider) solid var(--fds-semantic-color-border-subtle);
  border-radius: var(--fds-semantic-radius-card);
  padding: var(--fds-semantic-space-inset-lg);
}

.button-primary {
  background-color: var(--fds-semantic-color-interactive-primary-default);
  color: var(--fds-color-base-white);
  border-radius: var(--fds-semantic-radius-control);
  padding: var(--fds-semantic-space-inset-sm) var(--fds-semantic-space-inset-md);
}

.button-primary:hover {
  background-color: var(--fds-semantic-color-interactive-primary-hover);
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
