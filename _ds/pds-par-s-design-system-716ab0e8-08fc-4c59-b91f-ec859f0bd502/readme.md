# PDS — Par's Design System (v1)

PDS is the personal design system of **Parthiv ("Par")**, a UX Designer & Researcher. It exists to make his portfolio, future slide decks and other creative work look like one confident, precise, slightly playful person made them.

**Personality:** Confident · Precise · Fun.

## Sources
- `uploads/Instrument_Serif/` (Instrument_Serif.zip: Regular + Italic TTF, OFL.txt) and `uploads/InstrumentSerif-*.woff2` — the only supplied asset.
- No logo, codebase, Figma, existing portfolio or deck was supplied. Everything else (palette, sans/mono pairing, components, UI kit) is an original v1 proposal built around Instrument Serif.

## Index
- `styles.css` — entry point; `@import`s only.
- `tokens/` — `fonts.css`, `accents.css` (5 accent options), `colors.css` (neutrals + light/dark semantic aliases), `typography.css`, `spacing.css`, `effects.css` (radii, borders, shadows, motion), `base.css` (element defaults).
- `assets/fonts/` — Instrument Serif woff2 + ttf + OFL.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Effects, Brand).
- `components/` — React primitives (see below), one card per folder.
- `ui_kits/portfolio/` — click-through portfolio site.
- `explorations/Accent Options.html` — the five accent candidates with rationale, light + dark.
- `thumbnail.html`, `SKILL.md`.

## Components
Every component card has a `· Dark` twin.

- **core/** — Icon, Button, IconButton
- **forms/** — Input, Select, Checkbox, Radio, Switch
- **display/** — Card, Badge, Tag, Tabs
- **feedback/** — Dialog, Toast, Tooltip

Intentional additions: **Icon** — wrapper that renders Lucide glyphs via CSS mask so they inherit `currentColor`.

## UI kits
- **Portfolio** (`ui_kits/portfolio/index.html`) — Home, Case study, About, Contact dialog + toasts. Dark by default; theme toggle in nav, accent switcher in footer.

---

## CONTENT FUNDAMENTALS
Full guide: `guidelines/writing-style.md` (supplied by Par — the source of truth). Summary:

**Goal:** sound like a confident, intelligent person explaining what happened and why it mattered. Not an agency, a LinkedIn post, a UX textbook or an AI trying to impress.

**Two primary rules**
1. **Observations over adjectives.** Not "users found it frustrating" → "9 of 24 participants switched to their browser and searched the bank's name followed by 'scam'."
2. **Show the reasoning.** Not "we redesigned onboarding" → "If the problem was trust, shortening the flow wouldn't help. Explaining it might."

**Claims:** don't oversell. *suggested / observed / explored*, not *proved / solved / users loved*. Name limitations plainly and without apology ("This is an observed change, not a controlled experiment.").
**Numbers:** every number says what it measures ("39% of starters left at the identity step", not "39% drop-off"). No decorative stats.
**Ownership:** "I" for Par's work, "we" for team work. Never hide collaboration.
**Headings move the story:** "Watching people sign up revealed a different problem", not "Research". Clarity before cleverness.
**Rhythm:** mix short sentences (emphasis) with longer ones (reasoning). Concise paragraphs; don't make every sentence its own line.
**Humour:** subtle and rare — one dry line per page at most ("a sourdough starter that has outlived two houseplants").
**Avoid:** seamless, intuitive, user-centric, innovative, meaningful experiences, leverage, cutting-edge, frictionless, game-changing, robust, holistic, transformative, empower.
**Prefer:** observed, noticed, found, suggested, questioned, tested, compared, explored, mapped, identified, reconsidered, inferred, assumed, proposed.
**Casing & punctuation:** sentence case everywhere; UPPERCASE only for mono labels. Middle dot · for metadata, en/em dashes for ranges and asides, curly quotes. No emoji.
**Final test:** could anyone write this about any UX project? If yes, rewrite it.

## VISUAL FOUNDATIONS
**Colour.** Zero-chroma neutrals (`--gray-0…1000`) do 95% of the work — colour comes from the projects, not the frame. Exactly **one accent**, chosen from five candidates in `tokens/accents.css` and switched with `data-accent` on `<html>`: **mono** (frame the work), **clay** (Pārthiva, "of the earth"), **par** (on par — the standard), **marker** (the research highlighter), **link** (the hyperlink — **current default**). Accent appears on: primary CTA, availability dot, italic emphasis, the highlight box behind one key word. Never gradients as backgrounds. See `explorations/Accent Options.html`.
**Themes.** Every semantic token has a light and dark value. Set `data-theme="dark"` on `<html>` or any container; components only use semantic tokens (`--bg-page`, `--surface-card`, `--surface-sunken`, `--fill-strong`, `--text-*`, `--border-*`, `--accent*`), so they flip automatically. Light: white page, #F4F4F4 sunken tiles. Dark: #0E0E0E page, #151515 cards, #1C1C1C tiles, #262626 borders. `--band-bg` is a dark section that stays dark in both themes (footers, stat bands).
**Type.** Instrument Serif (display, 32px+) for headlines, pull quotes and big statements; italic for emphasis. **Inter** for UI, body and numeric stat values. JetBrains Mono, 11px uppercase +0.08em, for eyebrows, meta, years, client names. Display leading 0.92–1.0, tracking −0.02em; body 1.55.
**Spacing.** 4px base (`--space-1…12` = 2 → 192). Card padding 24, stacked gap 12, grid gutter 24, section gaps 96–128. Prose max 640px, content max 1280px, page margin `clamp(20px,5vw,80px)`.
**Backgrounds.** Flat page. Work tiles sit on a sunken surface with 6px inner padding, image inset at 10px radius, caption row underneath (title left, client in mono right) — the frame is quiet so the work is loud. No textures, patterns or illustrations. Image placeholders use a faint 135° hairline stripe.
**Imagery.** Product shots and real research artefacts (journey maps, sticky walls, sketches). Warm, natural light; never stock. Rounded `--radius-md` (8px), no borders.
**Borders.** 1px. Hairline `--paper-3` for quiet containers; 1px **ink** for emphasis and section rules (a rule + mono label opens every section).
**Shadows.** Flat by default. The signature is a **hard offset shadow** (`4px 4px 0 ink`) that appears on hover of interactive cards/secondary buttons while the element translates −2/−3px — like lifting a paper card. Soft shadows only on overlays (dialogs, toasts).
**Radii.** Precise and small: 2 (badges, checkbox), 4 (inputs), 8 (cards, images), 14 (dialogs), pill (buttons, tags, switches).
**Cards.** Paper-0 fill, 1px hairline border, 8px radius, 24px padding, no shadow at rest; interactive = ink border + hard shadow + lift on hover.
**Hover.** Primary button fill → accent. Secondary lifts with hard shadow (ink in light, light-gray in dark). Ghost gets sunken fill. Work tiles rise 3px and their client label turns accent. Arrow icons nudge 2px right with a spring.
**Press.** scale(0.97) (buttons) / 0.94 (icon buttons), 120ms.
**Focus.** 2px accent outline, 2px offset; inputs get strong border + 3px accent-soft halo.
**Motion.** `--ease-out` (expo) for UI at 120/220ms; `--ease-spring` for small delightful bits (radio dot, switch thumb, arrow nudge). No bounces on layout, no parallax, respect reduced-motion.
**Transparency & blur.** Only the sticky nav: page colour at 82% via color-mix + 12px backdrop blur. Scrim behind dialogs (48% light / 64% dark).
**Layout.** Centered, editorial, lots of air. Content lives in narrow centered columns: prose/hero 720px, grids 1040px, inside a 1280 page. Section headers are centered and **numbered**: mono index in accent + short rule + label ("01 — WORK") → serif title ≤40px, no trailing period → optional gray line. Hero is a centered serif statement (≤58px — never billboard-sized) with an italic accent word, preceded by a single mono status line (green dot = open to work). No highlight boxes, no role pills, no "value/impact" stat bands — results live inside case studies. Case studies read like a guided tour: sticky Contents rail (left, ≥1180px) → centered title + client/year → banner figure → role/team/timeline + overview → Highlights gallery → numbered chapters (Context, Problem, Research, Design, Result, Retrospective) → next-project link. Each chapter opens centered and short (number + label, one serif line, a 2–3 sentence lede), then shows rather than tells: numbered figures with captions + media kind ("3.0 Journey map · IMAGE"), decision blocks (subhead + which principles it serves, prose right), a single accent-soft insight callout, tradeoff pairs with +/− lists, and numbered takeaways. Nav: wordmark left, centered pill nav, actions right. Rhythm: 128px between sections; the dark footer band is the only full-bleed colour block.

## ICONOGRAPHY
- **Set:** [Lucide](https://lucide.dev) (2px stroke, rounded caps), loaded from CDN `lucide-static@0.469.0` and rendered by the `Icon` component through a CSS mask so they inherit text colour. **Substitution flag:** no icon set was supplied; Lucide was chosen because its 2px geometric stroke sits well beside Instrument Sans.
- Sizes 16 / 18 / 20 / 24. Icons accompany text; icon-only buttons always carry a label + Tooltip.
- Common: `arrow-up-right` (external / open case study), `arrow-right`/`arrow-left`, `mail`, `copy`, `download`, `x`, `check`, `chevron-down`, `sparkles` (sparingly).
- Unicode used as typography, not icons: → (before/after), · (separator), — (ranges, attributions), ↗ allowed in plain text links.
- No emoji, no PNG icons, no icon font.

## Logo
**No logo was supplied.** Wherever a mark is needed, set the name in Instrument Serif: "Parthiv" + an accent-coloured period ("Parthiv."). This is a typographic placeholder, not a logo.

## Fonts
- Instrument Serif — supplied (OFL), `assets/fonts/`.
- **Inter** (body, per Par's request) and **JetBrains Mono** (labels) — loaded from Google Fonts. JetBrains Mono is a substitute; send a preferred mono if you have one.
