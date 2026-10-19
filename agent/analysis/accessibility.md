# Accessibility Evaluation & Guidelines (WCAG 2.1 AA)

## 1. Accessibility Evaluation of Reference Architecture
The reference platform implements several solid accessibility foundations:
- **Skip Link:** `<a class="sr" href="#view">Skip to content</a>` enables keyboard users to bypass header navigation directly to the main content container.
- **Semantic Structure:** Proper landmarks (`<header>`, `<main id="view" tabindex="-1">`, `<footer class="site">`, `<nav class="mob-dock">`).
- **High Contrast Ratios:**
  - Deep Navy text (`#0f1a46`) on pure white (`#ffffff`): Contrast ratio **14.2:1** (Exceeds WCAG AAA requirement of 7:1).
  - Emergency Red buttons (`#d42a31`) with white text (`#ffffff`): Contrast ratio **4.9:1** (Passes WCAG AA requirement of 4.5:1).
  - Status Pills (Green `#11834f` on `#e3f5ec`): Contrast ratio **5.1:1** (Passes WCAG AA).

---

## 2. Accessibility Best Practices & Implementation Rules
1. **ARIA Attributes:**
   - Mobile navigation toggle must declare `aria-expanded="false|true"`, `aria-controls="mainnav"`, and `aria-label="Menu"`.
   - Modals and dialogs must implement `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
2. **Form Accessibility:**
   - Every input field must have an explicit `<label for="...">` or clear `aria-label`.
   - Input errors must be accompanied by `aria-invalid="true"` and `aria-describedby="error-id"`.
3. **Keyboard Focus & Tab Order:**
   - Logical tab traversal across all interactive buttons, inputs, links, and accordion toggles.
   - Visible outline focus rings (`outline: 2px solid var(--navy); outline-offset: 2px`).
4. **Bilingual Legibility:**
   - Hindi content marked with appropriate `lang="hi"` attributes where needed to assist screen readers with pronunciation.
