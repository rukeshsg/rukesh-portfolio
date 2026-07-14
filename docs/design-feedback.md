# Portfolio Design Feedback

This document contains improvements that should be applied to the portfolio during development.

The portfolio should always prioritize readability, usability, professionalism, and recruiter experience over visual effects.

---

# Hero Section

## Remove the Training Loss Graph

The graph displayed below the hero buttons is unnecessary.

Reasons:

- It does not communicate useful information.
- It occupies valuable space.
- It distracts from the main introduction.
- Recruiters should immediately focus on my profile and projects.

Remove it completely.

---

# Theme

Implement both:

- Dark Mode
- Light Mode

Requirements:

- Theme toggle in the navigation bar.
- Remember the selected theme using local storage.
- Smooth transition between themes.
- No page flicker during theme changes.

The design must look equally polished in both modes.

---

# Typography

Improve readability throughout the website.

Requirements:

- Increase body text size slightly.
- Increase line height.
- Improve paragraph spacing.
- Improve contrast between text and background.
- Avoid very thin font weights.
- Important content should never appear faded.

The website should remain elegant while being easier to read.

---

# Color Contrast

Some secondary text is too dim.

Requirements:

- Increase contrast for descriptions.
- Section subtitles should remain subtle but readable.
- Avoid low-opacity text for important information.

Accessibility is important.

---

# Skills Section

Current issues:

- Programming contains only three skills.
- The programming card wastes too much empty space.
- One grid cell is completely empty.

Requirements:

- Remove the empty card.
- Make the grid responsive.
- Automatically adjust card sizes based on content.
- Prevent large empty areas.

The Skills section should feel balanced.

---

# Cards

Every card should automatically adjust to its content.

Avoid fixed-height cards unless absolutely necessary.

Whitespace should feel intentional rather than empty.

---

# Projects

Project cards should have consistent heights.

Buttons should always align.

Images should have the same aspect ratio.

Hover animations should remain subtle.

---

# Certification Section

Certificate cards should have consistent dimensions.

Certificate preview images should never appear stretched.

Cards should remain aligned regardless of description length.

---

# Badge Section

Badges should appear centered.

Maintain equal spacing.

Support different badge sizes without breaking the layout.

---

# Education Section

Improve spacing.

Increase logo size slightly.

Ensure timeline alignment is consistent.

Cards should not look oversized.

---

# Contact Section

Keep only essential recruiter information.

Include:

- Email
- GitHub
- LinkedIn
- Resume

No unnecessary contact form.

---

# Navigation

Requirements:

- Sticky navigation.
- Active section highlight.
- Smooth scrolling.
- Mobile responsive.

Current navigation names:

- About
- Projects
- Certification
- Badges
- Education
- Contact

---

# Animations

Animations should remain minimal.

Examples:

- Fade-in
- Smooth hover
- Card elevation
- Image zoom

Avoid excessive motion.

---

# Cursor

Keep the default cursor.

A subtle glow or particle that gently follows the cursor is acceptable.

It must remain lightweight and non-distracting.

---

# Responsive Design

The portfolio should work perfectly on:

- Desktop
- Laptop
- Tablet
- Mobile

No horizontal scrolling.

---

# Performance

Optimize every image.

Lazy-load images.

Keep animations GPU accelerated.

Maintain excellent Lighthouse scores.

---

# Overall Goal

The final portfolio should feel like a premium portfolio built by an AI & Machine Learning student.

It should be:

- Professional
- Clean
- Modern
- Elegant
- Minimal
- Fast
- Easy to read

The recruiter should immediately understand:

- Who I am.
- What I build.
- My technical skills.
- My strongest projects.
- My certifications.
- How to contact me.

Everything else should be secondary.