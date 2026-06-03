---
name: Institutional Excellence Framework
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45464e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4f5d85'
  primary: '#041539'
  on-primary: '#ffffff'
  primary-container: '#1b2a4e'
  on-primary-container: '#8392bc'
  inverse-primary: '#b7c6f2'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#ffab69'
  on-secondary-container: '#783d01'
  tertiary: '#001c10'
  on-tertiary: '#ffffff'
  tertiary-container: '#003321'
  on-tertiary-container: '#629f81'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b7c6f2'
  on-primary-fixed: '#091a3d'
  on-primary-fixed-variant: '#37466b'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#b1f0ce'
  tertiary-fixed-dim: '#95d4b3'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#0e5138'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style
The design system for Government Naveen College, Saragaon, is built on a foundation of **Trust, Authority, and Accessibility**. It employs a **Corporate Modern** aesthetic that balances the gravity of a government institution with the approachability of a contemporary educational center.

The style prioritizes clarity and ease of navigation for a diverse demographic of students, faculty, and administrators. It utilizes heavy whitespace, a structured grid, and high-contrast elements to ensure readability across all devices. The emotional response should be one of reliability and institutional pride, reflecting the college's role in shaping future careers.

## Colors
This design system utilizes a palette that mirrors the values of the institution:
- **Primary (Deep Navy):** Used for headers, primary buttons, and authoritative text to establish stability and professionalism.
- **Secondary (Saffron/Gold):** Applied as an accent for call-to-actions, highlights, and status indicators, providing a cultural connection and visual warmth.
- **Tertiary (Subtle Green):** Reserved for success states, environmental initiatives, or specific academic milestones.
- **Neutral (Light Gray/White):** Provides a clean canvas that ensures high legibility and a modern, airy feel.

All color combinations must pass WCAG AA contrast standards for accessibility, particularly when overlaying text on the Navy and Saffron backgrounds.

## Typography
The typography system is designed for **Bilingual Clarity**. While `Inter` is specified for English interfaces due to its exceptional legibility on digital screens, it should be paired seamlessly with `Noto Sans Devanagari` for Hindi content.

- **Headlines:** Use Bold or Semi-Bold weights to create a clear information hierarchy.
- **Body Text:** Always prioritize the `body-md` (16px) for standard reading to ensure accessibility for all age groups.
- **Line Heights:** Generous line heights (1.6 for body) are used to prevent eye fatigue during long reading sessions (e.g., circulars or academic syllabi).
- **Hindi Scaling:** When using Noto Sans Devanagari, font sizes may need a 10-15% increase in visual scale compared to English to maintain equivalent legibility.

## Layout & Spacing
The design system follows a **Fluid-Fixed Hybrid Grid**. 
- **Desktop:** A 12-column grid with a max-width of 1280px, centered.
- **Mobile:** A single-column flow with 16px (1rem) side margins.
- **Spacing Logic:** Based on an 8px base unit (4, 8, 16, 24, 32, 48, 64). 

Vertical rhythm is maintained through "Stack" tokens, ensuring consistent padding between sections (e.g., News Feed cards vs. Department lists). Elements like cards and banners should utilize the `stack-lg` for section breathing room.

## Elevation & Depth
Depth is conveyed using **Tonal Layers and Soft Ambient Shadows**. The goal is to create a clear "object-based" interface without overwhelming the user with heavy skeuomorphism.

- **Base Level (Level 0):** The background (#F8F9FA).
- **Surface Level (Level 1):** White cards (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(27, 42, 78, 0.05)).
- **Interactive Level (Level 2):** Hover states on cards or buttons should slightly lift the element using a more defined shadow (0px 8px 30px rgba(27, 42, 78, 0.12)).
- **Outlines:** Use 1px borders in a light neutral grey (#E2E8F0) for form fields and list items to maintain structure without relying solely on shadows.

## Shapes
To align with the "Professional Academic" look, this design system uses a **Rounded** shape language.
- **Cards & Large Containers:** Apply `rounded-lg` (16px) to soften the institutional feel and appear more modern.
- **Buttons & Inputs:** Use `rounded-md` (8px) for a precise, functional appearance.
- **Status Chips:** Use full-round (pill) shapes for "New," "Active," or "Important" notifications to distinguish them from functional buttons.

## Components
- **Buttons:** Primary buttons use the Navy Blue background with white text. Secondary buttons use a Navy Blue outline. Action buttons for "Apply Now" or "Admission" use the Saffron/Gold background.
- **Cards:** White background, 16px border-radius, and subtle elevation. Cards should have a "Border-top" of 4px in Saffron or Navy to categorize information types (e.g., Saffron for Alerts, Navy for Academic news).
- **Input Fields:** 1px solid border (#E2E8F0), 8px radius. On focus, the border changes to Primary Navy with a subtle 2px glow.
- **Lists:** Clean, unbordered lists with 16px vertical padding between items and a hairline divider.
- **Bilingual Toggle:** A prominent, pill-shaped toggle in the navigation bar to switch between English and Hindi effortlessly.
- **Notice Board:** A dedicated "Sticky" component with a Saffron accent to display urgent government notifications or holiday updates.