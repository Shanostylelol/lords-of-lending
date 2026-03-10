# Content Validation & Logging System

**Created:** 2026-03-10
**Purpose:** Ensure every piece of content passes quality, SEO, voice, and originality checks before being marked complete. Track all progress, errors, and corrections in persistent logs.

---

## System Architecture

```
Content Written
     ↓
┌─────────────────────────────────────┐
│          VALIDATION GATE            │
│                                     │
│  1. SEO Checklist        (PASS/FAIL)│
│  2. Voice & Tone Audit   (PASS/FAIL)│
│  3. AI Detection Sweep   (PASS/FAIL)│
│  4. Originality Check    (PASS/FAIL)│
│  5. Internal Linking Audit(PASS/FAIL)│
│  6. Image Quality Check  (PASS/FAIL)│
│  7. Technical Build Check (PASS/FAIL)│
│                                     │
│  ALL PASS? → Log + Check off plan   │
│  ANY FAIL? → Auto-correct → Re-run  │
└─────────────────────────────────────┘
     ↓
Memory Logged → Plan Updated → Next Item
```

---

## File Locations

| File | Purpose |
|---|---|
| `logs/execution-log.md` | Master log of all completed items with timestamps |
| `logs/error-log.md` | All errors, failures, corrections, and retries |
| `logs/validation-results.md` | Detailed pass/fail results per content piece |
| `logs/image-log.md` | Image generation attempts, prompts, results, regenerations |
| `specs/SEO-EXECUTION-SPEC.md` | The plan — items get checked off here |
| `working-memory.md` | Session context — updated after each completed item |

---

## Validation Gate: 7 Checks

### Check 1: SEO Checklist

Every content page MUST have:

- [ ] **Title tag:** 50-60 chars, contains primary keyword
- [ ] **Meta description:** 150-160 chars, contains keyword
- [ ] **H1:** Exactly one, contains primary keyword
- [ ] **Primary keyword** in first paragraph (within first 100 words)
- [ ] **H2 subheadings** contain secondary keywords naturally
- [ ] **Word count** meets minimum for content type:
  - Pillar: 3,000+
  - Podcast companion: 1,500+
  - State page: 1,200+
  - Industry page: 1,500+
  - Supporting article: 1,200+
  - Training funnel: 1,200+
- [ ] **Images:** All have descriptive alt text with keyword
- [ ] **JSON-LD structured data:** Present and valid (Article, FAQ, BreadcrumbList as applicable)
- [ ] **Canonical URL:** Present and correct
- [ ] **Open Graph:** Title, description, image all present

**Auto-correct:** If keyword is missing from H1 or first paragraph, rewrite the intro. If word count is short, expand the thinnest section.

### Check 2: Voice & Tone Audit

Based on `docs/VOICE-GUIDE.md`, verify the assigned author's voice is present:

**Shane articles must include:**
- [ ] At least 2 of: "when all is said and done", "the reality is", "let's be honest", "right?", "freaking"
- [ ] Long cascading sentences (not short, clipped academic prose)
- [ ] At least 1 vivid metaphor or analogy (physical, sports, cars)
- [ ] Self-aware aside or direct audience address
- [ ] Urgency and energy in the tone

**Steph articles must include:**
- [ ] At least 2 of: "Guys", "Here's the deal", "ownership isn't deserved, it's earned", "building legacies"
- [ ] Data-first approach — leads with numbers before opinions
- [ ] Repetition for emphasis (restating a key phrase)
- [ ] Structured, declarative statements
- [ ] Warm but authoritative tone

**Brian articles must include:**
- [ ] At least 2 of: "I think", "along those lines", "that sort of thing", "spotting issues"
- [ ] Methodical argument building (setup → analysis → conclusion)
- [ ] Legal/analytical precision in terminology
- [ ] Honest hedges ("I don't know, but...")
- [ ] Measured, reasonable tone

**All articles:**
- [ ] At least 2 direct quotes from podcast transcripts (attributed with episode number)
- [ ] At least 1 real deal example (anonymized but specific — industry, dollar amount)
- [ ] Uses SBA jargon correctly and translates it for the reader
- [ ] Contractions used naturally ("don't", "we've", "you'll")

**Auto-correct:** If voice markers are missing, inject 2-3 characteristic phrases into natural positions. If podcast quotes are missing, pull relevant quotes from transcripts and insert.

### Check 3: AI Detection Sweep

Scan for and ELIMINATE these AI writing patterns:

**Banned phrases (instant fail — delete and rewrite the sentence):**
- "In today's landscape"
- "In today's fast-paced world"
- "It's important to note"
- "In conclusion"
- "Let's dive in" / "Let's dive deeper"
- "Navigating the complexities"
- "In the realm of"
- "Leveraging" (as a buzzword, not financial term)
- "Revolutionize" / "game-changer" / "cutting-edge"
- "Comprehensive guide" (in body text — OK in title)
- "Look no further"
- "Whether you're a seasoned professional or just starting out"
- "This article will explore"
- "Without further ado"
- "At the end of the day" (OK for Shane — it's his phrase — but not for Brian/Steph)
- "In this article, we will"
- "It's worth noting"
- "That being said"
- "Moving forward"
- "Needless to say"
- "Plays a crucial role"
- "It goes without saying"
- "A myriad of"
- "Delve into"
- "Pivotal"
- "Embark on"
- "Paramount"
- "Fostering"
- "Underscores"
- "Landscape" (when used metaphorically for "situation")
- "Tapestry"
- "Multifaceted"

**Structural AI patterns (rewrite the section):**
- Lists of exactly 5 items with suspiciously parallel structure
- Every paragraph being exactly 3-4 sentences
- Transitions that are too smooth ("Furthermore," "Moreover," "Additionally,")
- Excessive hedging with no opinion ("Some experts say... while others believe...")
- Intro that restates the title, then says "In this article, we'll cover..."

**Replace with:**
- Specific hooks: "Last month, we almost lost a $2.3M restaurant deal because..."
- Direct statements: "Here's what nobody tells you about SBA seller notes."
- Conversational transitions: "So here's where it gets interesting." / "Now, Brian would tell you..."
- Opinionated takes: "Most brokers get this completely wrong."

**Auto-correct:** Find and replace each banned phrase with a natural alternative. Rewrite structural patterns to be more conversational.

### Check 4: Originality Check

- [ ] **No copied sentences** from other websites (all content must be original)
- [ ] **No lifted paragraphs** from competitor blogs (Nav.com, Guidant, SmartBiz, etc.)
- [ ] **Quotes are attributed** — only direct quotes from our own podcast transcripts
- [ ] **Data citations** reference the source (SBA.gov, Coleman Report, etc.) but analysis/commentary is original
- [ ] **No template boilerplate** that appears identical across multiple articles (each piece must be unique)

**How we ensure originality:**
- All content is written from scratch using our podcast transcripts, deal experience, and training materials as source material
- We cite SBA data but never copy competitor analysis
- Every article has a unique angle or contrarian take
- State/industry pages have unique intros, not copy-paste templates

**Auto-correct:** If any section reads like generic SBA content found on 10 other sites, rewrite it with a specific Lords of Lending perspective, deal example, or podcast reference.

### Check 5: Internal Linking Audit

- [ ] **Minimum 3 internal links** going OUT from the article
- [ ] **Links to cluster pillar** article (mandatory for all supporting content)
- [ ] **1-2 links to related podcast episodes** with descriptive anchor text
- [ ] **CTA to learn.lordsoflending.com/pricing** present
- [ ] **No "click here"** or "read more" — all anchor text is descriptive and keyword-relevant
- [ ] **Internal links open in same tab** (no target="_blank" for internal)
- [ ] **External links open in new tab** (target="_blank" with rel="noopener noreferrer")
- [ ] **No broken links** — all slugs verified against constants

**Auto-correct:** If links are missing, inject 2-3 contextual internal links in natural positions. Add CTA block if absent.

### Check 6: Image Quality Check

- [ ] **Hero image exists** at correct path (`/public/images/{category}/{slug}.webp`)
- [ ] **File size** under 200KB
- [ ] **Dimensions** appropriate (1200x630 for OG, or 1024x1024 from generation)
- [ ] **Alt text** is descriptive and contains a keyword
- [ ] **On brand:** Dark navy/gold palette, professional editorial aesthetic
- [ ] **No text in image** (except quote cards)
- [ ] **No AI artifacts:** No extra fingers, garbled text, distorted faces
- [ ] **Relevant to article topic**

**Auto-correct:** If image fails quality check, regenerate with refined prompt. Log the failure and new prompt in `logs/image-log.md`. Maximum 3 regeneration attempts before flagging for manual review.

### Check 7: Technical Build Check

- [ ] **TypeScript compiles** with zero errors (`npx tsc --noEmit`)
- [ ] **Page renders** without console errors
- [ ] **Slug registered** in constants or dynamic route
- [ ] **Sitemap includes** the new URL
- [ ] **Metadata complete** (title, description, OG, canonical)

**Auto-correct:** Fix TypeScript errors. Add missing slug to constants.

---

## Logging Format

### execution-log.md

```markdown
# Execution Log

## [Date]

### [Time] — [Content Piece Title]
- **Type:** Pillar / Podcast / State / Industry / Supporting / Training
- **File:** content/[category]/[slug].md
- **Author voice:** Shane / Steph / Brian
- **Word count:** [X]
- **Validation:** PASS (7/7) | CORRECTED (failed [X], fixed, re-passed)
- **Image:** Generated via [DALL-E/Gemini] — [filename]
- **Commit:** [hash]
- **Notes:** [any relevant context]
```

### error-log.md

```markdown
# Error Log

## [Date] [Time] — [Content Piece]
- **Error type:** SEO / Voice / AI-Detection / Originality / Links / Image / Build
- **Details:** [what failed]
- **Correction:** [what was changed]
- **Result:** Fixed / Escalated to manual review
- **Retry count:** [1-3]
```

### validation-results.md

```markdown
# Validation Results

## [slug]
| Check | Result | Details |
|---|---|---|
| SEO Checklist | PASS/FAIL | [specifics] |
| Voice & Tone | PASS/FAIL | [specifics] |
| AI Detection | PASS/FAIL | [phrases found] |
| Originality | PASS/FAIL | [specifics] |
| Internal Links | PASS/FAIL | [link count, missing] |
| Image Quality | PASS/FAIL | [specifics] |
| Technical Build | PASS/FAIL | [errors] |
| **OVERALL** | **PASS/FAIL** | |
```

### image-log.md

```markdown
# Image Generation Log

## [slug]
- **Attempt 1:** [timestamp]
  - Tool: DALL-E / Gemini
  - Prompt: "[full prompt]"
  - Result: SUCCESS / FAIL
  - Issue: [if failed — artifacts, wrong style, etc.]
  - File: [output path]
- **Attempt 2:** [if needed]
  - Revised prompt: "[...]"
  - Result: SUCCESS
  - File: [output path]
```

---

## Execution Workflow (Per Content Piece)

```
1. WRITE content using Voice Guide + transcripts + plan requirements
2. RUN Validation Gate (all 7 checks)
3. IF any check fails:
   a. Auto-correct the issue
   b. Log error in error-log.md
   c. Re-run failed check(s)
   d. If still fails after 2 corrections → flag for manual review
4. IF all checks pass:
   a. Log in execution-log.md (content details + validation result)
   b. Log in validation-results.md (detailed pass/fail per check)
   c. Update specs/SEO-EXECUTION-SPEC.md (check off the item)
   d. Update working-memory.md (progress tracker)
   e. Commit the content + image
5. GENERATE image (if needed)
   a. Use DALL-E (primary) or Gemini (fallback)
   b. Validate image quality
   c. If poor quality, regenerate (max 3 attempts)
   d. Log all attempts in image-log.md
   e. Convert to WebP if needed, optimize size
6. MOVE to next content piece
```

---

## Memory Persistence

After each completed content piece, update:

1. **`working-memory.md`** — Current progress, what's done, what's next
2. **`logs/execution-log.md`** — Append completion record
3. **`specs/SEO-EXECUTION-SPEC.md`** — Check off completed item
4. **Auto-memory** (`~/.claude/projects/.../memory/`) — Update if significant patterns discovered

This ensures that if context is lost (session timeout, compaction), any new session can:
1. Read `working-memory.md` to know current state
2. Read `logs/execution-log.md` to know what's done
3. Read `specs/SEO-EXECUTION-SPEC.md` to know what's next
4. Read `logs/error-log.md` to avoid repeating mistakes

---

## AI Detection Banned Phrases (Machine-Readable List)

For automated scanning, here is the complete list:

```
in today's landscape
in today's fast-paced world
it's important to note
in conclusion
let's dive in
let's dive deeper
navigating the complexities
in the realm of
leveraging
revolutionize
game-changer
cutting-edge
look no further
whether you're a seasoned professional or just starting out
this article will explore
without further ado
it's worth noting
that being said
moving forward
needless to say
plays a crucial role
it goes without saying
a myriad of
delve into
pivotal
embark on
paramount
fostering
underscores
tapestry
multifaceted
in this article, we will
```

---

## Image Generation Brand Guide

### DALL-E Prompt Template

```
Professional editorial photograph for a financial services blog article about [TOPIC].
Style: Dark, moody, premium — deep navy (#0B1D33) and warm gold (#AA712C) color palette.
Setting: [SPECIFIC CONTEXT — e.g., "modern office with document signing", "restaurant interior"].
Mood: Authoritative, trustworthy, sophisticated. No people's faces visible.
Composition: Clean, minimal, editorial magazine quality.
No text, no logos, no watermarks. No clip art or illustration style.
Photorealistic, high contrast, shallow depth of field.
```

### Quality Criteria
- Professional editorial look (not stock photo generic)
- Dark/moody tone matching site palette
- No visible faces (avoids uncanny valley)
- No text overlays
- Clean composition
- Relevant to article topic

### Fallback Order
1. **DALL-E 3** (primary — best quality, full control over save location)
2. **Gemini** (fallback — good quality, less control)
3. **Nano-Banana** (last resort)
