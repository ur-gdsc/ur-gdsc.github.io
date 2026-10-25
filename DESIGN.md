---
name: GDSC Rochester
description: A community-first chapter website
colors:
  page: "#111820"
  panel: "#19232f"
  line: "#344252"
  muted: "#bdc5d0"
  link: "#b1ccf8"
  ink: "#f0f2f5"
  action: "#b9d1f6"
  action-hover: "#d6e5fc"
  action-ink: "#17263b"
  focus: "#c3d8fb"
typography:
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(44px, 4.25vw, 58px)"
    fontWeight: 450
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  description:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
rounded:
  control: "4px"
spacing:
  compact: "14px"
  medium: "18px"
  row: "22px"
  group: "28px"
  section-gap: "36px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.control}"
    padding: "10px 15px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  speaker-search:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 40px 10px 13px"
  year-filter:
    rounded: "{rounded.control}"
    padding: "6px 14px"
  recap-summary:
    textColor: "{colors.link}"
    padding: "5px 0"
---

# Design System: GDSC Rochester

## Overview

**Creative North Star: "Rochester Student Community"**

A recognizable Rochester student community built around real people, real events, and chapter history. The restrained navy canvas and pale blue actions support photographs and readable descriptions. Compact lists remain useful, while the restored GDSC logo and open sections carry the identity instead of literal social-network styling.

**Key Characteristics:**

- Restrained navy canvas and pale blue actions
- Original GDSC identity and existing chapter photography
- Readable sans-serif hierarchy with compact speaker rows
- Quiet solid rules and native expandable recaps

## Colors

Cool navy provides the continuous canvas. Pale blue supports action and navigation; existing photographs and the multicolor GDSC logo provide richer color without introducing new decorative palettes. Frontmatter holds normative token values.

### Primary

- **Link blue:** recap controls, inline destinations, and supporting actions.
- **Action blue / action hover:** the filled join action and its lighter hover state.
- **Action ink:** dark text against pale filled controls.

### Neutral

- **Page navy:** the primary page and sticky header background.
- **Panel navy:** supporting archive blocks and image placeholders.
- **Line slate:** quiet solid dividers and subtle containment.
- **Muted slate / ink:** supporting descriptions and primary reading text.
- **Focus ice:** visible keyboard outlines.

## Typography

Archivo supplies the slightly condensed display voice at a (90%) font stretch. Source Sans 3 carries body copy, controls, and supporting information. Both use Arial and sans-serif fallbacks. The local Latin WOFF2 assets are preloaded, use `font-display: swap`, and ship with their OFL license files in `public/fonts`. Archivo declares a variable weight range of (400–700); Source Sans 3 declares (400–600).

- **Headline:** the two-line white slogan uses the fluid headline token, reaching (58px) on desktop and using (48px) below the intermediate breakpoint, including mobile. Both lines share the same color.
- **Title:** main section headings use the title token and become (28px) on mobile; the archive heading remains smaller (23px).
- **Body:** base and section descriptions use (16px), with open leading. Hero description uses the description token and becomes (16px) on mobile.
- **Names and stories:** Archivo speaker names use (19px), becoming (18px) on mobile; Archivo story and event titles use (20px) at weight (450). Current leader names use Source Sans 3 at (17px), becoming (16px) on mobile. Archived names use (16px), becoming (13px) on mobile.
- **Labels:** primary actions and desktop navigation use (15px); recap controls use the label token. Local supporting text ranges from (11–14px), including affiliations, captions, filters, and footer text. These are observed component sizes, not a generated type scale.

Paragraphs use pretty wrapping; primary headings use balanced wrapping where supported.

## Layout

A centered single canvas has a maximum width of (1160px) and desktop side gutters of (32px). The header is sticky, with a (76px) navigation interior and a thin pale blue top accent. There is no directory sidebar.

The hero pairs text and a larger photo column in a (0.85:1.15) ratio with a (54px) gap and vertical padding of (40px) above and (42px) below. Mobile hero padding is (36px) above and (32px) below. Sections use quiet top rules and vertical padding around (44–48px). Highlights form three photo-led columns; speakers form two columns of compact portrait-and-text rows; current leadership forms five portrait columns. The archive uses three columns of smaller portrait-and-text rows, giving past and current boards distinct visual hierarchy without removing either.

At widths of (1000px) or below, hero columns become equal, gaps tighten, current leaders use four columns, and the mission content stacks. At (767px) or below, outer gutters become (20px), the header interior becomes (64px), navigation changes to an expandable menu, hero/highlights/speakers stack, and both leadership groups use two columns. Events and the archive callout also stack.

## Elevation & Depth

The current system is flat, with no shadow vocabulary. Solid separators and subtle navy tone differences establish structure. Photography adds visual weight; the hero photo is borderless and has no shadow. The sticky header remains part of the page through matching background and a thin lower border.

## Shapes

Controls have lightly softened corners using the control radius token. Photos and content sections retain simple rectangular silhouettes. The hero photograph is borderless at every breakpoint. Current leader photos are square on desktop, while archived portraits are smaller rectangles (58 × 66px). Speaker portraits are (90 × 112px), narrowing to (76 × 96px). Highlight images use a (1.5) aspect ratio and become slightly wider (1.65) on mobile.

## Components

### Actions and filters

The primary join action uses pale blue with dark text, moderate weight, a (44px) minimum height, and a lighter hover fill. Secondary links keep the same touch height without a filled container. The header join action is outlined. Archive filters use small rounded outlines and a pale filled selected state expressed through `aria-pressed`.

### Photography and recaps

The hero reuses the existing NASA event group photograph. Highlight cards are photo-led articles without enclosing decorative borders. Each native details disclosure exposes the full existing recap; its summary uses linked text, a lower rule, and a chevron rotating when open. The Instagram disclosure is separately bordered and retains an external fallback link.

### Speaker and leader rows

Speakers use a rectangular portrait beside name, affiliation, and role; rules separate entries. Current leadership gives portraits more prominence above names. Archived boards retain compact side-by-side portraits at desktop widths and smaller stacked cards on mobile. Missing leader photos retain an accessible placeholder rather than invented imagery.

### Search and navigation

Search is a dark rounded field with a thin stroke and a (44px) minimum height. Results announce their count and expose a clear-search action when empty. The header uses the original GDSC logo and chapter name with direct section anchors. Mobile navigation exposes expanded state, closes on selection or Escape, and restores focus after Escape.

### Keyboard and motion

Keyboard focus uses a two-pixel pale outline offset by (5px); a skip link appears on focus. Navigation and primary actions use short (160ms) color/background transitions; recap chevrons rotate over (180ms). Reduced-motion preference disables transitions and animations. No new animation choreography is part of this system.

## Do's and Don'ts

### Do

- Do use real chapter photography and recognizable GDSC branding.
- Do use quiet rules to organize open sections on the navy canvas.
- Do preserve complete recap text inside native expandable disclosures.
- Do retain visible keyboard focus, responsive layouts, and reduced-motion support.
- Do preserve featured speakers, highlights, current leadership, and archived boards.

### Don't

- Don't reinstate the bracketed Facebook-style wordmark, directory sidebar, or blue section bars as current system patterns.
- Don't invent social activity or account features to imply a social network.
- Don't hide the leadership archive or replace existing chapter history when extending the site.
