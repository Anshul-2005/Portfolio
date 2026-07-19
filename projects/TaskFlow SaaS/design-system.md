# TaskFlow — Design System
## Components, Patterns & Specifications

---

# 1. Design Tokens

Design tokens are the basic values that make up the design system. They can be exported for developers.

## Color Tokens

```json
{
  "colors": {
    "primary": {
      "default": "#2563EB",
      "dark": "#1D4ED8",
      "light": "#DBEAFE"
    },
    "text": {
      "primary": "#0F172A",
      "secondary": "#475569",
      "tertiary": "#94A3B8"
    },
    "background": {
      "primary": "#FFFFFF",
      "secondary": "#F8FAFC"
    },
    "border": {
      "default": "#E2E8F0"
    },
    "semantic": {
      "success": "#22C55E",
      "warning": "#F59E0B",
      "error": "#EF4444"
    }
  }
}
```

## Spacing Tokens

```json
{
  "spacing": {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
    "20": "80px",
    "24": "96px"
  }
}
```

## Typography Tokens

```json
{
  "typography": {
    "fontFamily": "'Inter', sans-serif",
    "fontSize": {
      "xs": "12px",
      "sm": "14px",
      "base": "16px",
      "lg": "18px",
      "xl": "22px",
      "2xl": "28px",
      "3xl": "36px",
      "4xl": "48px"
    },
    "fontWeight": {
      "regular": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700"
    },
    "lineHeight": {
      "tight": "1.1",
      "snug": "1.25",
      "normal": "1.5",
      "relaxed": "1.6"
    }
  }
}
```

## Border Radius Tokens

```json
{
  "borderRadius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "full": "9999px"
  }
}
```

## Shadow Tokens

```json
{
  "shadow": {
    "sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px rgba(0, 0, 0, 0.07)",
    "lg": "0 10px 15px rgba(0, 0, 0, 0.1)",
    "xl": "0 20px 25px rgba(0, 0, 0, 0.1)"
  }
}
```

---

# 2. Component Library

## Buttons

### Primary Button
The main action button. Use for the most important action on the page.

**Specifications:**
| Property | Value |
|----------|-------|
| Background | Blue #2563EB |
| Text Color | White |
| Font Size | 16px |
| Font Weight | 500 (Medium) |
| Padding | 12px 24px |
| Border Radius | 8px |
| Hover | Background #1D4ED8 |

**States:**
```
[  Get Started  ]     Default
[  Get Started  ]     Hover (darker blue, slight lift)
[  Get Started  ]     Active (pressed, no lift)
[  Get Started  ]     Disabled (50% opacity)
```

---

### Secondary Button
For secondary actions. Less prominent than primary.

**Specifications:**
| Property | Value |
|----------|-------|
| Background | White |
| Border | 1px solid #E2E8F0 |
| Text Color | Slate 900 |
| Padding | 12px 24px |
| Border Radius | 8px |
| Hover | Background #F8FAFC |

---

### Ghost Button
For tertiary actions or text links with button padding.

**Specifications:**
| Property | Value |
|----------|-------|
| Background | Transparent |
| Text Color | Blue #2563EB |
| Padding | 12px 24px |
| Border Radius | 8px |
| Hover | Background #DBEAFE |

---

### Button Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| Small | 8px 16px | 14px |
| Default | 12px 24px | 16px |
| Large | 16px 32px | 18px |

---

## Input Fields

### Text Input

**Specifications:**
| Property | Value |
|----------|-------|
| Background | White |
| Border | 1px solid #E2E8F0 |
| Border Radius | 8px |
| Padding | 12px 16px |
| Font Size | 16px |
| Text Color | Slate 900 |
| Placeholder Color | Slate 400 |

**States:**
- Default: Gray border
- Focus: Blue border, light blue shadow
- Error: Red border, error message below
- Disabled: Light gray background

---

## Cards

### Feature Card

Used in Features section.

**Specifications:**
| Property | Value |
|----------|-------|
| Background | White |
| Border | 1px solid #E2E8F0 |
| Border Radius | 16px |
| Padding | 32px |
| Shadow | shadow-sm |
| Hover | Shadow-md, slight lift |

**Content Structure:**
```
┌────────────────────────────────┐
│                                │
│   🔲 Icon (48x48, blue bg)     │
│                                │
│   Feature Title                │
│   (22px semibold)              │
│                                │
│   Description text goes here   │
│   and wraps to multiple lines. │
│   (16px regular, slate 600)    │
│                                │
└────────────────────────────────┘
```

---

### Pricing Card

**Specifications:**
| Property | Value |
|----------|-------|
| Background | White |
| Border | 1px solid #E2E8F0 |
| Border Radius | 16px |
| Padding | 32px |
| Popular variant | Blue border, badge |

**Content Structure:**
```
┌────────────────────────────────┐
│   [Most Popular]  ← optional   │
│                                │
│   Plan Name (22px semibold)    │
│                                │
│   $XX           /month         │
│   (48px bold)   (14px)         │
│                                │
│   Short description            │
│                                │
│   ─────────────────────        │
│                                │
│   ✓ Feature one                │
│   ✓ Feature two                │
│   ✓ Feature three              │
│   ✓ Feature four               │
│                                │
│   [ Get Started ]              │
│                                │
└────────────────────────────────┘
```

---

### Testimonial Card

**Specifications:**
| Property | Value |
|----------|-------|
| Background | Slate 50 |
| Border | None |
| Border Radius | 16px |
| Padding | 32px |

**Content Structure:**
```
┌────────────────────────────────┐
│                                │
│   "Quote text goes here and    │
│   can be multiple lines long." │
│   (18px regular, slate 700)    │
│                                │
│   ┌───┐                        │
│   │ 👤│  Person Name           │
│   └───┘  Job Title, Company    │
│   (avatar)  (14px slate 600)   │
│                                │
└────────────────────────────────┘
```

---

## Navigation

### Desktop Navigation

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [Logo]     Features   Pricing   About      [Sign In]  │
│                                             [Get Started]
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Specifications:**
| Element | Specs |
|---------|-------|
| Height | 72px |
| Background | White |
| Border Bottom | 1px solid Border |
| Logo | 32px height |
| Nav Links | 16px medium, Slate 600 |
| Nav Link Hover | Blue color |
| CTA Button | Primary, small size |

---

### Mobile Navigation

```
┌─────────────────────────┐
│  [Logo]           [☰]   │   ← Header
└─────────────────────────┘

When menu open:
┌─────────────────────────┐
│  [Logo]           [✕]   │
├─────────────────────────┤
│                         │
│  Features               │
│  Pricing                │
│  About                  │
│                         │
│  ─────────────────────  │
│                         │
│  [ Sign In ]            │
│  [ Get Started ]        │
│                         │
└─────────────────────────┘
```

---

## Badges

### Basic Badge

| Variant | Background | Text Color |
|---------|------------|------------|
| Default | Slate 100 | Slate 700 |
| Primary | Blue Light | Blue |
| Success | Green Light | Green |

**Specifications:**
- Padding: 4px 12px
- Border Radius: 9999px (full)
- Font Size: 12px
- Font Weight: 500

---

## Section Layout

### Standard Section Structure

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                    Section Tag (optional)              │
│                    • FEATURES                          │
│                                                        │
│                Section Heading                         │
│                (36px, centered)                        │
│                                                        │
│            Section description text here.              │
│            (18px, centered, max-width 600px)           │
│                                                        │
│              ↓ 48-64px gap to content ↓                │
│                                                        │
│   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐          │
│   │ Card │   │ Card │   │ Card │   │ Card │          │
│   └──────┘   └──────┘   └──────┘   └──────┘          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

# 3. Page Layout

## Responsive Breakpoints

| Name | Width | Columns | Gutter |
|------|-------|---------|--------|
| Mobile | 0-767px | 1 | 16px |
| Tablet | 768-1023px | 2 | 24px |
| Desktop | 1024px+ | 3-4 | 32px |

## Container

| Breakpoint | Max Width | Side Padding |
|------------|-----------|--------------|
| Mobile | 100% | 20px |
| Tablet | 100% | 32px |
| Desktop | 1200px | 40px |

---

# 4. Landing Page Sections

## Hero Section

**Purpose:** First impression, explain what we do

**Content:**
- Badge: "Trusted by 5,000+ teams"
- Headline: "Work flows better together."
- Description: 1-2 sentences
- Primary CTA: "Get Started Free"
- Secondary CTA: "Watch Demo"
- Hero Image: Product screenshot

**Layout (Desktop):**
```
┌─────────────────────────────────────────────────────────┐
│                      Navigation                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  [Badge]                                │
│                                                         │
│         Work flows better together.                     │
│         (48px bold, centered)                           │
│                                                         │
│     The simple way for small teams to manage           │
│     tasks, track progress, and ship faster.            │
│                                                         │
│     [Get Started Free]   [Watch Demo]                  │
│                                                         │
│         ┌─────────────────────────────┐                │
│         │                             │                │
│         │     Product Screenshot      │                │
│         │                             │                │
│         └─────────────────────────────┘                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Features Section

**Purpose:** Show what the product does

**Content:** 4-6 feature cards

**Layout (Desktop):** 3 columns
**Layout (Tablet):** 2 columns
**Layout (Mobile):** 1 column

**Features List:**
1. Task Management — Create, assign, and track tasks
2. Team Collaboration — Work together in real-time
3. Progress Tracking — See where everything stands
4. Deadline Reminders — Never miss a due date
5. File Sharing — Keep documents in context
6. Integrations — Connect your favorite tools

---

## How It Works Section

**Purpose:** Explain the process simply

**Content:** 3 steps with numbers

**Steps:**
1. Create your workspace
2. Invite your team
3. Start collaborating

**Layout:**
```
       Step 1            Step 2            Step 3
    ┌─────────┐       ┌─────────┐       ┌─────────┐
    │    1    │ ───→  │    2    │ ───→  │    3    │
    └─────────┘       └─────────┘       └─────────┘
    
    Create your       Invite your       Start
    workspace         team              collaborating
```

---

## Pricing Section

**Purpose:** Show pricing options

**Content:** 3 pricing tiers

| Plan | Price | Best For |
|------|-------|----------|
| Free | $0/month | Individuals |
| Team | $12/user/month | Small teams |
| Business | $25/user/month | Growing companies |

**Layout:** 3 columns (cards), center "Team" as featured

---

## Testimonials Section

**Purpose:** Build trust with social proof

**Content:** 3 testimonial cards

**Layout:** 
- Desktop: 3 columns
- Mobile: Horizontal scroll or stacked

---

## FAQ Section

**Purpose:** Answer common questions

**Content:** 6-8 questions

**Layout:** Accordion style

**Questions:**
1. What is TaskFlow?
2. How much does it cost?
3. Can I try it for free?
4. How do I invite my team?
5. Is my data secure?
6. Can I cancel anytime?

---

## Final CTA Section

**Purpose:** One last push to convert

**Content:**
- Headline: "Ready to get started?"
- Description: Short value prop
- Button: "Start Your Free Trial"

**Layout:** Centered, blue background (optional)

---

## Footer

**Purpose:** Navigation, legal, social

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [Logo]                                                 │
│  The simple way to                                      │
│  manage team tasks.           Product    Company    Legal
│                               Features   About      Privacy
│  [Social] [Social] [Social]   Pricing    Careers    Terms
│                               Changelog  Blog       Cookies
│                                                         │
├─────────────────────────────────────────────────────────┤
│  © 2025 TaskFlow. All rights reserved.                 │
└─────────────────────────────────────────────────────────┘
```

---

# 5. Auto Layout Explanation

Auto Layout is a feature in Figma that automatically arranges elements.

## Why Use Auto Layout?

1. **Saves time** — Don't manually position everything
2. **Responsive** — Adapts to content changes
3. **Consistent** — Same spacing everywhere
4. **Easier updates** — Change once, updates everywhere

## Basic Concepts

### Direction
- **Horizontal** — Items side by side (row)
- **Vertical** — Items stacked (column)

### Spacing
- **Gap** — Space between items
- **Padding** — Space inside the container

### Alignment
- **Start** — Left/top aligned
- **Center** — Centered
- **End** — Right/bottom aligned
- **Space Between** — Spread out evenly

## Example: Button with Auto Layout

```
Button (Horizontal Auto Layout)
├── Padding: 12px top/bottom, 24px left/right
├── Gap: 8px (between icon and text)
├── Alignment: Center
│
├── [Icon] 20x20
└── [Text] "Get Started"
```

## Example: Card with Auto Layout

```
Card (Vertical Auto Layout)
├── Padding: 32px all sides
├── Gap: 16px
├── Alignment: Start
│
├── [Icon] 48x48
├── [Title] "Feature Name"
└── [Description] paragraph
```

---

# 6. Export Guidelines

## For Developers

### Design Tokens
Export as JSON file for CSS variables or JavaScript.

### Assets
- Icons: SVG format, optimized
- Images: WebP with JPG fallback
- Logo: SVG for web, PNG for other uses

### Specifications
Share via Figma inspect or documentation.

## Image Formats

| Type | Format | Quality |
|------|--------|---------|
| Photos | WebP (JPG fallback) | 80% |
| Screenshots | PNG | Lossless |
| Icons | SVG | — |
| Logo | SVG | — |

## Image Sizes

| Usage | Width | Height |
|-------|-------|--------|
| Hero Image | 1200px | Auto |
| Feature Image | 400px | Auto |
| Thumbnail | 200px | Auto |
| Avatar | 48px | 48px |

---

*Design System v1.0 — TaskFlow*
