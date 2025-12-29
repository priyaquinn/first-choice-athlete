# Sports Recruiting Agency Design Guidelines

## Design Approach

**Selected Framework:** Reference-Based Design drawing from athletic and professional platforms
- Primary inspiration: Nike's bold athletic aesthetic + LinkedIn's professional recruiting structure
- Supporting references: ESPN's dynamic sports media + Modern agency portfolios
- Core principle: Energetic professionalism that inspires athletes while building trust

## Typography System

**Font Families:**
- Headlines: Oswald (Bold, Extra Bold) - Athletic, commanding presence
- Subheadings: Roboto Condensed (Bold, Medium) - Clean, modern
- Body: Inter (Regular, Medium) - Professional, readable

**Type Scale:**
- Hero Headlines: 4xl-6xl (mobile to desktop)
- Section Headers: 3xl-4xl
- Card Titles: xl-2xl
- Body Text: base-lg
- Captions: sm

## Layout System

**Spacing Primitives:**
Core spacing units: 4, 6, 8, 12, 16, 20 (as in p-4, mt-8, gap-6)

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Content areas: max-w-6xl
- Text content: max-w-4xl

**Grid System:**
- Desktop: 3-4 column grids for athlete cards, testimonials
- Tablet: 2 columns
- Mobile: Single column stack

## Page-Specific Layouts

### Home Page
**Hero Section:** Full-viewport (90vh) with dynamic athlete action image, bold headline overlay, dual CTA buttons with backdrop blur
**Stats Banner:** 4-column metrics strip (athletes placed, partnerships, success rate, years active)
**Featured Athletes:** 3-column success story cards with before/after stats
**Process Timeline:** Vertical timeline with 4-5 steps, alternating left/right layout
**Partner Logos:** Marquee-style logo strip of universities/teams
**Testimonials:** 2-column athlete quotes with headshots
**Final CTA:** Split section - compelling copy left, contact form right

### About Page
**Story Section:** Large text block with founder/team image sidebar
**Team Grid:** 3-4 column team member cards with photos and roles
**Mission/Values:** Icon-driven 3-column grid
**Timeline:** Horizontal company milestone timeline

### Services Page
**Service Hero:** Split layout - service overview + representative image
**Service Cards:** Detailed breakdown, 2-column alternating (image left/right)
**Pricing Tiers:** 3-column comparison cards (if applicable)
**FAQ Accordion:** Full-width with generous spacing

### Blog Page
**Featured Post:** Large hero card with image
**Post Grid:** Masonry-style 2-3 column layout
**Category Filters:** Horizontal pill navigation
**Pagination:** Centered numeric navigation

### Work With Us Page
**Opportunity Hero:** Compelling headline with team culture image
**Position Listings:** Clean card layout with expand/collapse
**Application Form:** Two-column (personal info left, qualifications right on desktop)
**Culture Gallery:** 3-4 image grid showcasing team environment

## Component Library

### Navigation
Top nav: Logo left, centered menu items, CTA button right, mobile hamburger

### Buttons
Primary: Bold, all-caps typography, rounded corners (rounded-md)
Secondary: Outlined style with hover fill
All buttons on images: backdrop-blur-md background

### Cards
Athlete Cards: Vertical - image top, name/sport, key stats, arrow link
Service Cards: Horizontal split on desktop, stacked mobile
Blog Cards: Image, category tag, title, excerpt, read time

### Forms
Full-width inputs with clear labels above
Generous padding (p-4)
Visible focus states
Submit buttons: full-width mobile, auto desktop

### Footer
4-column desktop (About, Quick Links, Services, Contact)
Social media icons row
Newsletter signup inline form
Legal links bottom row

## Images

**Hero Images Required:**
- Home: Dynamic athlete in action (running, jumping, celebrating)
- About: Team photo or founder portrait
- Services: Coach/athlete consultation scene
- Work With Us: Team culture/office environment

**Supporting Images:**
- Athlete success stories (3-4 headshots with action shots)
- Partner university/team logos (8-12)
- Team member headshots (4-6)
- Blog post featured images
- Service illustration images (3-4)

All images should convey energy, professionalism, and achievement

## Animations

Minimal, purposeful motion:
- Subtle parallax on hero images (0.3s ease)
- Card hover lifts (translateY -4px)
- Fade-in on scroll for stat counters
- Smooth accordion expansions

## Accessibility

- Minimum text contrast ratio 4.5:1
- All images have descriptive alt text
- Form labels properly associated
- Keyboard navigation fully supported
- Focus indicators clearly visible