# TaskFlow — Brand Guidelines
## Visual Identity Documentation

---

# 1. Brand Overview

## Brand Name
**TaskFlow**

*Task* = What we help manage  
*Flow* = Smooth, continuous progress

## Tagline
"Work flows better together."

## Brand Personality
- **Friendly** — Not corporate or intimidating
- **Clear** — Easy to understand
- **Helpful** — Focused on solving problems
- **Modern** — Current but not trendy

## Brand Voice
- Use simple language
- Be encouraging, not pushy
- Explain things clearly
- Sound like a helpful colleague

### Voice Examples

| Don't Say | Do Say |
|-----------|--------|
| "Leverage our robust solution" | "Get more done with your team" |
| "Utilize our platform" | "Use TaskFlow to..." |
| "Enterprise-grade features" | "Built for teams like yours" |
| "Revolutionary productivity" | "A simpler way to manage tasks" |

---

# 2. Logo

## Logo Concept

The TaskFlow logo combines:
- A checkmark (✓) = Task completion
- A flow/wave shape = Smooth progress
- The letter "T" = Brand initial

### Logo Description

```
   ┌─────────────┐
   │             │
   │   ✓  →     │  Primary Logo Mark
   │             │
   └─────────────┘

   TaskFlow         Full Logo (Mark + Wordmark)
```

## Logo Versions

| Version | Use Case |
|---------|----------|
| Full Logo | Website header, large applications |
| Logo Mark Only | Favicon, app icon, small spaces |
| Wordmark Only | When brand is already established |
| White Version | Dark backgrounds |

## Logo Clear Space

Always maintain clear space around the logo equal to the height of the "T" in TaskFlow.

```
        ┌───┐
        │ T │ = minimum clear space on all sides
        └───┘

    ┌─────────────────────┐
    │                     │
    │   [Logo Here]       │
    │                     │
    └─────────────────────┘
```

## Logo Don'ts

❌ Don't stretch or distort  
❌ Don't change the colors  
❌ Don't add effects (shadows, glows)  
❌ Don't rotate  
❌ Don't place on busy backgrounds  
❌ Don't make it too small (minimum 24px height)

---

# 3. Color Palette

## Primary Colors

### Brand Blue
The main brand color. Used for:
- Primary buttons
- Links
- Key highlights
- Logo accent

| Property | Value |
|----------|-------|
| Name | TaskFlow Blue |
| Hex | `#2563EB` |
| RGB | 37, 99, 235 |
| HSL | 221, 83%, 53% |

### Dark Blue (Hover State)
| Property | Value |
|----------|-------|
| Name | Blue Dark |
| Hex | `#1D4ED8` |
| RGB | 29, 78, 216 |

### Light Blue (Backgrounds)
| Property | Value |
|----------|-------|
| Name | Blue Light |
| Hex | `#DBEAFE` |
| RGB | 219, 234, 254 |

---

## Neutral Colors

### Text Dark
For headings and important text.

| Property | Value |
|----------|-------|
| Name | Slate 900 |
| Hex | `#0F172A` |
| Usage | Headings, primary text |

### Text Medium
For body text.

| Property | Value |
|----------|-------|
| Name | Slate 600 |
| Hex | `#475569` |
| Usage | Paragraphs, descriptions |

### Text Light
For subtle text.

| Property | Value |
|----------|-------|
| Name | Slate 400 |
| Hex | `#94A3B8` |
| Usage | Captions, placeholders |

### Border Color
| Property | Value |
|----------|-------|
| Name | Slate 200 |
| Hex | `#E2E8F0` |
| Usage | Borders, dividers |

### Background
| Property | Value |
|----------|-------|
| Name | White |
| Hex | `#FFFFFF` |
| Usage | Main background |

### Background Alt
| Property | Value |
|----------|-------|
| Name | Slate 50 |
| Hex | `#F8FAFC` |
| Usage | Alternate sections |

---

## Color Usage Guidelines

### Do's ✅
- Use Blue for primary actions
- Use plenty of white space
- Use Dark Slate for headings
- Use Medium Slate for body text

### Don'ts ❌
- Don't use blue for errors (use red)
- Don't use light text on light backgrounds
- Don't use too many colors at once
- Don't create new brand colors

---

## Color Accessibility

All text colors meet WCAG 2.1 AA standards:

| Combination | Contrast Ratio | Pass/Fail |
|-------------|----------------|-----------|
| Slate 900 on White | 15.1:1 | ✅ AAA |
| Slate 600 on White | 6.1:1 | ✅ AA |
| Blue on White | 4.7:1 | ✅ AA |
| White on Blue | 4.7:1 | ✅ AA |

---

# 4. Typography

## Font Family

**Inter**

Why Inter?
- Free to use (Google Fonts)
- Very readable
- Works on all devices
- Has many weights
- Popular and modern

### Fallback Stack
```
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

---

## Type Scale

| Name | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Display | 48px | Bold (700) | 1.1 | Hero headline only |
| H1 | 36px | Bold (700) | 1.2 | Page titles |
| H2 | 28px | Semibold (600) | 1.3 | Section headings |
| H3 | 22px | Semibold (600) | 1.4 | Card titles |
| Body Large | 18px | Regular (400) | 1.6 | Hero description |
| Body | 16px | Regular (400) | 1.6 | Paragraphs |
| Small | 14px | Regular (400) | 1.5 | Captions, meta |
| Button | 16px | Medium (500) | 1 | Buttons, links |

---

## Typography Examples

### Heading Hierarchy

```
This is Display Text (48px Bold)
==================================

This is Heading 1 (36px Bold)
-----------------------------

This is Heading 2 (28px Semibold)

This is Heading 3 (22px Semibold)

This is body text. It's 16px with regular weight and 
comfortable line height for reading. (16px Regular)

This is small text for captions and metadata. (14px)
```

---

## Typography Rules

### Do's ✅
- Use the defined type scale
- Keep line length under 75 characters
- Use adequate line spacing
- Left-align body text (not justified)

### Don'ts ❌
- Don't use more than 2 font weights per section
- Don't center long paragraphs
- Don't use ALL CAPS for body text
- Don't underline text (except links)

---

# 5. Spacing System

## Base Unit

**4px** is our base spacing unit.

All spacing values are multiples of 4:

| Token | Value | Use Case |
|-------|-------|----------|
| space-1 | 4px | Tight, icon padding |
| space-2 | 8px | Between related items |
| space-3 | 12px | Small gaps |
| space-4 | 16px | Standard padding |
| space-5 | 20px | Medium gaps |
| space-6 | 24px | Card padding |
| space-8 | 32px | Between sections |
| space-10 | 40px | Large gaps |
| space-12 | 48px | Section padding (mobile) |
| space-16 | 64px | Section padding (tablet) |
| space-20 | 80px | Section padding (desktop) |
| space-24 | 96px | Major sections |

---

## Spacing Application

### Card Padding
- Desktop: 32px (space-8)
- Mobile: 24px (space-6)

### Section Padding (Vertical)
- Desktop: 96px top/bottom
- Tablet: 64px top/bottom
- Mobile: 48px top/bottom

### Container Max Width
- Content: 1200px
- Text-only: 720px

### Container Side Padding
- Desktop: 40px
- Mobile: 20px

---

# 6. Icon Style

## Icon Set

Using **Lucide Icons** (free, open source)

### Why Lucide?
- Clean, consistent style
- Free to use
- Large selection
- Works at small sizes

### Icon Sizes

| Size | Value | Use Case |
|------|-------|----------|
| Small | 16px | Inline with text |
| Default | 20px | Buttons, lists |
| Medium | 24px | Feature icons |
| Large | 32px | Hero features |

### Icon Color
- Default: Slate 600 (#475569)
- Primary: Blue (#2563EB)
- On dark: White

### Icon Stroke
- Stroke width: 1.5px (consistent with Lucide)

---

## Recommended Icons

| Purpose | Icon Name |
|---------|-----------|
| Tasks | CheckSquare |
| Teams | Users |
| Progress | TrendingUp |
| Communication | MessageSquare |
| Calendar | Calendar |
| Settings | Settings |
| Search | Search |
| Add | Plus |
| Menu | Menu |
| Close | X |
| Arrow | ChevronRight |
| Check | Check |

---

# 7. Design Principles

These guide all design decisions:

## 1. Clarity First
> Make it easy to understand. If someone has to think too hard, simplify it.

## 2. Less is More
> Remove unnecessary elements. Every item should earn its place.

## 3. Consistent Patterns
> Use the same patterns throughout. Don't reinvent for each section.

## 4. Mobile Matters
> Design for mobile too. Most people will see it on a phone.

## 5. Fast is Best
> Keep it lightweight. Slow websites frustrate users.

---

# 8. Imagery Guidelines

## Photography Style

- **Light and bright** — Good lighting, not dark
- **Real people** — Not overly posed stock photos
- **Modern workspaces** — Clean, minimal environments
- **Diverse representation** — Variety of people

## Screenshot Style

When showing the product:
- Use clean browser frames
- Show realistic (but positive) data
- Highlight key features
- Keep consistent styling

## Illustration Style (Optional)

If using illustrations:
- Simple, flat style
- Match brand colors
- Consistent line weights
- Not too cartoon-like

---

# 9. Do's and Don'ts Summary

## Do's ✅

- Use the blue accent for primary actions
- Keep plenty of white space
- Use Inter font only
- Follow the spacing scale
- Make text readable (contrast!)
- Keep animations subtle

## Don'ts ❌

- Don't introduce new colors
- Don't use multiple fonts
- Don't crowd elements together
- Don't use tiny text
- Don't over-animate
- Don't break the established patterns

---

# 10. File Naming

## Convention

`[type]-[name]-[variant].[extension]`

### Examples

- `logo-full-color.svg`
- `logo-mark-white.svg`
- `icon-tasks-24.svg`
- `hero-background-desktop.jpg`

---

*Brand Guidelines v1.0 — Created by Anshul Verma*
