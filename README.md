# Fluid Design System

Fluid Design System is built upon an extensible **3-tier design token architecture** conforming to the W3C Design Tokens Community Group (DTCG) specification.

```
┌─────────────────────────────────────────────────────────────┐
│  Tier 1: Global / Primitive Tokens (Current Phase)           │
│  - Raw values: color ramps (50-950), font sizes, 8px grid   │
│  - Agnostic to semantics, branding, and themes             │
└──────────────────────────────┬──────────────────────────────┘
                               │ references
                               ▼
┌─────────────────────────────────────────────────────────────┐
│  Tier 2: Semantic / Alias Tokens (Phase 2)                  │
│  - Purpose-based: background-primary, text-muted, feedback  │
│  - Enables light/dark mode and multi-theme mapping          │
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

## Tier 1: Global / Primitive Tokens

Tier 1 defines the foundational building blocks of the Fluid Design System. These tokens represent immutable raw values without semantic intent.

### 1. Colors
- **Palettes**:
  - `Neutral` (Slate/Zinc scale 50-950)
  - `Blue` (Brand/Action scale 50-950)
  - `Green` (Success/Positive scale 50-950)
  - `Orange` (Warning/Attention scale 50-950)
  - `Red` (Danger/Error scale 50-950)
  - `Base` (`white`: `#ffffff`, `black`: `#000000`)
- Ramp steps: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`.

### 2. Typography
- **Categories**:
  - `Caption`: `caption-sm` (11px / 14px), `caption-md` (12px / 16px)
  - `Body`: `body-sm` (14px / 20px), `body-md` (16px / 24px), `body-lg` (18px / 28px)
  - `Heading`: `heading-xs` (20px / 28px), `heading-sm` (24px / 32px), `heading-md` (28px / 36px), `heading-lg` (32px / 40px), `heading-xl` (40px / 48px), `heading-2xl` (48px / 56px)
- **Weights**: Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Font Stacks**: Sans-serif system stack and Monospace stack

### 3. Spacing (8px Grid)
- Grounded in an 8px base grid with a 4px (0.5x) half-step for micro-layouts:
  - `0`: `0px`
  - `050`: `4px` (0.5x)
  - `100`: `8px` (1x base unit)
  - `150`: `12px` (1.5x)
  - `200`: `16px` (2x)
  - `250`: `20px` (2.5x)
  - `300`: `24px` (3x)
  - `400`: `32px` (4x)
  - `500`: `40px` (5x)
  - `600`: `48px` (6x)
  - `700`: `56px` (7x)
  - `800`: `64px` (8x)
  - `900`: `72px` (9x)
  - `1000`: `80px` (10x)
  - `1200`: `96px` (12x)
  - `1600`: `128px` (16x)

### 4. Border Radius
- `none` (0px)
- `xs` (2px)
- `sm` (4px)
- `md` (8px)
- `lg` (12px)
- `xl` (16px)
- `2xl` (24px)
- `3xl` (32px)
- `full` (9999px)

### 5. Borders
- **Widths**: `none` (0px), `thin` (1px), `medium` (2px), `thick` (4px), `heavy` (8px)
- **Styles**: `solid`, `dashed`, `dotted`, `none`

---

## Directory Structure

```
fluid-design-system/
├── tokens/
│   ├── tier-1-primitives/
│   │   ├── colors.json         # Raw color ramps (50-950)
│   │   ├── typography.json     # Caption, Body, Heading scales
│   │   ├── spacing.json        # 8px grid dimension tokens
│   │   ├── radius.json         # Corner radius scale
│   │   ├── border.json         # Border widths & styles
│   │   └── index.json          # Unified W3C DTCG Tier 1 bundle
│   ├── tier-2-semantic/        # [Phase 2]
│   └── tier-3-components/      # [Phase 3]
├── dist/
│   ├── css/
│   │   └── global-primitives.css # CSS Custom Properties (:root)
│   └── ts/
│       ├── primitives.ts        # Typed TypeScript constants & objects
│       └── index.ts
├── docs/
│   └── tokens-preview.html      # Interactive visual token showcase
├── package.json
└── README.md
```

---

## Usage

### CSS Custom Properties
```html
<link rel="stylesheet" href="path/to/dist/css/global-primitives.css">
```

```css
.card {
  border-radius: var(--fds-radius-md);
  padding: var(--fds-spacing-200);
  border: var(--fds-border-width-thin) var(--fds-border-style-solid) var(--fds-color-neutral-200);
  background: var(--fds-color-base-white);
}
```

### TypeScript / JavaScript
```ts
import { colors, spacing, radius, typography } from './dist/ts';

const primaryColor = colors.blue[500];
const cardPadding = spacing[200];
```
