# TaskFlow — Webflow Documentation
## Project Structure & Implementation Guide

*Note: This documentation is for a beginner level. I'm explaining concepts as I understand them.*

---

# 1. What is Webflow?

Webflow is a visual website builder that lets you design websites without writing code. It generates clean HTML and CSS based on what you design.

## Why I Chose Webflow

1. **Visual** — I can see what I'm building
2. **No code needed** — Good for designers
3. **Real CSS** — Creates actual CSS properties
4. **Responsive** — Built-in breakpoint system
5. **Hosting included** — Easy to publish

---

# 2. Project Setup

## Creating the Project

1. Create new Webflow project
2. Name: "TaskFlow Landing Page"
3. Start with blank canvas (not template)

## Initial Settings

| Setting | Value |
|---------|-------|
| Project Name | TaskFlow |
| Site Name | taskflow-landing |
| Fonts | Add Inter from Google Fonts |
| Default Font | Inter, sans-serif |

---

# 3. Page Structure

## Overview

The page is organized into **Sections**, which contain **Containers**, which contain **Elements**.

```
Page
├── Navigation (fixed)
├── Hero Section
├── Features Section
├── How It Works Section
├── Pricing Section
├── Testimonials Section
├── FAQ Section
├── CTA Section
└── Footer
```

---

## Sections

A **Section** is a full-width wrapper that spans the entire page.

### Section Settings (My Standard)

| Property | Value |
|----------|-------|
| Width | 100% |
| Padding Top | 96px (desktop) |
| Padding Bottom | 96px (desktop) |
| Background | White or Slate 50 |

### My Section Class Names

| Section | Class Name |
|---------|------------|
| Hero | `section-hero` |
| Features | `section-features` |
| How It Works | `section-steps` |
| Pricing | `section-pricing` |
| Testimonials | `section-testimonials` |
| FAQ | `section-faq` |
| CTA | `section-cta` |
| Footer | `footer` |

---

## Containers

A **Container** limits the content width and centers it.

### My Container Settings

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Max Width | 1200px | 100% | 100% |
| Padding Left | 40px | 32px | 20px |
| Padding Right | 40px | 32px | 20px |
| Margin | 0 auto | 0 auto | 0 auto |

### Container Class

```
Class: container
├── Max Width: 1200px
├── Margin Left: Auto
├── Margin Right: Auto
├── Padding Left: 40px
├── Padding Right: 40px
```

---

# 4. Layout Methods

## Flexbox Basics

I use Flexbox for most layouts. Here's what each setting does:

### Flex Container Properties

| Property | What It Does |
|----------|--------------|
| Display: Flex | Makes children arrange in a row/column |
| Flex Direction | Row = horizontal, Column = vertical |
| Justify | How items spread out on main axis |
| Align | How items align on cross axis |
| Gap | Space between items |
| Wrap | Whether items wrap to next line |

### Common Flex Patterns I Used

**Centering Content:**
```
Display: Flex
Direction: Column
Justify: Center
Align: Center
```

**Two Columns (50/50):**
```
Display: Flex
Direction: Row
Gap: 32px
Children: Width 50%
```

**Three Column Cards:**
```
Display: Flex
Direction: Row
Gap: 24px
Wrap: Wrap
Children: Width 33% (or Flex: 1)
```

**Navigation (Space Between):**
```
Display: Flex
Direction: Row
Justify: Space Between
Align: Center
```

---

## Grid (Simpler Alternative)

Webflow has CSS Grid, but I mostly used Flexbox because I understand it better. 

I used Grid only for:
- Equal-width card layouts
- Pricing section (3 cards)

### My Grid Settings

```
Display: Grid
Columns: 3 (1fr 1fr 1fr)
Gap: 24px
```

---

# 5. Class Naming System

## My Approach

I used a simple naming convention so I can understand it later.

### Pattern

`[component]-[element]-[modifier]`

### Examples

| Class Name | Description |
|------------|-------------|
| `btn-primary` | Primary button |
| `btn-secondary` | Secondary button |
| `card-feature` | Feature card |
| `card-pricing` | Pricing card |
| `card-pricing-featured` | Featured pricing card |
| `heading-section` | Section heading |
| `text-body` | Body text |
| `text-small` | Small text |

---

## Utility Classes

For common styles I reuse often:

| Class | What It Does |
|-------|--------------|
| `text-center` | Centers text |
| `mt-8` | Margin top 32px |
| `mb-4` | Margin bottom 16px |
| `hidden-mobile` | Hides on mobile |
| `show-mobile` | Shows only on mobile |

---

# 6. Components (Symbols in Webflow)

Components are reusable pieces. When I update one, all instances update.

## My Components

### 1. Navigation Component

Used on: Every page (currently just one)

Contains:
- Logo
- Nav links
- CTA button

Settings:
- Position: Fixed
- Top: 0
- Left: 0
- Right: 0
- Z-index: 100
- Background: White
- Border Bottom: 1px solid

---

### 2. Button Components

**btn-primary:**
- Background: Blue
- Color: White
- Padding: 12px 24px
- Border Radius: 8px

**btn-secondary:**
- Background: White
- Border: 1px solid
- Color: Dark
- Padding: 12px 24px
- Border Radius: 8px

---

### 3. Feature Card Component

Structure:
```
div.card-feature
├── div.card-icon-wrap
│   └── (icon image)
├── h3.card-title
└── p.card-description
```

---

### 4. Pricing Card Component

Structure:
```
div.card-pricing
├── div.pricing-badge (optional)
├── h3.pricing-name
├── div.pricing-price
│   ├── span.price-amount
│   └── span.price-period
├── p.pricing-description
├── ul.pricing-features
│   └── li (multiple)
└── a.btn (button)
```

---

### 5. Footer Component

Structure:
```
footer.footer
└── div.container
    ├── div.footer-top
    │   ├── div.footer-brand
    │   └── div.footer-links (grid)
    └── div.footer-bottom
        └── p.copyright
```

---

# 7. Responsive Design

## Breakpoints in Webflow

| Name | Width | My Changes |
|------|-------|------------|
| Desktop | 992px+ | Base design |
| Tablet | 768-991px | 2 columns, smaller padding |
| Mobile Landscape | 480-767px | 1 column |
| Mobile Portrait | 0-479px | Stacked, smaller text |

## My Responsive Changes

### Hero Section

| Element | Desktop | Mobile |
|---------|---------|--------|
| Heading | 48px | 32px |
| Description | 18px | 16px |
| Buttons | Side by side | Stacked |
| Image | Full width | Smaller |

### Cards

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Layout | 3 columns | 2 columns | 1 column |
| Padding | 32px | 24px | 20px |

### Navigation

| Element | Desktop | Mobile |
|---------|---------|--------|
| Links | Visible | Hidden (menu) |
| Hamburger | Hidden | Visible |

---

# 8. Interactions (Basic)

Webflow has built-in interactions. I used simple ones.

## Hover Effects I Used

### Button Hover

**Trigger:** Hover on button

**Animation:**
- Background color: Darker blue
- Transform: Move Y -2px (slight lift)
- Transition: 200ms ease

### Card Hover

**Trigger:** Hover on card

**Animation:**
- Box shadow: Larger shadow
- Transform: Move Y -4px
- Transition: 300ms ease

### Nav Link Hover

**Trigger:** Hover on nav link

**Animation:**
- Color: Blue
- Transition: 150ms

---

## Scroll Interactions

### Fade In on Scroll

**Trigger:** Element scrolls into view

**Start State:**
- Opacity: 0
- Transform: Move Y 20px

**End State:**
- Opacity: 1
- Transform: Move Y 0px
- Duration: 400ms

**Applied to:** 
- Section headings
- Cards (with stagger delay)

---

# 9. CMS Collections (Basic)

CMS lets you manage content dynamically. I planned these collections:

## FAQ Collection

| Field | Type |
|-------|------|
| Question | Plain Text |
| Answer | Rich Text |
| Order | Number |

## Testimonials Collection (Optional)

| Field | Type |
|-------|------|
| Quote | Plain Text |
| Author Name | Plain Text |
| Author Title | Plain Text |
| Author Photo | Image |

## Features Collection (Optional)

| Field | Type |
|-------|------|
| Icon | Image |
| Title | Plain Text |
| Description | Plain Text |

---

# 10. Performance Considerations

## Images

### What I Learned

- Use WebP format when possible
- Compress images before uploading
- Set proper dimensions (don't upload huge images)
- Use lazy loading for below-the-fold images

### My Image Settings

| Image Type | Max Width | Format |
|------------|-----------|--------|
| Hero | 1200px | WebP |
| Feature Icons | 48px | SVG |
| Screenshots | 800px | WebP |
| Avatars | 96px | WebP |

---

## Loading

### What I Did

- Put important CSS inline
- Optimized font loading
- Used native lazy loading
- Minimized custom code

---

# 11. Publishing Checklist

## Before Publishing

- [ ] Check all breakpoints
- [ ] Test all interactions
- [ ] Check all links
- [ ] Optimize images
- [ ] Add meta title/description
- [ ] Add favicon
- [ ] Test forms (if any)
- [ ] Check load speed

## SEO Settings

| Setting | Value |
|---------|-------|
| Title | TaskFlow - Team Task Management |
| Description | The simple way for small teams to manage tasks, track progress, and ship faster. |
| Open Graph Image | Hero screenshot |

---

# 12. What I Learned About Webflow

## Things That Clicked

1. **Box Model** — Everything is boxes inside boxes
2. **Flexbox** — Powerful for layouts
3. **Classes** — Reusable styles save time
4. **Components** — Update once, updates everywhere
5. **Breakpoints** — Design cascades down

## Things I Found Tricky

1. **Specificity** — Sometimes styles conflict
2. **Nested Flexbox** — Can get confusing
3. **Absolute positioning** — Hard to make responsive
4. **Interactions** — Take time to set up right

## Tips for Myself

- Always start with mobile or desktop, not both
- Name classes clearly from the start
- Use Auto layout in Figma = easier in Webflow
- Test on real devices, not just preview
- Keep it simple at first

---

*Webflow Documentation v1.0 — TaskFlow*
