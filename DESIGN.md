---
name: GDSC Rochester
description: A Google developer community grounded in Rochester chapter history
colors:
  page: "#13171d"
  panel: "#1d232c"
  panel-alt: "#252d38"
  ink: "#e8eaed"
  muted: "#bdc1c6"
  link: "#8ab4f8"
  action: "#8ab4f8"
  action-hover: "#aecbfa"
  action-ink: "#172a46"
  focus: "#c3d8fb"
typography:
  headline:
    fontFamily: "Google Sans Flex, Arial, sans-serif"
    fontSize: "52px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Google Sans Flex, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Google Sans Flex, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  description:
    fontFamily: "Google Sans Flex, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  label:
    fontFamily: "Google Sans Flex, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
rounded:
  pill: "100px"
  portrait: "12px"
  card: "16px"
  open: "0px"
  story: "20px"
  panel: "24px"
spacing:
  gutter: "clamp(20px, 4.5vw, 64px)"
  directory-gap: "12px"
  event-gap: "6px"
  section: "80px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-text:
    textColor: "{colors.link}"
    padding: "0"
  speaker-search:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
  speaker-card:
    rounded: "{rounded.open}"
    backgroundColor: "transparent"
    padding: "22px 0"
  year-filter:
    backgroundColor: "{colors.page}"
    rounded: "{rounded.pill}"
    padding: "10px 15px"
  year-filter-selected:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
  recap-summary:
    textColor: "{colors.link}"
---

# Design System: GDSC Rochester

## Overview

**Creative North Star: "Google Developer Community at Rochester"**

The chapter is recognizable through its full club and university identity, the existing multicolor developer mark, and real student activity. Google Sans Flex, modest heading sizes, Google blue actions, and restrained rounded surfaces connect the site to the Google design language while retaining its restrained dark base.

Compact rosters and readable recaps preserve the people and history behind the community. Existing chapter photographs carry the personality; the interface provides a calm frame around them.

**Key Characteristics:**

- Full club-name and university lockup beside the existing developer mark.
- Self-hosted Google Sans Flex, compact headings, and readable directory text.
- Pill actions, rounded photographs, open speaker rows, and flat supporting panels.
- Current leadership and academic-year archives remain distinct and visible.

## Colors

Dark neutral navy supports blue actions and full-color chapter imagery. Frontmatter owns the normative values.

### Primary

- **Google blue:** links, affiliations, year labels, filled community actions, and selected archive filters.
- **Action hover / action ink:** lighter hover fill and dark text against the filled action.

### Neutral

- **Page navy:** continuous page and sticky masthead.
- **Panel navy / alternate navy:** social callout, archive, footer, alternating event rows, and portrait placeholders. Speaker rows remain open on the page canvas.
- **Ink / muted slate:** reading text and supporting metadata.
- **Focus ice:** keyboard outlines.

## Typography

Google Sans Flex supplies every role, with Arial and sans-serif fallbacks. Four local static TTF files cover weights 400, 500, 600, and 700, with `font-display: swap` and the retained OFL license under `public/fonts/`. Use normal font stretch.

- **Motto:** 52px/1.12, weight 500, tracking −.025em, with each original motto line blocked. At 1100px and below it is 46px; on phones it is 40px/1.13.
- **Section headings:** 30px/1.08, weight 500, tracking −.02em; 28px below 851px. Archive heading is 30px desktop and 24px phone.
- **Body:** 16px/1.6. Hero description stays 16px with a 54ch maximum; full recaps cap at 65ch.
- **Dense rosters:** speaker names use 19px/1.18 desktop and 18px phone; roles 15px/1.5 and affiliations 14px. Current leader names use 17px/1.25 (16px phone), archived names 16px, and all leadership roles 14px.
- **Actions and metadata:** primary action is 15px at weight 500 (16px phone); header navigation 14px; full club name 17px desktop, 15px intermediate, 14px phone with a 13px university subtitle. Footer brand is 24px (22px phone), with 14px motto and copyright.

These observed sizes form a compact hierarchy rather than a generated mathematical scale. Headings use balanced wrapping and paragraphs use pretty wrapping where supported.

## Layout

Masthead, page, and footer share a 1280px maximum width including fluid side gutters. The sticky masthead has an 88px interior, becoming 76px on phones. The full club name and university stay beside the existing logo. Desktop navigation becomes an expandable two-column menu below 950px.

The hero is a .95:1.05 text-and-photo composition with a 64px gap, reducing to 36px at 1100px. It starts with 48px top padding and 16px below. The original two-line motto, chapter identity, description, join action, and welcome occupy the left; an existing NASA Stories photograph, caption, and chapter link occupy the right. On phones it becomes a single column with 28px top padding and a 28px gap.

Desktop section introductions, roster notes, mission, and footer contact use a 34%/66% grid. Sections have 80px top spacing and 32px between introduction and content. The three existing highlights form an asymmetric 1.18:1 grid with a leading photograph spanning two rows. Speakers form two columns with 12px gaps; the retained roster has 12 people. Current leadership has 10 people in five portrait columns; the 12-person 2025–2026 archive uses three compact portrait-and-text columns within a tonal block. Content counts may grow without replacing history.

At 1100px archive entries become two columns and event actions move below descriptions. At 850px speakers become one column, current leaders use three columns, and archive headers stack. Between 768px and 1000px the mission's alumni area sits above the features: alumni use three columns and features use two. Below 768px introductions and mission stack; highlights use one column, current leadership two columns, and archived leadership one compact horizontal column. Sections use 64px top spacing, events stack, and footer contact becomes vertical. Mobile feature and alumni lists use one column.

## Elevation & Depth

No gradients, shadows, or blur effects are used. Dark tonal surfaces contain supporting groups; speaker rows remain open on the page canvas. Photography, space, and the restrained heading hierarchy carry emphasis. Content appears directly without load, scroll, or photo animation.

## Shapes

Filled actions, header join, search wrapper, and archive filters use 100px pill radii. Event cards and current-leader portraits use 16px corners; speaker rows have zero radius and no enclosing fill; speaker portraits use 12px; highlight images and social callouts use 20px; the hero photograph and archive panel use 24px. The phone hero image uses 20px corners. Existing alumni images retain their simple rectangular crop.

Desktop speaker portraits are 80 × 100px, becoming 64 × 80px on phones. Current portraits are 1:1; archived portraits are 66 × 78px, becoming 58 × 68px. Hero imagery uses 1.3 aspect ratio (1.4 phone). The leading highlight uses 1.15, supporting images 1.8, and all phone highlights 1.5. Missing portraits retain accessible initials or the existing image fallback rather than new imagery.

## Components

### Actions and archive filters

The Google blue join pill has 50px minimum height, 12px 20px padding, weight 500, and an arrow. Hover lightens the fill; active moves it down 2px. Text destinations have 44px minimum height, underline on hover, and a small arrow movement. Header join is a quieter tonal pill. Archive filters use page-colored pills with 44px minimum height; hover uses alternate navy, and selected `aria-pressed` uses blue with dark text. The archive initially shows its first academic year; All exposes every archived entry.

### Masthead and search

The existing developer mark sits beside “Google Developer Student Club” and “University of Rochester.” Anchors lead to speakers, leadership, events, highlights, and mission. The mobile menu exposes expanded state, closes on selection or Escape, restores focus after Escape, and closes on resize to 950px or wider. Search uses a tonal pill capped at 390px, a leading icon, and 16px input text. It matches name or company, announces result counts, and provides Clear search in its empty state.

### Stories, directories, and leadership

Highlights are photo-led articles with rounded images and unboxed captions. Native details disclosures expose the complete existing recaps; summaries have a 44px minimum height and rotating chevron. The separate Instagram disclosure retains its external follow link. Open speaker rows pair a portrait with name, affiliation, and full role text. They retain 22px vertical padding on desktop and 18px on phones with zero horizontal padding. The supporting aside is titled “More chapter conversations.” Learning-topic titles use the standard ink color. Current leaders use larger photos above names; archive entries use small horizontal portrait rows. Events use rounded tonal rows with title, copy, and destination, alternating panel colors.

### Footer

The footer repeats the existing developer mark with a modest GDSC Rochester label and the original motto. The “Get in touch.” label and contact links follow the 34%/66% desktop grid. The copyright and Back to top link share the final row and stack on phones.

### Keyboard and motion

Focus uses a 2px pale outline offset 5px; the search wrapper also exposes focus-within. A skip link appears on focus. Primary transitions take 180ms, secondary arrows 220ms, and recap chevrons 180ms. Control easing is `cubic-bezier(.16,1,.3,1)`. Motion is limited to hover, press, and disclosure feedback. There are no keyframe, load, scroll, or photo animations and no IntersectionObserver arrival handling. Reduced-motion preference disables transitions and animation.

## Do's and Don'ts

### Do

- Do retain the full club and university identity with the existing developer mark.
- Do use Google Sans Flex, compact heading sizes, Google blue actions, open speaker rows, and restrained rounded supporting surfaces.
- Do preserve complete recaps, speaker roles, functional destinations, and academic-year archive labels.
- Do retain visible focus, responsive directory layouts, and reduced-motion support.
- Do extend chapter history when adding speakers, highlights, or new boards.

### Don't

- Don't reintroduce Archivo, oversized editorial typography, or the giant Meliora footer.
- Don't reduce the full masthead identity to an unexplained abbreviation.
- Don't invent membership counts, activity, social-account features, or chapter imagery.
- Don't add gradients, shadows, blur effects, rotating heading colors, or entrance animation.
- Don't hide the Leadership Archive or overwrite past boards when leadership changes.
