# Portfolio Website — Design Instructions

Use these instructions to build my personal portfolio website. The design references are jordanhughes.co and andersen-template.framer.website. Study those sites for tone and layout decisions.

---

## Design Philosophy

This is a personal portfolio that should feel like a high-end design agency site, not a developer template. Think editorial, confident, and quiet. Every element should earn its place — if it doesn't communicate something essential, remove it. White space is a design tool, not empty space.

---

## Global Style Rules

### Colors
- Strictly **black (#000 or near-black), white (#fff or #fafafa), and greys** only.
- No accent colors, no gradients, no colored shadows.
- Use contrast between sections by alternating dark backgrounds (black/charcoal with white text) and light backgrounds (white/off-white with black text). This replaces any light/dark mode toggle entirely. **Do not include a theme switcher.**

### Typography
- Use a clean sans-serif — Inter, Helvetica Neue, or similar. One typeface throughout.
- **Big text style.** Headings should feel oversized and confident. Think 48–80px for section headings on desktop, scaling down proportionally on mobile.
- Body text should be 18–20px, generous line-height (1.5–1.6).
- Keep text minimal. Short sentences. No filler paragraphs. If a section label says enough, don't add a subtitle.

### Spacing
- Generous vertical padding between sections — at least 120px on desktop.
- Let content breathe. Don't stack elements tightly.

### Buttons
- Background: **solid black** (white text) on light sections, **solid white** (black text) on dark sections.
- Border radius: **4px** — barely rounded, not pill-shaped.
- Padding should feel comfortable, not cramped — roughly 14px 28px.
- Hover state: subtle opacity change or invert (black → white, white → black).

### Images
- Border radius: **0px** everywhere. Sharp corners, no exceptions.
- Images should feel full-bleed or generously sized, never small thumbnails floating in space.

### Links
- Style inline links with a subtle underline or weight change. No colored links.

---

## Page Structure (Top to Bottom)

### 1. Header / Navigation
- **My name on the left** — styled small and clean (16–18px, medium weight). Not a logo, just text.
- Navigation links on the right: About, Experience, Projects, Contact.
- Sticky header with a white or slightly translucent background. Thin, minimal — should not dominate the page.
- No hamburger menu on desktop. On mobile, a simple menu icon is fine.

### 2. Hero Section
- This is a **light section** (white/off-white background).
- A single large headline — one sentence that says what I do. Think along the lines of how jordanhughes.co opens: a clear, confident statement. No sub-headline clutter.
- Below the headline: a photo of me, large and full-width (or close to it). Sharp corners (0px radius).
- Optionally, small social links or a single CTA button beneath the headline. Keep it minimal.

### 3. About Me Section
- **Dark section** (black/charcoal background, white text).
- Layout: **two-column media + text**, side by side.
  - Left column: the "About Me" label and description.
  - Right column: a large photo of me (should take up roughly half the section width, sharp corners).
- Vertical alignment within the text column: use **`justify-content: space-between`** (or equivalent) so that:
  - The **"About Me" label** sits at the **top** of the column.
  - The **description paragraph** sits at the **bottom** of the column.
  - This creates a nice vertical tension with the image next to it.
- Keep the description to 2–4 short sentences. No life story.

### 4. Experience Section
- **Light section** (white background).
- Styled like a CV / résumé. This is a list, not cards.
- Each entry is a row with: **Role / Title** — **Company** — **Date range** on one line (or a clean two-line layout with title bold on top and company + dates lighter below).
- Optionally, one sentence of description per role. No more.
- Separate entries with a thin 1px horizontal rule (light grey).
- Big section heading: "Experience" — oversized, like the rest of the headings.

### 5. Projects Section
- **Dark section** (black/charcoal background, white text).
- Every project **must have an image**. No text-only project cards.
- Layout: large project cards, stacked vertically or in a 2-column grid.
  - Each card: full-width (or half-width in grid) image on top, project name and one-line description below.
  - Images are sharp corners (0px radius), large and prominent.
  - A small "View Project" link or button beneath each.
- Reference how jordanhughes.co shows projects: big images, minimal text, the project speaks through the visual.

### 6. Contact / CTA Section
- **Light section.**
- Keep it simple: a heading like "Get in touch" and an email link or a short contact form.
- Optionally add social links here as small icons or text links.

### 7. Footer
- **Dark section** (black background, white text).
- **My name displayed large** — this is the bold typographic anchor of the footer. Think 48–72px, the same scale as section headings.
- Below the name: a row of social links and/or email. Small, understated.
- Copyright line at the very bottom, small and grey.

---

## Sections NOT to Include

- **No process/workflow section.** Do not show a step-by-step "how I work" section.
- **No testimonials section** (unless I specifically ask for one later).
- **No blog/reading section.**
- **No logo marquee or client logos.**
- **No light/dark mode toggle.** The alternating section backgrounds ARE the design.

---

## Responsive Behavior

- On mobile, two-column layouts (like About Me) should stack vertically — image on top, text below.
- Headings should scale down but still feel big relative to body text.
- Navigation collapses to a hamburger/menu icon.
- Generous padding is maintained — don't let mobile feel cramped.

---

## Summary of Key Design Rules

1. Black, white, grey only — zero color
2. Alternating dark/light sections — no theme toggle
3. Big, confident typography (48–80px headings)
4. Buttons: solid black, 4px radius
5. Images: 0px radius, always large
6. Name small in header, name big in footer
7. About Me: two-column, label top-aligned, description bottom-aligned, big image
8. Experience: CV-style list with thin dividers
9. Projects: every project has a large image
10. No process section, no clutter, no filler text
11. Generous whitespace everywhere
12. Reference sites: jordanhughes.co and andersen-template.framer.website