# PERSONAL PORTFOLIO — MASTER PROJECT CONTEXT

## 1. Project Overview

This is a modern, interactive personal portfolio website for a full-stack web developer.

The portfolio should function as:

- A professional developer portfolio
- A digital resume
- A showcase of real software projects
- A demonstration of technical skills
- A personal brand website
- A photography portfolio
- A platform for attracting job opportunities and freelance work

The portfolio must feel:

- Modern
- Professional
- Personal
- Editorial
- Technical
- Interactive
- Fast
- Accessible
- Production-ready

The website must NOT feel like:

- A generic AI-generated portfolio
- A dashboard
- A collection of random animations
- An over-designed creative agency template
- A simple list of technologies

The primary goal is to clearly communicate:

1. Who the developer is
2. What the developer builds
3. What real projects the developer has created
4. What technical skills the developer has
5. What professional experience the developer has
6. How visitors can contact the developer

---

# 2. Current Visual Direction

The current portfolio uses:

- A light background
- Blue as the primary accent color
- White cards
- Subtle borders
- Soft shadows
- Rounded UI elements
- Minimal technical styling

This foundation should be preserved, but the visual hierarchy must be improved.

The website currently feels too small and too information-dense.

The redesign should focus on:

- Larger typography
- Stronger section hierarchy
- More visual contrast between important and secondary content
- Better use of whitespace
- Larger project presentation
- More intentional section transitions
- Stronger personal branding

Do not solve visual problems by simply adding more animations.

---

# 3. Design Philosophy

The design hierarchy is:

Content
    ↓
Visual Hierarchy
    ↓
Layout
    ↓
Interaction
    ↓
Animation

Animation must support the content.

Animation must not become the content.

The website should feel alive but not distracting.

Avoid:

- Excessive glowing effects
- Too many floating objects
- Overuse of gradients
- Excessive glassmorphism
- Aggressive 3D effects
- Large unnecessary parallax effects
- Animating every text character
- Animating every icon
- Animating every border

The website should feel like a carefully designed personal product portfolio.

---

# 4. Technology Stack

## Core

- React 19
- Vite
- JavaScript
- React Router v7

## Styling

- Tailwind CSS v4

## Animation

- Framer Motion

Framer Motion should be the primary animation system.

Avoid using multiple animation libraries for the same purpose.

Existing libraries such as ScrollReveal may be removed if Framer Motion already provides equivalent functionality.

## Icons

Use one primary icon system consistently.

Prefer:

- React Icons

Avoid adding unnecessary duplicate icon libraries.

---

# 5. Current Routes

## Home

```text
/
```

The homepage contains:

Hero
Featured Projects
About
Experience
Technical Arsenal
Photography Preview
Contact CTA
Photography
/photography

The photography page is a dedicated visual portfolio.

It may contain:

Photography gallery
Photography stack
Image transitions
Hover interactions
Fullscreen image previews if appropriate

The photography page should feel more visual and experimental than the main developer portfolio.

# 6. Recommended Homepage Order

The homepage should follow this hierarchy:

Header
    ↓
Hero
    ↓
Featured Projects
    ↓
About
    ↓
Experience
    ↓
Technical Arsenal
    ↓
Photography Preview
    ↓
Contact CTA
    ↓
Footer

Why Projects Come Before Skills:

Visitors should understand:

Who are you?
    ↓
What have you built?
    ↓
How did you build it?

A list of technologies without project evidence is only a claim.

Projects should therefore receive stronger visual importance than the technology list.

# 7. Recommended Project Architecture

The application should gradually move toward this structure:

```text
src/
│
├── app/
│   ├── App.jsx
│   ├── routes.jsx
│   └── providers/
│       ├── ThemeProvider.jsx
│       └── MotionProvider.jsx
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── PageTransition.jsx
│   │   └── ScrollProgress.jsx
│   │
│   ├── ui/
│   │   ├── Reveal.jsx
│   │   ├── TextReveal.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── TiltCard.jsx
│   │   └── CustomCursor.jsx
│   │
│   └── effects/
│       ├── GravityBackground.jsx
│       ├── NoiseOverlay.jsx
│       └── ParticlesBackground.jsx
│
├── features/
│   │
│   ├── home/
│   │   ├── HomePage.jsx
│   │   └── HomeHero.jsx
│   │
│   ├── projects/
│   │   ├── ProjectsSection.jsx
│   │   ├── FeaturedProject.jsx
│   │   ├── ProjectCard.jsx
│   │   └── projectData.js
│   │
│   ├── about/
│   │   ├── AboutSection.jsx
│   │   └── WorkflowTimeline.jsx
│   │
│   ├── experience/
│   │   ├── ExperienceSection.jsx
│   │   ├── ExperienceTimeline.jsx
│   │   └── experienceData.js
│   │
│   ├── skills/
│   │   ├── SkillsSection.jsx
│   │   ├── SkillCategory.jsx
│   │   └── skillData.js
│   │
│   ├── contact/
│   │   ├── ContactSection.jsx
│   │   └── ContactForm.jsx
│   │
│   └── photography/
│       ├── PhotographyPage.jsx
│       ├── PhotographyStack.jsx
│       └── photographyData.js
│
├── data/
│   ├── navigation.js
│   ├── personalInfo.js
│   └── socialLinks.js
│
├── hooks/
│   ├── useScrollProgress.js
│   ├── useMediaQuery.js
│   └── useReducedMotion.js
│
├── lib/
│   ├── animations.js
│   └── constants.js
│
├── styles/
│   ├── globals.css
│   └── animations.css
│
└── main.jsx
```

# 8. Feature-Based Architecture

Portfolio features should live inside:

`src/features/`

Examples:

features/projects/
features/experience/
features/skills/
features/about/

Reusable UI should live inside:

`src/components/ui/`

Do not place all application logic inside one large generic components folder.

# 9. Data Separation

Do not hardcode large content arrays directly inside JSX.

Project data should be separated.

Example:

```javascript
export const projects = [
  {
    id: "kitchen-hearth",
    title: "Kitchen Hearth",
    description: "AI-powered recipe creation platform.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/kitchen-hearth.webp",
    featured: true,
    liveUrl: "",
    githubUrl: ""
  }
];
```

The UI should render project data through reusable components.

The same principle applies to:
- Skills
- Experience
- Navigation
- Social links
- Photography items

# 10. Hero Section

The hero is the strongest visual section of the website.

The current hero should be improved because the content appears too small.

The hero should use stronger visual scale.

Recommended hierarchy:

Availability Badge
    ↓
Hi, I'm
    ↓
Usman Khalid
    ↓
Professional Positioning
    ↓
Short Value Proposition
    ↓
Primary CTA
    ↓
Secondary CTA
    ↓
Social Links

The hero should clearly communicate:

Name
Full-stack developer identity
Main technologies or specialization
Value proposition
CTA

Avoid generic copy such as:

"Crafting digital experiences with code and creativity."

Prefer specific positioning such as:

"I build full-stack web applications with React, Node.js, and modern backend technologies."

Or:

"Full-stack developer focused on building useful products, scalable APIs, and clean user experiences."

# 11. Hero Image

The portrait image should feel like part of the visual identity.

Do not make the image feel like a random decoration.

The image may use:

A custom geometric mask
Subtle parallax
Slow floating movement
Soft background glow
Very subtle scale animation

Avoid:

Excessive rotation
Aggressive bouncing
Constant large movement
Distracting 3D effects

The image should support the hero content.

# 12. Featured Projects Section

The Featured Projects section should be visually important.

The first project should be treated as a featured project.

Recommended structure:

Large Featured Project
    ↓
Smaller Project 2
    ↓
Smaller Project 3

Do not give every project identical visual weight.

Example:

Large Project Image
-------------------
Project Number
Project Title
Description
Technologies
View Project

The featured project should use:

Larger image
Larger typography
Stronger visual hierarchy
More space

Other projects can use smaller cards.

# 13. Project Card Interactions

Project cards may use subtle interactions.

Recommended hover behavior:

Image scale:
1 → 1.05

Card vertical movement:
0 → -8px

Overlay:
opacity 0 → 1

Arrow:
subtle horizontal movement

Avoid:

Extreme rotation
Large scale
Excessive glow
Heavy 3D effects

Project animations should feel professional.

# 14. About Section

The current About section feels too much like a dashboard.

The redesign should make it more personal.

Recommended structure:

┌──────────────────────────┬─────────────────────┐
│                          │                     │
│ Personal introduction    │ Current Stack       │
│                          │                     │
│ What I build             │ React               │
│ How I work               │ Node.js             │
│ What I care about        │ MongoDB             │
│                          │ PostgreSQL          │
│                          │ Next.js             │
└──────────────────────────┴─────────────────────┘

The personal story should be more important than a collection of small information cards.

# 15. Workflow Section

The workflow should not look like five unrelated small cards.

Use a timeline:

01 Plan
    ↓
02 Design
    ↓
03 Build
    ↓
04 Test
    ↓
05 Deploy

The workflow should visually communicate a process.

It may use:

Horizontal timeline on desktop
Vertical timeline on mobile
Scroll-linked progress
Staggered node reveal

# 16. Experience Section

Add a dedicated professional Experience section.

This is important for job applications.

Recommended structure:

2025 — Present
Junior MERN Stack Developer
Company Name

Description

Key Contributions:
- Built full-stack features
- Developed React interfaces
- Created backend APIs
- Implemented authentication
- Worked with databases

The experience section should use a timeline.

Recommended animation:

Timeline line:
progresses as user scrolls

Experience nodes:
appear when entering viewport

Content:
slides in from alternating sides

Keep the animation subtle.

# 17. Technical Arsenal Section

The Technical Arsenal section should remain, but it should be visually secondary to real projects.

Recommended categories:

Frontend
Backend
Tools & Design

Each category can display technologies in a clean grid.

Avoid fake skill percentages such as:

React: 95%
Node.js: 90%

These numbers are subjective and usually do not add credibility.

Instead, communicate:

Technologies used
Areas of experience
Project evidence

# 18. Photography Preview

The homepage should include a smaller photography preview.

The full photography experience belongs at:

/photography

The homepage preview should:

Show selected images
Create curiosity
Link to the full photography page

It should not duplicate the entire photography page.

# 19. Contact CTA

The contact section should be more direct.

Avoid generic copy:

"Let's Work Together"

Better:

"Need a full-stack developer?"

Or:

"Have a product idea?"

Example:

Have a product idea?

Let's turn it into something people can use.

[Start a Conversation →]

The CTA should support the actual goal of:

Getting hired
Freelance work
Professional networking

# 20. Footer

The footer should contain:

Developer name
Short professional description
Navigation links
Social links
Email contact
Copyright

The footer should feel intentional rather than empty.

# 21. Animation System

All major animations should be centralized.

Create:

`src/lib/animations.js`

Example:

```javascript
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
```

Other reusable variants:

fadeIn
slideFromLeft
slideFromRight
scaleIn
staggerContainer

Do not create random animation values inside every component unless the animation is genuinely unique.

# 22. Scroll Animation Rules

Different sections should use different animation patterns.

Hero

Stronger entrance animation.

Badge
    ↓
Name
    ↓
Title
    ↓
Description
    ↓
Buttons
    ↓
Social Links

Use controlled staggered entrance.

About

Use:

Heading:
fade up

Left content:
slide from left

Right content:
slide from right

Projects

Use:

Image:
clip-path or reveal animation

Content:
fade up

Technology tags:
staggered appearance

Skills

Use:

Category 1
    ↓
Category 2
    ↓
Category 3

Cards should stagger into view.

Experience

Use:

Timeline line:
scroll-linked progress

Experience node:
scale in

Experience content:
fade and slide

Contact

Use minimal animation.

# 23. Global Scroll Progress

Add a global scroll progress indicator.

The indicator should:

Stay fixed at the top
Not affect layout
Use transform scaleX
Work in light and dark mode

Use Framer Motion's:

useScroll()

Prefer animating:

transform
opacity

for performance.

# 24. Route Transitions

Route transitions should be subtle.

Routes:

/
/photography

Recommended:

Current page
    ↓
Subtle exit
    ↓
New page
    ↓
Subtle entrance

Do not make route transitions slow.

# 25. Interactive Effects

Magnetic Buttons

Use only for important CTAs.

Recommended:

Hero primary CTA
Contact CTA

Do not make every button magnetic.

Custom Cursor

If used:

Desktop only
Disabled on touch devices
Must not interfere with normal clicking
Must not create excessive CPU usage

Gravity Background

Use primarily in the hero.

Do not use heavy background effects throughout the entire website.

# 26. Visual Design System

Recommended foundation:

Background:
#F8FAFC

Primary Text:
#0F172A

Primary Accent:
#0284C7

Secondary Accent:
#7C3AED

Card:
#FFFFFF

Border:
Subtle neutral color

Border Radius:
16px–24px

Shadow:
Soft and restrained

The main visual improvement should come from:

Typography scale
Layout hierarchy
Spacing
Contrast

Not from adding many colors.

# 27. Typography

The current website feels too small.

Improve scale.

Recommended desktop ranges:

Hero heading:
64px–88px

Section heading:
42px–56px

Project heading:
28px–48px

Body text:
16px–18px

Small metadata:
12px–14px

Use responsive typography.

Do not make every text element large.

The hierarchy should be obvious.

# 28. Responsive Design

The website must work across:

Mobile
Tablet
Laptop
Desktop
Large screens

Desktop:

Larger hero typography
Multi-column layouts
Featured project layout
Timeline layouts
Hover effects

Mobile:

Simplified layouts
Reduced animation
No custom cursor
No hover-dependent functionality
Touch-friendly buttons
Smaller but still readable typography

Never assume hover interactions work on mobile.

# 29. Accessibility

The website must support:

Keyboard navigation
Semantic HTML
Visible focus states
Accessible buttons
Accessible links
Alt text
Reduced motion preferences

Icon-only buttons must have:

aria-label

Respect:

prefers-reduced-motion

Users who prefer reduced motion should receive reduced animation.

# 30. Performance

Performance is a priority.

Rules:

Lazy-load photography images
Optimize images
Prefer WebP or AVIF
Avoid unnecessary large background images
Avoid excessive JavaScript animation loops
Avoid unnecessary re-renders
Use GPU-friendly animation properties

Prefer:

transform
opacity

Avoid repeatedly animating:

width
height
top
left

unless necessary.

# 31. SEO

The portfolio should include:

Page title
Meta description
Open Graph metadata
Social sharing metadata
Semantic heading hierarchy
Semantic HTML

The website should clearly communicate:

Who the developer is
What they build
What technologies they use
What projects they have built
What professional experience they have
How to contact them

# 32. Code Quality Rules

Before modifying the project:

Inspect the current project structure.
Inspect all existing components.
Inspect routing.
Inspect Tailwind configuration.
Inspect existing animation implementations.
Identify duplicate functionality.
Identify unused dependencies.
Identify layout and responsive problems.
Do not break existing working features.

Do not rewrite the entire project unnecessarily.

Prefer incremental refactoring.

Before creating a new component, check whether an existing component can be reused.

# 33. Migration Strategy

Phase 1 — Audit

Inspect:

Existing components
Routes
CSS
Tailwind
Animations
Assets
Responsive behavior
Dependencies

Do not modify code during the audit.

Phase 2 — Fix Visual Hierarchy

Improve:

Hero typography
Section spacing
Project prominence
Content scale
About layout
CTA visibility

Do not add complex animations yet.

Phase 3 — Restructure Architecture

Gradually migrate toward:

features/
components/
hooks/
lib/
data/

Do not break existing imports.

Phase 4 — Build Animation System

Create:

lib/animations.js
components/ui/Reveal.jsx
components/ui/TextReveal.jsx
hooks/useReducedMotion.js

Migrate repeated animation logic.

Phase 5 — Improve Homepage

Implement:

Hero
Featured Projects
About
Experience
Technical Arsenal
Photography Preview
Contact CTA

Phase 6 — Improve Photography

Improve:

PhotographyPage
PhotographyStack
Image loading
Responsive gallery
Transitions

Phase 7 — Quality Review

Test:

Mobile
Desktop
Dark mode
Keyboard navigation
Reduced motion
Performance
Route navigation
Console errors

# 34. Important AI Agent Instructions

When working on this project:

Read this context file before making changes.
Inspect the existing codebase first.
Do not blindly rewrite the entire project.
Preserve working functionality.
Refactor incrementally.
Fix visual hierarchy before adding complex animation.
Prefer reusable components.
Keep content separate from UI logic.
Centralize animation variants.
Avoid animation overload.
Do not add unnecessary dependencies.
Do not duplicate functionality.
Do not create fake skill percentages.
Make real projects visually more important than skill lists.
Test responsive behavior after UI changes.
Test light mode and dark mode.
Test keyboard accessibility.
Test reduced-motion behavior.
Fix root causes instead of adding workarounds.
Prefer simple solutions over unnecessary abstraction.
Do not use animations just to make the website look technically impressive.
Prioritize performance and user experience.
The final result should feel like a personal product portfolio, not a dashboard.

# 35. Definition of Done

The portfolio is production-ready when:

The project structure is organized
Features are separated logically
Content is data-driven where appropriate
The hero has strong visual hierarchy
Featured projects receive strong visual emphasis
The About section feels personal
Professional experience is clearly visible
Skills are presented as supporting evidence
Scroll animations are consistent
Animations are reusable
Route transitions work correctly
Dark mode works correctly
Mobile layout works correctly
Accessibility is acceptable
Images are optimized
Reduced motion is respected
No major console errors exist
No unnecessary duplicate libraries exist
The website feels professional without excessive visual effects
The portfolio clearly communicates the developer's ability through real projects

## What changed from the previous context file

The previous version was mostly an **architecture and animation plan**. This updated version is more specific to the actual screenshot.

### The most important change: project hierarchy

Old:

```text
Hero
↓
About
↓
Skills
↓
Projects
```

Updated:

```text
Hero
↓
Featured Projects
↓
About
↓
Experience
↓
Technical Arsenal
```

The reason is simple: your projects are evidence; your skills are claims. The portfolio should show evidence earlier.

### The second major change: the portfolio should stop feeling like a dashboard

Your current About section has a lot of small cards:

Who I Am
Tech Stack
Tools I Use
My Workflow

That makes it feel like a dashboard.

The updated context tells the AI to redesign this into:

Personal story
+
Current stack
+
Visual workflow timeline

### The third major change: typography and scale

Your screenshot's biggest visual weakness is that the content is too small relative to the page.

The updated context explicitly tells the AI to increase:

Hero heading: 64–88px
Section headings: 42–56px
Body text: 16–18px

The agent should still use responsive values, but it now knows that the current design lacks scale.

### The fourth major change: featured project hierarchy

Instead of:

[Card] [Card] [Card]
[Card] [Card]

The context now tells the agent:

Featured Project
        ↓
Smaller Project 2 + Project 3

That gives your strongest project more attention.

### The fifth major change: experience is now a first-class section

Your professional experience should not be hidden inside the About section. The updated context explicitly adds a dedicated Experience Section logic.
