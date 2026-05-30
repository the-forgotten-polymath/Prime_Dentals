# Dental Website — Complete Design Specification

> **Purpose:** This document is a pixel-faithful blueprint to recreate the dental clinic landing page shown in the inspiration screenshot. Follow every section in order. No guesswork — every colour, font, spacing, component, and interaction is specified here.

---

## 1. Global Design Language

### 1.1 Aesthetic Direction
- **Style:** Modern medical — clean, trustworthy, premium yet approachable
- **Feel:** Soft light backgrounds with full-bleed photography, rounded cards, gentle shadows
- **Layout philosophy:** Left-heavy text blocks paired with right-side photography; asymmetric but balanced

### 1.2 Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-page` | `#EAF4F8` | Outermost page background (light powder blue) |
| `--color-bg-white` | `#FFFFFF` | Cards, navbar fill, CTA pill background |
| `--color-bg-dark` | `#1A1A2E` | Dark overlay on hero, doctor card background |
| `--color-primary` | `#1E90D6` | Accent — progress bar, icon tints, active pill borders |
| `--color-text-heading` | `#0D0D0D` | All large display headings |
| `--color-text-body` | `#4A4A5A` | Paragraphs, labels, small descriptions |
| `--color-text-light` | `#8A8A9A` | Sub-labels, caption text, "Our Features /" prefix |
| `--color-text-white` | `#FFFFFF` | Text on dark backgrounds (hero, dark cards) |
| `--color-border` | `#E0EAF0` | Subtle borders on cards and inputs |
| `--color-tag-bg` | `rgba(255,255,255,0.18)` | Pill/tag background on hero (frosted) |
| `--color-tag-active` | `rgba(255,255,255,0.95)` | Active pill on hero |
| `--color-stat-number` | `#0D0D0D` | Large stat numerals (98%, 50K, 4.9) |
| `--color-gold-star` | `#F5A623` | Star rating dots / stars |
| `--shadow-card` | `0 8px 32px rgba(0,0,0,0.10)` | Floating card shadows |
| `--shadow-hero-card` | `0 12px 40px rgba(0,0,0,0.25)` | Doctor profile card in hero |

### 1.3 Typography

| Role | Font Family | Weight | Size (desktop) | Notes |
|---|---|---|---|---|
| Logo wordmark | `"DM Sans"` | 600 | `18px` | Paired with a snowflake/asterisk SVG icon |
| Nav links | `"DM Sans"` | 400 | `14px` | Letter-spacing: `0.02em` |
| CTA button | `"DM Sans"` | 600 | `14px` | UPPERCASE or Title Case |
| Hero heading | `"Playfair Display"` or `"Sora"` | 800 | `clamp(40px, 6vw, 72px)` | All caps, white, line-height 1.05 |
| Hero subtext | `"DM Sans"` | 400 | `15px` | White, max-width 260px, line-height 1.6 |
| Section label prefix | `"DM Sans"` | 400 | `13px` | Italic or normal, `--color-text-light`, e.g. `"Our Features /"` |
| Section heading | `"Sora"` or `"Playfair Display"` | 700 | `clamp(28px, 4vw, 44px)` | Dark, tight letter-spacing |
| Section body | `"DM Sans"` | 400 | `15px` | `--color-text-body`, line-height 1.65 |
| Card label | `"DM Sans"` | 600 | `18px` | White, on service card image overlays |
| Stat number | `"Sora"` | 800 | `48px` | `--color-stat-number` |
| Stat label | `"DM Sans"` | 400 | `12px` | `--color-text-light`, uppercase, letter-spacing `0.08em` |
| Doctor name | `"DM Sans"` | 700 | `15px` | |
| Doctor title | `"DM Sans"` | 400 | `12px` | `--color-text-light` |

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet">
```

### 1.4 Spacing Scale

| Token | Value |
|---|---|
| `--space-xs` | `4px` |
| `--space-sm` | `8px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `40px` |
| `--space-2xl` | `64px` |
| `--space-3xl` | `96px` |

### 1.5 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Tags, pill buttons, inner cards |
| `--radius-md` | `16px` | Service image cards, doctor profile cards |
| `--radius-lg` | `24px` | Hero container, about image |
| `--radius-full` | `999px` | CTA button, nav pill tags |

### 1.6 Breakpoints

| Name | Width |
|---|---|
| Mobile | `< 768px` |
| Tablet | `768px – 1024px` |
| Desktop | `> 1024px` |

---

## 2. Page Structure Overview

```
<body> (background: --color-bg-page)
  └── .page-wrapper  (max-width: 1280px, margin: 0 auto, padding: 16px)
        ├── Section 1: Navbar
        ├── Section 2: Hero
        ├── Section 3: Services
        ├── Section 4: About / Stats
        └── (implied) Footer
```

> The entire page content sits inside a rounded-corner "frame" — the outer `--color-bg-page` powder blue is the true page background, and all sections are inside a visually contained layout with `border-radius: 24px` on the hero block and card blocks.

---

## 3. Section 1 — Navbar

### 3.1 Layout
- **Position:** Absolute, overlaid on top of the hero image
- **Width:** 100% of the hero container
- **Height:** `72px`
- **Display:** Flex row, `align-items: center`, `justify-content: space-between`
- **Padding:** `0 32px`
- **Background:** Transparent (sits on the hero photo)

### 3.2 Left: Logo
```
[❄ snowflake SVG icon, ~18px, white]  [Dental]
```
- Icon: A 6-pointed asterisk/snowflake, white, `18px`
- Text: `"Dental"` in `DM Sans 600`, white, `18px`
- Gap between icon and text: `8px`

### 3.3 Centre: Navigation Links
- Links: `Home`, `Services`, `About us`, `Testimonials`, `Blog`, `Contact`
- Font: `DM Sans 400`, `14px`, white
- Gap between links: `28px`
- Hover: slight opacity decrease or underline
- Contained in a lozenge/pill shape? → **No.** Just raw links on the transparent header.

### 3.4 Right: CTA Button
```
[ BOOK A CALL  → ]
```
- Background: `#FFFFFF`
- Text colour: `#0D0D0D`
- Font: `DM Sans 700`, `13px`, uppercase or title case
- Border-radius: `999px`
- Padding: `12px 20px`
- Arrow icon: `→` (Unicode or SVG), same dark colour, `16px`, circle background `#0D0D0D`, arrow `#FFFFFF`, `24px` circle
- The arrow is inside a dark circle to the right of the text

**Button HTML structure:**
```html
<button class="cta-btn">
  BOOK A CALL
  <span class="cta-arrow">→</span>
</button>
```
```css
.cta-btn {
  display: flex; align-items: center; gap: 10px;
  background: #fff; border: none; border-radius: 999px;
  padding: 10px 10px 10px 20px; cursor: pointer;
  font: 700 13px "DM Sans"; color: #0D0D0D;
}
.cta-arrow {
  width: 32px; height: 32px; background: #0D0D0D;
  border-radius: 50%; display: flex; align-items: center;
  justify-content: center; color: #fff; font-size: 16px;
}
```

---

## 4. Section 2 — Hero

### 4.1 Container
- **Border-radius:** `24px`
- **Overflow:** `hidden`
- **Position:** `relative`
- **Height:** `560px` (desktop)
- **Background:** Full-bleed photo of a woman receiving dental treatment (warm-toned, bokeh background with doctor's gloved hands and dental tool near her teeth)
- **Image object-fit:** `cover`, `object-position: center top`
- A **dark gradient overlay** on the left third:
  ```css
  background: linear-gradient(to right, rgba(10,10,20,0.75) 0%, rgba(10,10,20,0.3) 45%, transparent 70%);
  ```

### 4.2 Hero Headline (Bottom-Left)
- Position: `absolute`, `bottom: 100px`, `left: 40px`
- Text: `MODERN DENTISTRY WITH GENTLE CARE.`
- Split across 3 lines, all caps
- Font: `Sora 800`, `clamp(40px, 5.5vw, 68px)`, white
- Line-height: `1.0`
- Max-width: `480px`

### 4.3 Hero Subtext (Right Centre)
- Position: `absolute`, right side, vertically centred around middle of image
- Approximate position: `top: 40%`, `right: 220px` — OR `right: 280px`
- Text: `"Expert dental care for healthy, confident smiles at every age—delivered with comfort, precision, and trust."`
- Font: `DM Sans 400`, `14px`, white
- Max-width: `220px`
- Line-height: `1.65`

### 4.4 Slide Progress Indicator
- Position: `absolute`, bottom of hero right area, `bottom: 56px`, `right: 220px`
- Layout: `< 01 [====progress bar====] 05 >`
- `< >` are clickable arrow icons, white, `14px`
- `01` and `05` are white numbers, `DM Sans 400`, `13px`
- Progress bar between: width ~`140px`, height `2px`, background `rgba(255,255,255,0.3)`, filled portion `--color-primary` ~30% width

```html
<div class="slide-progress">
  <span class="prev">&#8249;</span>
  <span class="slide-num">01</span>
  <div class="progress-track">
    <div class="progress-fill" style="width:20%"></div>
  </div>
  <span class="slide-num">05</span>
  <span class="next">&#8250;</span>
</div>
```

### 4.5 Doctor Profile Card (Bottom-Right)
- Position: `absolute`, `bottom: 24px`, `right: 24px`
- Background: `rgba(20, 20, 35, 0.88)` with `backdrop-filter: blur(12px)`
- Border-radius: `16px`
- Padding: `16px 20px`
- Width: `~220px`
- Border: `1px solid rgba(255,255,255,0.12)`

**Internal layout (top row):**
```
[photo avatar 48x48px, border-radius:50%]  Dr. Jonas Suherman
                                             Pediatric Dentistry
```
- Avatar: circular, `48px` diameter, a photo of a male doctor in white coat
- Name: `DM Sans 700`, `14px`, white
- Specialty: `DM Sans 400`, `12px`, `rgba(255,255,255,0.6)`

**Bottom row (rating row):**
```
7 year Experience  (4.5 Rating)
```
- `"7 year Experience"` in bold white `DM Sans 700 13px`
- `"(4.5 Rating)"` in `DM Sans 400 12px`, muted white
- Gap between them: small

### 4.6 Service Tag Pills (Bottom-Left, above bottom edge)
- Position: `absolute`, `bottom: 24px`, `left: 40px`
- 2 rows of pill tags:
  - Row 1: `Dental Checkups` (active/white), `Teeth Cleaning` (ghost)
  - Row 2: `Tooth Filling`, `Gum Treatment`, `Retainers`
- **Active pill:** `background: rgba(255,255,255,0.95)`, `color: #0D0D0D`
- **Inactive pill:** `background: rgba(255,255,255,0.18)`, `color: #fff`, `border: 1px solid rgba(255,255,255,0.3)`
- All pills: `border-radius: 999px`, `padding: 8px 16px`, `font: DM Sans 500 13px`
- Row gap: `8px`, pill gap: `8px`

```css
.service-tag {
  border-radius: 999px;
  padding: 7px 16px;
  font: 500 13px "DM Sans";
  cursor: pointer;
  transition: all 0.2s;
}
.service-tag.active {
  background: rgba(255,255,255,0.95);
  color: #0D0D0D;
}
.service-tag.ghost {
  background: rgba(255,255,255,0.18);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
}
```

---

## 5. Section 3 — Signature Dental Services

### 5.1 Outer Container
- Background: `--color-bg-page` (the powder blue continues)
- Padding: `80px 40px`
- This section has NO card container of its own — it floats on the blue background

### 5.2 Section Header (Two-column layout)
**Left column (approx 40% width):**
- Small prefix label: `"Our Features /"` — `DM Sans 400 13px`, `--color-text-light`, italic look, inline with heading
- Heading: `"DISCOVER OUR SIGNATURE DENTAL SERVICES"` — `Sora 700`, `clamp(26px, 3.5vw, 40px)`, `--color-text-heading`
- The prefix sits on the same line as the start of the heading or just above it in small grey text
- Below heading: avatar stack + review count
  - 3 small overlapping circular avatars (`32px` diameter each, `-8px` overlap) of patient faces
  - Text `"750+"` in `Sora 700 20px`, `--color-text-heading`
  - Sub-label `"Reviews"` in `DM Sans 400 12px`, `--color-text-light`

```html
<div class="reviews-badge">
  <div class="avatar-stack">
    <img class="avatar" src="..." />
    <img class="avatar" src="..." />
    <img class="avatar" src="..." />
  </div>
  <div>
    <span class="review-count">750+</span>
    <span class="review-label">Reviews</span>
  </div>
</div>
```
```css
.avatar-stack { display: flex; }
.avatar {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid white;
  margin-left: -8px;
}
.avatar:first-child { margin-left: 0; }
```

**Right column (approx 55% width):**
- Body text: `"Experience modern dental care delivered with comfort, precision, and attention to detail. Our clinic provides a calm, welcoming environment designed to make every visit stress-free."`
- Font: `DM Sans 400 15px`, `--color-text-body`, line-height `1.65`
- Max-width: `380px`

### 5.3 Service Cards Carousel
- Located below the header, slightly offset to the right (not full width — starts around column 2)
- Shows 3 cards partially visible, suggesting a scrollable carousel
- A left arrow `< ` floats at the start of the cards row (dark circle button)

**Left Arrow Button:**
```css
.carousel-arrow {
  width: 44px; height: 44px;
  background: #1A1A2E;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 18px;
  cursor: pointer; flex-shrink: 0;
}
```

**Each Service Card:**
- Width: `~220px` (desktop), height: `~280px`
- Border-radius: `16px`
- Overflow: `hidden`
- Position: `relative`
- Full-bleed image background (dental procedure photo)
- Gradient overlay at the bottom:
  ```css
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
  ```
- Bottom-left label: card title (e.g., `"Teeth Cleaning"`) in `DM Sans 600 18px`, white
- Bottom-right arrow button: small white circle `→`, `32px`

**Three cards shown:**
1. `"Teeth Cleaning"` — image of close-up teeth being cleaned with gloved blue/purple hands
2. `"Dental Checkups"` — image of woman smiling wide, teeth check
3. `"Dental Veneers"` — image of dental procedure with teal/green gloves

**Card gap:** `12px`

**Left side text (below avatar stack, below left column):**
- Small paragraph: `"Discover delighted patient reviews about their comforting and satisfying dental care experience. A"`
- Font: `DM Sans 400 13px`, `--color-text-body`
- Max-width: `180px`
- Positioned left of the carousel

```css
.services-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 40px;
  align-items: start;
}
.cards-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.service-card {
  min-width: 220px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  scroll-snap-align: start;
  cursor: pointer;
}
```

---

## 6. Section 4 — About / Excellence

### 6.1 Two-Column Grid
- Left column (`~45%`): large image of a dentist working
- Right column (`~50%`): text content + doctor cards + stats
- Gap: `40px`
- Padding: `80px 40px`
- Background: `--color-bg-page`

### 6.2 Left Column — About Image
- Large photo: dentist in white coat with magnifying loupes, patient reclined, warm sunset light
- Border-radius: `20px`
- Width: `100%`
- Height: `~400px`
- Object-fit: `cover`

### 6.3 Right Column — Content

**Prefix label:**
- `"About Dental /"` — `DM Sans 400 13px`, `--color-text-light`

**Heading:**
- `"EXCELLENCE IN DENTISTRY WITH COMPASSIONATE CARE"`
- Font: `Sora 700`, `clamp(28px, 3.5vw, 42px)`, `--color-text-heading`
- Line-height: `1.1`

**Body text:**
- `"Discover delighted patient reviews about their comforting and satisfying dental care experience. A"`
- Font: `DM Sans 400 14px`, `--color-text-body`
- Margin-top: `16px`

**Read More link:**
- Right-aligned
- Text: `"Read more"` + `↗` arrow icon
- Font: `DM Sans 600 14px`, `--color-text-heading`
- The `↗` is inside a small square, `24x24px`, background `#0D0D0D`, icon `#fff`, `border-radius: 6px`

**Doctor Cards Row:**
- 2 small cards side by side
- Each card: photo + name + title
- Card width: `~160px`
- Photo: portrait image, `border-radius: 12px 12px 0 0`, full-width, height `~120px`, `object-fit: cover`
- Below photo (inside card): name + specialty
- Background: `#fff`, `border-radius: 12px`, `box-shadow: var(--shadow-card)`

Card 1: Dr. Albert Flores — Pediatric Dentistry
Card 2: Dr. Theresa Webb — Pediatric Dentistry

```css
.doctor-mini-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  width: 160px;
}
.doctor-mini-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}
.doctor-mini-card .info {
  padding: 10px 12px;
}
.doctor-mini-card .name {
  font: 600 13px "DM Sans";
  color: #0D0D0D;
}
.doctor-mini-card .role {
  font: 400 11px "DM Sans";
  color: #8A8A9A;
}
```

### 6.4 Stats Row (Bottom of Section)
- Three stat blocks arranged in a row
- Position: below the about image (left column, below the image)
- OR: could span below both columns

**Three Stats:**

| Stat | Label |
|---|---|
| `98%` | SATISFACTION RATE |
| `50K` | SMILES TRANSFORMED |
| `4.9` | CUSTOMERS RATING |

**Each stat block:**
- Number: `Sora 800 48px`, `--color-stat-number`
- Label: `DM Sans 400 12px`, `--color-text-light`, uppercase, letter-spacing `0.08em`
- No background, no card — just text on the page background
- Separator between stats: thin vertical line `1px solid --color-border` OR just gap `48px`

```css
.stats-row {
  display: flex;
  gap: 48px;
  align-items: flex-start;
  margin-top: 32px;
}
.stat-block .number {
  font: 800 48px "Sora";
  color: #0D0D0D;
  line-height: 1;
}
.stat-block .label {
  font: 400 11px "DM Sans";
  color: #8A8A9A;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}
```

---

## 7. Interactive States & Micro-Interactions

### 7.1 Hover Effects
| Element | Hover Behaviour |
|---|---|
| Nav links | Opacity: `0.7`, transition `0.2s` |
| Service tag pill (inactive) | Background darkens slightly: `rgba(255,255,255,0.30)` |
| CTA button | Background: `#F0F0F0`, slight scale `transform: scale(1.02)` |
| Service cards | Scale: `transform: scale(1.03)`, shadow deepens |
| Doctor mini-cards | `transform: translateY(-4px)`, shadow increases |
| Arrow buttons (carousel) | Background lightens, scale `1.05` |

### 7.2 Page Load Animations
- Hero heading: fade-in + slide-up, `0.6s ease-out`, delay `0.2s`
- Hero subtext: fade-in, delay `0.5s`
- Doctor profile card: fade-in + slide-left, delay `0.8s`
- Service tags: staggered fade-in, each 100ms apart, starting at delay `1s`
- Section headings: fade-in on scroll (IntersectionObserver)
- Stats numbers: count-up animation on scroll into view

### 7.3 Carousel Behaviour
- Left arrow scrolls cards left by one card width
- Cards scroll smoothly: `scroll-behavior: smooth`
- Active card can have a subtle scale-up: `1.02`

---

## 8. Responsive Layout Rules

### 8.1 Mobile (`< 768px`)
- Navbar: hide centre links → show hamburger menu icon
- CTA button: stays visible, shrinks to icon-only or short text
- Hero height: `480px`
- Hero headline: `40px`
- Service tags: single row, horizontally scrollable
- Doctor card: `width: calc(100% - 48px)`, full-width bottom of hero
- Services section: single column, cards in horizontal scroll
- About section: stack vertically (image top, text bottom)
- Stats row: wrap or single column

### 8.2 Tablet (`768px – 1024px`)
- Nav links: reduce to 4 main links
- Hero height: `520px`
- Cards: show 2 cards, partial 3rd
- About section: maintain 2 columns with reduced gap

---

## 9. Placeholder Image Guidance

Since real photos cannot be embedded in code, use these placeholder approaches:

| Image Slot | Description for Placeholder |
|---|---|
| Hero background | Full-bleed dental procedure photo, warm amber tones, woman patient, doctor with gloved hands and tool |
| Doctor avatar (hero card) | Circular headshot, male doctor, white coat, smiling |
| Teeth Cleaning card | Close-up of teeth, purple/blue gloved hands, dental scaler |
| Dental Checkups card | Woman smiling wide with bright teeth, mirror tool visible |
| Dental Veneers card | Dental procedure, teal gloved hands, tooth shade guide |
| About section image | Male dentist with loupes/magnifiers, patient reclined, warm backlight |
| Dr. Albert Flores mini-card | Female doctor portrait, smiling, professional |
| Dr. Theresa Webb mini-card | Male doctor portrait, greying hair, professional |
| Avatar stack (reviews) | Three small diverse patient headshots |

Use `https://picsum.photos/seed/dental{N}/{width}/{height}` as placeholder or `https://placehold.co/{width}x{height}` with grey backgrounds.

---

## 10. CSS Architecture

### 10.1 File Structure
```
index.html
css/
  ├── reset.css        — Normalise + box-sizing
  ├── variables.css    — All CSS custom properties
  ├── typography.css   — Font imports, base type styles
  ├── layout.css       — Grid, flex helpers, page wrapper
  ├── navbar.css       — Nav component
  ├── hero.css         — Hero section
  ├── services.css     — Services carousel section
  ├── about.css        — About / stats section
  └── animations.css   — Keyframes, transitions
js/
  ├── carousel.js      — Service cards horizontal scroll
  ├── stats-counter.js — Count-up animation on scroll
  └── hero-slider.js   — Progress bar + slide switch
```

### 10.2 CSS Variables Block
```css
:root {
  --color-bg-page: #EAF4F8;
  --color-bg-white: #FFFFFF;
  --color-bg-dark: #1A1A2E;
  --color-primary: #1E90D6;
  --color-text-heading: #0D0D0D;
  --color-text-body: #4A4A5A;
  --color-text-light: #8A8A9A;
  --color-text-white: #FFFFFF;
  --color-border: #E0EAF0;
  --color-tag-bg: rgba(255,255,255,0.18);
  --color-tag-active: rgba(255,255,255,0.95);
  --color-stat-number: #0D0D0D;
  --color-gold-star: #F5A623;
  --shadow-card: 0 8px 32px rgba(0,0,0,0.10);
  --shadow-hero-card: 0 12px 40px rgba(0,0,0,0.25);
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 999px;
}
```

---

## 11. HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dental — Modern Dentistry With Gentle Care</title>
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/variables.css" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css" />
</head>
<body>

  <!-- PAGE WRAPPER -->
  <div class="page-wrapper">

    <!-- SECTION 1 + 2: HERO (navbar overlaid) -->
    <section class="hero" id="home">
      <img class="hero-bg" src="images/hero-bg.jpg" alt="Dental procedure" />
      <div class="hero-overlay"></div>

      <!-- NAVBAR (absolute inside hero) -->
      <nav class="navbar">
        <div class="nav-logo">
          <svg class="logo-icon"><!-- snowflake SVG --></svg>
          <span>Dental</span>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="cta-btn">
          BOOK A CALL
          <span class="cta-arrow">→</span>
        </button>
      </nav>

      <!-- HERO HEADLINE -->
      <div class="hero-headline">
        <h1>MODERN<br>DENTISTRY WITH<br>GENTLE CARE.</h1>
      </div>

      <!-- HERO SUBTEXT -->
      <p class="hero-subtext">
        Expert dental care for healthy, confident smiles at every age—delivered with comfort, precision, and trust.
      </p>

      <!-- SLIDE PROGRESS -->
      <div class="slide-progress">
        <button class="slide-prev">&#8249;</button>
        <span class="slide-num">01</span>
        <div class="progress-track">
          <div class="progress-fill"></div>
        </div>
        <span class="slide-num">05</span>
        <button class="slide-next">&#8250;</button>
      </div>

      <!-- DOCTOR PROFILE CARD -->
      <div class="doctor-card">
        <div class="doctor-card-top">
          <img class="doctor-avatar" src="images/doctor-avatar.jpg" alt="Dr. Jonas Suherman" />
          <div>
            <p class="doctor-name">Dr. Jonas Suherman</p>
            <p class="doctor-specialty">Pediatric Dentistry</p>
          </div>
        </div>
        <div class="doctor-card-bottom">
          <span class="doctor-exp">7 year Experience</span>
          <span class="doctor-rating">(4.5 Rating)</span>
        </div>
      </div>

      <!-- SERVICE TAG PILLS -->
      <div class="service-tags">
        <div class="tags-row">
          <button class="service-tag active">Dental Checkups</button>
          <button class="service-tag ghost">Teeth Cleaning</button>
        </div>
        <div class="tags-row">
          <button class="service-tag ghost">Tooth Filling</button>
          <button class="service-tag ghost">Gum Treatment</button>
          <button class="service-tag ghost">Retainers</button>
        </div>
      </div>

    </section><!-- /hero -->

    <!-- SECTION 3: SERVICES -->
    <section class="services-section" id="services">
      <div class="services-header">
        <!-- LEFT -->
        <div class="services-header-left">
          <div class="section-label-prefix">Our Features /</div>
          <h2 class="section-heading">DISCOVER OUR SIGNATURE DENTAL SERVICES</h2>
          <div class="reviews-badge">
            <div class="avatar-stack">
              <img class="avatar" src="images/review1.jpg" />
              <img class="avatar" src="images/review2.jpg" />
              <img class="avatar" src="images/review3.jpg" />
            </div>
            <div class="review-text">
              <span class="review-count">750+</span>
              <span class="review-label">Reviews</span>
            </div>
          </div>
        </div>
        <!-- RIGHT -->
        <div class="services-header-right">
          <p>Experience modern dental care delivered with comfort, precision, and attention to detail. Our clinic provides a calm, welcoming environment designed to make every visit stress-free.</p>
        </div>
      </div>

      <!-- CARDS ROW -->
      <div class="services-cards-wrapper">
        <div class="carousel-sidebar">
          <p class="carousel-desc">Discover delighted patient reviews about their comforting and satisfying dental care experience.</p>
          <button class="carousel-arrow left">&#8249;</button>
        </div>
        <div class="cards-row" id="cardsRow">
          <div class="service-card">
            <img src="images/teeth-cleaning.jpg" alt="Teeth Cleaning" />
            <div class="card-overlay"></div>
            <div class="card-info">
              <span class="card-title">Teeth<br>Cleaning</span>
              <button class="card-arrow">→</button>
            </div>
          </div>
          <div class="service-card">
            <img src="images/dental-checkups.jpg" alt="Dental Checkups" />
            <div class="card-overlay"></div>
            <div class="card-info">
              <span class="card-title">Dental<br>Checkups</span>
              <button class="card-arrow">→</button>
            </div>
          </div>
          <div class="service-card">
            <img src="images/dental-veneers.jpg" alt="Dental Veneers" />
            <div class="card-overlay"></div>
            <div class="card-info">
              <span class="card-title">Dental<br>Veneers</span>
              <button class="card-arrow">→</button>
            </div>
          </div>
        </div>
      </div>
    </section><!-- /services -->

    <!-- SECTION 4: ABOUT -->
    <section class="about-section" id="about">
      <div class="about-grid">

        <!-- LEFT: image + stats -->
        <div class="about-left">
          <img class="about-image" src="images/about-dentist.jpg" alt="Dentist at work" />
          <div class="stats-row">
            <div class="stat-block">
              <span class="number">98%</span>
              <span class="label">SATISFACTION RATE</span>
            </div>
            <div class="stat-block">
              <span class="number">50K</span>
              <span class="label">SMILES TRANSFORMED</span>
            </div>
            <div class="stat-block">
              <span class="number">4.9</span>
              <span class="label">CUSTOMERS RATING</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: text + doctor cards -->
        <div class="about-right">
          <span class="section-label-prefix">About Dental /</span>
          <h2 class="section-heading">EXCELLENCE IN DENTISTRY WITH COMPASSIONATE CARE</h2>
          <p class="about-body">Discover delighted patient reviews about their comforting and satisfying dental care experience.</p>
          <div class="read-more">
            <span>Read more</span>
            <span class="arrow-box">↗</span>
          </div>
          <div class="doctor-cards-row">
            <div class="doctor-mini-card">
              <img src="images/dr-flores.jpg" alt="Dr. Albert Flores" />
              <div class="info">
                <p class="name">Dr. Albert Flores</p>
                <p class="role">Pediatric Dentistry</p>
              </div>
            </div>
            <div class="doctor-mini-card">
              <img src="images/dr-webb.jpg" alt="Dr. Theresa Webb" />
              <div class="info">
                <p class="name">Dr. Theresa Webb</p>
                <p class="role">Pediatric Dentistry</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- /about -->

  </div><!-- /page-wrapper -->

  <script src="js/carousel.js"></script>
  <script src="js/stats-counter.js"></script>
  <script src="js/hero-slider.js"></script>
</body>
</html>
```

---

## 12. Key CSS Snippets

### Hero
```css
.hero {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 560px;
}
.hero-bg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    to right,
    rgba(10,10,20,0.75) 0%,
    rgba(10,10,20,0.3) 45%,
    transparent 70%
  );
}
.hero-headline {
  position: absolute;
  bottom: 100px; left: 40px;
  z-index: 2;
}
.hero-headline h1 {
  font: 800 clamp(40px, 5.5vw, 68px)/1.0 "Sora";
  color: #fff;
  text-transform: uppercase;
  max-width: 480px;
}
.hero-subtext {
  position: absolute;
  top: 42%; right: 240px;
  transform: translateY(-50%);
  color: #fff;
  font: 400 14px/1.65 "DM Sans";
  max-width: 220px;
  z-index: 2;
}
```

### Doctor Card
```css
.doctor-card {
  position: absolute;
  bottom: 24px; right: 24px;
  background: rgba(20,20,35,0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  width: 220px;
  z-index: 3;
}
.doctor-card-top {
  display: flex; gap: 12px; align-items: center;
  margin-bottom: 12px;
}
.doctor-avatar {
  width: 48px; height: 48px;
  border-radius: 50%; object-fit: cover;
}
.doctor-name { font: 700 14px "DM Sans"; color: #fff; }
.doctor-specialty { font: 400 12px "DM Sans"; color: rgba(255,255,255,0.6); }
.doctor-card-bottom {
  display: flex; gap: 8px; align-items: center;
}
.doctor-exp { font: 700 13px "DM Sans"; color: #fff; }
.doctor-rating { font: 400 12px "DM Sans"; color: rgba(255,255,255,0.6); }
```

### Service Tags
```css
.service-tags {
  position: absolute;
  bottom: 24px; left: 40px;
  display: flex; flex-direction: column; gap: 8px;
  z-index: 3;
}
.tags-row { display: flex; gap: 8px; }
```

### Slide Progress
```css
.slide-progress {
  position: absolute;
  bottom: 56px; right: 240px;
  display: flex; align-items: center; gap: 10px;
  z-index: 3;
}
.slide-prev, .slide-next {
  background: none; border: none;
  color: #fff; font-size: 20px; cursor: pointer;
}
.slide-num { font: 400 13px "DM Sans"; color: #fff; }
.progress-track {
  width: 140px; height: 2px;
  background: rgba(255,255,255,0.3);
  border-radius: 1px; overflow: hidden;
}
.progress-fill {
  height: 100%; width: 20%;
  background: #1E90D6;
  border-radius: 1px;
  transition: width 0.4s ease;
}
```

### Services Section
```css
.services-section {
  padding: 80px 40px;
}
.services-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}
.services-cards-wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;
  align-items: center;
}
.cards-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.service-card {
  min-width: 220px; height: 280px;
  border-radius: var(--radius-md);
  overflow: hidden; position: relative;
  flex-shrink: 0;
  scroll-snap-align: start;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.service-card:hover { transform: scale(1.03); }
.service-card img {
  width: 100%; height: 100%; object-fit: cover;
}
.card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
}
.card-info {
  position: absolute; bottom: 16px; left: 16px; right: 16px;
  display: flex; justify-content: space-between; align-items: flex-end;
}
.card-title { font: 600 18px/1.2 "DM Sans"; color: #fff; }
.card-arrow {
  width: 32px; height: 32px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  color: #fff; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
}
```

### About Section
```css
.about-section { padding: 80px 40px; }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}
.about-image {
  width: 100%; height: 400px;
  object-fit: cover;
  border-radius: 20px;
}
.stats-row {
  display: flex; gap: 40px;
  margin-top: 32px;
}
.stat-block .number {
  font: 800 48px/1 "Sora"; color: #0D0D0D;
}
.stat-block .label {
  font: 400 11px "DM Sans";
  color: #8A8A9A;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}
.read-more {
  display: flex; align-items: center; gap: 10px;
  justify-content: flex-end;
  margin: 16px 0;
}
.read-more span { font: 600 14px "DM Sans"; color: #0D0D0D; }
.arrow-box {
  width: 24px; height: 24px;
  background: #0D0D0D; color: #fff;
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
}
.doctor-cards-row {
  display: flex; gap: 16px; margin-top: 16px;
}
.doctor-mini-card {
  background: #fff; border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  width: 160px;
}
.doctor-mini-card img {
  width: 100%; height: 120px; object-fit: cover;
}
.doctor-mini-card .info { padding: 10px 12px; }
.doctor-mini-card .name { font: 600 13px "DM Sans"; color: #0D0D0D; }
.doctor-mini-card .role { font: 400 11px "DM Sans"; color: #8A8A9A; }
```

---

## 13. JavaScript Logic

### stats-counter.js
```js
const stats = document.querySelectorAll('.stat-block .number');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const isPercent = el.dataset.suffix === '%';
      const isK = el.dataset.suffix === 'K';
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current) + (isPercent ? '%' : isK ? 'K' : '');
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });
stats.forEach(s => observer.observe(s));
```

### carousel.js
```js
const row = document.getElementById('cardsRow');
document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
  row.scrollBy({ left: -232, behavior: 'smooth' });
});
```

### hero-slider.js
```js
const fill = document.querySelector('.progress-fill');
let current = 1;
const total = 5;
function updateProgress() {
  fill.style.width = ((current / total) * 100) + '%';
  document.querySelectorAll('.slide-num')[0].textContent =
    String(current).padStart(2, '0');
}
document.querySelector('.slide-next').addEventListener('click', () => {
  current = current < total ? current + 1 : 1;
  updateProgress();
});
document.querySelector('.slide-prev').addEventListener('click', () => {
  current = current > 1 ? current - 1 : total;
  updateProgress();
});
```

---

## 14. Accessibility Notes

- All images must have meaningful `alt` text
- `<nav>` must have `aria-label="Main navigation"`
- CTA button: `aria-label="Book a call with our dental team"`
- Carousel: `role="region"`, `aria-label="Dental services"`, arrow buttons `aria-label="Previous/Next service"`
- Stats: wrap `<dl>` / `<dt>` / `<dd>` semantically
- Colour contrast: all white text on dark overlay must meet WCAG AA (4.5:1 minimum)
- Focus styles: visible `:focus-visible` ring on all interactive elements

---

## 15. Build Checklist

- [ ] Set up HTML file with correct `<head>` (fonts, CSS links, viewport)
- [ ] Create CSS variables file with all tokens from Section 1.2
- [ ] Build Navbar component (transparent, overlaid on hero)
- [ ] Build Hero section (photo bg + overlay + headline + subtext + progress + doctor card + tags)
- [ ] Build Services section (header grid + avatar stack + carousel with 3+ cards)
- [ ] Build About section (2-col grid + about image + heading + doctor mini cards)
- [ ] Add Stats row with count-up JS
- [ ] Add carousel JS
- [ ] Add hero slider progress JS
- [ ] Add hover transitions on all interactive elements
- [ ] Add scroll-triggered fade-in for sections
- [ ] Test responsive layout on mobile and tablet
- [ ] Verify colour contrast (accessibility)
- [ ] Replace all placeholder images with real dental photos
- [ ] Final cross-browser test (Chrome, Firefox, Safari)