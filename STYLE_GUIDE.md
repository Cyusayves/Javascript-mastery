# 🎨 Website Style Guide

This guide outlines the design standards and visual language used in the Bootstrap Landing Page. It's meant to help you (and collaborators) build consistent pages that match the original project style.

---

## ✅ Overview

- **Framework**: Bootstrap 5 (via CDN)
- **Custom Styling**: Applied via `styles.css`
- **Design Intent**: Friendly, modern, professional look with soft accents and rounded elements

---

## 🎨 Color Palette

| Name           | Hex       | Usage                      |
|----------------|-----------|----------------------------|
| Primary Pink   | `#ff52bf` | Buttons, icons, highlights |
| Dark Blue      | `#00252e` | Headings, footer           |
| Soft Gray      | `#808e9a` | Subtext, descriptions      |
| Text Gray      | `#333333` | Main body text             |
| Background     | `#ffffff` | Section backgrounds        |

---

## 🔤 Typography

| Type         | Font                 | Usage                        |
|--------------|----------------------|------------------------------|
| Base Font    | 'Open Sans', sans-serif | All text elements            |
| Heading `h1` | 2.2rem, bold         | Hero titles                  |
| Heading `h2` | 1.8rem, bold         | Feature titles               |
| Paragraph    | 1rem, normal weight  | Descriptions, body text      |
| Buttons      | 0.9rem–1.1rem        | CTA buttons, labels          |

---

## 📐 Spacing & Layout

- Base container width: `90%` with max `1200px`
- Section padding: `2rem – 4rem`
- Grid spacing: Bootstrap `row` with `col-md-6`, `col-lg-4` etc.
- Button padding: `.8rem 2.5rem` (small), `1rem 4rem` (large)
- Border radius: Rounded buttons and boxes (`20px – 30px`)

---

## 🧱 Components

### Buttons

| Class           | Appearance               |
|-----------------|--------------------------|
| `.btn-primary`  | Pink background, white text |
| `.btn-secondary`| White background, pink text, border |
| `.btn-large`    | Increased padding and font size |

### Navbar

- Bootstrap responsive navbar (`.navbar`, `.navbar-expand-lg`)
- Collapses on mobile view
- Links scroll to `#hero`, `#features`, `#cta`

### Sections

| Section     | Class        | Notes                                |
|-------------|--------------|--------------------------------------|
| Hero        | `#hero`      | Centered text and image              |
| Stats       | `.stats`     | 3-column layout with icon + numbers |
| Features    | `#features`  | Alternating image-text layout        |
| CTA         | `#cta`       | Call to action with central message |
| Footer      | `footer`     | Includes logo, links, and social icons |

---

## 🧭 Usage Tips

- Use consistent color and spacing between sections
- Resize images to match section intent and avoid overflow
- Include descriptive alt text for images (important for accessibility)
- Maintain contrast between text and background for readability
- Use Bootstrap utility classes (`text-center`, `py-5`, `container`, etc.)

---

## 🔗 Future Additions

- Animate buttons or icons using Bootstrap or custom CSS
- Add form elements (email signup, contact form)
- Integrate accessibility tags (`aria-label`, `role`)

---

## 👨‍💻 Contributors

- **Lead Developer**: Murego Cyusa Yves  
- Inspired by clean UI, community impact, and accessible design 💡
