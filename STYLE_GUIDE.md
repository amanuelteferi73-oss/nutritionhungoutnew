# The Nutrition Hangout — Style Guide

## Brand Overview
**Business**: The Nutrition Hangout — Smoothie & Energy Bar  
**Location**: Texas City, TX  
**Brand Voice**: Warm, energetic, community-first, health-forward

---

## Logo Usage

### Primary Logo
- File: `src/assets/logo.png`
- Use on white or dark backgrounds
- Minimum clear space: 16px on all sides
- Minimum size: 48px height

### Logo Placement
- **Header**: 48px height, left-aligned
- **Favicon**: Squared crop, 32x32px
- **Social Avatar**: Full logo, centered

---

## Color Palette

### Primary Colors (extracted from logo & interior)

| Name | HSL | Hex | Usage |
|------|-----|-----|-------|
| Tropical Navy | `215 70% 25%` | #1a365d | Primary brand, headers, buttons |
| Tropical Teal | `174 62% 47%` | #20b2aa | Accents, links, CTAs |
| Tropical Aqua | `187 85% 53%` | #4dd0e1 | Highlights, glows |
| Tropical Green | `142 71% 45%` | #22c55e | Palm trees, success states |
| Tropical Coral | `12 76% 61%` | #e57373 | Warm accents, alerts |
| Tropical Sand | `39 77% 83%` | #f5deb3 | Warm backgrounds |

### Semantic Colors

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| Background | `180 25% 98%` | `215 50% 8%` | Page background |
| Foreground | `210 50% 15%` | `180 25% 95%` | Primary text |
| Card | `0 0% 100%` | `215 45% 12%` | Card surfaces |
| Muted | `180 20% 94%` | `215 40% 15%` | Subtle backgrounds |
| Border | `180 20% 88%` | `215 40% 18%` | Dividers, borders |

---

## Typography

### Font Stack
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-serif: 'Playfair Display', Georgia, serif;
--font-script: 'Satisfy', cursive;
```

### Font Sizes

| Element | Size | Weight | Font |
|---------|------|--------|------|
| H1 (Hero) | 4rem–4.5rem | 700 | Playfair Display |
| H2 (Section) | 3rem | 700 | Playfair Display |
| H3 (Subsection) | 1.5rem | 600 | Playfair Display |
| Body | 1rem | 400 | Inter |
| Caption | 0.875rem | 400 | Inter |
| Button | 0.875rem–1rem | 500 | Inter |

### Hierarchy Example
```
H1: "Fuel Your Day" (Hero headline)
H2: "Our Menu" (Section title)
H3: "Protein Shakes" (Category)
Body: Menu item descriptions
```

---

## UI Components

### Buttons

**Primary Button**
- Background: `hsl(var(--primary))`
- Text: `hsl(var(--primary-foreground))`
- Border radius: 0.75rem
- Hover: `bg-primary/90`
- Active: scale(0.98)

**Outline Button**
- Border: `1px solid hsl(var(--border))`
- Text: `hsl(var(--foreground))`
- Hover: `bg-muted`

### Cards
```css
.glass {
  background: hsl(var(--background) / 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid hsl(var(--border) / 0.5);
  border-radius: 0.75rem;
}
```

### Form Inputs
- Border: `1px solid hsl(var(--input))`
- Focus ring: `hsl(var(--ring))`
- Border radius: 0.5rem
- Padding: 0.75rem 1rem

---

## Animations

### Entrance Animations
```css
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}
```

### Interactive States
```css
.btn-press:active {
  transform: scale(0.98);
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

### Stagger Delays
Use `.stagger-1` through `.stagger-6` for 100ms–600ms delays.

---

## Spacing Scale

| Name | Value |
|------|-------|
| xs | 0.25rem (4px) |
| sm | 0.5rem (8px) |
| md | 1rem (16px) |
| lg | 1.5rem (24px) |
| xl | 2rem (32px) |
| 2xl | 3rem (48px) |
| 3xl | 4rem (64px) |

---

## Microcopy Guidelines

### CTAs
- Primary: "Text to Order" / "Order Now"
- Secondary: "See Menu" / "Get Directions"
- Tertiary: "Learn More" / "View Gallery"

### Error Messages
- Friendly, helpful tone
- Example: "Oops! Something went wrong. Please try again."

### Empty States
- Encouraging, actionable
- Example: "No items yet. Check out our full menu!"

---

## Accessibility

- All interactive elements have visible focus states
- Color contrast meets WCAG AA (4.5:1 for text)
- Images have descriptive alt text
- Forms have proper labels and ARIA attributes
- Supports prefers-reduced-motion

---

## File Structure
```
src/
├── assets/           # Images (logo, hero, gallery)
├── components/       # React components
├── data/            # content.json, research_report.json
├── index.css        # Design system tokens
└── pages/           # Page components
```

---

*Last updated: December 10, 2024*
