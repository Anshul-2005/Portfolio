# TaskFlow — Framer Documentation
## Components, Animations & Interactions Guide

*Note: This is written from a beginner's perspective. I'm documenting what I learned.*

---

# 1. What is Framer?

Framer is a design tool that lets you create interactive, animated websites. It's similar to Figma but with more built-in animation features.

## Why I'm Learning Framer

1. **Animations are easier** — Built into the tool
2. **Real interactions** — Test without coding
3. **Growing popularity** — Many companies use it
4. **Portfolio sites** — Great for designers
5. **Components work well** — Similar to Figma

---

# 2. Page Structure

## How I Organized the Page

```
Desktop Frame (1440px)
├── Navigation (sticky)
├── Hero Section
├── Features Section
├── How It Works Section
├── Pricing Section
├── Testimonials Section
├── FAQ Section
├── CTA Section
└── Footer
```

## Frame Sizes

| Name | Width |
|------|-------|
| Desktop | 1440px |
| Laptop | 1024px |
| Tablet | 768px |
| Mobile | 375px |

---

# 3. Components I Created

## What Are Components?

Components are reusable design elements. Like symbols in other tools. When you change the main component, all copies update.

---

## Component 1: Button

### Variants

| Variant | Description |
|---------|-------------|
| Primary | Blue background, white text |
| Secondary | White background, border, dark text |
| Ghost | Transparent, blue text |

### Properties

| Property | Options |
|----------|---------|
| Size | Small, Default, Large |
| Icon | None, Left, Right |
| State | Default, Hover, Active, Disabled |

### Hover Animation

**What happens:**
- Background gets slightly darker
- Button moves up 2 pixels
- Shadow appears

**Why I chose this:**
- It's subtle but noticeable
- Tells users it's clickable
- Common pattern users expect

**Settings:**
- Duration: 200ms
- Easing: Ease Out

---

## Component 2: Feature Card

### Structure

```
Feature Card
├── Icon Container (48x48, blue background)
│   └── Icon (24x24)
├── Title (22px, bold)
└── Description (16px, gray)
```

### Hover Animation

**What happens:**
- Card moves up 4 pixels
- Shadow increases
- Icon background changes color

**Why I chose this:**
- Shows interactivity
- Draws attention
- Feels responsive

**Settings:**
- Duration: 300ms
- Easing: Spring (gentle)

---

## Component 3: Pricing Card

### Variants

| Variant | Description |
|---------|-------------|
| Default | Standard styling |
| Featured | Blue border, "Popular" badge |

### Hover Animation

**What happens:**
- Slight scale increase (1.02)
- Shadow deepens

**Why I chose this:**
- Minimal but noticeable
- Doesn't distract from content
- Encourages clicking

---

## Component 4: Navigation

### States

| State | Description |
|-------|-------------|
| Default | Normal navigation |
| Scrolled | After scrolling, background solid |

### Mobile Variant

| Element | Behavior |
|---------|----------|
| Logo | Always visible |
| Links | Hidden, in menu |
| Hamburger | Visible |

---

## Component 5: FAQ Item

### States

| State | Description |
|-------|-------------|
| Closed | Question visible, answer hidden |
| Open | Question + answer visible |

### Animation

**What happens when clicking:**
1. Arrow icon rotates 180°
2. Answer fades in
3. Card expands height

**Settings:**
- Duration: 300ms
- Easing: Ease In Out

---

# 4. Animations I Used

## Why I Kept Animations Simple

1. **Easier to build** — I'm still learning
2. **Better performance** — Complex animations can be slow
3. **Less distracting** — Focus on content
4. **Easier to explain** — Can discuss in interviews

---

## Hover Animations

### Button Hover

| Property | Before | After |
|----------|--------|-------|
| Transform Y | 0px | -2px |
| Background | Blue | Darker Blue |
| Shadow | None | Soft shadow |

**Duration:** 200ms  
**Easing:** Ease Out

---

### Card Hover

| Property | Before | After |
|----------|--------|-------|
| Transform Y | 0px | -4px |
| Shadow | Small | Medium |

**Duration:** 300ms  
**Easing:** Spring (stiffness: 300)

---

### Link Hover

| Property | Before | After |
|----------|--------|-------|
| Color | Gray | Blue |
| Text Decoration | None | Underline |

**Duration:** 150ms  
**Easing:** Ease

---

## Scroll Animations

### Fade In Up

Used for: Section headings, cards, content blocks

| Property | Start | End |
|----------|-------|-----|
| Opacity | 0 | 1 |
| Transform Y | 20px | 0px |

**Trigger:** When element is 80% in viewport  
**Duration:** 400ms  
**Easing:** Ease Out

**Why I used this:**
- Classic scroll animation
- Not too dramatic
- Shows content progressively
- Easy to implement

---

### Stagger Animation

Used for: Feature cards, pricing cards

**What it does:** Each card animates in sequence, not all at once.

**Settings:**
- Delay between cards: 100ms
- Same animation as Fade In Up

**Why I used this:**
- More interesting than all at once
- Guides eye across content
- Common pattern

---

### Hero Animation

When the page loads:

| Element | Delay | Animation |
|---------|-------|-----------|
| Badge | 0ms | Fade in |
| Heading | 100ms | Fade in + slide up |
| Description | 200ms | Fade in + slide up |
| Buttons | 300ms | Fade in + slide up |
| Image | 400ms | Fade in + scale |

**Why I used stagger:**
- Creates a "reveal" moment
- Keeps attention as elements appear
- Feels polished but not overwhelming

---

## Page Transitions

### Basic Page Transition

**What happens:**
- Current page fades out
- New page fades in

**Settings:**
- Duration: 300ms
- Easing: Ease In Out

**Why I chose this:**
- Smooth but not slow
- Works on all devices
- Simple to implement

---

# 5. Micro-Interactions

Small interactions that make the site feel responsive.

## Button Press

**What happens on click:**
- Button scales down slightly (0.98)
- Then returns to normal

**Duration:** 100ms

**Why:**
- Gives feedback instantly
- Feels like a real button
- Users know they clicked

---

## Icon Spin (On Feature Card Hover)

**What happens:**
- Icon rotates 360° once

**Duration:** 600ms  
**Easing:** Ease In Out

**Why:**
- Adds playfulness
- Draws attention to icon
- Not distracting (only on hover)

---

## Menu Open Animation

**What happens:**
1. Hamburger lines transform into X
2. Menu slides in from right
3. Background fades in

**Duration:** 300ms

**Why:**
- Standard mobile menu pattern
- Clear state change
- Smooth transition

---

## FAQ Expand

**What happens:**
1. Click question
2. Arrow rotates down
3. Answer height expands
4. Content fades in

**Duration:** 300ms  
**Easing:** Ease In Out

**Why:**
- Clear open/close states
- Smooth height change
- Arrow shows direction

---

# 6. Prototype Flow

## Main User Flow

```
1. Landing Page
   ↓
2. Scroll through sections
   ↓
3. Click "Get Started" (any button)
   ↓
4. Sign Up Page (not designed - would be separate)
```

## Interactive Elements

| Element | Interaction | Result |
|---------|-------------|--------|
| Nav links | Click | Scroll to section |
| CTA buttons | Click | Link to sign up |
| Pricing cards | Hover | Lift animation |
| FAQ items | Click | Expand/collapse |
| Mobile menu | Click | Open overlay |

---

# 7. Animation Principles I Followed

## 1. Keep It Fast

Most animations are under 400ms. Slow animations feel laggy.

## 2. Use Easing

Never use linear timing. Always ease in/out for natural feel.

## 3. Be Consistent

Same animation for similar elements. Cards all animate the same way.

## 4. Have Purpose

Every animation serves a purpose:
- **Hover effects:** Show interactivity
- **Scroll reveals:** Guide attention
- **Transitions:** Show state change

## 5. Don't Overdo It

Too many animations = distracting. I chose specific moments to animate.

---

# 8. Responsive Animations

## What I Changed for Mobile

| Animation | Desktop | Mobile |
|-----------|---------|--------|
| Scroll reveals | Full effect | Simpler (less movement) |
| Hover effects | All enabled | None (no hover on touch) |
| Stagger delay | 100ms | 50ms (faster) |
| Hero animation | Full sequence | Faster sequence |

## Why Mobile Is Different

1. **No hover** — Touch devices don't have hover
2. **Performance** — Phones can be slower
3. **Smaller screen** — Less room for big movements

---

# 9. Performance Tips

## What I Learned

### Animate These (Fast)
- Transform (translate, scale, rotate)
- Opacity

### Avoid Animating (Slow)
- Width/height changes
- Margin/padding
- Box shadows (lots of them)

### My Rules
1. Keep animations short (under 500ms usually)
2. Use transforms when possible
3. Don't animate too many things at once
4. Test on real devices

---

# 10. Export & Handoff

## If I Were Working with Developers

### Provide Them:
1. **Animation specs** — Duration, easing, properties
2. **Breakpoint behavior** — What changes at each size
3. **Interaction map** — What happens when users interact
4. **Video recordings** — Show animations in action

### Animation Values Table

| Animation | Duration | Easing | Delay |
|-----------|----------|--------|-------|
| Button hover | 200ms | ease-out | 0ms |
| Card hover | 300ms | spring | 0ms |
| Scroll reveal | 400ms | ease-out | 0ms |
| Page transition | 300ms | ease-in-out | 0ms |
| FAQ expand | 300ms | ease-in-out | 0ms |
| Menu open | 300ms | ease-out | 0ms |

### CSS Easing Values

| Name | CSS Value |
|------|-----------|
| Ease Out | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Ease In Out | `cubic-bezier(0.65, 0, 0.35, 1)` |
| Spring | Custom (Framer handles this) |

---

# 11. What I Learned About Framer

## Things That Clicked

1. **Components are powerful** — Make once, use everywhere
2. **Variants simplify states** — Hover, active, etc.
3. **Scroll animations are easy** — Built-in support
4. **Preview is helpful** — Test without publishing

## Things I Found Tricky

1. **Complex animations** — Need more practice
2. **Responsive layout** — Takes time to set up right
3. **Component overrides** — Can be confusing
4. **Performance on mobile** — Need to optimize

## My Tips

- Start with simple animations
- Master components first
- Use the built-in presets
- Test on mobile early
- Watch tutorials for specific features

---

*Framer Documentation v1.0 — TaskFlow*
