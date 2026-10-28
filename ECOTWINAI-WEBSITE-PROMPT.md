# EcoTwin AI — Company Website Brief & Build Prompt

> **Purpose of this file:** Use this document as the primary prompt/context when building a **separate marketing website** for **https://ecotwinai.com**.  
> That site should explain who EcoTwin AI is, what the product does, and deep-link into the live app at **https://app.ecotwinai.com**.  
> Do **not** rebuild the 3D editor here; this is a company / product landing site only.

---

## How to use this as a prompt

Copy from the section **「PROMPT START」** to **「PROMPT END」** into a new Cursor/AI project, or attach this whole file and say:

> Build a marketing website for EcoTwin AI using this brief. Primary domain: ecotwinai.com. CTA links go to app.ecotwinai.com.

---

## PROMPT START

### 1. Company identity

| Field | Value |
|--------|--------|
| Brand name | **EcoTwin AI** (also written EcoTwin) |
| Product name | **Eco Digital Twin Sandbox** (the browser app) |
| Marketing domain | `https://ecotwinai.com` |
| App domain | `https://app.ecotwinai.com` |
| YouTube | `https://www.youtube.com/@EcoTwinAI` |
| Tagline (EN) | Urban Design & Energy Simulation |
| One-line mission (EN) | Software for urban design and energy simulation — helping architects, planners, and engineers shape more sustainable cities, from early massing to performance-ready digital twins. |

**Positioning (EN, official About copy):**

EcoTwin AI is a specialized company focused on software for urban design and energy simulation. We build tools that help architects, planners, and engineers shape more sustainable cities — from early massing to performance-ready digital twins.

Our platform, Eco Digital Twin Sandbox, brings urban modeling and simulation into a single browser-based workspace. Design and edit the built environment in 3D, assign surface and material properties, and prepare models for rigorous analysis — without chaining together disconnected desktop tools.

**What sets us apart**
- End-to-end urban twin: design, edit, and analyze in one place
- Built for practitioners: intuitive 3D editing, not only research workflows
- Physics-ready pipeline: models prepared for industry-grade engines
- Web-first delivery: accessible collaboration without heavy local installs

**Audience:** architects, urban planners, energy / sustainability consultants, researchers, municipalities, and engineering teams working on buildings and neighborhoods.

**Tone:** professional, clear, confident, technical-but-accessible. Avoid hype, crypto/AI buzzword stacking, and generic “revolutionize the future” language. Prefer concrete capabilities.

---

### 2. What the website must do

1. Explain **company purpose** and **product value** (urban digital twin → design + performance).
2. Showcase **current capabilities** of the Sandbox (honest: what works today).
3. Tease **roadmap / coming soon** (simulations rolling out).
4. Provide clear CTAs to the app:
   - Primary: **Open App / Launch Sandbox** → `https://app.ecotwinai.com`
   - Secondary: **Sign in** → `https://app.ecotwinai.com/auth/login.html` (or app login entry)
   - Secondary: **Create account / Subscribe** → app register / subscribe flows
   - Help: **Tutorials** → `https://www.youtube.com/@EcoTwinAI`
5. Optional: Contact / About / Pricing overview (pricing lives mainly in-app via Stripe).
6. Site language: **English primary** (company markets internationally). Optional bilingual EN/FA later; start with English unless asked otherwise.
7. This site is **not** the 3D editor. No Babylon.js CAD chrome. Marketing composition only.

---

### 3. Current product status (what exists today)

Live product: **Eco Digital Twin Sandbox** at `app.ecotwinai.com` — a modular, browser-based 3D urban modeling workspace (Babylon.js).

#### 3.1 Auth, billing, admin (shipped)

- Email/password registration & login
- Google & Microsoft OAuth (when configured)
- Forgot / reset password, email verification flows
- Guest mode for limited try-before-subscribe (where enabled)
- Stripe Checkout subscriptions
- Plans (USD): weekly $10 · monthly $35 · quarterly $100 · yearly $350
- Subscription gates on Save / Export when plan expired
- User Profile & Billing (cards metadata via Stripe; no raw card storage on EcoTwin)
- Admin panel for user/subscription management
- Bug report from Help menu
- Docker-based deploy (app + PostgreSQL); portable Docker dist for demos

#### 3.2 3D urban design & editing (shipped)

- Real-time 3D scene with grid, lighting, soft shadows, camera controls
- Draw & edit: rectangles, circles, polygons, linear paths, spheres
- Buildings (including generators / merge), trees, furniture, terrain
- Transform tools: select, move, rotate, scale, duplicate, undo/redo
- Mesh editing / vertex snap / measurements
- Object list & properties panels
- Surface **Types** manager: catalogs for plants, soils, water, roads, buildings, optical materials, carbon emission factors, PV parameters, generic surfaces — aligned with CDT-UBEM-style data packages
- Surface layer stacking / material assignment for simulation-ready models
- Preferences & post-processing settings

#### 3.3 Map & geo (shipped)

- **Map Bridge**: pick an area on a map and load urban features into the scene
- Default path: buildings from **OSM + Overture** (with heights where available)
- Georeferencing support (`ecotwin_georef`) for location-aware models
- GeoJSON import

#### 3.4 Import / export & project formats (shipped)

| Format | Role |
|--------|------|
| **`.CDT`** (CityDigTwin) | Primary project package (ZIP-like layout with `surface_inputs/` + config) |
| **`.ecofile`** | EcoFile job package (scene + settings for simulation pipelines) |
| **STL / OBJ / GLB / FBX** | Mesh export |
| **STL / GeoJSON / generic models** | Import |
| CDT-UBEM data structure | Import/export catalogs and assignments for energy/microclimate prep |

#### 3.5 Simulation pipeline (built in stack; UX partially gated)

Internal stack includes PALM (urban microclimate) and EnergyPlus (building energy) services in Docker dist. In the editor UI, the **Simulation** menu is still **hidden until ready for general users**, but the company messaging already announces these capabilities as **coming soon / rolling out**.

Wizard/UI pieces exist for:
- Run PALM (microclimate) — outputs selection, EcoFile job package, download outputs, view results in 3D
- Run EnergyPlus — from scene buildings or uploaded IDF + weather; outputs; 3D result viz

**Marketing rule:** Say “coming soon / rolling out shortly” for in-app simulation runs and result visualization for end users. Do **not** claim fully public production simulation availability unless later updated.

---

### 4. Roadmap / next goals (for website “Coming soon” & vision)

Use these as forward-looking sections; keep wording accurate (“rolling out”, “in development”, “on the roadmap”).

#### Near-term product rollout
- PALM-based urban **microclimate** simulation from the twin
- **EnergyPlus** building energy analysis on the same model
- **In-scene visualization** of simulation results
- **Scenario comparison** for design alternatives
- Expanded **carbon** and surface performance workflows
- Public enablement of the Simulation menu for subscribers

#### Platform & business goals
- Grow `ecotwinai.com` as the public face; `app.ecotwinai.com` as the product
- Clear funnel: Learn → Watch tutorial → Open app → Subscribe
- Cloud collaboration / shared projects (aspirational — only mention if framed as future)
- Deeper GIS / city-scale workflows (map-driven massing already started via Map Bridge)
- Stronger tutorials and case studies for practitioners
- Enterprise / team plans (beyond current individual Stripe plans — aspirational)

#### Long-term vision
- One browser workspace from early urban massing → materials → physics-grade simulation → design decisions for cooler, lower-carbon, more efficient cities
- Replace fragmented desktop toolchains with a web-first digital twin sandbox

---

### 5. Suggested site structure

1. **Hero** — Brand EcoTwin AI dominant; one headline; one supporting sentence; CTA group (Open App, Watch Tutorial). Full-bleed product/atmosphere visual (3D city / twin imagery), not a dashboard collage.
2. **Purpose** — Why EcoTwin exists (sustainable urban design + energy).
3. **Product** — What the Sandbox is; link to app.
4. **Features** — Current capabilities (design, types/materials, map import, formats, auth/cloud access). Avoid fake metrics.
5. **Coming soon** — PALM, EnergyPlus, result viz, scenarios, carbon workflows.
6. **How it works** — short 3 steps: Model in browser → Assign surfaces → Simulate & decide (with honesty that simulation is rolling out).
7. **Pricing teaser** — point to in-app subscribe; optionally list plan names/prices as reference.
8. **Footer** — App link, YouTube, legal placeholders, contact email placeholder.

Keep sections single-purpose. Prefer one composition in the first viewport (brand + headline + short line + CTAs + dominant visual). No card-heavy hero. Avoid purple-gradient AI clichés and generic Inter-only “startup template” look unless brand assets require it — marketing site may be more expressive than the app’s Apple-like dense CAD chrome (`Action Blue #0066cc` is the app accent; marketing can extend a coherent EcoTwin palette around clarity, urban, and environmental seriousness without looking like every other AI landing page).

---

### 6. Required links & CTAs

| Label | URL |
|--------|-----|
| Open / Launch App | https://app.ecotwinai.com |
| Sign in | https://app.ecotwinai.com/auth/login.html |
| Register | https://app.ecotwinai.com/auth/register.html |
| Subscribe / Pricing in app | https://app.ecotwinai.com/auth/subscribe.html |
| Tutorials (YouTube) | https://www.youtube.com/@EcoTwinAI |
| Company site (self) | https://ecotwinai.com |

Open app links in same tab or new tab consistently; prefer same tab for primary CTA.

---

### 7. Copy snippets you may reuse

**Headline options**
- Design cities. Simulate performance. In one browser.
- From urban massing to energy-ready digital twins.
- A web-first sandbox for sustainable urban design.

**Supporting sentence**
- EcoTwin AI builds Eco Digital Twin Sandbox — model buildings and landscapes in 3D, assign real surface properties, and prepare for industry-grade microclimate and energy analysis.

**CTA**
- Open Sandbox
- Launch App
- Watch tutorials

**Coming soon blurb**
- Capabilities already in our stack, rolling out to users shortly: PALM microclimate, EnergyPlus building energy, in-scene results, scenario comparison, and expanded carbon workflows.

---

### 8. Tech / delivery notes for the marketing project

- Separate repo/project from the Sandbox app.
- Static site is fine (HTML/CSS/JS, or Next/Astro/etc.) — choose what fits hosting for `ecotwinai.com`.
- SEO: title/description around urban digital twin, energy simulation, EcoTwin AI.
- Performance: optimize hero media; no need to embed the full Babylon editor.
- Analytics optional.
- Do not expose admin credentials, API secrets, or Stripe keys on this site.
- Accessibility: real headings, keyboard focus, sufficient contrast.

---

### 9. Explicit non-goals

- Do not clone the Babylon editor UI.
- Do not claim simulation is fully live for all users today.
- Do not invent customers, awards, or metrics.
- Do not put paywalls on the marketing site; billing stays in the app.

---

## PROMPT END

---

## Appendix A — Persian summary (برای خودتان / تیم)

**هدف شرکت:** ساخت نرم‌افزار طراحی شهری و شبیه‌سازی انرژی تا معماران، برنامه‌ریزان و مهندسان شهرهای پایدارتری بسازند — از حجم‌گذاری اولیه تا دوقلوی دیجیتال آماده‌ی تحلیل.

**محصول فعلی (`app.ecotwinai.com`):** سندباکس سه‌بعدی مرورگری برای مدل‌سازی محیط ساخته‌شده، تخصیص نوع سطوح و مصالح، ورود از نقشه (OSM/Overture)، ذخیره/خروجی CDT و EcoFile و فرمت‌های مش، به‌همراه ورود، اشتراک Stripe و پنل ادمین.

**اهداف بعدی:** انتشار عمومی شبیه‌سازی میکروکلیما (PALM)، انرژی ساختمان (EnergyPlus)، نمایش نتایج داخل صحنه، مقایسه سناریوها، و گردش‌کار کربن؛ سایت `ecotwinai.com` به‌عنوان معرفی شرکت و قیف ورود به اپ.

**کار این فایل:** پرامپت کامل برای ساخت سایت بازاریابی جدا؛ لینک اصلی CTA به اپ.

---

## Appendix B — Snapshot of app stack (context only)

- Frontend editor: HTML + modular JS + Babylon.js  
- Backend: Node/Express, PostgreSQL, Prisma  
- Billing: Stripe Checkout + webhooks  
- Auth: JWT cookies, Google/Microsoft OAuth  
- Simulation sidecars (Docker dist): PALM, EnergyPlus  
- App visual language (editor): dense CAD chrome, Action Blue `#0066cc` — marketing site need not copy CAD density

*Last compiled from EcoTwin Sandbox project context for use as an external website brief.*
