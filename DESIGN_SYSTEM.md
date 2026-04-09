# Sanctuary Cottage Design System

## Overview
This document outlines the comprehensive UI design improvements implemented for the Sanctuary Cottage website, focusing on visual consistency, modern aesthetics, and enhanced user experience.

---

## Color Palette

### Primary Colors
- **Amber 600**: `#d97706` - Primary accent color (buttons, highlights)
- **Orange 600**: `#ea580c` - Secondary accent (gradients, hover states)
- **Stone 900**: `#1c1917` - Primary text, dark backgrounds
- **Stone 50**: `#fafaf9` - Light backgrounds, subtle sections

### Accent Colors
- **Amber 100**: `#fef3c7` - Light accent backgrounds
- **Rose 600**: `#e11d48` - Beauty services section accent
- **Yellow 400**: `#facc15` - Star ratings

### Neutral Colors
- **White**: `#ffffff` - Card backgrounds, primary surfaces
- **Gray 50-900**: Gradual scale for text, borders, and subtle elements

---

## Typography Hierarchy

### Headings
- **H1 (Hero)**: `text-5xl md:text-7xl lg:text-8xl` - Bold, 900 weight
- **H2 (Section)**: `text-4xl md:text-5xl` - Bold, 700-900 weight
- **H3 (Subsection)**: `text-2xl` - Bold/Semibold, 600-700 weight

### Body Text
- **Large**: `text-xl` (20px) - Intro paragraphs, emphasis
- **Base**: `text-base` (16px) - Standard body text
- **Small**: `text-sm` (14px) - Captions, labels

### Font Weights
- **Light**: 300 - Subheadings, hero subtext
- **Regular**: 400 - Body text
- **Medium**: 500 - Labels
- **Semibold**: 600 - Secondary headings
- **Bold**: 700 - Primary headings
- **Black**: 900 - Hero headlines

---

## Component Styling Patterns

### Cards
**Standard Card Pattern:**
```
bg-white
rounded-2xl
p-6 md:p-8
shadow-sm
border border-gray-100
hover:shadow-xl hover:border-amber-200
transition-all duration-300
hover:-translate-y-1
```

**Feature Card (with icon):**
- Icon container: `w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100`
- Hover effect: `group-hover:scale-110 transition-transform duration-300`

### Buttons

**Primary CTA:**
```
bg-gradient-to-r from-amber-600 to-orange-600
hover:from-amber-700 hover:to-orange-700
text-white px-8 py-4 rounded-full
font-semibold text-lg
shadow-xl shadow-amber-900/30
hover:shadow-2xl hover:scale-105
transition-all duration-300
```

**Secondary Button:**
```
bg-white border border-gray-200
hover:bg-gray-50 px-5 py-2.5 rounded-full
shadow-lg hover:scale-105
transition-all
```

### Section Badges
**Consistent badge design across all sections:**
```
inline-flex items-center gap-2
px-4 py-2
bg-amber-600/10 rounded-full
border border-amber-600/20
text-sm font-semibold text-amber-900
uppercase tracking-wider
```

---

## Layout & Spacing

### Section Padding
- **Vertical**: `py-24` (96px) - Standard section spacing
- **Horizontal**: `px-6` (24px) - Mobile padding
- **Max Width**: `max-w-6xl` (1152px) - Content container

### Grid Systems
- **2 Columns**: Property stats, reviews, dog-friendly features
- **3 Columns**: Beauty services
- **4 Columns**: Amenities categories

### Gaps
- **Small**: `gap-4` (16px) - Tight groupings
- **Medium**: `gap-6` (24px) - Standard card grids
- **Large**: `gap-8` (32px) - Major section divisions

---

## Component-Specific Improvements

### 1. Hero Component
**Before**: Full-screen background with simple overlay
**After**:
- Optimized image loading with `loading="eager"` and `fetchPriority="high"`
- Gradient overlay from stone-900 for better text contrast
- Redesigned stats bar with individual stat cards
- Added prominent CTA button with scroll anchor
- Improved scroll indicator with label
- Reduced height to 85vh for better content visibility

**Key Features:**
- Glass-morphism effects on tagline badge
- Animated CTA with hover effects
- Responsive typography scaling
- Accessible color contrast ratios

### 2. DogFriendly Component
**Before**: Simple paw SVG with 20% opacity at bottom
**After**:
- Created custom `PawPrintIcon` component with anatomically accurate design
- Added feature banner with gradient background and decorative paw prints
- Enhanced card hover effects with scale and shadow transitions
- Section badge for visual hierarchy
- "No Pet Fees" callout box

**Key Features:**
- Multiple paw print variations (filled/outlined, rotated)
- Gradient backgrounds from amber to orange
- Interactive hover states on all cards
- Enhanced typography with proper hierarchy

### 3. BeautyServices Component
**Before**: Simple gray cards with basic icons
**After**:
- Rose/pink color scheme to differentiate from property sections
- Gradient icon backgrounds
- Improved CTA button matching primary button style
- Section badge for consistency
- Enhanced card hover effects

**Key Features:**
- Consistent with overall design system
- Clear visual separation through color
- Professional gradient buttons
- Smooth transitions

### 4. PropertyOverview Component
**Before**: Gradient stats cards with basic styling
**After**:
- Consistent card styling with amber/orange gradients
- Improved icon sizing and spacing
- Enhanced hover interactions
- Better typography hierarchy
- Unified with overall design language

### 5. Gallery Component
**Before**: Basic grid with simple hover
**After**:
- Rounded corners (rounded-2xl) for modern aesthetic
- Scale-on-hover effect for images (hover:scale-105)
- Improved lightbox with backdrop blur
- Enhanced navigation buttons with glass-morphism
- Better counter display with backdrop blur
- Shadow effects for depth

### 6. Amenities Component
**Before**: Standard cards with checkmarks
**After**:
- Gradient icon containers
- Amber checkmarks instead of green for brand consistency
- Section badge
- Improved hover states
- Better category icon sizes

### 7. Location Component
**Before**: Simple two-column layout
**After**:
- Gradient background (from-stone-50 via-amber-50/30)
- Enhanced highlight cards with icons
- Improved map border with rounded corners
- Section badge with location icon
- Better visual hierarchy

### 8. Reviews Component
**Before**: Basic white cards
**After**:
- Gradient backgrounds (from-gray-50 to-amber-50/30)
- Extracted ReviewCard component for consistency
- Enhanced star rating display
- Section badge with star icon
- Improved quote icon opacity
- Better carousel indicators

### 9. CTA Component
**Before**: Simple dark background with border button
**After**:
- Gradient background with decorative blur elements
- Primary gradient button matching hero
- Enhanced rating display with glass-morphism
- Feature grid with emoji icons
- Section badge
- Improved visual hierarchy
- Better call-to-action copy

### 10. AvailabilityCalendar Component
**Updates**:
- Added section badge for consistency
- Enhanced calendar card styling (rounded-3xl, shadow-lg, border-amber-100)
- Improved submit button with gradient and shadow
- Better visual hierarchy in pricing section
- Increased font sizes for prominence

---

## Border Radius System

- **Small**: `rounded-lg` (8px) - Input fields, small elements
- **Medium**: `rounded-xl` (12px) - Buttons, badges
- **Large**: `rounded-2xl` (16px) - Cards, containers
- **Extra Large**: `rounded-3xl` (24px) - Hero elements, major cards
- **Full**: `rounded-full` - Pills, circular buttons

---

## Shadow System

### Card Shadows
- **Default**: `shadow-sm` - Subtle elevation
- **Hover**: `shadow-xl` - Prominent elevation
- **Interactive**: `shadow-lg shadow-amber-600/30` - Colored shadows for CTAs

### Special Effects
- **Glass-morphism**: `backdrop-blur-md` + semi-transparent backgrounds
- **Drop Shadow**: Used on hero text for legibility

---

## Animation & Transitions

### Hover Effects
- **Cards**: `hover:-translate-y-1` - Lift effect
- **Buttons**: `hover:scale-105` - Slight growth
- **Icons**: `group-hover:scale-110` - Icon emphasis
- **Images**: `hover:scale-105` - Zoom effect

### Timing
- **Standard**: `duration-300` - Most transitions
- **Fast**: `duration-150` - Instant feedback
- **Slow**: `duration-500` - Gallery transitions

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth, natural

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Interactive elements have clear focus states
- Links underlined or clearly distinguished

### Focus States
- Custom outline: `outline-2px solid #d97706`
- Visible focus indicators on all interactive elements
- Keyboard navigation fully supported

### Motion
- Respects `prefers-reduced-motion` media query
- All animations can be disabled for accessibility

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Alt text on all images

---

## Responsive Design

### Breakpoints
- **Mobile**: `< 768px` - Single column layouts
- **Tablet**: `md: >= 768px` - 2-column grids
- **Desktop**: `lg: >= 1024px` - Full layouts

### Mobile-First Approach
- Base styles target mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (min 44px)

---

## Performance Optimizations

### Images
- Lazy loading on gallery images
- Eager loading on hero image
- `content-visibility: auto` for off-screen images
- WebP/modern formats recommended

### CSS
- Utility-first approach reduces CSS bundle size
- Tailwind purges unused styles
- Critical CSS inlined

### Animations
- GPU-accelerated transforms (translate, scale)
- Avoid animating layout properties
- Use `will-change` sparingly

---

## Icon System

### Sources
- **Heroicons** (outline variant) - Primary icon set
- Custom SVG icons for specific needs (paw prints)
- Consistent stroke width: 1.5-2px

### Sizing
- **Small**: `w-4 h-4` (16px) - Badges, inline
- **Medium**: `w-6 h-6` (24px) - Buttons, labels
- **Large**: `w-10 h-10` or `w-12 h-12` - Feature cards

---

## Best Practices

### Do's
✅ Use gradient backgrounds for CTAs and important elements
✅ Maintain consistent spacing with Tailwind's spacing scale
✅ Add hover states to all interactive elements
✅ Use section badges for visual hierarchy
✅ Keep rounded corners consistent (2xl for cards)
✅ Use glass-morphism for overlay effects
✅ Add subtle animations for delight

### Don'ts
❌ Mix different card styles in the same section
❌ Use harsh shadows (always keep them subtle)
❌ Overcomplicate layouts
❌ Use too many different colors
❌ Forget mobile responsive design
❌ Ignore accessibility considerations

---

## Future Enhancements

### Potential Improvements
1. Add dark mode support
2. Implement skeleton loading states
3. Add micro-interactions (confetti on booking success)
4. Create animated page transitions
5. Add more sophisticated animations
6. Implement progressive image loading
7. Add more interactive elements

---

## Design Tokens

For future CSS-in-JS or design token system implementation:

```json
{
  "colors": {
    "primary": "#d97706",
    "primary-hover": "#b45309",
    "secondary": "#ea580c",
    "dark": "#1c1917",
    "light": "#fafaf9"
  },
  "spacing": {
    "section": "96px",
    "card": "24px",
    "gap": "24px"
  },
  "borderRadius": {
    "card": "16px",
    "button": "9999px",
    "large": "24px"
  },
  "shadows": {
    "card": "0 1px 3px 0 rgb(0 0 0 / 0.1)",
    "card-hover": "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    "button": "0 20px 25px -5px rgb(217 119 6 / 0.3)"
  }
}
```

---

**Version**: 2.0
**Last Updated**: April 9, 2026
**Design Lead**: Claude UI Designer
