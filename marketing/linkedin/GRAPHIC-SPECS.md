# Lords of Lending — LinkedIn Graphic Specifications

> 20 production-ready graphic specs for Canva. Every spec includes exact dimensions, colors, font sizes, margins, and element positioning. Open Canva, follow the spec, done in 15 minutes.

---

## Brand System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-dark` | `#231F20` | Primary background (near-black) |
| `gold` | `#E2A970` | Primary accent — numbers, highlights, key phrases |
| `gold-dark` | `#C4874A` | Hover/secondary accent, divider lines |
| `surface` | `#2A2425` | Card surfaces, quote boxes, subtle distinction from bg |
| `white` | `#FFFFFF` | Headlines, body text |
| `muted` | `rgba(255,255,255,0.6)` | Subtext, attribution, secondary labels |
| `error-red` | `#C0392B` | "Before" / wrong side of comparison cards |
| `error-bg` | `#2D1F1F` | Red-tinted background for "wrong" panels |
| `success-bg` | `#2A2520` | Gold-tinted background for "right" panels |

### Typography
| Role | Font | Weight | Style |
|------|------|--------|-------|
| Headlines | Montserrat | Bold (700) | UPPERCASE |
| Body / descriptions | System sans-serif (in Canva: "Open Sans" or "Inter") | Regular (400) | Sentence case |
| Data / big numbers | Montserrat | Bold (700) | Normal |
| Quotes | System sans-serif | Regular (400) + Italic for attribution | Sentence case |

### Logo & Footer
- **Wordmark:** "Lords of Lending" in white, Montserrat Bold, bottom-right corner
- **URL bar:** Full-width strip at very bottom, `#2A2425` background, "lordsoflending.com" centered in `#E2A970` Montserrat Bold
- **URL bar height:** 48px on 1200x1200, 40px on 1080x1350

### Shared Background Treatment
All graphics use `#231F20` solid fill. Optionally layer a subtle noise/grain texture at 3-5% opacity for print-quality depth. In Canva, use the "Film Grain" effect at lowest intensity or overlay a transparent grain PNG from the asset library.

### Asset Library Backgrounds (optional enhancement)
For premium variants, layer one of these at 10-15% opacity over the `#231F20` base:
- `photos/gold-accents/gold-glitter-black.jpg` — subtle gold particle effect
- `photos/backgrounds-dark/black-leather.jpg` — authority texture
- `photos/gold-accents/fluid-ink-gold-black-1.jpg` — abstract luxury

---

## Canva Setup Notes

1. **Create a Brand Kit** in Canva with the colors and fonts above
2. **Upload the Lords of Lending wordmark** as a logo asset (white PNG on transparent)
3. **Save each finished graphic as both PNG (for LinkedIn posts) and PDF (for carousels)**
4. **LinkedIn image specs:** 1200x1200px for feed posts, 1080x1350px for carousel slides
5. **All text should have sufficient contrast** — gold on dark and white on dark both pass WCAG AA

---

## TYPE A: STAT CARDS (5 Graphics)

### Layout Template (applies to all 5)

```
+--------------------------------------------------+
|                                                  |  <- 80px top margin
|                                                  |
|              $450M+                              |  <- Big number, centered
|                                                  |  <- 24px gap
|     in SBA deals funded by our team              |  <- Context line, centered
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                         Lords of Lending [logo]  |  <- 60px from bottom of content area
|                                                  |
|  ─────────────────────────────────────────────── |  <- 1px gold-dark divider
|            lordsoflending.com                    |  <- URL bar, 48px tall
+--------------------------------------------------+
```

**Canvas:** 1200 x 1200 px
**Background:** `#231F20` solid fill
**Big number:** Montserrat Bold, `#E2A970`, centered horizontally
**Context line:** Open Sans Regular, `#FFFFFF`, centered horizontally
**Divider:** 1px line, `#C4874A`, full width with 60px left/right margins, positioned at y=1104
**Logo:** "Lords of Lending" — Montserrat Bold, 18pt, `#FFFFFF`, right-aligned at x=1140 (right edge), y=1060
**URL bar:** 1200x48px rectangle, `#2A2425` fill, anchored to bottom (y=1152 to y=1200), text "lordsoflending.com" centered in bar, Montserrat Bold, 16pt, `#E2A970`

---

### Graphic 1: "$450M+"

| Element | Value |
|---------|-------|
| **Filename** | `stat-450m-funded.png` |
| **Big number** | `$450M+` |
| **Font size** | 144pt |
| **Position** | Centered, y=380 (baseline) |
| **Context line** | `in SBA deals funded by our team` |
| **Context font size** | 32pt |
| **Context position** | Centered, y=460 |
| **Context color** | `#FFFFFF` |

**Canva steps:**
1. New design: 1200x1200, background `#231F20`
2. Add text "$450M+" — Montserrat Bold, 144pt, color `#E2A970`, center align, position center-x at 600, y=380
3. Add text "in SBA deals funded by our team" — Open Sans Regular, 32pt, color `#FFFFFF`, center align, position center-x at 600, y=460
4. Add line: 1080px wide, 1px thick, color `#C4874A`, position x=60, y=1104
5. Add text "Lords of Lending" — Montserrat Bold, 18pt, color `#FFFFFF`, right align, position right-edge at x=1140, y=1060
6. Add rectangle: 1200x48px, fill `#2A2425`, no border, position x=0, y=1152
7. Add text "lordsoflending.com" — Montserrat Bold, 16pt, color `#E2A970`, center align, position center-x at 600, y=1168

---

### Graphic 2: "45 Days"

| Element | Value |
|---------|-------|
| **Filename** | `stat-45-days-closing.png` |
| **Big number** | `45 Days` |
| **Font size** | 128pt |
| **Position** | Centered, y=380 |
| **Context line** | `Average time from LOI to SBA closing` |
| **Context font size** | 30pt |
| **Context position** | Centered, y=460 |

**Canva steps:** Same as Graphic 1, substitute text and font sizes above. "45 Days" at 128pt to fit both words comfortably on one line.

---

### Graphic 3: "12 Strategies"

| Element | Value |
|---------|-------|
| **Filename** | `stat-12-strategies.png` |
| **Big number** | `12 Strategies` |
| **Font size** | 108pt |
| **Position** | Centered, y=380 |
| **Context line** | `proven SBA loan sourcing methods` |
| **Context font size** | 30pt |
| **Context position** | Centered, y=470 |

**Note:** "12 Strategies" is longer text at large size. If it clips at 108pt, reduce to 96pt. The word "Strategies" is title case, not uppercase, for readability at this size.

---

### Graphic 4: "$10M Pipeline"

| Element | Value |
|---------|-------|
| **Filename** | `stat-10m-pipeline.png` |
| **Big number** | `$10M Pipeline` |
| **Font size** | 108pt |
| **Position** | Centered, y=380 |
| **Context line** | `built in 12 months from zero` |
| **Context font size** | 30pt |
| **Context position** | Centered, y=470 |

**Design note:** Consider making "$10M" in gold and "Pipeline" in white to create visual hierarchy within the headline. If doing this: "$10M" at 120pt gold, "Pipeline" at 80pt white on the line below, context line drops to y=500.

---

### Graphic 5: "85%"

| Element | Value |
|---------|-------|
| **Filename** | `stat-85-percent-guarantee.png` |
| **Big number** | `85%` |
| **Font size** | 180pt |
| **Position** | Centered, y=400 |
| **Context line** | `SBA guarantee on loans under $150K` |
| **Context font size** | 30pt |
| **Context position** | Centered, y=500 |

**Design note:** "85%" is short text so it can go very large (180pt). The "%" sign should be the same font but consider making it slightly smaller (140pt) for typographic polish — in Canva, this means two text boxes side by side: "85" at 180pt and "%" at 140pt, both gold, aligned to baseline.

---

## TYPE B: QUOTE CARDS (5 Graphics)

### Layout Template (applies to all 5)

```
+--------------------------------------------------+
|                                                  |
|  [HEADSHOT]                                      |  <- 80px from top, 80px from left
|  60x60 circle                                    |
|                                                  |  <- 32px gap
|  "Most SBA deals don't die                       |  <- Quote text, left-aligned
|   from bad credit. They die                      |     80px left margin, 80px right margin
|   from BAD PACKAGING."                           |  <- Key phrase in GOLD + BOLD
|                                                  |  <- 24px gap
|  ── (gold line, 60px wide)                       |  <- Decorative dash
|                                                  |  <- 16px gap
|  Shane Pierson                                   |  <- Name, white, bold
|  Co-Founder, Lords of Lending                    |  <- Title, muted
|                                                  |
|                         Lords of Lending [logo]  |
|  ─────────────────────────────────────────────── |
|            lordsoflending.com                    |
+--------------------------------------------------+
```

**Canvas:** 1200 x 1200 px
**Background:** `#231F20`
**Headshot:** 60x60px circle crop, positioned at x=80, y=80. Use a circular frame in Canva. If no headshot available, use a gold circle with the person's first initial in white, Montserrat Bold, 28pt.
**Left double-quote mark:** Optional typographic element — a large `"` character in `#E2A970`, Montserrat Bold, 120pt, at x=60, y=180, opacity 20%. Adds visual interest behind the quote.
**Quote text:** Open Sans Regular, 36pt, `#FFFFFF`, left-aligned, x=80, max-width=1040 (80px margins both sides)
**Key phrase:** Same font but Bold, color `#E2A970`. In Canva, highlight the key phrase within the text box and change its color and weight.
**Gold dash:** Rectangle 60x3px, `#E2A970`, positioned at x=80
**Name:** Montserrat Bold, 22pt, `#FFFFFF`, left-aligned at x=80
**Title:** Open Sans Regular, 18pt, `rgba(255,255,255,0.6)`, left-aligned at x=80
**Logo + footer:** Same as stat cards

---

### Graphic 6: Shane — "Bad Packaging"

| Element | Value |
|---------|-------|
| **Filename** | `quote-shane-bad-packaging.png` |
| **Quote** | `"Most SBA deals don't die from bad credit. They die from bad packaging."` |
| **Key phrase (gold)** | `bad packaging` |
| **Attribution** | Shane Pierson |
| **Title** | Co-Founder, Lords of Lending |
| **Headshot** | Shane's headshot or gold "S" initial circle |
| **Quote font size** | 36pt |
| **Quote position** | x=80, y=200, max-width=1040 |
| **Name position** | x=80, y=620 |
| **Title position** | x=80, y=652 |

**Canva steps:**
1. New design: 1200x1200, background `#231F20`
2. Add circular frame: 60x60px, position x=80, y=80. Place headshot inside (or gold `#E2A970` circle with "S" in white)
3. (Optional) Add `"` — Montserrat Bold, 120pt, `#E2A970`, opacity 20%, position x=60, y=160
4. Add text block with the full quote — Open Sans Regular, 36pt, `#FFFFFF`, left align, position x=80, y=200, text box width=1040px
5. Select "bad packaging" within the text → change to Bold, color `#E2A970`
6. Add rectangle: 60x3px, `#E2A970`, position x=80, y=580
7. Add "Shane Pierson" — Montserrat Bold, 22pt, `#FFFFFF`, position x=80, y=620
8. Add "Co-Founder, Lords of Lending" — Open Sans Regular, 18pt, `rgba(255,255,255,0.6)`, position x=80, y=652
9. Logo, divider, URL bar — same as stat cards

---

### Graphic 7: Brian — "P&L in 5 Minutes"

| Element | Value |
|---------|-------|
| **Filename** | `quote-brian-pl-5-minutes.png` |
| **Quote** | `"If you can't read a P&L in under 5 minutes, you're not ready to originate."` |
| **Key phrase (gold)** | `read a P&L in under 5 minutes` |
| **Attribution** | Brian Mohr |
| **Title** | Co-Founder, Lords of Lending |
| **Headshot** | Brian's headshot or gold "B" initial circle |
| **Quote font size** | 36pt |
| **Quote position** | x=80, y=200, max-width=1040 |

**Notes:** The gold phrase here is longer — "read a P&L in under 5 minutes" — which creates a bold gold stripe across the middle of the quote. This is intentional; it draws the eye to the core skill.

---

### Graphic 8: Steph — "Lender Who Fits"

| Element | Value |
|---------|-------|
| **Filename** | `quote-steph-lender-fit.png` |
| **Quote** | `"The borrower who qualifies on paper still needs a lender who fits the deal."` |
| **Key phrase (gold)** | `a lender who fits the deal` |
| **Attribution** | Steph |
| **Title** | SBA Lending Specialist, Lords of Lending |
| **Headshot** | Steph's headshot or gold "S" initial circle |
| **Quote font size** | 36pt |

---

### Graphic 9: Shane — "Convention Badges"

| Element | Value |
|---------|-------|
| **Filename** | `quote-shane-convention-badges.png` |
| **Quote** | `"Convention badges don't close deals. Follow-up does."` |
| **Key phrase (gold)** | `Follow-up does` |
| **Attribution** | Shane Pierson |
| **Title** | Co-Founder, Lords of Lending |
| **Quote font size** | 40pt |

**Notes:** This is a short, punchy quote. Bump to 40pt for visual impact. The gold phrase "Follow-up does" at the end creates a strong closing beat. Consider centering this quote rather than left-aligning — the brevity works better centered.

**Centered variant adjustments:**
- Quote: center-aligned, x=600 (center), y=340
- Gold dash: centered at x=570, y=540
- Name: center-aligned at x=600, y=580
- Title: center-aligned at x=600, y=612
- Headshot: centered at x=570, y=200

---

### Graphic 10: Shane — "Bank BDO Goes Independent"

| Element | Value |
|---------|-------|
| **Filename** | `quote-shane-bdo-independent.png` |
| **Quote** | `"Every bank BDO who goes independent says the same thing: 'I should have done this years ago.'"` |
| **Key phrase (gold)** | `I should have done this years ago` |
| **Attribution** | Shane Pierson |
| **Title** | Co-Founder, Lords of Lending |
| **Quote font size** | 34pt |

**Notes:** Longer quote — drop to 34pt to fit comfortably. The gold phrase is inside single quotes within the quote, which creates a "quote within a quote" visual effect. Keep the single quotes in white, just the words in gold. This quote speaks directly to audience #2 (bank BDOs exploring independence).

---

## TYPE C: CHECKLIST / LIST CARDS (5 Graphics)

### Layout Template (applies to all 5)

```
+--------------------------------------------------+
|                                                  |  <- 60px top margin
|  5 THINGS LENDERS CHECK                          |  <- Title in GOLD, left-aligned
|  FIRST ON EVERY SBA DEAL                         |     Montserrat Bold UPPERCASE
|                                                  |  <- 40px gap
|  ── (gold line, full width minus margins)        |  <- 2px divider
|                                                  |  <- 32px gap
|  1  Credit history & FICO score                  |  <- Gold number + white text
|                                                  |  <- 20px gap between items
|  2  Cash flow & DSCR                             |
|                                                  |
|  3  Collateral coverage                          |
|                                                  |
|  4  Management experience                        |
|                                                  |
|  5  Equity injection verification                |
|                                                  |  <- 40px gap
|  ── (gold line)                                  |
|                                                  |  <- 16px gap
|  Full guide → lordsoflending.com                 |  <- CTA line in gold
|                                                  |
|                         Lords of Lending [logo]  |
|  ─────────────────────────────────────────────── |
|            lordsoflending.com                    |
+--------------------------------------------------+
```

**Canvas:** 1200 x 1200 px
**Background:** `#231F20`
**Title:** Montserrat Bold, UPPERCASE, `#E2A970`, 42pt, left-aligned at x=80, y=80. Max 2 lines. Line height 1.2.
**Top divider:** 1040px wide, 2px thick, `#C4874A`, position x=80, y=200
**List numbers:** Montserrat Bold, 36pt, `#E2A970`, left-aligned at x=80
**List text:** Open Sans Regular, 28pt, `#FFFFFF`, left-aligned at x=140 (60px indent from number)
**Line spacing:** 68px between each item baseline (number + text on same baseline, then 68px to next)
**First item position:** y=264
**Bottom divider:** Same as top divider, positioned 40px below last list item
**CTA line:** Open Sans Regular, 22pt, `#E2A970`, left-aligned at x=80, 16px below bottom divider. Text: `Full guide → lordsoflending.com`
**Logo + footer bar:** Same as previous types

---

### Graphic 11: "5 Things Lenders Check First on Every SBA Deal"

| Element | Value |
|---------|-------|
| **Filename** | `checklist-5-things-lenders-check.png` |
| **Title** | `5 THINGS LENDERS CHECK FIRST ON EVERY SBA DEAL` |
| **Title font size** | 42pt |
| **List items** | |
| 1 | Credit history & personal FICO score |
| 2 | Cash flow coverage (DSCR above 1.25x) |
| 3 | Collateral — real estate, equipment, or SBA guarantee |
| 4 | Management experience in the industry |
| 5 | Equity injection — source and verification |
| **CTA** | `Full guide → lordsoflending.com` |

**Canva steps:**
1. New design: 1200x1200, background `#231F20`
2. Title text: "5 THINGS LENDERS CHECK\nFIRST ON EVERY SBA DEAL" — Montserrat Bold, 42pt, `#E2A970`, left align, position x=80, y=80
3. Top divider: rectangle 1040x2px, `#C4874A`, position x=80, y=200
4. For each list item, add TWO text elements side by side:
   - Number: Montserrat Bold, 36pt, `#E2A970`, position x=80
   - Text: Open Sans Regular, 28pt, `#FFFFFF`, position x=140
   - Item 1 at y=264, Item 2 at y=332, Item 3 at y=400, Item 4 at y=468, Item 5 at y=536
5. Bottom divider: rectangle 1040x2px, `#C4874A`, position x=80, y=608
6. CTA: "Full guide → lordsoflending.com" — Open Sans Regular, 22pt, `#E2A970`, position x=80, y=648
7. Logo + footer bar — same as stat cards

---

### Graphic 12: "SBA Deal Killers: 7 Mistakes That Blow Up Closings"

| Element | Value |
|---------|-------|
| **Filename** | `checklist-7-deal-killers.png` |
| **Title** | `SBA DEAL KILLERS` (line 1) / `7 MISTAKES THAT BLOW UP CLOSINGS` (line 2) |
| **Title font size** | 38pt (slightly smaller — 7 items need more vertical space) |
| **List items** | |
| 1 | Incomplete financial package |
| 2 | Undisclosed liens or judgments |
| 3 | Wrong lender match for deal size |
| 4 | Borrower can't verify equity injection |
| 5 | Unrealistic revenue projections |
| 6 | Missing landlord subordination |
| 7 | Submitting to too many lenders at once |
| **List font size** | 24pt (reduced for 7 items) |
| **Line spacing** | 56px between items |
| **First item y** | 250 |
| **CTA** | `Avoid these → lordsoflending.com` |

**Notes:** 7 items is the max for this format. Reduce list font to 24pt and spacing to 56px. Title at 38pt. Everything still fits with logo and footer bar.

---

### Graphic 13: "The SBA Originator's Tech Stack (6 Must-Have Tools)"

| Element | Value |
|---------|-------|
| **Filename** | `checklist-tech-stack.png` |
| **Title** | `THE SBA ORIGINATOR'S TECH STACK` (line 1) / `6 MUST-HAVE TOOLS` (line 2) |
| **Title font size** | 40pt |
| **List items** | |
| 1 | CRM with pipeline tracking (HubSpot, Salesforce) |
| 2 | SBA lender match database |
| 3 | Cash flow analysis spreadsheet |
| 4 | E-signature platform (DocuSign, PandaDoc) |
| 5 | Document collection portal |
| 6 | Deal packaging checklist template |
| **List font size** | 26pt |
| **Line spacing** | 60px between items |
| **CTA** | `Full breakdown → lordsoflending.com` |

---

### Graphic 14: "4 Reasons Your SBA Application Got Denied"

| Element | Value |
|---------|-------|
| **Filename** | `checklist-4-denial-reasons.png` |
| **Title** | `4 REASONS YOUR SBA APPLICATION GOT DENIED` |
| **Title font size** | 42pt |
| **List items** | |
| 1 | Debt service coverage ratio below 1.15x |
| 2 | Personal credit score under 650 |
| 3 | Insufficient equity injection (need 10-20%) |
| 4 | Industry on SBA's ineligible list |
| **List font size** | 28pt |
| **Line spacing** | 68px between items |
| **First item y** | 280 |
| **CTA** | `Fix these before you apply → lordsoflending.com` |

**Design note:** Only 4 items — this card will have more breathing room. Consider adding a subtle gold icon (warning triangle or X mark) next to each number for visual emphasis. In Canva, use a simple "!" icon from Elements, tinted `#E2A970`, 20x20px, positioned to the left of each number at x=50.

---

### Graphic 15: "6 Documents Every SBA Package Needs"

| Element | Value |
|---------|-------|
| **Filename** | `checklist-6-documents.png` |
| **Title** | `6 DOCUMENTS EVERY SBA PACKAGE NEEDS` |
| **Title font size** | 42pt |
| **List items** | |
| 1 | 3 years of business tax returns |
| 2 | 3 years of personal tax returns |
| 3 | Year-to-date profit & loss statement |
| 4 | Personal financial statement (SBA Form 413) |
| 5 | Business debt schedule |
| 6 | Resume or CV showing industry experience |
| **List font size** | 26pt |
| **Line spacing** | 60px between items |
| **CTA** | `Complete checklist → lordsoflending.com` |

---

## TYPE D: BEFORE/AFTER CARDS (3 Graphics)

### Layout Template (applies to all 3)

```
+--------------------------------------------------+
|                                                  |  <- 60px top margin
|    HOW MOST BROKERS          HOW DEALS           |  <- Section headers
|    PACKAGE SBA DEALS         ACTUALLY CLOSE      |
|                                                  |
| +---------------------+  +---------------------+ |
| |                     |  |                     | |
| |  RED-TINTED PANEL   |  |  GOLD-TINTED PANEL  | |
| |  #2D1F1F bg         |  |  #2A2520 bg         | |
| |                     |  |                     | |
| |  ✗ Bullet point     |  |  ✓ Bullet point     | |
| |  ✗ Bullet point     |  |  ✓ Bullet point     | |
| |  ✗ Bullet point     |  |  ✓ Bullet point     | |
| |  ✗ Bullet point     |  |  ✓ Bullet point     | |
| |                     |  |                     | |
| +---------------------+  +---------------------+ |
|                                                  |
|                         Lords of Lending [logo]  |
|  ─────────────────────────────────────────────── |
|            lordsoflending.com                    |
+--------------------------------------------------+
```

**Canvas:** 1200 x 1200 px
**Background:** `#231F20`
**Left panel:** Rectangle 520x700px, fill `#2D1F1F`, rounded corners 12px, position x=60, y=220
**Right panel:** Rectangle 520x700px, fill `#2A2520`, rounded corners 12px, position x=620, y=220
**Divider line:** Vertical line 2px wide, `#C4874A`, x=600, from y=180 to y=960 (or use "VS" circle, see below)
**VS circle (optional):** 48px diameter circle, `#231F20` fill, `#C4874A` 2px stroke, centered at x=600, y=590. Text "VS" inside — Montserrat Bold, 14pt, `#E2A970`.

#### Left Panel (Wrong)
- **Header:** Montserrat Bold, 20pt, `#C0392B`, UPPERCASE, positioned inside panel at 24px top padding
- **Red X marks:** Use a simple "X" character, Montserrat Bold, 18pt, `#C0392B`, or Canva's X icon
- **Bullet text:** Open Sans Regular, 20pt, `#FFFFFF`, opacity 0.8
- **Item spacing:** 48px between items

#### Right Panel (Right)
- **Header:** Montserrat Bold, 20pt, `#E2A970`, UPPERCASE, positioned inside panel at 24px top padding
- **Gold check marks:** Use a simple checkmark character or Canva's check icon, `#E2A970`, 18pt
- **Bullet text:** Open Sans Regular, 20pt, `#FFFFFF`
- **Item spacing:** 48px between items

**Top title:** Centered above both panels. If there's a unifying question/title, use Montserrat Bold, 32pt, `#FFFFFF`, centered at y=80.

---

### Graphic 16: "How Most Brokers Package SBA Deals" vs. "How Deals Actually Close"

| Element | Value |
|---------|-------|
| **Filename** | `beforeafter-packaging-vs-closing.png` |
| **Top title** | `SBA DEAL PACKAGING` — Montserrat Bold, 36pt, `#FFFFFF`, centered, y=60 |
| **Left panel header** | `HOW MOST BROKERS DO IT` |
| **Right panel header** | `HOW DEALS ACTUALLY CLOSE` |

**Left panel items (wrong):**
| Mark | Text |
|------|------|
| X | Send incomplete docs to any lender |
| X | Skip the cash flow analysis |
| X | Let borrower self-report financials |
| X | Spray and pray to 10+ lenders |
| X | Chase the deal after submission |

**Right panel items (right):**
| Mark | Text |
|------|------|
| check | Pre-screen with full financial package |
| check | Run DSCR before lender submission |
| check | Verify all numbers against tax returns |
| check | Match to 2-3 lenders that fit the deal |
| check | Set expectations and follow a timeline |

**Canva steps:**
1. New design: 1200x1200, background `#231F20`
2. Add top title: "SBA DEAL PACKAGING" — Montserrat Bold, 36pt, `#FFFFFF`, center, y=60
3. Add subtitle: "What separates closers from chasers" — Open Sans Regular, 20pt, `rgba(255,255,255,0.6)`, center, y=110
4. Left rectangle: 520x700px, `#2D1F1F`, rounded 12px, x=60, y=200
5. Right rectangle: 520x700px, `#2A2520`, rounded 12px, x=620, y=200
6. Left header: "HOW MOST BROKERS DO IT" — Montserrat Bold, 18pt, `#C0392B`, x=84, y=224
7. Right header: "HOW DEALS ACTUALLY CLOSE" — Montserrat Bold, 18pt, `#E2A970`, x=644, y=224
8. Divider lines inside each panel: 480x1px, `#C4874A` at 15% opacity, at y=260
9. Add 5 items per panel starting at y=290, spaced 80px apart:
   - Left: "X" icon (Canva Elements, red) at x=84, text at x=116
   - Right: Checkmark icon (Canva Elements, gold) at x=644, text at x=676
10. (Optional) Add VS circle at x=588, y=540: 48px circle, `#231F20` fill, `#C4874A` stroke, "VS" text inside
11. Logo + footer — same as other types

---

### Graphic 17: "What Borrowers Think Lenders Care About" vs. "What Lenders Actually Check"

| Element | Value |
|---------|-------|
| **Filename** | `beforeafter-borrower-vs-lender.png` |
| **Top title** | `WHAT LENDERS REALLY WANT` — Montserrat Bold, 36pt, `#FFFFFF`, centered, y=60 |
| **Left panel header** | `WHAT BORROWERS THINK` |
| **Right panel header** | `WHAT LENDERS ACTUALLY CHECK` |

**Left panel items (wrong):**
| Mark | Text |
|------|------|
| X | "My idea is amazing" |
| X | "I have a great business plan" |
| X | "I know people in the industry" |
| X | "The market is huge" |

**Right panel items (right):**
| Mark | Text |
|------|------|
| check | Historical cash flow & DSCR |
| check | Personal credit & net worth |
| check | Verified equity injection source |
| check | Management experience (with proof) |

**Notes:** Left side items are in quotes (things borrowers say) — use Open Sans Italic for these to differentiate from the right side's factual statements.

---

### Graphic 18: "Originator Without Training" vs. "Originator with The Broker's Codex"

| Element | Value |
|---------|-------|
| **Filename** | `beforeafter-untrained-vs-codex.png` |
| **Top title** | `THE ORIGINATOR DIFFERENCE` — Montserrat Bold, 36pt, `#FFFFFF`, centered, y=60 |
| **Left panel header** | `WITHOUT TRAINING` |
| **Right panel header** | `WITH THE BROKER'S CODEX` |

**Left panel items (wrong):**
| Mark | Text |
|------|------|
| X | Guesses which lenders to approach |
| X | Packages deals with missing docs |
| X | Can't explain SBA fees to borrowers |
| X | Loses deals to experienced brokers |
| X | Spends 6 months learning by trial and error |

**Right panel items (right):**
| Mark | Text |
|------|------|
| check | Matches deals to the right lender fast |
| check | Submits complete packages first time |
| check | Walks borrowers through fees confidently |
| check | Competes on process, not just price |
| check | Production-ready in weeks, not months |

**Design note:** This is the most conversion-oriented graphic — it directly sells The Broker's Codex. The right panel header should include a subtle book/course icon next to "THE BROKER'S CODEX" text. Add a CTA below the panels: "Start training → learn.lordsoflending.com" — Open Sans Bold, 22pt, `#E2A970`, centered at y=980.

---

## TYPE E: CAROUSEL SPECS (2 Carousels)

### Carousel Design System

**Slide dimensions:** 1080 x 1350 px (4:5 portrait — LinkedIn's native carousel ratio)
**Background:** `#231F20` (all slides)
**Slide number indicator:** Small dots at bottom of each slide, current dot in `#E2A970`, others in `rgba(255,255,255,0.2)`. Position: centered at y=1290, dots 12px diameter, 8px gap.

#### Slide Types

**Title slide (Slide 1):**
- Large hook text: Montserrat Bold, 64pt, `#FFFFFF`, centered, y=400
- Subtitle: Open Sans Regular, 28pt, `rgba(255,255,255,0.6)`, centered, y=540
- "Swipe →" indicator: Open Sans Regular, 18pt, `#E2A970`, with arrow icon, bottom-right at x=1000, y=1240
- Logo: bottom-left at x=60, y=1240

**Content slide (Slides 2-N):**
- Step number or slide label: Montserrat Bold, 120pt, `#E2A970`, opacity 15%, top-right at x=900, y=60 (large watermark number)
- Step title: Montserrat Bold, 40pt, `#E2A970`, left-aligned at x=80, y=200
- Body text: Open Sans Regular, 26pt, `#FFFFFF`, left-aligned at x=80, y=300, max-width=920, line-height 1.6
- Divider: 100px wide, 3px thick, `#C4874A`, at x=80, between title and body
- "Swipe →" at bottom-right

**CTA slide (Final slide):**
- CTA headline: Montserrat Bold, 48pt, `#FFFFFF`, centered, y=350
- URL: Montserrat Bold, 36pt, `#E2A970`, centered, y=500
- Secondary text: Open Sans Regular, 22pt, `rgba(255,255,255,0.6)`, centered, y=580
- Logo: centered at y=700
- No "Swipe →" (last slide)

---

### Carousel 19: "How to Become an SBA Broker in 2026" (7 Slides)

**Filename:** `carousel-become-sba-broker-2026.pdf`
**Export:** PDF (all 7 pages in one file) + individual PNGs

---

#### Slide 1 — Title/Hook

| Element | Value |
|---------|-------|
| **Hook line 1** | `HOW TO BECOME` |
| **Hook line 2** | `AN SBA BROKER` |
| **Hook line 3** | `IN 2026` |
| **Font** | Montserrat Bold, 64pt, `#FFFFFF`, centered |
| **Position** | Centered vertically, starting y=340 |
| **Line height** | 80pt (tight) |
| **Subtitle** | `The step-by-step path to your first SBA deal` |
| **Subtitle font** | Open Sans Regular, 26pt, `rgba(255,255,255,0.6)` |
| **Subtitle position** | Centered, y=620 |
| **Accent** | Horizontal gold line, 200px wide, 3px, centered at y=600 |
| **Bottom-left** | Logo: "Lords of Lending", 16pt, `#FFFFFF` |
| **Bottom-right** | "Swipe →", 18pt, `#E2A970` |

---

#### Slide 2 — Step 1: Learn the SBA Programs

| Element | Value |
|---------|-------|
| **Watermark** | `01` — Montserrat Bold, 140pt, `#E2A970`, opacity 12%, top-right |
| **Step label** | `STEP 1` — Montserrat Bold, 18pt, `#E2A970`, x=80, y=120, letter-spacing 4px |
| **Title** | `Learn the SBA Programs` |
| **Title font** | Montserrat Bold, 40pt, `#FFFFFF`, x=80, y=180 |
| **Divider** | 100x3px, `#C4874A`, x=80, y=240 |
| **Body** | `You need to know three core programs:` |
| **Bullet 1** | `7(a) — The workhorse. Up to $5M for acquisitions, working capital, and expansion.` |
| **Bullet 2** | `504 — Real estate and heavy equipment. Fixed-rate, long-term.` |
| **Bullet 3** | `Express — Faster approvals, smaller amounts, simpler process.` |
| **Body font** | Open Sans Regular, 24pt, `#FFFFFF`, x=80, y=290, max-width=920 |
| **Bullet style** | Gold dash (`—`) prefix, 24pt. Indent bullet text at x=110. 40px gap between bullets. |
| **Bottom note** | `This is Module 1 of The Broker's Codex` — Open Sans Italic, 18pt, `rgba(255,255,255,0.4)`, x=80, y=1200 |

---

#### Slide 3 — Step 2: Get Licensed & Set Up

| Element | Value |
|---------|-------|
| **Watermark** | `02` |
| **Step label** | `STEP 2` |
| **Title** | `Get Licensed & Set Up Your Entity` |
| **Body** | `Before you broker a single deal:` |
| **Bullet 1** | `Register an LLC or Corp in your state` |
| **Bullet 2** | `Get an EIN from the IRS` |
| **Bullet 3** | `Check your state's licensing requirements for loan brokers` |
| **Bullet 4** | `Set up E&O insurance (errors & omissions)` |
| **Bullet 5** | `Create a simple website and LinkedIn profile` |
| **Bottom note** | `Most states don't require a license for SBA brokering — but check yours.` |

---

#### Slide 4 — Step 3: Build Your Lender Network

| Element | Value |
|---------|-------|
| **Watermark** | `03` |
| **Step label** | `STEP 3` |
| **Title** | `Build Your Lender Network` |
| **Body** | `Your lender relationships ARE your business.` |
| **Bullet 1** | `Start with 5-10 SBA Preferred Lenders in your region` |
| **Bullet 2** | `Learn each lender's sweet spot: deal size, industry, speed` |
| **Bullet 3** | `Attend NAGGL conferences and local SBA events` |
| **Bullet 4** | `Build relationships with BDOs — they're your gatekeepers` |
| **Key phrase (gold)** | "Your lender relationships ARE your business" — make "ARE" bold gold |

---

#### Slide 5 — Step 4: Learn to Package Deals

| Element | Value |
|---------|-------|
| **Watermark** | `04` |
| **Step label** | `STEP 4` |
| **Title** | `Master Deal Packaging` |
| **Body** | `This is where 80% of brokers fail.` |
| **Bullet 1** | `Collect full financials BEFORE approaching any lender` |
| **Bullet 2** | `Run your own DSCR analysis — don't let the lender surprise you` |
| **Bullet 3** | `Write a clear deal narrative: who, what, why, how much` |
| **Bullet 4** | `Match the deal to the right lender FIRST, then submit` |
| **Key phrase (gold)** | "80% of brokers fail" in the body line — bold gold |

---

#### Slide 6 — Step 5: Find Your First Deals

| Element | Value |
|---------|-------|
| **Watermark** | `05` |
| **Step label** | `STEP 5` |
| **Title** | `Source Your First Deals` |
| **Body** | `Deals won't find you. You have to hunt.` |
| **Bullet 1** | `Partner with CPAs and business attorneys — they see deals first` |
| **Bullet 2** | `Join BizBuySell and monitor business-for-sale listings` |
| **Bullet 3** | `Network in local business owner groups and chambers` |
| **Bullet 4** | `Post educational content on LinkedIn (it works)` |
| **Bullet 5** | `Ask every borrower: "Do you know anyone else buying a business?"` |

---

#### Slide 7 — CTA

| Element | Value |
|---------|-------|
| **Headline** | `READY TO START?` |
| **Headline font** | Montserrat Bold, 56pt, `#FFFFFF`, centered, y=340 |
| **Subhead** | `The Broker's Codex is the complete` |
| **Subhead line 2** | `SBA originator training program.` |
| **Subhead font** | Open Sans Regular, 28pt, `rgba(255,255,255,0.7)`, centered, y=440 |
| **Gold divider** | 200px wide, 3px, centered, y=530 |
| **URL** | `learn.lordsoflending.com` |
| **URL font** | Montserrat Bold, 36pt, `#E2A970`, centered, y=580 |
| **Secondary** | `12 modules • 50+ lessons • Real deal templates` |
| **Secondary font** | Open Sans Regular, 20pt, `rgba(255,255,255,0.5)`, centered, y=650 |
| **Logo** | "Lords of Lending" wordmark, centered, y=780 |
| **No "Swipe →"** | This is the last slide |

---

### Carousel 20: "Why SBA Deals Fall Apart" (6 Slides)

**Filename:** `carousel-why-sba-deals-fall-apart.pdf`
**Export:** PDF (all 6 pages in one file) + individual PNGs

---

#### Slide 1 — Title/Hook

| Element | Value |
|---------|-------|
| **Hook line 1** | `WHY SBA DEALS` |
| **Hook line 2** | `FALL APART` |
| **Font** | Montserrat Bold, 72pt, `#FFFFFF`, centered |
| **Position** | Centered, starting y=380 |
| **Subtitle** | `And how to prevent every single one` |
| **Subtitle font** | Open Sans Regular, 26pt, `rgba(255,255,255,0.6)`, centered, y=580 |
| **Accent** | Horizontal gold line, 200px, 3px, centered at y=560 |
| **Visual** | Consider a subtle cracked/fractured line effect behind "FALL APART" — in Canva, use a hairline crack texture overlay at 8% opacity, or skip for clean minimal look |

---

#### Slide 2 — Reason 1: Incomplete Financial Packages

| Element | Value |
|---------|-------|
| **Watermark** | `01` |
| **Label** | `REASON 1` — Montserrat Bold, 18pt, `#C0392B` (red, since these are problems), letter-spacing 4px |
| **Title** | `Incomplete Financial Packages` |
| **Title font** | Montserrat Bold, 40pt, `#FFFFFF`, x=80, y=180 |
| **Divider** | 100x3px, `#C4874A`, x=80, y=240 |
| **Problem** | `THE PROBLEM` — Montserrat Bold, 16pt, `#C0392B`, x=80, y=290 |
| **Problem text** | `Brokers submit deals with missing tax returns, no P&L, or outdated financials. The lender kicks it back. Two weeks wasted.` — Open Sans Regular, 22pt, `#FFFFFF`, opacity 0.8 |
| **Fix** | `THE FIX` — Montserrat Bold, 16pt, `#E2A970`, x=80, y=560 |
| **Fix text** | `Use a document checklist before every submission. Never send a package without 3 years of tax returns, YTD P&L, and personal financial statements.` — Open Sans Regular, 22pt, `#FFFFFF` |

**Design note:** Use a subtle color-coded section — the "PROBLEM" section sits on a very faint red-tinted area (`#2D1F1F`, 520x200px rounded rectangle at 50% opacity), and the "FIX" section sits on a faint gold-tinted area (`#2A2520`, same size). This creates a visual "before/after" within each slide.

---

#### Slide 3 — Reason 2: Wrong Lender Match

| Element | Value |
|---------|-------|
| **Watermark** | `02` |
| **Label** | `REASON 2` |
| **Title** | `Wrong Lender for the Deal` |
| **Problem** | `THE PROBLEM` |
| **Problem text** | `A $3M restaurant acquisition goes to a lender that caps at $1M. Or a startup deal goes to a lender that only does acquisitions. The answer is always "no."` |
| **Fix** | `THE FIX` |
| **Fix text** | `Build a lender matrix: for each lender, document their deal size range, preferred industries, geographic focus, and SBA program (7a, 504, Express). Match before you submit.` |

---

#### Slide 4 — Reason 3: Borrower Can't Verify Equity Injection

| Element | Value |
|---------|-------|
| **Watermark** | `03` |
| **Label** | `REASON 3` |
| **Title** | `Equity Injection Problems` |
| **Problem** | `THE PROBLEM` |
| **Problem text** | `The borrower says they have $200K for injection but it's in crypto, a gift from a friend, or "coming from the business." SBA has strict rules on sourcing.` |
| **Fix** | `THE FIX` |
| **Fix text** | `Verify equity injection source on day one. Acceptable: personal savings (2 months of bank statements), 401k rollover (ROBS), home equity, seller note (with SBA approval). Unacceptable: unsourced cash, borrowed funds.` |

---

#### Slide 5 — Reason 4: No Deal Narrative

| Element | Value |
|---------|-------|
| **Watermark** | `04` |
| **Label** | `REASON 4` |
| **Title** | `Missing the Deal Narrative` |
| **Problem** | `THE PROBLEM` |
| **Problem text** | `The package has financials but no story. The lender doesn't understand WHY this borrower, WHY this business, WHY now. They pass.` |
| **Fix** | `THE FIX` |
| **Fix text** | `Write a 1-page executive summary for every deal: borrower background, business overview, use of funds, repayment plan, and why this deal makes sense. Make the lender's job easy.` |

---

#### Slide 6 — CTA

| Element | Value |
|---------|-------|
| **Headline** | `STOP LOSING DEALS` |
| **Headline font** | Montserrat Bold, 56pt, `#FFFFFF`, centered, y=320 |
| **Subhead line 1** | `The Broker's Codex teaches you` |
| **Subhead line 2** | `how to package, match, and close` |
| **Subhead line 3** | `SBA deals the right way.` |
| **Subhead font** | Open Sans Regular, 26pt, `rgba(255,255,255,0.7)`, centered, y=440 |
| **Gold divider** | 200px wide, 3px, centered, y=560 |
| **URL** | `learn.lordsoflending.com` |
| **URL font** | Montserrat Bold, 36pt, `#E2A970`, centered, y=600 |
| **Secondary** | `Built by originators who've closed $450M+ in SBA deals` |
| **Secondary font** | Open Sans Regular, 20pt, `rgba(255,255,255,0.5)`, centered, y=670 |
| **Logo** | "Lords of Lending" wordmark, centered, y=800 |

---

## Production Checklist

Before exporting any graphic from Canva:

- [ ] Background is exactly `#231F20` (not Canva's default near-black)
- [ ] Gold accent color is `#E2A970` (not yellow, not orange)
- [ ] All text passes readability check at mobile size (preview at 400px width)
- [ ] Logo "Lords of Lending" is present in bottom-right
- [ ] URL bar "lordsoflending.com" is present at bottom
- [ ] Font is Montserrat Bold for headlines and numbers (not Montserrat Regular)
- [ ] Export as PNG at 1x for LinkedIn (no need for 2x)
- [ ] Filename follows the convention: `{type}-{slug}.png`
- [ ] Carousel PDFs contain ALL slides in order (Canva → Share → Download → PDF Standard)

### File Naming Convention

```
stat-450m-funded.png
stat-45-days-closing.png
stat-12-strategies.png
stat-10m-pipeline.png
stat-85-percent-guarantee.png
quote-shane-bad-packaging.png
quote-brian-pl-5-minutes.png
quote-steph-lender-fit.png
quote-shane-convention-badges.png
quote-shane-bdo-independent.png
checklist-5-things-lenders-check.png
checklist-7-deal-killers.png
checklist-tech-stack.png
checklist-4-denial-reasons.png
checklist-6-documents.png
beforeafter-packaging-vs-closing.png
beforeafter-borrower-vs-lender.png
beforeafter-untrained-vs-codex.png
carousel-become-sba-broker-2026.pdf
carousel-why-sba-deals-fall-apart.pdf
```

### LinkedIn Post Image Requirements
- **Feed post image:** 1200x1200px (1:1 square) — used for stat, quote, checklist, and before/after cards
- **Carousel document:** 1080x1350px (4:5 portrait) — uploaded as PDF to LinkedIn
- **Max file size:** 10MB per image, 100MB per PDF
- **Color space:** sRGB (Canva default)

---

## Quick Reference: Canva Brand Kit Setup

Add these to your Canva Brand Kit for one-click access:

### Colors to Add
1. `#231F20` — "LoL Dark Background"
2. `#E2A970` — "LoL Gold"
3. `#C4874A` — "LoL Gold Dark"
4. `#2A2425` — "LoL Surface"
5. `#C0392B` — "LoL Error Red"
6. `#2D1F1F` — "LoL Red Tint BG"
7. `#2A2520` — "LoL Gold Tint BG"

### Fonts to Add
1. Montserrat Bold — headlines, numbers, logos
2. Open Sans Regular — body text, descriptions
3. Open Sans Italic — attributions, secondary text

### Logo to Upload
- White wordmark PNG on transparent background
- Minimum size: 200px wide for legibility at small sizes
