# TaskFlow — Interview Preparation
## Questions & Answers for Portfolio Review

*This document helps me prepare for interviews where I discuss this project.*

---

# General Project Questions

## Q: Tell me about this project.

**My Answer:**

"TaskFlow is a landing page design project I created for my portfolio. It's for a fictional SaaS task management tool.

I wanted to demonstrate that I can design a complete landing page from start to finish, including the brand identity, design system, and documentation.

I also used this project to learn the basics of Webflow and Framer, since many companies use these tools.

The project includes the full landing page design across desktop, tablet, and mobile, plus detailed documentation on how everything would be built."

---

## Q: Why did you choose to design a task management product?

**My Answer:**

"I chose task management because:

1. It's a problem everyone understands — I didn't have to explain the concept
2. There are great examples to learn from — Linear, Asana, Notion
3. It's a common SaaS model — relevant for real job opportunities
4. The features are visual — easy to show on a landing page

I wasn't trying to invent something new. I wanted to practice designing something realistic that I could actually build."

---

## Q: How long did this take you?

**My Answer:**

"About 2 weeks, working on it part-time.

- Week 1: Research, moodboard, wireframes, design system
- Week 2: High-fidelity designs, responsive layouts, documentation

The documentation actually took longer than I expected. But I think it was worth it because I now have a clear reference for how to build it."

---

# Design Questions

## Q: Why did you choose blue as the primary color?

**My Answer:**

"Blue is commonly associated with trust and professionalism, which is important for a business tool. It's also familiar — many SaaS products use blue.

I specifically chose #2563EB (a blue from Tailwind's palette) because:
- It's modern without being too bright
- It has good contrast with white text (meets accessibility standards)
- It has nice variations for hover states and backgrounds

I considered other colors like purple or green, but they felt less appropriate for a productivity tool."

---

## Q: Why Inter font?

**My Answer:**

"I chose Inter for practical reasons:

1. It's free on Google Fonts — easy for anyone to use
2. It's designed for screens — very readable at small sizes
3. It has many weights — I could create hierarchy with one font
4. It's popular in the design community — feels modern and current

I kept it simple with just one font family. Using multiple fonts can get messy, especially when you're still learning."

---

## Q: How did you decide on the spacing?

**My Answer:**

"I used a 4px base unit, which is common in design systems. All my spacing is a multiple of 4: 8, 16, 24, 32, 48, etc.

This makes everything feel consistent. If padding is 16px in one place, it's 16px everywhere for similar elements.

I learned this approach from studying how companies like Apple and Google structure their design systems."

---

## Q: Walk me through your design process.

**My Answer:**

"I followed these steps:

1. **Research** — I looked at competitors like Linear and Notion to understand landing page patterns

2. **Moodboard** — I collected visual inspiration for colors, typography, and layouts

3. **Wireframes** — I sketched rough layouts for each section before adding any styling

4. **Design System** — I created my colors, type scale, and components before designing screens

5. **High-Fidelity** — I designed the full page at desktop size first, then adapted for tablet and mobile

6. **Documentation** — I wrote out how it would be implemented in Webflow and Framer

Starting with the design system saved me a lot of time later. I wasn't constantly making decisions about colors or font sizes."

---

## Q: How did you handle responsive design?

**My Answer:**

"I designed for three breakpoints:
- Desktop (1440px)
- Tablet (768px)
- Mobile (375px)

My approach was:
1. Design desktop first (more space to work with)
2. Adapt to tablet (usually 2 columns instead of 3)
3. Adapt to mobile (usually 1 column, stacked)

The main things that changed:
- Grid columns: 3 → 2 → 1
- Navigation: Links → Hamburger menu
- Spacing: Smaller padding on mobile
- Font sizes: Headings get smaller

I tried to keep the same content across all sizes. I didn't hide important information on mobile."

---

# Webflow Questions

## Q: What do you know about Webflow?

**My Answer:**

"Webflow is a visual website builder that generates clean HTML and CSS. You design in a visual interface, and it handles the code.

Key concepts I learned:
- **Box model** — Everything is boxes inside boxes
- **Flexbox** — For arranging items in rows or columns
- **Classes** — Reusable styles you name and apply
- **Breakpoints** — Design for different screen sizes
- **Components (Symbols)** — Reusable elements that update everywhere

I'm still a beginner, but I understand the fundamentals and can build basic layouts."

---

## Q: How would you structure this page in Webflow?

**My Answer:**

"I would use this structure:

```
Body
├── Navigation (fixed)
│   └── Container
│       ├── Logo
│       ├── Nav Links
│       └── CTA Button
│
├── Section (Hero)
│   └── Container
│       ├── Badge
│       ├── Heading
│       ├── Description
│       ├── Button Group
│       └── Hero Image
│
├── Section (Features)
│   └── Container
│       ├── Section Header
│       └── Feature Grid (3 columns)
│           └── Feature Cards
...
```

Each section is full-width. The container inside limits the width and centers content. I'd use flexbox for most layouts."

---

## Q: What Webflow classes would you create?

**My Answer:**

"I'd create classes following a naming convention:

**Layout classes:**
- `section` — Full-width wrapper
- `container` — Centered, max-width content
- `grid-3-col` — 3-column grid

**Typography classes:**
- `heading-section` — Section headings
- `text-body` — Body paragraphs
- `text-small` — Captions

**Component classes:**
- `btn-primary` — Primary buttons
- `btn-secondary` — Secondary buttons
- `card-feature` — Feature cards
- `card-pricing` — Pricing cards

This way, if I change `btn-primary`, all primary buttons update."

---

# Framer Questions

## Q: What do you know about Framer?

**My Answer:**

"Framer is a design tool with built-in animation and interaction features. It's great for creating interactive prototypes and even publishing simple websites.

Key concepts I learned:
- **Components** — Reusable design elements
- **Variants** — Different states of a component (hover, active)
- **Scroll animations** — Trigger animations as you scroll
- **Page transitions** — Animations between pages

I'm a beginner, but I understand how to create basic components and simple animations."

---

## Q: What animations did you plan for this project?

**My Answer:**

"I kept animations simple and purposeful:

**Hover effects:**
- Buttons lift up 2px and get darker
- Cards lift up 4px with larger shadows
- Links change color to blue

**Scroll animations:**
- Content fades in and slides up as you scroll
- Cards animate in sequence (staggered)

**Interactions:**
- FAQ items expand/collapse on click
- Mobile menu slides in from right

I chose these because they're common patterns that users expect. They make the site feel responsive without being distracting."

---

## Q: Why did you choose those specific animations?

**My Answer:**

"For each animation, I had a reason:

**Button hover (lift + darken):**
- Shows it's clickable
- Gives feedback instantly
- Common pattern users recognize

**Card hover (lift + shadow):**
- Creates depth/separation
- Draws attention to focused item
- Indicates interactivity

**Scroll reveal (fade up):**
- Guides attention as you scroll
- Makes content feel dynamic
- Not too dramatic

**Staggered animation:**
- More interesting than all at once
- Guides eye across content
- Shows thought went into the design

I avoided complex animations because I'm still learning, and simple animations are often more effective anyway."

---

# Process Questions

## Q: How do you organize your design files?

**My Answer:**

"I organize everything in folders:

```
TaskFlow/
├── Research/
│   └── Moodboard, competitor screenshots
├── Design/
│   ├── Wireframes/
│   ├── Components/
│   └── Screens/
├── Documentation/
│   ├── Brand Guidelines
│   ├── Design System
│   └── Implementation Docs
└── Exports/
    └── Images, icons, assets
```

In Figma, I use separate pages for:
- Cover/info
- Components
- Desktop screens
- Tablet screens
- Mobile screens

I name layers clearly so I can find things later."

---

## Q: How would you hand this off to a developer?

**My Answer:**

"I would provide:

1. **Design file access** — Share the Figma file with inspect permissions

2. **Design tokens** — Colors, fonts, spacing as code-ready values

3. **Component documentation** — How each component works, its states

4. **Animation specs** — Duration, easing, what triggers each animation

5. **Responsive notes** — What changes at each breakpoint

6. **Asset exports** — SVG icons, optimized images

I'd also be available for questions. Documentation helps, but conversation is usually needed too."

---

## Q: What would you do differently next time?

**My Answer:**

"A few things:

1. **Start with mobile** — It might be easier to add elements than remove them

2. **Build a clickable prototype** — Animations are easier to judge in motion

3. **Get feedback earlier** — I worked alone on this; fresh eyes would help

4. **Scope down initially** — I included a lot; could have started simpler

5. **Test the animations** — Hard to know if timing is right without trying

These are lessons I'll apply to future projects."

---

# Difficult Questions

## Q: This looks like many other SaaS landing pages. What makes it unique?

**My Answer:**

"You're right — it follows common patterns. That was intentional.

As an intern, my goal was to demonstrate I understand landing page fundamentals, not to reinvent them. I focused on execution: clean design, good documentation, clear thinking.

If I were working on a real product, I'd look for opportunities to differentiate based on the brand's unique qualities. But for a portfolio project demonstrating basics, I prioritized doing common patterns well."

---

## Q: What's the weakest part of this project?

**My Answer:**

"Honestly, the animations and interactions are basic. I documented what I would do, but I haven't built complex animations yet.

I also didn't do user testing. I made assumptions about what users need based on research, but I'd want to validate those with real feedback.

These are areas I want to improve as I gain more experience."

---

## Q: How would you measure if this design is successful?

**My Answer:**

"If this were a real project, I'd look at:

1. **Conversion rate** — What percentage of visitors sign up?
2. **Bounce rate** — Are people leaving immediately?
3. **Time on page** — Are they engaging with content?
4. **Scroll depth** — How far do they scroll?
5. **Click tracking** — Which CTAs get clicked?

Then I'd use that data to make improvements. Design is never really "done" — it's always evolving based on feedback."

---

# Closing Question

## Q: Why should we hire you as an intern?

**My Answer:**

"This project shows I can:

1. **Work independently** — I planned and executed this myself
2. **Learn new tools** — I picked up Webflow and Framer basics
3. **Think systematically** — I created a design system, not just screens
4. **Document my work** — I can communicate decisions clearly
5. **Be realistic** — I know I'm a beginner and focused on fundamentals

I'm not claiming to be an expert. But I'm motivated, I learn quickly, and I'll bring that same effort to whatever projects I work on at your company."

---

*Interview prep completed — ready to discuss this project confidently!*
