# 4BC Global — Complete Website Blueprint

> **Document Purpose:** This is the full specification for building the 4BC Global corporate website. It contains site architecture, information architecture, all page content, design system tokens, and implementation notes. Hand this to your development agent to build the site end-to-end.

---

## Table of Contents

1. [Brand Overview](#1-brand-overview)
2. [Design System](#2-design-system)
3. [Global Navigation & Site Architecture](#3-global-navigation--site-architecture)
4. [Page 1 — Home](#4-page-1--home)
5. [Page 2 — About Us](#5-page-2--about-us)
6. [Page 3 — Research Services](#6-page-3--research-services)
7. [Page 4 — Sectors We Serve](#7-page-4--sectors-we-serve)
8. [Page 5 — Proprietary Tools](#8-page-5--proprietary-tools)
9. [Page 6 — Case Studies](#9-page-6--case-studies)
10. [Page 7 — Our Team](#10-page-7--our-team)
11. [Page 8 — Clients](#11-page-8--clients)
12. [Page 9 — Contact](#12-page-9--contact)
13. [Interactive Features & Animations](#13-interactive-features--animations)
14. [SEO & Meta](#14-seo--meta)
15. [Responsive Breakpoints](#15-responsive-breakpoints)

---

## 1. Brand Overview

- **Company Name:** 4BC Global (formerly 4SiGHT Business Consulting)
- **Tagline:** Research Based Advisory
- **Industry:** B2B & B2C Market Research and Consulting
- **Region Focus:** Middle East & Africa (MEA)
- **Origin:** Spun out from Kantar in 2020, headquartered in Dubai
- **Website Tone:** Professional, authoritative, data-driven, confident but not aggressive. Think: McKinsey meets a boutique intelligence firm.

---

## 2. Design System

### 2.1 Color Palette

The palette is inspired by the 4BC Global logo — a combination of amber/gold, deep purple, and supporting blues. The vibe is **corporate-minimal with subtle gradient accents**, never loud.

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#4B2C7A` | Deep purple — primary brand, headings, nav active states |
| `--color-primary-light` | `#6B3FA0` | Purple — hover states, secondary buttons |
| `--color-accent` | `#E8A520` | Amber gold — CTAs, stat numbers, highlights, links on dark bg |
| `--color-accent-warm` | `#F5B731` | Light gold — hover on accent elements |
| `--color-blue` | `#2A5CAA` | Corporate blue — secondary accents, icons, link text |
| `--color-blue-light` | `#3D7DD9` | Light blue — hover states on blue elements |
| `--color-dark` | `#1A1A2E` | Dark navy — dark section backgrounds, footer |
| `--color-dark-surface` | `#232340` | Slightly lighter dark — card surfaces on dark sections |
| `--color-text` | `#2D2D2D` | Body text on light backgrounds |
| `--color-text-muted` | `#6B7280` | Secondary text, captions, metadata |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-soft` | `#F8F8FA` | Alternating section backgrounds, card backgrounds |
| `--color-border` | `#E5E7EB` | Borders, dividers, card outlines |

### 2.2 Gradient Usage (Minimal)

Use gradients **sparingly** — only for hero backgrounds and CTA buttons.

```css
/* Hero background gradient — subtle left-to-right */
--gradient-hero: linear-gradient(135deg, #1A1A2E 0%, #4B2C7A 60%, #2A5CAA 100%);

/* CTA button gradient */
--gradient-cta: linear-gradient(90deg, #E8A520 0%, #F5B731 100%);

/* Accent line/divider gradient */
--gradient-accent-line: linear-gradient(90deg, #E8A520, #4B2C7A, #2A5CAA);
```

> **Design rule:** Gradients appear only on: (1) the hero section background, (2) CTA buttons, and (3) thin decorative accent lines/dividers. Everything else uses flat solid colors.

### 2.3 Typography

| Element | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| H1 (Page title) | DM Sans | 700 (Bold) | 48px / 3rem | 1.15 |
| H2 (Section title) | DM Sans | 700 | 36px / 2.25rem | 1.2 |
| H3 (Card title) | DM Sans | 600 (SemiBold) | 24px / 1.5rem | 1.3 |
| H4 (Sub-heading) | DM Sans | 600 | 20px / 1.25rem | 1.35 |
| Body | Inter | 400 (Regular) | 16px / 1rem | 1.6 |
| Body small | Inter | 400 | 14px / 0.875rem | 1.5 |
| Caption/Meta | Inter | 500 (Medium) | 12px / 0.75rem | 1.4 |
| Nav links | DM Sans | 500 | 15px | — |
| Stat numbers | DM Sans | 700 | 42px / 2.625rem | 1.1 |
| Pull quotes | DM Sans | 400 Italic | 22px / 1.375rem | 1.5 |

**Font loading:** Use Google Fonts — `DM Sans:wght@400;500;600;700` and `Inter:wght@400;500;600`.

### 2.4 Spacing System

Use an 8px base unit.

| Token | Value |
|---|---|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |
| `--space-4xl` | 96px |
| `--section-padding` | 80px top/bottom (desktop), 48px (mobile) |

### 2.5 Component Styles

**Cards:**
- Background: `#FFFFFF` (on soft bg) or `--color-bg-soft` (on white bg)
- Border: 1px solid `--color-border`
- Border-radius: 12px
- Shadow: `0 1px 3px rgba(0,0,0,0.06)`
- Hover shadow: `0 4px 12px rgba(0,0,0,0.1)`
- Padding: 32px

**Buttons — Primary CTA:**
- Background: `--gradient-cta`
- Text: `#1A1A2E` (dark text on gold)
- Font: DM Sans 600, 15px
- Padding: 14px 28px
- Border-radius: 8px
- Hover: brighten gradient, subtle scale(1.02)

**Buttons — Secondary:**
- Background: transparent
- Border: 1.5px solid `--color-primary`
- Text: `--color-primary`
- Hover: fill `--color-primary`, text white

**Buttons — On dark backgrounds:**
- Primary: same gold gradient
- Secondary: border white, text white, hover fill white text dark

**Section dividers:**
- Use a 3px-high gradient line (`--gradient-accent-line`) between major sections, max-width 80px, centered.

### 2.6 Layout

- **Max content width:** 1200px, centered
- **Grid:** 12-column, 24px gutter
- **Sections alternate** between white (`#FFFFFF`) and soft (`#F8F8FA`) backgrounds, with occasional dark (`#1A1A2E`) sections for emphasis.

### 2.7 Iconography

- Use Lucide icons or Phosphor icons (line style, 1.5px stroke)
- Icon color: `--color-primary` or `--color-blue` on light bg, `--color-accent` on dark bg
- Size: 24px inline, 40px in feature cards, 56px in hero service icons

---

## 3. Global Navigation & Site Architecture

### 3.1 Navigation Bar

**Layout:** Sticky header, white background with subtle bottom shadow on scroll.

```
[LOGO]     HOME   ABOUT   SERVICES   SECTORS   TOOLS   CASE STUDIES   CLIENTS   TEAM   [Get a Proposal →]
```

- Logo: left-aligned
- Nav links: center-aligned
- CTA button ("Get a Proposal"): right-aligned, gold gradient button
- On scroll: header gets `backdrop-filter: blur(12px)` with slight transparency
- Mobile: hamburger menu, full-screen overlay

### 3.2 Site Map (Information Architecture)

```
HOME
│
├── ABOUT US (single long-scroll page with anchor sections)
│   ├── #our-story
│   ├── #our-purpose
│   ├── #our-philosophy
│   ├── #geographical-footprint
│   └── #why-were-different
│
├── SERVICES (single long-scroll page)
│   ├── #business-lifecycle-advisory
│   ├── #business-research
│   ├── #customer-experience
│   ├── #impact-assessment
│   ├── #geolocation-services
│   └── #specialist-areas
│
├── SECTORS (landing page + expandable sector detail cards)
│   ├── Retail & Food Products
│   ├── Banking & Finance
│   ├── Real Estate & Construction
│   ├── Fuels, Energy & Environment
│   ├── Industrial
│   ├── Logistics & Transportation
│   ├── Telecom & ICT
│   ├── Government, Education & Regulators
│   ├── Regional Conglomerates
│   └── Metal & Core Industries
│
├── TOOLS
│   ├── 4BC InFuse
│   ├── 4BC Landscape
│   └── 4BC ImpactIQ
│
├── CASE STUDIES (filterable grid → individual case study pages)
│   ├── Case Study 01–08 (individual pages or modals)
│
├── CLIENTS (logo wall + testimonials)
│
├── TEAM (team grid)
│
└── CONTACT (form + office info)
```

### 3.3 Footer

```
──────────────────────────────────────────────
 [LOGO]                                        
                                               
 COMPANY        SERVICES           CONNECT     
 About Us       Business Research  Dubai, UAE   
 Our Team       Customer Experience Email       
 Case Studies   Impact Assessment  Phone        
 Clients        Geolocation        LinkedIn     
 Contact        Proprietary Tools               
                                               
 ─── gradient accent line ───                  
 © 2025 4BC Global. All rights reserved.       
──────────────────────────────────────────────
```

Footer background: `--color-dark` (`#1A1A2E`)
Text: white / muted gray
Accent elements: `--color-accent`

---

## 4. Page 1 — Home

### Section 1: Hero

- **Background:** `--gradient-hero` with a subtle semi-transparent world map graphic overlay (low opacity, decorative only)
- **Layout:** Left-aligned text on desktop, centered on mobile

**Content:**

```
Headline:       Tailored Market Intelligence for the Middle East & Africa
Sub-headline:   4BC Global is a specialist research firm that transforms complex 
                business challenges into accurate, actionable insights — for B2B 
                and B2C enterprises across the MEA region.
CTA 1:          [Explore Our Services]  (gold gradient button)
CTA 2:          [View Case Studies]     (secondary outline button, white border)
```

### Section 2: Stats Bar

- **Background:** `--color-dark` or solid `--color-primary`
- **Layout:** Horizontal row, 5 stats with animated counters (animate on scroll into view)
- **Number color:** `--color-accent`

| Stat | Value |
|---|---|
| Registered Offices | 2 |
| Partner Offices | 4 |
| Countries Covered | 40+ |
| Engagements Executed | 450+ |
| Years Cumulative Experience | 100+ |

### Section 3: Who We Are (3-column pillars)

- **Background:** White
- **Layout:** 3 equal cards side by side

**Card 1 — Origins:**
> 4BC Global (formerly 4SiGHT Business Consulting) is a specialist research firm with origins in Kantar — established in 2020 in Dubai to deliver tailor-made research for the MEA region.

**Card 2 — What We Do:**
> We provide bespoke B2B and B2C market research solutions — from market entry strategy and competitor intelligence to customer experience programs and socio-economic impact assessments.

**Card 3 — How We Do It:**
> Our method-neutral approach means we diagnose your business challenge first, then design the optimal research methodology — blending quantitative rigor, qualitative depth, and strategic secondary research.

### Section 4: Services Quick Icons

- **Background:** `--color-bg-soft`
- **Layout:** 4-column icon grid

| Icon | Title | Description |
|---|---|---|
| (search/chart icon) | Business Research | Market entry, sizing, competitor mapping, channel analysis |
| (users/star icon) | Customer Experience | CX programs, mystery shopping, NPS, loyalty |
| (bar-chart icon) | Impact Assessment | SIA, EIA, corporate reputation, event footfall |
| (map-pin icon) | Geolocation Services | Network planning, branch optimization, catchment analysis |

Each card links to the corresponding anchor on the Services page.

### Section 5: Sectors We Serve

- **Background:** White
- **Layout:** Horizontal scrolling icon strip (auto-scroll, pausable)

Sectors listed: Retail & Food · Banking & Finance · Real Estate & Construction · Fuels, Energy & Environment · Industrial · Logistics & Transportation · Telecom & ICT · Education · Metal & Core Industries · Government · Regional Conglomerates · FMCG/CPG

Each sector icon links to the Sectors page.

### Section 6: Proprietary Tools

- **Background:** `--color-dark`
- **Layout:** 3 cards side by side, dark surface cards

**Card 1:**
- Title: 4BC InFuse
- Description: Secondary intelligence platform for industry landscapes and competitive profiling

**Card 2:**
- Title: 4BC Landscape
- Description: Geo-mapping tool for retail network planning and location intelligence

**Card 3:**
- Title: 4BC ImpactIQ
- Description: Socio-economic impact measurement framework for events, projects, and programs

- **CTA:** [Explore Our Tools →] (links to Tools page)

### Section 7: Featured Case Studies

- **Background:** `--color-bg-soft`
- **Layout:** 3 cards, each with sector tag, title, one-line outcome, "Read More" link

**Card 1:**
- Tag: Retail
- Title: Identifying potential locations to expand grocery store network
- Location: UAE
- Link: → Case Study 01

**Card 2:**
- Tag: Transport / Fintech
- Title: Opportunity assessment for digitalization of minibus taxis
- Location: South Africa
- Link: → Case Study 02

**Card 3:**
- Tag: Oil & Gas
- Title: Customer Satisfaction study for a major O&G business
- Location: UAE
- Link: → Case Study 07

- **CTA:** [View All Case Studies →]

### Section 8: Client Logo Wall

- **Background:** White
- **Layout:** Auto-scrolling horizontal strip of client logos (grayscale by default, full color on hover)

Include all logos from the Clients page (see Page 8).

### Section 9: Testimonials Slider

- **Background:** `--color-dark`
- **Layout:** Single testimonial visible at a time, auto-rotate every 4 seconds, dots navigation

**Testimonial 1:**
> "Team, this is good work and really helps get a granular understanding of the flow of cargo and each product in the market."
> — VP Growth, DP World

**Testimonial 2:**
> "The report looks very good. Sharp and concise analysis."
> — Market Research Manager, ENOC

**Testimonial 3:**
> "This is a wonderful piece of work, a giant leap forward for the organization."
> — Senior Manager, Al-Futtaim Group

**Testimonial 4:**
> "The insights and the market strategy is very useful for our roll out. The insights have greater details for developing our strategy."
> — Product Manager, Visa

- Quote marks: large amber `"` decorative element
- Text: White
- Attribution: `--color-accent`

### Section 10: Closing CTA Banner

- **Background:** `--color-primary` with subtle gradient
- **Layout:** Centered text + 2 buttons

```
Headline:   For decision-makers who need insights tailored to their reality — 
            not generic market reports.
CTA 1:      [Request a Proposal]  (gold button)
CTA 2:      [Talk to Our Team]    (white outline button)
```

---

## 5. Page 2 — About Us

> **Page type:** Single long-scroll page with anchor-linked sub-sections. Sub-nav links at the top of the page that scroll to each section.

### Page Header
- Headline: About 4BC Global
- Sub-headline: From Kantar roots to independent advisory — research-led strategy for the MEA region.

### Section 1: Our Story `#our-story`

**Content:**

4BC Global (formerly 4SiGHT Business Consulting) is a specialist research firm with origins in Kantar. Established in 2020 in Dubai, the company branched out from Kantar to provide tailor-made B2B and B2C market research solutions to clients across the Middle East and Africa (MEA) region.

With a cumulative research experience of more than 100 years in the region, our team brings deep expertise across private, public, and multinational sectors — helping organisations design and execute growth strategies grounded in data.

4BC Global has extensive experience advising Private, Public Sector, and Multinational companies in the MEA region across a wide range of sectors. The company specializes in developing method-neutral approaches to solve challenging enterprise sales and marketing problems.

### Section 2: Our Purpose `#our-purpose`

- **Layout:** Full-width dark (`--color-dark`) section with large pull quote

```
"To aid our clients take strategic decisions based on accurate and timely insights."
```

- Quote color: `--color-accent`
- Font: DM Sans Italic, 28px

### Section 3: Our Philosophy `#our-philosophy`

**Headline:** Your Business Needs Dictate Our Approach

**Intro paragraph:**
We reject one-size-fits-all methodologies. Our method-neutral approach is bespoke to each client's specific business challenge.

**3-step visual process** (horizontal flow diagram with connecting arrows/lines):

**Step 1 — Diagnose First**
Deep understanding of the client's specific business challenge through discovery sessions. We ask the right questions before we prescribe any solution.

**Step 2 — Design the Methodology**
Craft the optimal research approach based on: core business objective, available information (internal/public), market dynamics and complexity, channel partners/importers/exporters, time and capital investment constraints.

**Step 3 — Blend Techniques**
Most engagements use a strategic combination of:
- Quantitative (statistical surveys, market sizing)
- Qualitative depth (executive interviews, focus groups)
- Strategic secondary research (desk research, competitive intelligence)
- Bespoke/tailor-made techniques

**Closing line:** Results that are: **Relevant · Precise · Actionable**

### Section 4: Geographical Footprint `#geographical-footprint`

**Headline:** 40+ Countries. 2 Offices. 4 Partner Hubs.

**Layout:** Interactive or illustrated world map with pin clusters by region (left side), region table (right side).

| Region | Countries |
|---|---|
| GCC | UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain |
| Levant | Lebanon, Jordan, Iran, Iraq |
| Africa | Egypt, Algeria, Morocco, Kenya, Ghana, South Africa, DRC and others |
| Asia | India, Pakistan, Sri Lanka, Bangladesh, Thailand |
| Europe | UK |

**Partner Offices:** India · Kenya · Algeria · South Africa

### Section 5: Why We're Different `#why-were-different`

**Layout:** 4 icon cards in a 2×2 grid

**Differentiator 1:** Advised Global, Regional & Public Sector Companies
Strong experience advising private and public sector companies across the MEA region including Unilever, Nestlé, ENOC, Emarat, Bridgestone, Toyota and many more.

**Differentiator 2:** Executed Complex Research Involving Sizing, Estimations & Intelligence
10+ years of studies including Market Assessment, Industry Landscape, Competitive Intelligence, Technology Research, Enterprise Loyalty & Satisfaction, Mystery Audits and Network Planning.

**Differentiator 3:** Sectorial Knowledge Across Wide Range of Categories
Sectors include FMCG, Real Estate, Industrial, Oil & Gas, Financial Services, IT, and Telecom. Categories researched include Plant-based foods, Salad dressings, Vegetable Oils, Free zones, Boilers, Water treatment equipment, Lubricants, Payment services, Monitors, VOIP, Broadband and more.

**Differentiator 4:** Highly Experienced, Senior-Led Team
Team of senior business research specialists with an average of more than 15 years of experience. A combination of desk research, qualitative and quantitative techniques are used to address every objective.

---

## 6. Page 3 — Research Services

### Page Header
- Headline: Research Services
- Sub-headline: Bespoke research solutions for every stage of your business lifecycle

### Section 1: Advisory Services Across the Business Lifecycle

**Headline:** We Support You at Every Stage of Growth

**Layout:** Circular/lifecycle diagram with 4 quadrants (or a horizontal timeline)

| Stage | Services |
|---|---|
| **Inception** | Go-To-Market Strategy · Business Plan · Market Feasibility · Go/No-Go Decision · Market Entry Strategy |
| **Growth** | Product Strategy · Customer Growth · Partner Evaluation · Distribution Strategy · Pricing Strategy |
| **Maturity** | Network Optimization Strategy |
| **Decline** | Diversification Strategy · Feasibility Study |

### Section 2: Core Service Areas

**Layout:** 4-column detailed grid (2 columns on tablet, 1 on mobile). Each service area is a card with an icon, title, and bulleted list of sub-services.

#### Business Research
- Market Entry
- Market Sizing, Demand Estimation & Brand Share
- Competition Mapping
- Channel Analysis
- Partner Identification & Evaluation
- Regulatory Environment Evaluation
- Supply & Demand Analysis
- Industrial Consumer Usage & Satisfaction
- Online Customer Management

#### Customer Satisfaction & Experience
- Customer Loyalty / Satisfaction
- Mystery Shopping
- Loyalty & Engagement Programs
- Net Promoter Score (NPS)
- Customer Journey Mapping
- B2B CX Studies
- Channel Analysis

#### Impact Assessment
- Social Impact Assessment (SIA)
- Economic Impact Assessment (EIA)
- Corporate Reputation Assessment
- Event Performance — Footfall & Economic Impact

#### Geolocation-Based Services
- Network Planning — New Location Evaluation
- Branch Optimization
- Catchment Area Assessment
- Event Performance Mapping

#### Other Specialist Areas
- InFuse — Secondary research-based intelligence solution
- Segmentation Studies
- Marketing Strategy & Concept Evaluation
- Counterfeit Assessment
- Co-creation Workshops for Business Strategy

### Section 3: Methodology Recap Banner

- **Background:** `--color-dark`
- **Layout:** 3-column recap with icons

```
Diagnose · Design · Blend — methodology neutral, client-first, results-driven.
```

**CTA:** [Talk to Us About Your Challenge →]

---

## 7. Page 4 — Sectors We Serve

### Page Header
- Headline: Sectors We Serve
- Sub-headline: Our market research solutions span a wide range of sectors across MEA

### Section 1: Sector Grid

**Layout:** Icon cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile). Each card has an icon, sector name, engagement count badge, and links to expanded detail.

| Sector | Engagements |
|---|---|
| Retail & Food Products | 50+ |
| Banking & Finance | 75+ |
| Real Estate & Construction | 30+ |
| Fuels, Energy & Environment | 60+ |
| Industrial | 50+ |
| Logistics & Transportation | 30+ |
| Telecom & ICT | 50+ |
| Education | — |
| Metal & Core Industries | — |
| Government & Regulators | — |
| Regional Conglomerates | — |
| FMCG / CPG | 100+ |

### Section 2: Sector Detail Cards

Each sector card expands (accordion or modal) to show: what we research, product/category breakdown, sample clients, and key engagements.

---

#### Retail & Food Products

**What we research:** Chocolate Spreads, Dressings, Ready-to-eat foods, Frozen foods, HORECA, Beverages, Vegetable oils and fats, Bread improvers

**Sample Clients:** Savola · LeSaffre · Nestlé · Unilever · BMMI · LuLu · Freshly Foods · KBBO Group · Nestlé Professional

**Key Engagements:**
- Market sizing and opportunity assessment of Tea across Egypt and Pakistan
- Concept evaluation for Chocolate Spread across HORECA in UAE and Saudi Arabia
- Need state assessment of salad dressings across HORECA in UAE
- Network planning for opening a new grocery store in UAE

---

#### Banking & Finance

**What we research:** SME Banking, Corporate Banking, Credit Cards, Corporate Cards, Payment Solutions, Online Trading, Investment, Insurance, Fintech

**Sample Clients:** VISA · ADCB · American Express · Bupa · RSA · UAE Insurance Authority · SABB · Cashee · HSBC · RFIGlobal

**Key Engagements:**
- Market sizing and opportunity assessment for corporate credit cards across UAE and Egypt
- Brand awareness and usage of medical insurance among consumers in UAE
- Opportunity assessment for digitizing payments across mini-bus taxis in South Africa
- Voice of customers and satisfaction with banking services in UAE
- Customer satisfaction and NPS for banking customers in UAE

---

#### Real Estate & Construction

**What we research:** Free Zones, Commercial Offices, Malls, Paints, Pipes, Cement, Adhesives, Coatings, Elevators. Construction Materials: Portland cement, OPC, limestone, gypsum, concrete blocks, paint refinishes. Roofing, Insulation & Pipes: Plastic pipes, PPR, PVC, conduit, steel, fiberglass. Elevators & Escalators: Commercial and infrastructure.

**Sample Clients:** DP World · DMCC · Emaar · Dubai South · Dubai Airport Freezone · Dubai Development Authority · WJ Towell · Palm Hills · Nakheel · ThyssenKrupp · Al-Futtaim Engineering

**Key Engagements:**
- Competitive intelligence and cost benchmarking of free zones in the UAE
- Catchment area assessment for developing a new mall in UAE
- Opportunity assessment for facility management services in UAE
- Understanding the walking habits of consumers for development of a new residential community
- Understanding trade flow within Dubai Fruit and Vegetable Market

---

#### Fuels, Energy & Environment

**What we research:** Petrochemicals & Lubricants: LPG, propane, EGAP, lubricants, diesel, petrol, commercial fuels. Utilities: Biotech, water treatment, environmental dust control equipment, waste water treatment. Boilers & industrial utilities.

**Sample Clients:** Emirates Gas · Shell · Emarat · Horizon Terminals · ENOC · Castrol · Aramco · MARAFIQ · JW Azure

**Key Engagements:**
- Market sizing and shares for lubricants in UAE
- Market assessment for LPG and Propane gases for cylinders and bulk gas in UAE
- Mystery audits for process compliance for fuel stations in UAE
- Customer satisfaction and NPS for commercial fuels, LPG, Lubricants businesses of a large energy supplier

---

#### Industrial

**What we research:** Boilers, Water treatment plants, Environmental dust control equipment, Water and Waste-water treatment plants, Concrete pipes, Decorative paints, Construction equipment, Automotive services

**Sample Clients:** ThyssenKrupp · Arkan · The Kanoo Group · Thermax · Twiga · Sadolin · Jotun · Amiantit Oman

**Key Engagements:**
- Market feasibility for setting up a concrete pipe factory in Oman
- Market sizing and shares for decorative paints in Qatar
- Brand health assessment for decorative paints in UAE
- 5-year Network planning for a leading business house into automotive, construction equipment and services

---

#### Logistics & Transportation

**What we research:** LCV, HCV, Passenger cars, Spare parts, Tyres, Auto components, Port intelligence, Connected car services

**Sample Clients:** Ford · Mercedes · Toyota · Nissan · Audi · Volvo · GM · Renault · Kia · Bridgestone

**Key Engagements:**
- Industry landscape of used cars in UAE, DRC, Afghanistan and Yemen
- Market sizing and dealer optimization for TSR tyres across UAE, Saudi Arabia and Egypt
- Brand positioning and usage of connected car services among consumers in UAE and Saudi Arabia
- Competitive intelligence on Ports across Middle East and Africa region

---

#### Telecom & ICT

**What we research:** Monitors, Home appliances, Office equipment, VOIP, Wired and Wireless communication systems, IT industry landscape among SMEs, Wireless presentation systems, Printers

**Sample Clients:** Samsung · Maroc Telecom · du · e& (Etisalat) · Vodafone · LG · BARCO · Epson · Airtel · Dizzy

**Key Engagements:**
- ICT industry landscape and usage among SMEs in Qatar
- Market sizing and demand estimation for wireless presentation systems in UAE
- Brand positioning and usage of printers among SMEs in UAE
- Competitive intelligence on VOIP services in UAE

---

#### Government, Education & Regulators

**What we research:** Regulatory landscapes, policy impact, public service satisfaction, education sector demand

**Sample Clients:** GACA · mada · Ministry clients

---

#### Regional Conglomerates

**Sample Clients:** Abdul Latif Jameel · JK Cement · Alghanim · Al-Futtaim Group

---

#### Metal & Core Industries

**What we research:** Steel, aluminium, construction materials, raw industrial inputs

---

## 8. Page 5 — Proprietary Tools

### Page Header
- Headline: Proprietary Tools
- Sub-headline: Intelligence platforms built from 15+ years of MEA research experience

### Tool 1: 4BC InFuse

**Tagline:** Your desk research, supercharged.

**What it is:** 4BC InFuse is a secondary research platform used for understanding the industry landscape, competitive intelligence, and competition profiles across any sector in the MEA region.

**Use cases:**
- Competitive profiling and benchmarking
- Industry landscape overview before primary research
- Fast-turn intelligence reports for leadership decisions

**CTA:** [Learn More about InFuse]

### Tool 2: 4BC Landscape

**Tagline:** Know exactly where to grow.

**What it is:** 4BC Landscape is a geo-mapping tool used for network planning — identifying optimal locations for opening new stores or branches based on demographics, competition presence, and market gaps.

**Use cases:**
- Retail network expansion planning
- New store feasibility by location cluster
- Competitive footprint mapping
- Catchment demographic profiling

**CTA:** [Learn More about Landscape]

### Tool 3: 4BC ImpactIQ

**Tagline:** Measure what matters — socially, economically, globally.

**What it is:** 4BC ImpactIQ is a deep-dive analysis framework for assessing the socio-economic impact of events, activities, and projects. Built on a proprietary in-house assessment model.

**Framework assesses:**
- **Economic Output** — Direct and indirect economic contribution
- **Employment Impact** — Jobs created and supported
- **Local Social Impact** — Community-level benefits and outcomes
- **Global Social Impact** — Broader sustainability and development contributions

**Use cases:**
- Government events and exhibitions (e.g., Expos, Summits)
- Infrastructure and development projects
- CSR and sustainability reporting
- Public-private partnerships

**CTA:** [Learn More about ImpactIQ]

### Tools Comparison Table

| Feature | 4BC InFuse | 4BC Landscape | 4BC ImpactIQ |
|---|---|---|---|
| Type | Secondary Research Platform | Geo-Intelligence Tool | Impact Assessment Framework |
| Best for | Competitive intelligence | Location & network planning | Socio-economic impact measurement |
| Output | Intelligence reports | Maps, cluster analysis | Impact scorecards & reports |
| Used in | All sectors | Retail, Real Estate, Banking | Government, Events, Projects |

**CTA:** [Request a Demo of Our Tools]

---

## 9. Page 6 — Case Studies

### Page Header
- Headline: Case Studies
- Sub-headline: Real challenges. Real clients. Real outcomes.

### Filter Bar
Filters: [ All ] [ Retail ] [ Finance ] [ Oil & Gas ] [ Industrial ] [ Government ] [ Real Estate ] [ Transport ]

### Case Study Card Grid Layout
- 2 or 3 columns, each card shows: sector tag, title, geography, one-line summary
- Click opens individual case study page or expands into full detail

---

### Case Study 01: Identifying Potential Locations to Expand a Grocery Store Network

- **Sector:** Retail & Food Products
- **Geography:** Dubai and Abu Dhabi, UAE
- **Target Segment:** Grocery shops, Consumers
- **Methodology:** Qualitative IDIs: 20+ · Quantitative Interviews: 500+ · Secondary research for competition mapping

**The Challenge:**
A diversified business group with interests in Healthcare, Education, Food & Retail, and Financial Services needed to expand their retail operations. Key questions included: Which locations are most attractive? How many stores? What store format? What product mix? What is the competitive landscape?

**Our Approach:**
4BC conducted a thorough geo-mapping exercise dividing cities into clusters, plotting retail stores, and understanding the demographic profile of residents and their grocery shopping habits. High-attractiveness clusters were identified.

**The Outcome:**
The client expanded their retail operations across high-attractive clusters across each of the cities.

---

### Case Study 02: Opportunity Assessment of Digitalization of Minibus Taxis in South Africa

- **Sector:** Payment Habits / Transport
- **Geography:** South Africa
- **Target Segment:** Commuters, Taxi Owners, Taxi Associations, Taxi Financiers
- **Methodology:** Qualitative IDIs: 50+ · Quantitative Interviews: 500+

**The Challenge:**
A leading card payment company wanted to develop a solution to digitalize the ticketing system among minibus taxis in South Africa by understanding the opportunity size, drivers, and barriers.

**Our Approach:**
4BC conducted an opportunity sizing analysis by estimating mini-bus taxis operating in South Africa, along with large sample quantitative and qualitative in-depth interviews with drivers, passengers, taxi associations and government authorities.

**The Outcome:**
4BC recommended a go-to-market strategy based on findings and a phase-wise roll-out plan for successful implementation.

---

### Case Study 03: Usage & Attitudes of HORECA Towards Oils in Saudi Arabia

- **Sector:** FMCG — Vegetable Oils
- **Geography:** Saudi Arabia (Riyadh, Jeddah, Dammam)
- **Target Segment:** HORECA
- **Methodology:** Quantitative Interviews: 300+

**The Challenge:**
A leading FMCG company based in Saudi Arabia — offering edible oil, sugar, pasta and ghee — needed to develop a successful growth strategy in the HORECA segment by understanding their needs and expectations in the "oil" category.

**Our Approach:**
Large sample quantitative research across HORECA in Saudi Arabia to understand purchase habits, brand awareness, and sourcing practices.

**The Outcome:**
The client was able to penetrate further into the HORECA segment for oils and fats by offering the right packaging and SKUs.

---

### Case Study 04: Develop Channel Strategy for a Large Business Group in UAE

- **Sector:** Automotive, Construction Equipment, Services
- **Geography:** UAE
- **Target Segment:** Dealers, Consumers
- **Methodology:** Qualitative IDIs: 100+ · Quantitative Interviews: 4,500+ · Secondary Research · Geo-mapping

**The Challenge:**
One of the largest business Groups in UAE wanted to understand the channel network for all its offerings across automobile, industrial equipment, and services.

**Our Approach:**
4BC used the geo-mapping platform to understand the demographics of residents, superimposed data onto the existing channel network, conducted 100+ Expert IDIs (business and government sector), and mapped 1,500+ GPS locations along with tons of secondary data.

**The Outcome:**
The client developed a 5-year network strategy based on the findings.

---

### Case Study 05: Market Assessment of Illegal Remittance in Saudi Arabia

- **Sector:** Remittance / Government
- **Geography:** Saudi Arabia
- **Target Segment:** General consumers (expats)
- **Methodology:** Quantitative Interviews: 500+ · Observation Research · Mystery Visits: 10+

**The Challenge:**
A government entity of Saudi Arabia needed to understand the volume of illegal remittance originating from the country.

**Our Approach:**
In-depth analysis to estimate the market size using extrapolation techniques. Large sample quantitative survey among expats + desk research + qualitative in-depth interviews to understand the modus operandi of remitters.

**The Outcome:**
4BC recommended the lost opportunity size and measures to curb illegal remittance. The client understood the quantum, value, and modus operandi — and took measures to curb the illegal channel.

---

### Case Study 06: Market Feasibility for Setting Up a Concrete Pipe Manufacturing Unit in Oman

- **Sector:** Industrial — Concrete Pipes
- **Geography:** UAE, Oman and Saudi Arabia
- **Target Segment:** Manufacturers, EPC Consultants and Contractors
- **Methodology:** Qualitative IDIs: 50+ · Secondary Research

**The Challenge:**
A large Omani Group needed to understand the market potential for concrete pipe business in Oman and its export opportunity to neighboring countries.

**Our Approach:**
4BC conducted competition landscape, market sizing, market share, and market forecast analysis for sewage pipelines and storm water drainage pipelines across UAE, Saudi Arabia and Oman.

**The Outcome:**
The client has started operations of manufacturing concrete pipes in Muscat, Oman, targeting Oman, UAE and Saudi Arabia.

---

### Case Study 07: Customer Satisfaction Study for a Major O&G Business in the UAE

- **Sector:** Oil & Gas — Commercial Fuel, LPG, Aviation Fuel, Marine Fuel
- **Geography:** UAE
- **Target Segment:** Decision makers among customer companies
- **Methodology:** Quantitative Interviews (CATI, Online): 300+

**The Challenge:**
The petroleum retail business of a major group — with a wide network of service stations and B2B offerings — needed to assess current satisfaction levels across customer touchpoints and identify key improvement areas.

**Our Approach:**
A customer relationship assessment program was designed to assess satisfaction levels, identify key strengths and improvement areas. The Customer Satisfaction program has been an annual affair conducted for more than 10 rounds covering 10+ client businesses.

**The Outcome:**
Clear improvement areas identified for each survey round. The client made changes to further consolidate loyalty — and the program served as inputs for winning the Dubai Quality Award.

---

### Case Study 08: Competitive Market Intelligence Study on Various Free Zones in the UAE

- **Sector:** Real Estate — Free Zones
- **Geography:** UAE
- **Target Segment:** Offices, Industrial Units, Land, Flexi Desk
- **Methodology:** Mystery Calls: 50+ · Secondary Research

**The Challenge:**
A prominent government-owned free zone authority needed to understand the competition offerings and conduct a benchmarking competitive intelligence study among various free zones in the UAE.

**Our Approach:**
4BC conducted desk research along with mystery calls to free zones to understand offerings and prices.

**The Outcome:**
The client developed their offerings to be competitive in the local UAE market.

---

**Bottom CTA:** [Request a Custom Case Study Discussion →]

---

## 10. Page 7 — Our Team

### Page Header
- Headline: Our Team
- Sub-headline: Senior-led. MEA-experienced. Research-obsessed.

### Intro Copy
Our team brings a cumulative 100+ years of market research and consulting experience across the Middle East, Africa, Asia and Europe. Every engagement is led by senior practitioners — never delegated to junior researchers.

### Team Grid

**Layout:** Responsive grid of team cards. Each card: photo placeholder, name, title, short bio. On click/hover: full bio expands.

---

#### Sukhdev Singh — Partner, Insights & Strategy

Sukhdev is the head of Business Research and Consulting practice in the MEA region. Till recently he headed the same practice at Kantar MEA since 2007. He possesses over 25 years of experience in Africa & Middle East, Asia and Far-East Asian markets. During his long career Sukhdev has helped many clients with their market entry strategies across industries as diverse as biscuits to boilers. He is also a Stakeholder Satisfaction Expert and along with Business-to-Business and Government Sector expert.

---

#### Siva Sankar — Director, Insights

Siva has more than a decade of rich experience in Business and Industrial Research, and has worked across diverse geographies including the Middle East, North Africa, India, China, Russia, and Turkey. He has been helping clients with their market entry and business expansion strategies, and is responsible for comprehensive delivery of solutions related to opportunity assessment, market sizing, competitor analysis, new product & market entry strategy development, channel assessment, network development, geo-mapping, and understanding regulatory environments.

---

#### Sandeep Vaddey — Director, Insights

Sandeep has more than 19 years of Business Research and Consulting experience across Middle East, Africa, Turkey and Russia. He has advised clients across a wide range of sectors including Oil & Gas, Energy, Construction, Petrochemicals, General Engineering, and ICT. Sandeep's core competence is in conducting Market and Competitive Assessment, Market entry strategies, Market expansion, New product development, Geo-mapping and Feasibility studies.

---

#### Angad Kenghe — Senior Manager, Insights

Angad comes with over 5+ years of diverse research experience across consumer insights, business research, videometrics, and retail panel-based methodology. He has worked with small & medium businesses as well as large players, spanning MEA, US & Europe, and India regions. He has helped clients with projects across market overview, industry analysis, competitor landscape, new product development, feasibility, mystery shopping, and customer experience.

---

#### Tarun Sinhal — Senior Consultant

Tarun possesses over 18 years of experience in Market Research across Middle East, Africa, India, including a brief exposure to research projects in North America. He has worked on custom research projects across various domains including Branding, Communication, Demand Estimation, Pricing, New Product Development, Channel Dynamics, and Market Landscape. Key clients include Multinationals (Unilever, Daimler, LG, Samsung, Kia Motors), Regional businesses (Al-Futtaim, du, Etisalat, Thermax), and Government (MoTC Qatar, Insurance Authority UAE, WRDC UAE, Emirates Foundation).

---

#### Anu Param — Sr. Project Management Executive

Anu has over 15 years in the MR industry and has been working within Business Consulting since 2020. She has worked with clients across sectors including Telecom, Financial services, Retail, and Auto. Anu is responsible for end-to-end client servicing from project management activities (including Field & Tab Projects) through to preparation of final reports. She is directly involved in all project activities including questionnaire scripting, briefing of interviewers, monitoring fieldwork quality & timelines, managing vendors, and managing client co-ordination activities.

---

#### Vamsi Ganti — Senior Consultant

Vamsi brings more than 15 years of specialization in the Customer Experience domain with experience in relationship assessment, mystery shopping, employee engagement studies. His expertise varies in helping clients find solutions on developing customer experience programs, mystery shopping programs, employee experience, and trade experience. He has been engaged in developing CX programs across a wide variety of clients in diverse fields like Telecom, Retail, Oil & Gas, Automotive, SEZ, Finance, and Regulatory bodies. He also has experience in conducting client engagement workshops to drive customer experience adoption across the client organization.

---

**CTA:** [Work With Our Team →]

---

## 11. Page 8 — Clients

### Page Header
- Headline: Our Clients
- Sub-headline: Trusted by industry leaders across the MEA region

### Intro Copy
Our clientele spans multiple industries across the MEA region — from Fortune 500 multinationals to regional conglomerates and government entities.

### Client Logo Wall — Grouped by Sector

**Layout:** Logo grid grouped under sector headings. Logos in grayscale, full color on hover.

**Free Zone & Real Estate:**
Palmare · DMCC · Nakheel · Palm Hills · Dubai South · Dubai Airport Freezone · Dubai Development Authority · Emaar · DP World · WJ Towell

**Construction, Building Material & Engineering:**
Jotun · ACC · Sadolin · Twiga · Arkan · Geberit · ThyssenKrupp · Al-Futtaim Engineering · Amiantit Oman · The Kanoo Group · Thermax

**Petrochemicals, Energy & Utilities:**
Aramco · ENOC · Shell · Castrol · Emarat · Emirates Gas · Horizon Terminals · MARAFIQ · JW Azure

**IT, Electronics & Home Appliances:**
BARCO · Ariston · LG · Epson · Samsung

**Telecom:**
du · Maroc Telecom · Airtel · Vodafone · e& (Etisalat) · Dizzy

**Banking, Finance & Insurance:**
VISA · ADCB · American Express · Bupa · RSA · UAE Insurance Authority · SABB · HSBC · Cashee · RFIGlobal

**Automotive:**
Ford · Mercedes · Toyota · Nissan · Audi · Volvo · GM · Renault · Kia · Bridgestone

**Regional Conglomerates:**
Abdul Latif Jameel · JK Cement · Alghanim · Al-Futtaim Group

**Government & Regulators:**
GACA · mada

**FMCG & Food:**
Savola · Nestlé · Nestlé Professional · Unilever · LeSaffre · BMMI · LuLu · Freshly Foods · KBBO Group

### Testimonials Section

Same 4 testimonials as homepage, displayed here in a 2×2 grid layout with cards.

---

## 12. Page 9 — Contact

### Page Header
- Headline: Get in Touch
- Sub-headline: Let's talk about your next research project

### Layout: 2-column

**Left column — Contact Form:**

| Field | Type | Required |
|---|---|---|
| Full Name | Text input | Yes |
| Company Name | Text input | Yes |
| Job Title | Text input | No |
| Email Address | Email input | Yes |
| Phone Number | Tel input | No |
| Country | Dropdown | No |
| Service Area | Dropdown: Business Research / Customer Experience / Impact Assessment / Geolocation / Advisory / Other | No |
| Project Brief | Textarea | No |
| Submit button | [Submit Request] gold CTA | — |

**Right column — Office Info:**

- **Office:** Dubai, UAE (full address to be confirmed by client)
- **Email:** (to be added)
- **Phone:** (to be added)
- **LinkedIn:** (to be added)
- **Map embed:** Google Maps of Dubai office location

### Bottom CTA Banner

```
"Whether you need a quick market snapshot or a full strategic study — 
 we're ready to design the right research for you."
```

---

## 13. Interactive Features & Animations

| Feature | Page | Description |
|---|---|---|
| Animated stat counters | Home (Section 2) | Numbers count up from 0 on scroll-into-view. Use `IntersectionObserver`. |
| Auto-scrolling logo strip | Home (Section 8) | Continuous horizontal scroll of client logos. Pause on hover. |
| Testimonial slider | Home (Section 9) | Auto-rotate every 4 seconds. Dots navigation. Fade transition. |
| World map with pins | About (Section 4) | Interactive SVG or illustrated map. Hover on region to highlight countries. |
| 3-step process animation | About (Section 3) | Steps reveal sequentially on scroll with fade-in + slide-up. |
| Sector card expand | Sectors (Section 2) | Click to expand full sector detail. Smooth accordion animation. |
| Case study filter | Case Studies | Client-side filtering by sector tag. Smooth grid re-layout. |
| Team card hover/expand | Team | Hover reveals short bio excerpt. Click expands full bio. |
| Scroll-triggered fade-ins | All pages | Sections fade in and slide up slightly as user scrolls into them. Subtle, not heavy. |
| Sticky nav shadow | Global | Header gains box-shadow on scroll. |
| Gradient accent lines | Section dividers | 3px gradient line between major sections. |

---

## 14. SEO & Meta

### Page Titles & Meta Descriptions

| Page | Title Tag | Meta Description |
|---|---|---|
| Home | 4BC Global — Research Based Advisory for MEA | Specialist B2B and B2C market research firm serving 40+ countries across Middle East & Africa. Market entry, customer experience, impact assessment and more. |
| About | About 4BC Global — Our Story, Team & Approach | Formerly 4SiGHT Business Consulting with Kantar origins. 100+ years cumulative research experience across the MEA region. |
| Services | Research Services — 4BC Global | Bespoke research solutions: business research, customer experience, impact assessment, geolocation services. Advisory across the full business lifecycle. |
| Sectors | Sectors We Serve — 4BC Global | Market research across Retail, Banking, Real Estate, Oil & Gas, Industrial, Telecom, and more. 450+ engagements across MEA. |
| Tools | Proprietary Tools — 4BC Global | 4BC InFuse, Landscape, and ImpactIQ — intelligence platforms for competitive profiling, network planning, and impact measurement. |
| Case Studies | Case Studies — 4BC Global | Real client challenges and outcomes across UAE, Saudi Arabia, South Africa and more. |
| Team | Our Team — 4BC Global | Meet our senior research team with 100+ years cumulative experience across MEA markets. |
| Clients | Our Clients — 4BC Global | Trusted by VISA, ENOC, Unilever, Toyota, DP World, and 100+ other industry leaders across MEA. |
| Contact | Contact Us — 4BC Global | Get in touch for a research proposal. Dubai-based advisory firm serving 40+ countries. |

### Open Graph / Social

- OG Image: Branded social card with 4BC logo + tagline on dark gradient background (1200×630px)
- OG Type: website
- Twitter Card: summary_large_image

---

## 15. Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Desktop | ≥ 1200px | Full layout, 12-column grid |
| Laptop | 992–1199px | Slight padding adjustments |
| Tablet | 768–991px | 2-column grids, stacked hero |
| Mobile | < 768px | Single column, hamburger nav, stacked cards |

### Mobile-specific adjustments:
- Hero text centered, CTA buttons stack vertically
- Stats bar wraps to 2×3 grid or vertical stack
- Service cards stack single column
- Case study cards stack single column
- Team cards: 2-column on tablet, 1-column on mobile
- Testimonial slider: swipe-enabled
- Section padding reduced to 48px top/bottom
- Font sizes scale down proportionally (H1: 32px, H2: 26px on mobile)

---

## Appendix: Asset Checklist

Before development, ensure the following assets are collected:

- [ ] 4BC Global logo (SVG, PNG — light and dark versions)
- [ ] Team member headshot photos (7 photos, high-res, cropped square)
- [ ] Client logos (all listed clients — SVG or high-quality PNG preferred)
- [ ] Office address (Dubai — full street address for map embed)
- [ ] Contact email and phone number
- [ ] LinkedIn profile URL
- [ ] Any screenshots or visuals for the 3 proprietary tools (InFuse, Landscape, ImpactIQ)
- [ ] Google Analytics / Tag Manager ID
- [ ] Favicon (derived from logo mark)
- [ ] OG social sharing image (1200×630)

---

*End of 4BC Global Website Blueprint*
