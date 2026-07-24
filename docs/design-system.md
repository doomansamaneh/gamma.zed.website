# ZED Core Design System

## 1. Design Goals

Create a reusable enterprise design language for ZED Core that feels mature, trustworthy, and operationally capable.

The design direction should balance:

- Microsoft-style clarity and structure
- Atlassian-style collaboration and modern UI rhythm
- ServiceNow-style enterprise confidence
- Linear-style precision and visual restraint

## 2. Design Principles

- Clarity first: every surface should communicate intent immediately.
- Enterprise trust: polished, stable, secure visual treatment.
- Reusability: every token and component should be composable.
- Accessibility: high contrast, legible typography, clear interaction states.
- Responsive by default: desktop and mobile layouts should adapt cleanly.

## 3. Color Palette

### Core Palette

- Brand / Primary: `#1F6FEB`
- Brand Hover: `#1857B8`
- Brand Soft: `#E8F1FF`
- Success: `#1F9D68`
- Warning: `#D97706`
- Error: `#D14343`
- Info: `#2563EB`

### Neutral Palette

- Slate 50: `#F8FAFC`
- Slate 100: `#F1F5F9`
- Slate 200: `#E2E8F0`
- Slate 300: `#CBD5E1`
- Slate 400: `#94A3B8`
- Slate 500: `#64748B`
- Slate 600: `#475569`
- Slate 700: `#334155`
- Slate 800: `#1E293B`
- Slate 900: `#0F172A`

### Semantic Tokens

Use the following semantic CSS variables for reusable Tailwind styling:

```css
:root {
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-muted: #f1f5f9;
  --color-border: #dbe3ee;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
  --color-brand: #1f6feb;
  --color-brand-hover: #1857b8;
  --color-brand-soft: #e8f1ff;
  --color-success: #1f9d68;
  --color-warning: #d97706;
  --color-danger: #d14343;
  --color-info: #2563eb;
}

.dark {
  --color-bg: #0b1220;
  --color-surface: #111827;
  --color-surface-muted: #0f172a;
  --color-border: #243244;
  --color-text: #e5eefb;
  --color-text-muted: #94a3b8;
  --color-brand: #60a5fa;
  --color-brand-hover: #93c5fd;
  --color-brand-soft: #10233f;
  --color-success: #34d399;
  --color-warning: #f59e0b;
  --color-danger: #f87171;
  --color-info: #60a5fa;
}
```

## 4. Typography

### Font Stack

- Primary: `Inter, system-ui, sans-serif`
- UI/Enterprise fallback: `Segoe UI, Arial, sans-serif`

### Type Scale

- Display: `40px / 48px / 700`
- H1: `32px / 40px / 700`
- H2: `24px / 32px / 700`
- H3: `20px / 28px / 700`
- H4: `16px / 24px / 600`
- Body: `14px / 22px / 400`
- Small: `12px / 18px / 400`
- Label: `12px / 18px / 600`

### Text Usage

- Use strong hierarchy for headings and KPIs.
- Keep body text readable and restrained.
- Use muted text for metadata and secondary labels.

## 5. Spacing System

Use an 8px grid throughout the system.

### Spacing Scale

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 40px
- 48px
- 64px
- 80px
- 96px

### Layout Rule

Use spacing tokens consistently for padding, gaps, and vertical rhythm.

## 6. Shadow System

### Shadows

- `sm`: `0 1px 2px rgba(15, 23, 42, 0.06)`
- `md`: `0 4px 12px rgba(15, 23, 42, 0.08)`
- `lg`: `0 12px 32px rgba(15, 23, 42, 0.12)`
- `xl`: `0 20px 48px rgba(15, 23, 42, 0.16)`

Use shadows to elevate cards, modals, and interaction states without overusing depth.

## 7. Border Radius

Use a consistent radius scale:

- `sm`: 6px
- `md`: 10px
- `lg`: 14px
- `xl`: 20px
- `pill`: 999px

## 8. Buttons

### Button Styles

#### Primary Button

- Background: `var(--color-brand)`
- Text: white
- Hover: `var(--color-brand-hover)`
- Radius: `md`
- Padding: `12px 16px`

#### Secondary Button

- Background: transparent
- Border: `1px solid var(--color-border)`
- Text: `var(--color-text)`

#### Ghost Button

- Transparent background
- Hover background: `var(--color-brand-soft)`

#### Danger Button

- Background: `var(--color-danger)`
- Text: white

### Button States

- Default
- Hover
- Focus ring
- Disabled

## 9. Inputs

Use a clear, enterprise-friendly form control pattern.

### Input Standards

- Height: 40px
- Radius: `md`
- Border: `1px solid var(--color-border)`
- Background: `var(--color-surface)`
- Focus ring: `0 0 0 3px color-mix(in srgb, var(--color-brand) 25%, transparent)`

### Input Types

- Text
- Email
- Password
- Select
- Textarea
- Search

## 10. Cards

Use cards as reusable surfaces for summary content, features, modules, dashboard items, and data blocks.

### Card Style

- Background: `var(--color-surface)`
- Border: `1px solid var(--color-border)`
- Radius: `lg`
- Shadow: `sm`
- Padding: `16px`

### Card Variants

- Default card
- Highlight card
- KPI card
- Module card
- Feature card

## 11. Navigation

### Navbar Structure

- Brand/logo area
- Primary nav links
- Utility actions
- CTA button

### Navigation Style

- Background: `var(--color-surface)`
- Border bottom: `1px solid var(--color-border)`
- Menu item states: hover and active highlight
- Sticky top behavior for enterprise dashboard flows

### Mobile Navigation

- Collapse to a compact icon/menu system.
- Show short text abbreviations on narrow screens.

## 12. Icons

Use a consistent icon system aligned to enterprise clarity.

Recommended icon style:

- Outline stroke icons
- 16px to 20px size
- Rounded line caps and joins
- Neutral icon color with brand-accent allowed for active states

Suggested icon categories:

- Navigation: home, dashboard, modules, settings
- Operations: asset, maintenance, workflow, inventory
- Status: success, warning, info, failure

## 13. Tables

### Table Pattern

- Header row with subtle gray background
- Body rows with clean separators
- Hover state for rows
- Sticky headers optional in dashboard forms
- Compact mode for dense enterprise data

### Table Standards

- 14px body text
- 12px labels
- 40px row height recommended

## 14. Dashboard Widgets

Dashboard widgets should feel operational and low-noise.

### Widget Groups

- KPI cards
- Activity list
- Status overview
- Process timeline
- Table panel

### Widget Style

- Same card system
- Strong heading
- Tiny metadata text
- Clear status badges

## 15. Animation Guidelines

Keep motion subtle and purposeful.

### Motion Rules

- Use 120ms to 220ms transitions for hover and focus.
- Use 240ms to 400ms transitions for panel enters and route changes.
- Avoid excessive movement.
- Respect reduced-motion preferences.

### Common Motion Examples

- Fade in
- Slide up
- Hover elevation
- Soft scale on action buttons
- Smooth drawer transitions

## 16. Light & Dark Theme

### Light Theme

- Clean white and slate surfaces
- Strong contrast text
- Balanced blue brand accents

### Dark Theme

- Deeper slate background
- Crisp text and soft brand highlights
- Keep enterprise appearance polished and readable

### Theme Implementation

Use Tailwind CSS variables so the system remains reusable across pages and themes.

## 17. Reusable Tailwind Configuration Direction

Recommended Tailwind theme tokens:

```js
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          hover: "var(--color-brand-hover)",
          soft: "var(--color-brand-soft)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          muted: "var(--color-surface-muted)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
        md: "0 4px 12px rgba(15, 23, 42, 0.08)",
        lg: "0 12px 32px rgba(15, 23, 42, 0.12)",
      },
      spacing: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        64: "64px",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
};
```

## 18. Reusable Component Checklist

Every component should be built from reusable primitives:

- `Button`
- `Card`
- `Input`
- `Label`
- `Navbar`
- `Sidebar`
- `Badge`
- `Table`
- `Widget`
- `SectionHeading`
- `CTA`

## 19. Recommended Implementation Pattern

Build the design system using:

- Tailwind CSS variables for theme tokens
- Semantic class naming for reusable UI patterns
- Component composition for page sections
- Shared spacing and typography tokens across all screens

This ensures the system remains maintainable, scalable, and consistent across the ZED Core website.
