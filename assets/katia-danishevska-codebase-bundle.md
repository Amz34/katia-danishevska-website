# Katia Danishevska — Complete Codebase Bundle for Claude Inspection

- **Live Origin (Cloudflare Pages):** https://katia-danishevska.pages.dev/
- **GitHub Repository:** https://github.com/Amz34/katia-danishevska-website
- **Design Archetype:** Zero-Motion Swiss Editorial Quiet Luxury
- **Typography Tokens:** Geist & Geist Mono
- **Client Profile:** Katia Danishevska · Strategic Talent Partner | Digital Assets & FinTech | Executive Search

---

## File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <script>
    try {
      var s = localStorage.getItem('color-scheme');
      if (s === 'dark') {
        document.querySelector('meta[name="color-scheme"]').content = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.querySelector('meta[name="color-scheme"]').content = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  </script>

  <title>Katia Danishevska | Strategic Talent Partner</title>
  <meta name="description" content="Strategic Talent Partner specializing in Digital Assets, FinTech, and Executive Search across Switzerland, Europe, and global financial hubs.">
  <link rel="canonical" href="https://katia-danishevska.pages.dev/">

  <!-- WhatsApp, LinkedIn & Social Link Preview with Official KD Monogram -->
  <meta property="og:site_name" content="Katia Danishevska">
  <meta property="og:title" content="Katia Danishevska | Strategic Talent Partner">
  <meta property="og:description" content="Strategic Talent Partner in Digital Assets, FinTech, and Executive Search. Approximately ten years connecting specialist and executive leaders across global markets.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://katia-danishevska.pages.dev/">
  <meta property="og:image" content="https://katia-danishevska.pages.dev/assets/og-card.jpg">
  <meta property="og:image:secure_url" content="https://katia-danishevska.pages.dev/assets/og-card.jpg">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image" content="https://katia-danishevska.pages.dev/assets/kd-logo-square.jpg">
  <meta property="og:image:width" content="600">
  <meta property="og:image:height" content="600">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Katia Danishevska | Strategic Talent Partner">
  <meta name="twitter:description" content="Digital Assets, FinTech &amp; Executive Search across Switzerland and international markets.">
  <meta name="twitter:image" content="https://katia-danishevska.pages.dev/assets/og-card.jpg">

  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">

  <!-- Typography: Geist & Geist Mono -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css">

  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <a href="#main" class="skip-link button-sm">Skip to content</a>
  <div id="scroll-progress-bar" class="scroll-progress-bar" aria-hidden="true"></div>
  <div id="nav-sentinel" class="nav-sentinel" aria-hidden="true"></div>

  <!-- Floating Translucent Header -->
  <header class="site-nav-wrap">
    <nav id="site-nav" class="site-nav" aria-label="Primary">
      <a href="index.html" class="brand-mark" aria-label="Katia Danishevska Home">
        <span class="brand-badge" aria-hidden="true">KD</span>
        <span class="title-4">Katia Danishevska</span>
      </a>

      <ul class="nav-links">
        <li><a href="index.html" class="nav-link title-4" aria-current="page">Overview</a></li>
        <li><a href="experience.html" class="nav-link title-4">Experience</a></li>
        <li><a href="mandates.html" class="nav-link title-4">Mandates</a></li>
        <li><a href="#corridors" class="nav-link title-4">Corridors</a></li>
        <li><a href="#track-record" class="nav-link title-4">Track Record</a></li>
        <li><a href="#connect" class="nav-link title-4">Connect</a></li>
      </ul>

      <div class="nav-actions">
        <button id="theme-toggle" type="button" class="icon-btn" aria-label="Toggle color theme" aria-pressed="false">
          <span class="icon-crossfade" aria-hidden="true">
            <span class="theme-icon-sun">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="48"/><path d="M128 36v-12M128 232v-12M63 63l-9-9M202 202l-9-9M36 128H24M232 128h-12M63 193l-9 9M202 54l-9 9"/></svg>
            </span>
            <span class="theme-icon-moon">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><path d="M210.7 152.6A92 92 0 0 1 103.4 45.3a92 92 0 1 0 107.3 107.3Z"/></svg>
            </span>
          </span>
        </button>

        <button id="menu-toggle" type="button" class="icon-btn menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
          <span class="hamburger-lines" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  </header>

  <!-- Full-Height Mobile Navigation Panel -->
  <aside id="mobile-drawer" class="mobile-drawer" aria-label="Mobile menu" aria-hidden="true">
    <a href="index.html" class="mobile-drawer-link heading-5"><span>Overview</span><span class="mono-meta caption-4 text-muted">01</span></a>
    <a href="experience.html" class="mobile-drawer-link heading-5"><span>Experience</span><span class="mono-meta caption-4 text-muted">02</span></a>
    <a href="mandates.html" class="mobile-drawer-link heading-5"><span>Mandates</span><span class="mono-meta caption-4 text-muted">03</span></a>
    <a href="#corridors" class="mobile-drawer-link heading-5"><span>Corridors</span><span class="mono-meta caption-4 text-muted">04</span></a>
    <a href="#track-record" class="mobile-drawer-link heading-5"><span>Track Record</span><span class="mono-meta caption-4 text-muted">05</span></a>
    <a href="#connect" class="mobile-drawer-link heading-5"><span>Connect</span><span class="mono-meta caption-4 text-muted">06</span></a>
  </aside>

  <main id="main" tabindex="-1">

    <!-- 1. HERO: ZERO-MOTION SWISS EDITORIAL ARCHITECTURE -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="hero-role-line">
              <span class="status-dot" aria-hidden="true"></span>
              <span class="caption-1">Strategic Talent Partner · Zürich, Zug &amp; European Corridors</span>
            </div>

            <h1 id="hero-title" class="heading-1 hero-gradient-text">
              Executive search &amp;<br>
              strategic talent for<br>
              regulated digital assets.
            </h1>

            <p class="body-2 hero-sub">
              Around ten years of executive search and talent acquisition across Swiss private banking, digital asset infrastructure, and European technology corridors.
            </p>

            <div class="hero-actions">
              <a href="https://www.linkedin.com/in/katia-danishevska-122224445" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-with-icon button-md">
                <span>Connect on LinkedIn</span>
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M40 128h176M144 56l72 72-72 72"/></svg>
              </a>

              <a href="assets/Katia-Danishevska-Executive-Dossier.pdf" download="Katia-Danishevska-Executive-Dossier.pdf" class="btn-pdf-download button-md" aria-label="Download Katia Danishevska Executive Dossier as PDF">
                <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 32h112l48 48v144a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8Z"/><path d="M160 32v48h48M128 120v64M96 152l32 32 32-32"/></svg>
                <span>Download Executive Dossier (PDF)</span>
              </a>

              <a href="experience.html" class="btn btn-secondary button-md">View Career Dossier</a>
            </div>

            <dl class="hero-proof-strip">
              <div>
                <dt class="caption-4 text-muted">Experience</dt>
                <dd class="title-2 tabular-nums mt-1">~10 Years</dd>
              </div>
              <div>
                <dt class="caption-4 text-muted">Swiss Banking Tenure</dt>
                <dd class="title-2 tabular-nums mt-1">5 yrs 10 mos</dd>
              </div>
              <div>
                <dt class="caption-4 text-muted">Median Mandate Turnaround</dt>
                <dd class="title-2 tabular-nums mt-1">38 Days</dd>
              </div>
              <div>
                <dt class="caption-4 text-muted">24-Mo Retention Rate</dt>
                <dd class="title-2 tabular-nums mt-1">94%</dd>
              </div>
            </dl>
          </div>

          <!-- Editorial Executive Dossier Plate -->
          <div class="dossier-frame" aria-label="Executive profile summary">
            <div class="dossier-inner">
              <div class="dossier-top">
                <div class="dossier-monogram" aria-hidden="true">KD</div>
                <div style="text-align: right;">
                  <div class="mono-meta caption-4 text-teal">ZÜRICH · ZUG · LJUBLJANA</div>
                  <div class="mono-meta caption-5 text-muted mt-1">Swiss &amp; European Talent Corridors</div>
                </div>
              </div>

              <div>
                <div class="title-2">Katia Danishevska</div>
                <p class="body-6 text-secondary mt-1">
                  Senior Strategic Talent Partner specializing in Digital Assets, FinTech, and Executive Leadership Mandates.
                </p>
              </div>

              <div class="dossier-list">
                <div class="dossier-row">
                  <span class="caption-4 text-muted">Present</span>
                  <span class="body-5">SwissChain · Senior Talent Partner</span>
                </div>
                <div class="dossier-row">
                  <span class="caption-4 text-muted">2020 to 2025</span>
                  <span class="body-5">AMINA Bank · Zug (FINMA-Regulated)</span>
                </div>
                <div class="dossier-row">
                  <span class="caption-4 text-muted">Agency Background</span>
                  <span class="body-5">ManpowerGroup IT · ISG · Adecco</span>
                </div>
                <div class="dossier-row">
                  <span class="caption-4 text-muted">Credentials</span>
                  <span class="body-5">MSc in HRM · University of Ljubljana</span>
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; border-top: 1px solid var(--border-hairline); padding-top: 12px;">
                <span class="caption-4 text-secondary">Status</span>
                <span class="caption-3 text-teal">Available for Advisory &amp; Mandates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. GUIDING PRINCIPLE (INSTANT CRISP EDITORIAL) -->
    <section class="tagline-section section-band" aria-label="Guiding principle">
      <div class="container">
        <p id="tagline-reveal" class="heading-2 tagline-text">
          Executive search works best when every brief starts with genuine business context, rigorous market calibration, and lasting discretion between founders and leadership candidates.
        </p>
      </div>
    </section>

    <!-- 3. EXECUTIVE PERSPECTIVE & PRACTICE FOCUS -->
    <section id="about" class="section reveal-block" aria-labelledby="about-heading">
      <div class="container">
        <div class="grid-asymmetric">
          <div>
            <span class="caption-3 text-teal">Perspective</span>
            <h2 id="about-heading" class="heading-3 mt-1">
              Grounded in European markets and Swiss regulated finance
            </h2>
            <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 24px;" class="text-secondary">
              <p class="body-3">
                Throughout my career across Switzerland, Slovenia, and wider international markets, I have partnered closely with founders, functional heads, and hiring committees navigating complex talent landscapes.
              </p>
              <p class="body-3">
                Serving 5 years and 10 months inside regulated Swiss digital asset banking at AMINA Bank (Zug) and now at SwissChain has shaped how I calibrate mandates: precision over volume, multicultural fluency, and genuine relationships with senior specialists.
              </p>
              <p class="body-3">
                Whether building foundational engineering and compliance teams or placing department leadership, every mandate balances immediate operational priorities with sustainable organizational architecture.
              </p>
            </div>
            <div class="mt-4">
              <a href="mandates.html" class="btn btn-secondary btn-with-icon button-sm">
                <span>Explore Functional Mandate Scope</span>
                <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M40 128h176M144 56l72 72-72 72"/></svg>
              </a>
            </div>
          </div>

          <div class="grid-2" style="gap: 16px;">
            <article class="card card-interactive">
              <div class="card-icon-box" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="88"/><path d="M128 40v176M40 128h176"/></svg>
              </div>
              <h3 class="title-2">Digital Assets &amp; Web3</h3>
              <p class="body-6 text-secondary mt-1">
                Specialist and executive hiring for blockchain infrastructure, MPC custody, distributed protocols, and regulated digital finance.
              </p>
            </article>

            <article class="card card-interactive">
              <div class="card-icon-box" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><path d="M32 208h192M56 168l48-48 36 36 60-76"/></svg>
              </div>
              <h3 class="title-2">Regulated FinTech Growth</h3>
              <p class="body-6 text-secondary mt-1">
                Strategic talent acquisition for high-velocity financial technology ventures, cross-border trading, and institutional custody.
              </p>
            </article>

            <article class="card card-interactive">
              <div class="card-icon-box" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><path d="M128 32L32 80l96 48 96-48-96-48Z"/><path d="M32 128l96 48 96-48M32 176l96 48 96-48"/></svg>
              </div>
              <h3 class="title-2">Executive Search</h3>
              <p class="body-6 text-secondary mt-1">
                Discreet search for C-suite officers, department directors, and high-impact functional leaders with strict non-disclosure.
              </p>
            </article>

            <article class="card card-interactive">
              <div class="card-icon-box" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="96"/><path d="M128 32a96 96 0 0 1 0 192M128 80a48 48 0 0 1 0 96"/></svg>
              </div>
              <h3 class="title-2">Governance &amp; Operations</h3>
              <p class="body-6 text-secondary mt-1">
                Building compliance, legal, operational risk, and institutional finance capabilities across Swiss and European frameworks.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. STATIC SWISS EXECUTIVE TALENT CORRIDOR MATRIX -->
    <section id="corridors" class="section section-band reveal-block" aria-labelledby="corridors-heading">
      <div class="container">
        <div style="max-width: 680px; margin-bottom: 24px;">
          <span class="caption-3 text-teal">Market Corridors &amp; Geographic Scope</span>
          <h2 id="corridors-heading" class="heading-3 mt-1">
            Swiss-rooted, European-connected talent corridors
          </h2>
          <p class="body-3 text-secondary mt-2">
            Structured search corridors engineered for regulatory rigor, technical depth, and discreet cross-border leadership placement.
          </p>
        </div>

        <div class="corridor-matrix-grid">
          <!-- Column 1: Zürich & Zug (Crypto Valley) -->
          <article class="corridor-card">
            <div>
              <div class="corridor-card-header">
                <span class="corridor-tag">FINMA &amp; Regulated Banking</span>
                <h3 class="title-1 mt-1">Zürich &amp; Crypto Valley (Zug)</h3>
                <p class="body-6 text-secondary">
                  Specialized placement of executive committee members, board directors, and department heads across Swiss digital private banking and tier-1 institutional custody.
                </p>
              </div>

              <ul class="corridor-list">
                <li>Chief Compliance Officer &amp; Financial Crime Risk</li>
                <li>General Counsel &amp; Regulatory Affairs</li>
                <li>VP &amp; Head of Custody Infrastructure (MPC / HSM)</li>
                <li>Head of Institutional Sales &amp; Asset Management</li>
              </ul>
            </div>

            <div class="corridor-compliance-badge">
              Swiss Banking Act · FINMA AML Ordinance Compliant
            </div>
          </article>

          <!-- Column 2: European Engineering Corridors -->
          <article class="corridor-card">
            <div>
              <div class="corridor-card-header">
                <span class="corridor-tag">Distributed Systems &amp; Labs</span>
                <h3 class="title-1 mt-1">Ljubljana · London · DACH</h3>
                <p class="body-6 text-secondary">
                  Connecting high-density technical engineering clusters in Central Europe and the UK with Swiss, European, and global digital asset ventures.
                </p>
              </div>

              <ul class="corridor-list">
                <li>VP of Engineering &amp; Architecture Fellows</li>
                <li>Lead Cryptography Researcher (ZKP / MPC)</li>
                <li>Senior Distributed Systems &amp; Protocol Engineers</li>
                <li>Head of Product &amp; Tokenomics Architecture</li>
              </ul>
            </div>

            <div class="corridor-compliance-badge">
              Deep Technical Calibration · Direct Network Referencing
            </div>
          </article>

          <!-- Column 3: Global Expansion Corridors -->
          <article class="corridor-card">
            <div>
              <div class="corridor-card-header">
                <span class="corridor-tag">Cross-Border Leadership</span>
                <h3 class="title-1 mt-1">Singapore · UAE · Global Markets</h3>
                <p class="body-6 text-secondary">
                  Sourcing international executives navigating cross-border regulatory harmonization, regional market expansion, and liquidity partnerships.
                </p>
              </div>

              <ul class="corridor-list">
                <li>Managing Director APAC &amp; Regional Hub Heads</li>
                <li>Global Head of Institutional Custody &amp; Clearing</li>
                <li>Chief Risk Officer &amp; International Governance</li>
                <li>Strategic Partnerships &amp; Corporate Development</li>
              </ul>
            </div>

            <div class="corridor-compliance-badge">
              Cross-Border Relocation · Multi-Jurisdictional Vetting
            </div>
          </article>
        </div>

        <!-- Mandate Metrics Strip -->
        <div class="metrics-strip">
          <div class="metric-box">
            <div class="metric-value">38 Days</div>
            <div class="metric-tag">Median Search Completion</div>
          </div>
          <div class="metric-box">
            <div class="metric-value">94%</div>
            <div class="metric-tag">24-Month Retention Rate</div>
          </div>
          <div class="metric-box">
            <div class="metric-value">100%</div>
            <div class="metric-tag">Discretion &amp; NDA Standard</div>
          </div>
          <div class="metric-box">
            <div class="metric-value">~10 Years</div>
            <div class="metric-tag">Established Talent Network</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. VERIFIED PLACEMENT TRACK RECORD & DISCRETION PROTOCOL -->
    <section id="track-record" class="section reveal-block" aria-labelledby="track-record-heading">
      <div class="container">
        <div style="max-width: 680px; margin-bottom: 24px;">
          <span class="caption-3 text-teal">Track Record</span>
          <h2 id="track-record-heading" class="heading-3 mt-1">
            Anonymized executive placement case summaries
          </h2>
          <p class="body-3 text-secondary mt-2">
            Selected leadership and functional appointments executed across Swiss digital banking, institutional custody, and digital asset protocols.
          </p>
        </div>

        <div class="placement-case-grid">
          <article class="placement-case-card">
            <span class="mono-meta caption-4 text-teal">FINMA-LICENSED DIGITAL BANK · ZUG</span>
            <h3 class="title-2 mt-1">Chief Compliance Officer</h3>
            <p class="body-6 text-secondary mt-2">
              Mapped 24 cross-border regulatory leaders across Switzerland and Liechtenstein. Completed mandate from intake to signed contract in 41 days with 100% candidate retention.
            </p>
            <div class="mono-meta caption-5 text-muted mt-3">Specialty: Regulatory Governance &amp; AML</div>
          </article>

          <article class="placement-case-card">
            <span class="mono-meta caption-4 text-teal">INSTITUTIONAL CUSTODY INFRASTRUCTURE · ZÜRICH</span>
            <h3 class="title-2 mt-1">VP of Engineering (MPC &amp; Custody)</h3>
            <p class="body-6 text-secondary mt-2">
              Identified and recruited a specialized cryptography and distributed systems leader from a tier-1 research laboratory. Successfully onboarded to scale a 35-person engineering team.
            </p>
            <div class="mono-meta caption-5 text-muted mt-3">Specialty: Multi-Party Computation &amp; HSM</div>
          </article>

          <article class="placement-case-card">
            <span class="mono-meta caption-4 text-teal">DIGITAL ASSET BROKERAGE · DACH REGION</span>
            <h3 class="title-2 mt-1">Head of Institutional Sales</h3>
            <p class="body-6 text-secondary mt-2">
              Structured an executive search targeting private banking relationship leaders with digital asset literacy. Closed mandate with customized long-term incentive calibration.
            </p>
            <div class="mono-meta caption-5 text-muted mt-3">Specialty: Tier-1 Family Offices &amp; Asset Managers</div>
          </article>
        </div>

        <!-- Confidential Mandate Discretion Protocol Banner -->
        <div class="discretion-banner">
          <div>
            <span class="caption-3 text-teal">Mandate Governance</span>
            <h3 class="heading-4 mt-1">Strict Confidentiality &amp; Discretion Protocol</h3>
            <p class="body-5 text-secondary mt-2">
              In small, specialized markets like Swiss private banking and digital assets, premature leaks damage market reputation. Every mandate begins with signed mutual non-disclosure, blind talent mapping, and direct partner execution without subcontracting to junior recruiters.
            </p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div class="dossier-row">
              <span class="caption-4 text-muted">Partner Direct</span>
              <span class="body-5">Zero junior delegation</span>
            </div>
            <div class="dossier-row">
              <span class="caption-4 text-muted">Blind Profiling</span>
              <span class="body-5">Client identity protected</span>
            </div>
            <div class="dossier-row">
              <span class="caption-4 text-muted">360° Referencing</span>
              <span class="body-5">Verified Swiss network</span>
            </div>
            <div class="mt-2">
              <a href="mandates.html" class="btn btn-secondary button-sm">Read Mandate Protocols</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. CAREER PROGRESSION -->
    <section class="section section-band reveal-block" aria-labelledby="journey-heading">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 40px;">
          <div style="max-width: 640px;">
            <span class="caption-3 text-teal">Career Progression</span>
            <h2 id="journey-heading" class="heading-3 mt-1">
              Consistent growth from specialist sourcing to executive leadership search
            </h2>
          </div>
          <a href="experience.html" class="btn btn-secondary btn-with-icon button-sm">
            <span>Full Career Timeline</span>
            <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M40 128h176M144 56l72 72-72 72"/></svg>
          </a>
        </div>

        <ol class="timeline">
          <li class="timeline-entry is-current">
            <span class="timeline-node" aria-hidden="true"></span>
            <div class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h3 class="title-1">Senior Talent Acquisition Partner</h3>
                  <p class="body-5 text-teal mt-1">SwissChain · Ljubljana, Slovenia &amp; Zürich</p>
                </div>
                <span class="mono-meta caption-2 text-muted">October 2025 to Present</span>
              </div>
              <p class="body-5 text-secondary mt-2">
                Leading full cycle recruitment for senior specialists, business leaders, and core functions across digital assets, fintech, technology, compliance, operations, and finance.
              </p>
            </div>
          </li>

          <li class="timeline-entry">
            <span class="timeline-node" aria-hidden="true"></span>
            <div class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h3 class="title-1">Talent Acquisition Partner · Digital Assets &amp; Executive Hiring</h3>
                  <p class="body-5 text-accent mt-1">AMINA Bank (formerly SEBA Bank AG) · Zug, Switzerland</p>
                </div>
                <span class="mono-meta caption-2 text-muted">January 2020 to October 2025 (5 yrs 10 mos)</span>
              </div>
              <p class="body-5 text-secondary mt-2">
                Spent nearly six years growing across three successive roles inside FINMA-regulated Swiss crypto bank: HR Specialist, Senior HR Specialist, and Talent Acquisition Partner. Led executive and specialist recruitment across banking, trading, compliance, and engineering.
              </p>
            </div>
          </li>

          <li class="timeline-entry">
            <span class="timeline-node" aria-hidden="true"></span>
            <div class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h3 class="title-1">IT Recruitment &amp; Advisory Foundations</h3>
                  <p class="body-5 text-secondary mt-1">ManpowerGroup · ISG International · Adecco Slovenia</p>
                </div>
                <span class="mono-meta caption-2 text-muted">June 2014 to December 2019</span>
              </div>
              <p class="body-5 text-secondary mt-2">
                Built core technical sourcing and consultative client capabilities across IT, engineering, and management placements following a Master Degree in Human Resource Management at the University of Ljubljana.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- 7. SPLIT ACCORDION: COLLABORATION & SEARCH METHODOLOGY -->
    <section class="section reveal-block" aria-labelledby="faq-heading">
      <div class="container">
        <div class="grid-asymmetric">
          <div>
            <span class="caption-3 text-teal">How We Collaborate</span>
            <h2 id="faq-heading" class="heading-3 mt-1">
              Clear alignment from first intake to offer close
            </h2>
            <p class="body-3 text-secondary mt-2">
              Every search prioritizes honest market calibration, direct candidate relationships, and structured communication with hiring committees.
            </p>
          </div>

          <div class="split-accordion" role="region" aria-label="Search methodology details">
            <div class="split-acc-item is-open">
              <h3>
                <button type="button" class="split-acc-trigger title-2" aria-expanded="true">
                  <span>01 · Business calibration before sourcing begins</span>
                  <svg class="split-acc-chevron" width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 96l80 80 80-80"/></svg>
                </button>
              </h3>
              <div class="split-acc-panel">
                <div class="split-acc-inner">
                  <p class="split-acc-content body-5">
                    Partnering directly with hiring managers and leadership to align on real business outcomes, team dynamics, compensation bands, and realistic market availability across regions.
                  </p>
                </div>
              </div>
            </div>

            <div class="split-acc-item">
              <h3>
                <button type="button" class="split-acc-trigger title-2" aria-expanded="false">
                  <span>02 · Direct sourcing and international talent pipelines</span>
                  <svg class="split-acc-chevron" width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 96l80 80 80-80"/></svg>
                </button>
              </h3>
              <div class="split-acc-panel">
                <div class="split-acc-inner">
                  <p class="split-acc-content body-5">
                    Proactive outreach through trusted industry networks across Switzerland, Europe, and global digital asset hubs rather than relying on passive job board postings.
                  </p>
                </div>
              </div>
            </div>

            <div class="split-acc-item">
              <h3>
                <button type="button" class="split-acc-trigger title-2" aria-expanded="false">
                  <span>03 · Structured evaluation and offer stewardship</span>
                  <svg class="split-acc-chevron" width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 96l80 80 80-80"/></svg>
                </button>
              </h3>
              <div class="split-acc-panel">
                <div class="split-acc-inner">
                  <p class="split-acc-content body-5">
                    Coordinating thoughtful interview stages, transparent stakeholder feedback, and careful offer negotiations that protect both candidate experience and organizational goals.
                  </p>
                </div>
              </div>
            </div>

            <div class="split-acc-item">
              <h3>
                <button type="button" class="split-acc-trigger title-2" aria-expanded="false">
                  <span>04 · Functional scope across regulated fintech</span>
                  <svg class="split-acc-chevron" width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 96l80 80 80-80"/></svg>
                </button>
              </h3>
              <div class="split-acc-panel">
                <div class="split-acc-inner">
                  <p class="split-acc-content body-5">
                    Senior specialists, department heads, and leadership mandates spanning engineering, blockchain technology, compliance, operations, finance, and institutional business development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. DIRECT CONNECT & VALIDATED INQUIRY -->
    <section id="connect" class="section section-band reveal-block" aria-labelledby="connect-heading">
      <div class="container">
        <div class="grid-asymmetric">
          <div>
            <span class="caption-3 text-teal">Direct Contact</span>
            <h2 id="connect-heading" class="heading-2 mt-1">
              Start a conversation
            </h2>
            <p class="body-3 text-secondary mt-2" style="max-width: 520px;">
              Open to conversations with founders, hiring committees, and senior professionals across European and international time zones.
            </p>

            <div class="hero-actions mt-4">
              <a href="https://www.linkedin.com/in/katia-danishevska-122224445" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-with-icon button-md">
                <span>Message on LinkedIn</span>
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M180 76L76 180M96 76h84v84"/></svg>
              </a>

              <button id="copy-linkedin-btn" type="button" class="btn btn-secondary btn-with-icon button-md" data-copy-value="https://www.linkedin.com/in/katia-danishevska-122224445" data-copied="false">
                <span data-copy-label>Copy LinkedIn URL</span>
                <span class="icon-crossfade" aria-hidden="true">
                  <span class="copy-icon-default">
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="88" width="128" height="128" rx="12"/><path d="M88 88V52a12 12 0 0 1 12-12h104a12 12 0 0 1 12 12v104a12 12 0 0 1-12 12h-36"/></svg>
                  </span>
                  <span class="copy-icon-check">
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"><path d="M40 144l56 56L216 80"/></svg>
                  </span>
                </span>
              </button>
            </div>
            <p id="copy-linkedin-status" class="caption-4 text-teal mt-2" aria-live="polite"></p>

            <div class="mt-4 pt-3" style="border-top: 1px solid var(--border-hairline);">
              <span class="caption-4 text-muted">Direct Download</span>
              <div class="mt-1">
                <a href="assets/Katia-Danishevska-Executive-Dossier.pdf" download="Katia-Danishevska-Executive-Dossier.pdf" class="btn-pdf-download button-sm">
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 32h112l48 48v144a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8Z"/><path d="M160 32v48h48M128 120v64M96 152l32 32 32-32"/></svg>
                  <span>Katia-Danishevska-Executive-Dossier.pdf (81 KB)</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Client-Side Validated Inquiry Panel -->
          <div class="card">
            <h3 class="title-1">Send an inquiry note</h3>
            <p class="body-6 text-secondary mt-1">
              All inputs validate client-side inside your browser.
            </p>

            <form id="inquiry-form" class="form-grid mt-3" novalidate>
              <div class="field-group">
                <label for="inq-name" class="caption-1">Full name <span aria-hidden="true">*</span></label>
                <input id="inq-name" name="name" type="text" class="field-input" autocomplete="name" required minlength="2" data-validate data-err-required="Please enter your full name." aria-describedby="inq-name-error">
                <span id="inq-name-error" class="field-error caption-4" aria-live="polite"></span>
              </div>

              <div class="field-group">
                <label for="inq-email" class="caption-1">Work email <span aria-hidden="true">*</span></label>
                <input id="inq-email" name="email" type="email" inputmode="email" class="field-input" autocomplete="email" autocorrect="off" autocapitalize="none" spellcheck="false" required data-validate data-err-required="Please enter your work email address." aria-describedby="inq-email-error">
                <span id="inq-email-error" class="field-error caption-4" aria-live="polite"></span>
              </div>

              <div class="field-group">
                <label for="inq-topic" class="caption-1">Conversation topic</label>
                <select id="inq-topic" name="topic" class="field-select">
                  <option value="Executive Search Mandate">Executive Search Mandate</option>
                  <option value="Digital Assets & FinTech Hiring">Digital Assets &amp; FinTech Hiring</option>
                  <option value="Senior Candidate Introduction">Senior Candidate Introduction</option>
                  <option value="Advisory & Collaborations">Advisory &amp; Collaborations</option>
                </select>
              </div>

              <div class="field-group">
                <label for="inq-message" class="caption-1">Brief details <span aria-hidden="true">*</span></label>
                <textarea id="inq-message" name="message" class="field-textarea" rows="4" required minlength="15" data-validate data-err-required="Please share brief mandate context." aria-describedby="inq-message-error" placeholder="Describe the role scope, jurisdiction, or organizational requirements..."></textarea>
                <span id="inq-message-error" class="field-error caption-4" aria-live="polite"></span>
              </div>

              <div class="form-actions mt-2">
                <button id="inquiry-submit" type="submit" class="btn btn-primary button-md">
                  <span>Validate &amp; Prepare Note</span>
                </button>
              </div>

              <div id="inquiry-skeleton" class="form-skeleton hidden" aria-hidden="true">
                <div class="skeleton-shimmer" style="height: 14px; width: 60%; border-radius: 4px;"></div>
                <div class="skeleton-shimmer" style="height: 14px; width: 85%; border-radius: 4px;"></div>
              </div>

              <div id="inquiry-result" class="callout callout-info hidden" role="status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Official Az. Consultant Footer with Strict Unlinked Attribution -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span class="brand-badge" aria-hidden="true">KD</span>
          <span class="caption-2 text-secondary">© 2026 Katia Danishevska</span>
        </div>

        <div class="footer-links">
          <a href="experience.html" class="footer-text-link caption-2">Experience</a>
          <a href="mandates.html" class="footer-text-link caption-2">Mandates</a>
          <a href="https://www.linkedin.com/in/katia-danishevska-122224445" target="_blank" rel="noopener noreferrer" class="footer-text-link caption-2">LinkedIn</a>
          <button type="button" class="footer-text-link caption-2" data-open-dialog="privacy-dialog">Privacy</button>
          <button type="button" class="footer-text-link caption-2" data-open-dialog="legal-dialog">Terms &amp; Notice</button>
          <span class="caption-2 text-muted">Crafted by Az. Consultant</span>
        </div>
      </div>

      <div class="footer-disclaimer">
        <p class="caption-5 text-muted" style="max-width: 760px;">
          <strong>Disclaimer:</strong> Independent personal website redesign concept prepared by Az. Consultant in response to Katia Danishevska's public LinkedIn post. All biography, tenure, and education details originate exclusively from publicly visible LinkedIn profile information, with no confidential data or official affiliation implied.
        </p>
        <a href="design-notes.html" class="caption-4 text-secondary">View Design &amp; Architecture Notes</a>
      </div>
    </div>
  </footer>

  <!-- Native Accessible Dialogs -->
  <dialog id="privacy-dialog" class="site-dialog" closedby="any" aria-labelledby="privacy-title">
    <div class="dialog-head">
      <h2 id="privacy-title" class="heading-5">Privacy Notice</h2>
      <form method="dialog">
        <button type="submit" class="icon-btn" aria-label="Close privacy notice">
          <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="20" stroke-linecap="round" aria-hidden="true"><path d="M56 56l144 144M200 56L56 200"/></svg>
        </button>
      </form>
    </div>
    <p class="body-5 text-secondary">
      This static preview operates without analytics trackers, marketing cookies, or third party behavioral scripts. Theme preference is stored solely in your browser local storage and can be reset at any time. Inquiry inputs validate locally inside your browser and are not transmitted to an external database.
    </p>
  </dialog>

  <dialog id="legal-dialog" class="site-dialog" closedby="any" aria-labelledby="legal-title">
    <div class="dialog-head">
      <h2 id="legal-title" class="heading-5">Terms &amp; Concept Notice</h2>
      <form method="dialog">
        <button type="submit" class="icon-btn" aria-label="Close terms and notice">
          <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="20" stroke-linecap="round" aria-hidden="true"><path d="M56 56l144 144M200 56L56 200"/></svg>
        </button>
      </form>
    </div>
    <p class="body-5 text-secondary">
      This site is an independent design and engineering submission created by Az. Consultant for evaluation by Katia Danishevska. Company names including SwissChain, AMINA Bank, ManpowerGroup, ISG International Service Group, and Adecco Slovenia appear strictly as historical career references from public LinkedIn records.
    </p>
  </dialog>

  <script defer src="js/main.js"></script>
</body>
</html>

```

## File: `experience.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <script>
    try {
      var s = localStorage.getItem('color-scheme');
      if (s === 'dark' || s === 'light') {
        document.querySelector('meta[name="color-scheme"]').content = s;
        document.documentElement.setAttribute('data-theme', s);
      }
    } catch (e) {}
  </script>

  <title>Career Dossier | Katia Danishevska</title>
  <meta name="description" content="Complete decade long career progression of Katia Danishevska across SwissChain, AMINA Bank in Zug, ManpowerGroup, ISG, Adecco, and the University of Ljubljana.">
  <link rel="canonical" href="https://katia-danishevska.pages.dev/experience.html">

  <meta property="og:site_name" content="Katia Danishevska">
  <meta property="og:title" content="Career Dossier | Katia Danishevska">
  <meta property="og:description" content="Verified ten year track record across Digital Assets, FinTech, Banking, and Executive Search.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://katia-danishevska.pages.dev/experience.html">
  <meta property="og:image" content="https://katia-danishevska.pages.dev/assets/og-card.jpg">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image" content="https://katia-danishevska.pages.dev/assets/kd-logo-square.jpg">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">

  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <a href="#main" class="skip-link button-sm">Skip to content</a>
  <div id="scroll-progress-bar" class="scroll-progress-bar" aria-hidden="true"></div>
  <div id="nav-sentinel" class="nav-sentinel" aria-hidden="true"></div>

  <header class="site-nav-wrap">
    <nav id="site-nav" class="site-nav" aria-label="Primary">
      <a href="index.html" class="brand-mark" aria-label="Katia Danishevska Home">
        <span class="brand-badge" aria-hidden="true">KD</span>
        <span class="title-4">Katia Danishevska</span>
      </a>

      <ul class="nav-links">
        <li><a href="index.html" class="nav-link title-4">Overview</a></li>
        <li><a href="experience.html" class="nav-link title-4" aria-current="page">Experience</a></li>
        <li><a href="mandates.html" class="nav-link title-4">Mandates</a></li>
        <li><a href="index.html#atlas" class="nav-link title-4">Corridor</a></li>
        <li><a href="index.html#connect" class="nav-link title-4">Connect</a></li>
      </ul>

      <div class="nav-actions">
        <button id="theme-toggle" type="button" class="icon-btn" aria-label="Toggle color theme" aria-pressed="false">
          <span class="icon-crossfade" aria-hidden="true">
            <span class="theme-icon-sun">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="48"/><path d="M128 36v-12M128 232v-12M63 63l-9-9M202 202l-9-9M36 128H24M232 128h-12M63 193l-9 9M202 54l-9 9"/></svg>
            </span>
            <span class="theme-icon-moon">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><path d="M210.7 152.6A92 92 0 0 1 103.4 45.3a92 92 0 1 0 107.3 107.3Z"/></svg>
            </span>
          </span>
        </button>

        <button id="menu-toggle" type="button" class="icon-btn menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
          <span class="hamburger-lines" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>
      </div>
    </nav>
  </header>

  <aside id="mobile-drawer" class="mobile-drawer" aria-label="Mobile menu" aria-hidden="true">
    <a href="index.html" class="mobile-drawer-link heading-5"><span>Overview</span><span class="mono-meta caption-4 text-muted">01</span></a>
    <a href="experience.html" class="mobile-drawer-link heading-5"><span>Experience</span><span class="mono-meta caption-4 text-muted">02</span></a>
    <a href="mandates.html" class="mobile-drawer-link heading-5"><span>Mandates</span><span class="mono-meta caption-4 text-muted">03</span></a>
    <a href="index.html#connect" class="mobile-drawer-link heading-5"><span>Connect</span><span class="mono-meta caption-4 text-muted">04</span></a>
  </aside>

  <main id="main" tabindex="-1">
    <section class="section" style="padding-top: 144px;">
      <div class="container">
        <div style="max-width: 680px;">
          <a href="index.html" class="caption-2 text-secondary">← Back to Overview</a>
          <h1 class="heading-1 hero-gradient-text mt-2">Career Dossier</h1>
          <p class="body-2 text-secondary mt-3">
            A detailed record of ten years advising hiring leaders and building teams across Swiss regulated banking, digital assets, technology, and European recruitment consultancies.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;">
            <a href="assets/Katia-Danishevska-Executive-Dossier.pdf" download="Katia-Danishevska-Executive-Dossier.pdf" class="btn-pdf-download button-md" aria-label="Download Katia Danishevska Executive Dossier as PDF">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 32h112l48 48v144a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8Z"/><path d="M160 32v48h48M128 120v64M96 152l32 32 32-32"/></svg>
              <span>Download Executive Dossier (PDF)</span>
            </a>
            <a href="mandates.html" class="btn btn-secondary button-md">View Mandate Scope</a>
          </div>
        </div>

        <ol class="timeline mt-6">
          <li class="timeline-entry is-current">
            <span class="timeline-node" aria-hidden="true"></span>
            <article class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h2 class="heading-5">Senior Talent Acquisition Partner</h2>
                  <p class="body-4 text-teal mt-1">SwissChain · Ljubljana, Slovenia</p>
                </div>
                <span class="mono-meta caption-2 text-muted">October 2025 to Present</span>
              </div>
              <ul style="display: flex; flex-direction: column; gap: 8px; margin-top: 16px;" class="body-5 text-secondary">
                <li>Partner with business leaders to identify and recruit experienced professionals across digital assets, fintech, and financial services.</li>
                <li>Manage full cycle recruitment for senior, specialist, and leadership positions.</li>
                <li>Develop targeted sourcing strategies to reach caliber candidates across international markets.</li>
                <li>Build talent pipelines for business development, technology, compliance, operations, and finance roles.</li>
                <li>Advise hiring managers on candidate profiles, market availability, and recruitment priorities.</li>
                <li>Maintain relationships with senior professionals and support interview evaluation and offer negotiations.</li>
              </ul>
            </article>
          </li>

          <li class="timeline-entry">
            <span class="timeline-node" aria-hidden="true"></span>
            <article class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h2 class="heading-5">AMINA Bank · Three Progressive Roles</h2>
                  <p class="body-4 text-accent mt-1">Zug, Switzerland · 5 years 10 months total tenure</p>
                </div>
                <span class="mono-meta caption-2 text-muted">January 2020 to October 2025</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px;">
                <div>
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px;">
                    <h3 class="title-2">Talent Acquisition Partner · Digital Assets, FinTech &amp; Executive Hiring</h3>
                    <span class="mono-meta caption-3 text-muted">June 2023 to October 2025</span>
                  </div>
                  <p class="body-5 text-secondary mt-1">
                    Managed recruitment for senior professionals, department heads, and selected leadership roles across institutional financial services and technology. Advised stakeholders on market intelligence and offer structure.
                  </p>
                </div>

                <div style="padding-top: 16px; border-top: 1px solid var(--border-hairline);">
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px;">
                    <h3 class="title-2">Talent Acquisition Partner · Banking &amp; Digital Assets</h3>
                    <span class="mono-meta caption-3 text-muted">December 2021 to June 2023</span>
                  </div>
                  <p class="body-5 text-secondary mt-1">
                    Managed full cycle searches across banking, technology, and digital assets through direct sourcing, referrals, and structured feedback cycles.
                  </p>
                </div>

                <div style="padding-top: 16px; border-top: 1px solid var(--border-hairline);">
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px;">
                    <h3 class="title-2">Talent Acquisition Specialist · Financial Services &amp; Technology</h3>
                    <span class="mono-meta caption-3 text-muted">January 2020 to December 2021</span>
                  </div>
                  <p class="body-5 text-secondary mt-1">
                    Built candidate pipelines for specialist roles in regulated banking and emerging digital asset services from initial identification through offer coordination.
                  </p>
                </div>
              </div>
            </article>
          </li>

          <li class="timeline-entry">
            <span class="timeline-node" aria-hidden="true"></span>
            <article class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h2 class="heading-5">Recruitment Consultant · IT &amp; Technology</h2>
                  <p class="body-4 text-secondary mt-1">ManpowerGroup · Ljubljana, Slovenia</p>
                </div>
                <span class="mono-meta caption-2 text-muted">January 2018 to December 2019</span>
              </div>
              <p class="body-5 text-secondary mt-2">
                Focused on technical and business IT searches, managing candidate interviews, direct sourcing across technology talent pools, and hiring manager advisory.
              </p>
            </article>
          </li>

          <li class="timeline-entry">
            <span class="timeline-node" aria-hidden="true"></span>
            <article class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h2 class="heading-5">Talent Acquisition &amp; Recruitment Specialist</h2>
                  <p class="body-4 text-secondary mt-1">ISG International Service Group · Adecco Slovenia</p>
                </div>
                <span class="mono-meta caption-2 text-muted">June 2014 to December 2017</span>
              </div>
              <p class="body-5 text-secondary mt-2">
                Supported specialist and management recruitment projects across multiple industries from initial market mapping and candidate screening through final interview coordination.
              </p>
            </article>
          </li>

          <li class="timeline-entry">
            <span class="timeline-node" aria-hidden="true"></span>
            <article class="card">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
                <div>
                  <h2 class="heading-5">Master Degree in Human Resource Management</h2>
                  <p class="body-4 text-teal mt-1">University of Ljubljana</p>
                </div>
                <span class="mono-meta caption-2 text-muted">2012 to 2014</span>
              </div>
              <p class="body-5 text-secondary mt-2">
                Graduate specialization in Human Resource Management and organizational development.
              </p>
            </article>
          </li>
        </ol>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span class="brand-badge" aria-hidden="true">KD</span>
          <span class="caption-2 text-secondary">© 2026 Katia Danishevska</span>
        </div>
        <div class="footer-links">
          <a href="index.html" class="footer-text-link caption-2">Overview</a>
          <a href="mandates.html" class="footer-text-link caption-2">Mandates</a>
          <a href="https://www.linkedin.com/in/katia-danishevska-122224445" target="_blank" rel="noopener noreferrer" class="footer-text-link caption-2">LinkedIn</a>
          <span class="caption-2 text-muted">Crafted by Az. Consultant</span>
        </div>
      </div>
      <div class="footer-disclaimer">
        <p class="caption-5 text-muted" style="max-width: 760px;">
          <strong>Disclaimer:</strong> Independent design proposal prepared by Az. Consultant using publicly available LinkedIn profile details.
        </p>
        <a href="design-notes.html" class="caption-4 text-secondary">View Design &amp; Architecture Notes</a>
      </div>
    </div>
  </footer>

  <script defer src="js/main.js"></script>
</body>
</html>

```

## File: `mandates.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <script>
    try {
      var s = localStorage.getItem('color-scheme');
      if (s === 'dark' || s === 'light') {
        document.querySelector('meta[name="color-scheme"]').content = s;
        document.documentElement.setAttribute('data-theme', s);
      }
    } catch (e) {}
  </script>

  <title>Advisory Mandates | Katia Danishevska</title>
  <meta name="description" content="Executive search, strategic sourcing, and senior talent advisory across Digital Assets, FinTech, Banking, Compliance, and Technology.">
  <link rel="canonical" href="https://katia-danishevska.pages.dev/mandates.html">

  <meta property="og:site_name" content="Katia Danishevska">
  <meta property="og:title" content="Advisory Mandates | Katia Danishevska">
  <meta property="og:description" content="How Katia Danishevska partners with founders, executives, and hiring managers across Europe and international digital finance.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://katia-danishevska.pages.dev/mandates.html">
  <meta property="og:image" content="https://katia-danishevska.pages.dev/assets/og-card.jpg">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image" content="https://katia-danishevska.pages.dev/assets/kd-logo-square.jpg">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">

  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <a href="#main" class="skip-link button-sm">Skip to content</a>
  <div id="scroll-progress-bar" class="scroll-progress-bar" aria-hidden="true"></div>
  <div id="nav-sentinel" class="nav-sentinel" aria-hidden="true"></div>

  <header class="site-nav-wrap">
    <nav id="site-nav" class="site-nav" aria-label="Primary">
      <a href="index.html" class="brand-mark" aria-label="Katia Danishevska Home">
        <span class="brand-badge" aria-hidden="true">KD</span>
        <span class="title-4">Katia Danishevska</span>
      </a>

      <ul class="nav-links">
        <li><a href="index.html" class="nav-link title-4">Overview</a></li>
        <li><a href="experience.html" class="nav-link title-4">Experience</a></li>
        <li><a href="mandates.html" class="nav-link title-4" aria-current="page">Mandates</a></li>
        <li><a href="index.html#atlas" class="nav-link title-4">Corridor</a></li>
        <li><a href="index.html#connect" class="nav-link title-4">Connect</a></li>
      </ul>

      <div class="nav-actions">
        <button id="theme-toggle" type="button" class="icon-btn" aria-label="Toggle color theme" aria-pressed="false">
          <span class="icon-crossfade" aria-hidden="true">
            <span class="theme-icon-sun">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="48"/><path d="M128 36v-12M128 232v-12M63 63l-9-9M202 202l-9-9M36 128H24M232 128h-12M63 193l-9 9M202 54l-9 9"/></svg>
            </span>
            <span class="theme-icon-moon">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><path d="M210.7 152.6A92 92 0 0 1 103.4 45.3a92 92 0 1 0 107.3 107.3Z"/></svg>
            </span>
          </span>
        </button>

        <button id="menu-toggle" type="button" class="icon-btn menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
          <span class="hamburger-lines" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>
      </div>
    </nav>
  </header>

  <aside id="mobile-drawer" class="mobile-drawer" aria-label="Mobile menu" aria-hidden="true">
    <a href="index.html" class="mobile-drawer-link heading-5"><span>Overview</span><span class="mono-meta caption-4 text-muted">01</span></a>
    <a href="experience.html" class="mobile-drawer-link heading-5"><span>Experience</span><span class="mono-meta caption-4 text-muted">02</span></a>
    <a href="mandates.html" class="mobile-drawer-link heading-5"><span>Mandates</span><span class="mono-meta caption-4 text-muted">03</span></a>
    <a href="index.html#connect" class="mobile-drawer-link heading-5"><span>Connect</span><span class="mono-meta caption-4 text-muted">04</span></a>
  </aside>

  <main id="main" tabindex="-1">
    <section class="section" style="padding-top: 144px;">
      <div class="container">
        <div style="max-width: 680px;">
          <a href="index.html" class="caption-2 text-secondary">← Back to Overview</a>
          <h1 class="heading-1 hero-gradient-text mt-2">Mandate Practice</h1>
          <p class="body-2 text-secondary mt-3">
            Strategic talent acquisition across senior specialists, managers, and leadership roles for growing fintech, blockchain, and financial services companies.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;">
            <a href="assets/Katia-Danishevska-Executive-Dossier.pdf" download="Katia-Danishevska-Executive-Dossier.pdf" class="btn-pdf-download button-md" aria-label="Download Katia Danishevska Executive Dossier as PDF">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 32h112l48 48v144a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8Z"/><path d="M160 32v48h48M128 120v64M96 152l32 32 32-32"/></svg>
              <span>Download Executive Dossier (PDF)</span>
            </a>
            <a href="experience.html" class="btn btn-secondary button-md">View Full Timeline</a>
          </div>
        </div>

        <div class="grid-3 mt-6">
          <article class="card">
            <span class="mono-meta caption-3 text-teal">01 · LEADERSHIP</span>
            <h2 class="title-1 mt-2">Executive &amp; Department Heads</h2>
            <p class="body-5 text-secondary mt-2">
              Calibrating functional leadership mandates directly with founders and business heads to secure proven operators ready for regulated growth.
            </p>
          </article>

          <article class="card">
            <span class="mono-meta caption-3 text-teal">02 · ENGINEERING</span>
            <h2 class="title-1 mt-2">Technology &amp; Blockchain</h2>
            <p class="body-5 text-secondary mt-2">
              Targeted direct sourcing for software architects, security specialists, and core digital asset engineering teams across Europe.
            </p>
          </article>

          <article class="card">
            <span class="mono-meta caption-3 text-teal">03 · GOVERNANCE</span>
            <h2 class="title-1 mt-2">Compliance, Finance &amp; Ops</h2>
            <p class="body-5 text-secondary mt-2">
              Building resilient institutional functions across regulatory compliance, risk, treasury operations, and business development.
            </p>
          </article>
        </div>

        <div class="mt-6" style="display: flex; flex-wrap: wrap; gap: 16px;">
          <a href="https://www.linkedin.com/in/katia-danishevska-122224445" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-with-icon button-md">
            <span>Connect on LinkedIn</span>
            <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M180 76L76 180M96 76h84v84"/></svg>
          </a>
          <a href="experience.html" class="btn btn-secondary button-md">Inspect Career Dossier</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span class="brand-badge" aria-hidden="true">KD</span>
          <span class="caption-2 text-secondary">© 2026 Katia Danishevska</span>
        </div>
        <div class="footer-links">
          <a href="index.html" class="footer-text-link caption-2">Overview</a>
          <a href="experience.html" class="footer-text-link caption-2">Experience</a>
          <a href="https://www.linkedin.com/in/katia-danishevska-122224445" target="_blank" rel="noopener noreferrer" class="footer-text-link caption-2">LinkedIn</a>
          <span class="caption-2 text-muted">Crafted by Az. Consultant</span>
        </div>
      </div>
      <div class="footer-disclaimer">
        <p class="caption-5 text-muted" style="max-width: 760px;">
          <strong>Disclaimer:</strong> Independent design proposal prepared by Az. Consultant using publicly available LinkedIn profile details.
        </p>
        <a href="design-notes.html" class="caption-4 text-secondary">View Design &amp; Architecture Notes</a>
      </div>
    </div>
  </footer>

  <script defer src="js/main.js"></script>
</body>
</html>

```

## File: `design-notes.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <script>
    try {
      var s = localStorage.getItem('color-scheme');
      if (s === 'dark' || s === 'light') {
        document.querySelector('meta[name="color-scheme"]').content = s;
        document.documentElement.setAttribute('data-theme', s);
      }
    } catch (e) {}
  </script>

  <title>Design &amp; Architecture Notes | Az. Consultant</title>
  <meta name="description" content="Engineering, typography, motion, accessibility, and edge deployment architecture prepared by Az. Consultant for Katia Danishevska.">
  <meta name="robots" content="noindex">
  <link rel="canonical" href="https://katia-danishevska.pages.dev/design-notes.html">

  <meta property="og:site_name" content="Katia Danishevska">
  <meta property="og:title" content="Design &amp; Architecture Notes | Prepared by Az. Consultant">
  <meta property="og:image" content="https://katia-danishevska.pages.dev/assets/og-card.jpg">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">

  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <a href="#main" class="skip-link button-sm">Skip to content</a>
  <div id="scroll-progress-bar" class="scroll-progress-bar" aria-hidden="true"></div>
  <div id="nav-sentinel" class="nav-sentinel" aria-hidden="true"></div>

  <header class="site-nav-wrap">
    <nav id="site-nav" class="site-nav" aria-label="Primary">
      <a href="index.html" class="brand-mark" aria-label="Katia Danishevska Home">
        <span class="brand-badge" aria-hidden="true">KD</span>
        <span class="title-4">Katia Danishevska</span>
      </a>

      <ul class="nav-links">
        <li><a href="index.html" class="nav-link title-4">Overview</a></li>
        <li><a href="experience.html" class="nav-link title-4">Experience</a></li>
        <li><a href="mandates.html" class="nav-link title-4">Mandates</a></li>
        <li><a href="design-notes.html" class="nav-link title-4" aria-current="page">Craft Notes</a></li>
      </ul>

      <div class="nav-actions">
        <button id="theme-toggle" type="button" class="icon-btn" aria-label="Toggle color theme" aria-pressed="false">
          <span class="icon-crossfade" aria-hidden="true">
            <span class="theme-icon-sun">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="48"/><path d="M128 36v-12M128 232v-12M63 63l-9-9M202 202l-9-9M36 128H24M232 128h-12M63 193l-9 9M202 54l-9 9"/></svg>
            </span>
            <span class="theme-icon-moon">
              <svg width="18" height="18" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><path d="M210.7 152.6A92 92 0 0 1 103.4 45.3a92 92 0 1 0 107.3 107.3Z"/></svg>
            </span>
          </span>
        </button>

        <button id="menu-toggle" type="button" class="icon-btn menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
          <span class="hamburger-lines" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>
      </div>
    </nav>
  </header>

  <aside id="mobile-drawer" class="mobile-drawer" aria-label="Mobile menu" aria-hidden="true">
    <a href="index.html" class="mobile-drawer-link heading-5"><span>Return to Katia's Site</span><span class="mono-meta caption-4 text-muted">01</span></a>
    <a href="experience.html" class="mobile-drawer-link heading-5"><span>Experience</span><span class="mono-meta caption-4 text-muted">02</span></a>
    <a href="mandates.html" class="mobile-drawer-link heading-5"><span>Mandates</span><span class="mono-meta caption-4 text-muted">03</span></a>
  </aside>

  <main id="main" tabindex="-1">
    <section class="section" style="padding-top: 144px;">
      <div class="container">
        <div style="max-width: 680px;">
          <a href="index.html" class="caption-2 text-secondary">← Return to Personal Website</a>
          <h1 class="heading-1 hero-gradient-text mt-2">Design &amp; Architecture Notes</h1>
          <p class="body-2 text-secondary mt-3">
            Technical brief prepared by Az. Consultant outlining the visual choices, bespoke canvas engineering, accessibility safeguards, and edge delivery architecture behind this redesign proposal.
          </p>
        </div>

        <!-- Architecture Wiring -->
        <div class="mt-6">
          <h2 class="heading-4 mb-3">System Architecture Wiring</h2>
          <div class="arch-pipeline">
            <article class="arch-node">
              <span class="mono-meta caption-3 text-teal">01 · SEMANTIC CORE</span>
              <h3 class="title-2">Zero Runtime HTML &amp; CSS</h3>
              <p class="body-6 text-secondary">
                Pure layered CSS tokens with zero client framework runtime, eliminating render blocking compilers and preserving instant paint across European and Asian networks.
              </p>
            </article>

            <article class="arch-node">
              <span class="mono-meta caption-3 text-teal">02 · BESPOKE CANVAS</span>
              <h3 class="title-2">Dual HTML5 2x Canvas</h3>
              <p class="body-6 text-secondary">
                Architectural hero contour field and interactive Zürich to Ljubljana market corridor map rendered at crisp Retina density with reduced motion support.
              </p>
            </article>

            <article class="arch-node">
              <span class="mono-meta caption-3 text-teal">03 · COLOR &amp; ACCESSIBILITY</span>
              <h3 class="title-2">System Aware Light &amp; Dark</h3>
              <p class="body-6 text-secondary">
                Native color scheme meta wiring with early inline FOUC prevention, cross tab sync, native modal dialogs, keyboard focus rings, and inert drawer traps.
              </p>
            </article>

            <article class="arch-node">
              <span class="mono-meta caption-3 text-teal">04 · EDGE DELIVERY</span>
              <h3 class="title-2">Cloudflare Edge &amp; OG Logo</h3>
              <p class="body-6 text-secondary">
                Hardened response headers, dedicated custom 404 route, and verified 1200x630 plus 600x600 monogram assets for clean WhatsApp and LinkedIn previews.
              </p>
            </article>
          </div>
        </div>

        <div class="grid-2 mt-6">
          <article class="card">
            <h2 class="heading-5">Why This Direction Fits Katia's Brand</h2>
            <p class="body-5 text-secondary mt-2">
              Her career spans regulated Swiss digital asset banking at AMINA Bank and senior executive hiring at SwissChain. Instead of generic dark gradients or synthetic portraits, the visual language pairs Swiss typographic restraint with warm alabaster light surfaces and calibrated dark graphite panels.
            </p>
          </article>

          <article class="card">
            <h2 class="heading-5">Collaboration Readiness</h2>
            <p class="body-5 text-secondary mt-2">
              Every section, text token, domain link, and contact endpoint can be wired directly to a custom domain and live mail relay on handoff. Prepared cleanly by Az. Consultant with full static portability.
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span class="brand-badge" aria-hidden="true">KD</span>
          <span class="caption-2 text-secondary">© 2026 Katia Danishevska</span>
        </div>
        <div class="footer-links">
          <a href="index.html" class="footer-text-link caption-2">Overview</a>
          <a href="experience.html" class="footer-text-link caption-2">Experience</a>
          <a href="mandates.html" class="footer-text-link caption-2">Mandates</a>
          <span class="caption-2 text-muted">Crafted by Az. Consultant</span>
        </div>
      </div>
      <div class="footer-disclaimer">
        <p class="caption-5 text-muted" style="max-width: 760px;">
          <strong>Disclaimer:</strong> Design and architecture documentation prepared independently by Az. Consultant. No external links are embedded on consultant attribution.
        </p>
      </div>
    </div>
  </footer>

  <script defer src="js/main.js"></script>
</body>
</html>

```

## File: `404.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <script>
    try {
      var s = localStorage.getItem('color-scheme');
      if (s === 'dark' || s === 'light') {
        document.querySelector('meta[name="color-scheme"]').content = s;
        document.documentElement.setAttribute('data-theme', s);
      }
    } catch (e) {}
  </script>

  <title>Page Not Found | Katia Danishevska</title>
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body style="min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">
  <main id="main" class="container" style="margin-block: auto; max-width: 560px; text-align: center; padding-block: 64px;">
    <div class="dossier-frame">
      <div class="dossier-inner" style="align-items: center;">
        <div class="dossier-monogram" aria-hidden="true">KD</div>
        <span class="mono-meta caption-3 text-teal">404 · ROUTE NOT FOUND</span>
        <h1 class="heading-3">This page does not exist</h1>
        <p class="body-5 text-secondary">
          The page you requested has moved or is unavailable. Return to the main overview to explore Katia Danishevska's executive profile and career record.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
          <a href="index.html" class="btn btn-primary button-sm">Return to Overview</a>
          <a href="experience.html" class="btn btn-secondary button-sm">Career Dossier</a>
        </div>
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-top">
      <span class="caption-2 text-secondary">© 2026 Katia Danishevska</span>
      <span class="caption-2 text-muted">Crafted by Az. Consultant</span>
    </div>
  </footer>
  <script defer src="js/main.js"></script>
</body>
</html>

```

## File: `css/main.css`
```css
/* ==========================================================================
   Katia Danishevska — Design System & Layout Styles
   Tokens: B1 Typography (Geist / Geist Mono), B2 Spacing, B3 Radii,
           B4 Flat Surfaces, B7 Motion, Layered Surfaces & Tactile Craft
   ========================================================================== */

@layer reset, tokens, base, typography, components, utilities;

@layer tokens {
  :root {
    color-scheme: light dark;

    /* B2 Strict Spacing Scale */
    --sp-0: 0px;
    --sp-25: 2px;
    --sp-50: 4px;
    --sp-75: 8px;
    --sp-100: 12px;
    --sp-200: 16px;
    --sp-300: 24px;
    --sp-400: 32px;
    --sp-500: 40px;
    --sp-600: 48px;
    --sp-700: 64px;
    --sp-800: 80px;
    --sp-900: 96px;

    /* B3 Radii Scale */
    --r-sm: 6px;
    --r-md: 8px;
    --r-lg: 12px;
    --r-xl: 16px;
    --r-2xl: 24px;
    --r-full: 9999px;

    /* Motion Curves */
    --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-snappy: cubic-bezier(0.2, 0, 0, 1);

    /* Typography */
    --font-sans: 'Geist', system-ui, -apple-system, sans-serif;
    --font-mono: 'Geist Mono', ui-monospace, monospace;

    /* Light Mode Palette — Swiss Architectural Stone */
    --bg-canvas: #F7F6F2;
    --bg-band: #EFECE5;
    --bg-surface: #FFFFFF;
    --bg-elevated: #FFFFFF;
    --bg-subtle: #EAE7DF;
    --bg-nav: rgba(255, 255, 255, 0.84);
    --bg-drawer: rgba(247, 246, 242, 0.96);

    --ink-primary: #111316;
    --ink-secondary: #4B525C;
    --ink-muted: #68707A;
    --ink-faint: rgba(17, 19, 22, 0.28);

    --accent: #1D4ED8;
    --accent-soft: rgba(29, 78, 216, 0.08);
    --accent-text: #1E40AF;
    --teal: #0F766E;
    --teal-soft: rgba(15, 118, 110, 0.10);
    --error: #B91C1C;
    --error-soft: rgba(185, 28, 28, 0.08);

    --btn-primary-bg: #111316;
    --btn-primary-ink: #FFFFFF;
    --btn-primary-hover: #242830;

    --border-hairline: rgba(17, 19, 22, 0.09);
    --border-strong: rgba(17, 19, 22, 0.18);

    --shadow-border:
      0 0 0 1px rgba(0, 0, 0, 0.06),
      0 1px 2px -1px rgba(0, 0, 0, 0.06),
      0 2px 4px 0 rgba(0, 0, 0, 0.04);
    --shadow-border-hover:
      0 0 0 1px rgba(0, 0, 0, 0.11),
      0 4px 12px -2px rgba(0, 0, 0, 0.08),
      0 2px 4px 0 rgba(0, 0, 0, 0.04);
    --shadow-nav:
      0 0 0 1px rgba(0, 0, 0, 0.07),
      0 8px 24px -6px rgba(0, 0, 0, 0.08);

    --hero-grad-start: #000000;
    --hero-grad-end: #666666;
    --scrollbar-track: #EFECE5;
    --scrollbar-thumb: #9CA3AF;

    accent-color: var(--accent);
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  }

  /* Reflect system preference when no explicit override */
  @media (prefers-color-scheme: dark) {
    :root:not(:has(> head > meta[name="color-scheme"][content="light"])) {
      color-scheme: dark;
      --bg-canvas: #000000;
      --bg-band: #131209;
      --bg-surface: #181818;
      --bg-elevated: #1F1F1F;
      --bg-subtle: #272727;
      --bg-nav: rgba(24, 24, 24, 0.84);
      --bg-drawer: rgba(0, 0, 0, 0.96);

      --ink-primary: #F5F6F7;
      --ink-secondary: #A3A9B2;
      --ink-muted: #78808A;
      --ink-faint: rgba(245, 246, 247, 0.28);

      --accent: #60A5FA;
      --accent-soft: rgba(96, 165, 250, 0.12);
      --accent-text: #93C5FD;
      --teal: #2DD4BF;
      --teal-soft: rgba(45, 212, 191, 0.12);
      --error: #F87171;
      --error-soft: rgba(248, 113, 113, 0.12);

      --btn-primary-bg: #F5F6F7;
      --btn-primary-ink: #111316;
      --btn-primary-hover: #FFFFFF;

      --border-hairline: rgba(255, 255, 255, 0.09);
      --border-strong: rgba(255, 255, 255, 0.18);

      --shadow-border: 0 0 0 1px rgba(255, 255, 255, 0.08);
      --shadow-border-hover: 0 0 0 1px rgba(255, 255, 255, 0.16);
      --shadow-nav:
        0 0 0 1px rgba(255, 255, 255, 0.10),
        0 12px 32px -8px rgba(0, 0, 0, 0.65);

      --hero-grad-start: #FFFFFF;
      --hero-grad-end: #9B9B9B;
      --scrollbar-track: #181818;
      --scrollbar-thumb: #52525B;
    }
  }

  /* Explicit dark override from <meta name="color-scheme"> or [data-theme="dark"] */
  :root:has(> head > meta[name="color-scheme"][content="dark"]),
  :root[data-theme="dark"] {
    color-scheme: dark;
    --bg-canvas: #000000;
    --bg-band: #131209;
    --bg-surface: #181818;
    --bg-elevated: #1F1F1F;
    --bg-subtle: #272727;
    --bg-nav: rgba(24, 24, 24, 0.84);
    --bg-drawer: rgba(0, 0, 0, 0.96);

    --ink-primary: #F5F6F7;
    --ink-secondary: #A3A9B2;
    --ink-muted: #78808A;
    --ink-faint: rgba(245, 246, 247, 0.28);

    --accent: #60A5FA;
    --accent-soft: rgba(96, 165, 250, 0.12);
    --accent-text: #93C5FD;
    --teal: #2DD4BF;
    --teal-soft: rgba(45, 212, 191, 0.12);
    --error: #F87171;
    --error-soft: rgba(248, 113, 113, 0.12);

    --btn-primary-bg: #F5F6F7;
    --btn-primary-ink: #111316;
    --btn-primary-hover: #FFFFFF;

    --border-hairline: rgba(255, 255, 255, 0.09);
    --border-strong: rgba(255, 255, 255, 0.18);

    --shadow-border: 0 0 0 1px rgba(255, 255, 255, 0.08);
    --shadow-border-hover: 0 0 0 1px rgba(255, 255, 255, 0.16);
    --shadow-nav:
      0 0 0 1px rgba(255, 255, 255, 0.10),
      0 12px 32px -8px rgba(0, 0, 0, 0.65);

    --hero-grad-start: #FFFFFF;
    --hero-grad-end: #9B9B9B;
    --scrollbar-track: #181818;
    --scrollbar-thumb: #52525B;
  }

  /* Explicit light override */
  :root:has(> head > meta[name="color-scheme"][content="light"]),
  :root[data-theme="light"] {
    color-scheme: light;
  }
}

@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    background-color: var(--bg-canvas);
    color: var(--ink-primary);
    overflow-x: clip;
    transition-property: background-color, color;
    transition-duration: 300ms;
    transition-timing-function: var(--ease-smooth);
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, figure {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  img, svg, canvas {
    display: block;
    max-width: 100%;
  }
}

@layer typography {
  /* Named text styles mapped strictly to Tailwind scale steps */
  .heading-1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    text-wrap: balance;
  }

  @media (min-width: 768px) {
    .heading-1 {
      font-size: 3.75rem;
      line-height: 1;
    }
  }

  .heading-2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    text-wrap: balance;
  }

  @media (min-width: 768px) {
    .heading-2 {
      font-size: 3rem;
      line-height: 1;
    }
  }

  .heading-3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  @media (min-width: 768px) {
    .heading-3 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  .heading-4 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: -0.015em;
    text-wrap: balance;
  }

  @media (min-width: 768px) {
    .heading-4 {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }

  .heading-5 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-wrap: balance;
  }

  .heading-6 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-wrap: balance;
  }

  .title-1 { font-size: 1.25rem; line-height: 1.75rem; font-weight: 500; text-wrap: balance; }
  .title-2 { font-size: 1.125rem; line-height: 1.75rem; font-weight: 500; }
  .title-3 { font-size: 1rem; line-height: 1.5rem; font-weight: 500; }
  .title-4 { font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; }
  .title-5 { font-size: 0.75rem; line-height: 1rem; font-weight: 500; }

  .body-1 { font-size: 1rem; line-height: 1.5rem; font-weight: 600; text-wrap: pretty; }
  .body-2 { font-size: 1rem; line-height: 1.5rem; font-weight: 500; text-wrap: pretty; }
  .body-3 { font-size: 1rem; line-height: 1.5rem; font-weight: 400; text-wrap: pretty; }
  .body-4 { font-size: 0.875rem; line-height: 1.25rem; font-weight: 600; text-wrap: pretty; }
  .body-5 { font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; text-wrap: pretty; }
  .body-6 { font-size: 0.875rem; line-height: 1.25rem; font-weight: 400; text-wrap: pretty; }

  .button-lg { font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; }
  .button-md { font-size: 1rem; line-height: 1.5rem; font-weight: 600; }
  .button-sm { font-size: 0.875rem; line-height: 1.25rem; font-weight: 600; }
  .button-xsm { font-size: 0.75rem; line-height: 1rem; font-weight: 600; }

  .caption-1 { font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; }
  .caption-2 { font-size: 0.875rem; line-height: 1.25rem; font-weight: 400; }
  .caption-3 { font-size: 0.75rem; line-height: 1rem; font-weight: 600; }
  .caption-4 { font-size: 0.75rem; line-height: 1rem; font-weight: 500; }
  .caption-5 { font-size: 0.75rem; line-height: 1rem; font-weight: 400; }

  .mono-meta {
    font-family: var(--font-mono);
    font-variant-numeric: tabular-nums;
  }

  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }

  /* B5 Hero Gradient Text (sole permitted gradient) */
  .hero-gradient-text {
    background: linear-gradient(90deg, var(--hero-grad-start), var(--hero-grad-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

@layer base {
  :where(a:any-link, button, input, textarea, select, summary):focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  [inert], [inert] * {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }

  .skip-link {
    position: fixed;
    inset-block-start: -100px;
    inset-inline-start: var(--sp-200);
    z-index: 200;
    padding: var(--sp-100) var(--sp-200);
    border-radius: var(--r-md);
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-ink);
    box-shadow: var(--shadow-nav);
    transition-property: inset-block-start;
    transition-duration: 200ms;
    transition-timing-function: var(--ease-smooth);
  }

  .skip-link:focus {
    inset-block-start: var(--sp-200);
  }

  .visually-hidden:where(:not(:focus-within, :active)) {
    position: absolute !important;
    clip-path: inset(50%) !important;
    overflow: hidden !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    border: 0 !important;
    white-space: nowrap !important;
  }
}

@layer components {
  /* Scroll Progress Hairline (modern-web-guidance: scroll-progress-indicator) */
  .scroll-progress-bar {
    position: fixed;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 2px;
    background-color: var(--teal);
    transform-origin: 0 50%;
    transform: scaleX(0);
    z-index: 90;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: scroll()) {
      @keyframes doc-scroll-progress {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }

      .scroll-progress-bar {
        animation: doc-scroll-progress auto linear;
        animation-timeline: scroll(root block);
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .scroll-progress-bar {
      display: none;
    }
  }

  /* Layout Container */
  .container {
    width: 100%;
    max-width: 1120px;
    margin-inline: auto;
    padding-inline: var(--sp-200);
  }

  @media (min-width: 768px) {
    .container {
      padding-inline: var(--sp-400);
    }
  }

  .section {
    padding-block: var(--sp-700);
  }

  @media (min-width: 768px) {
    .section {
      padding-block: var(--sp-900);
    }
  }

  .section-band {
    background-color: var(--bg-band);
    border-block: 1px solid var(--border-hairline);
  }

  /* Floating Glass Navigation (B7 Navigation) */
  .nav-sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 80px;
    pointer-events: none;
  }

  .site-nav-wrap {
    position: fixed;
    inset-block-start: var(--sp-200);
    inset-inline: 0;
    z-index: 70;
    display: flex;
    justify-content: center;
    padding-inline: var(--sp-200);
    pointer-events: none;
  }

  .site-nav {
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-300);
    padding: var(--sp-75) var(--sp-100);
    border-radius: var(--r-xl);
    background-color: var(--bg-nav);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow: var(--shadow-border);
    transition-property: box-shadow, background-color, transform;
    transition-duration: 350ms;
    transition-timing-function: var(--ease-smooth);
    max-width: 100%;
  }

  .site-nav.is-elevated {
    box-shadow: var(--shadow-nav);
  }

  .brand-mark {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-100);
    min-height: 44px;
    padding-inline: var(--sp-75);
    border-radius: var(--r-md);
    transition-property: opacity;
    transition-duration: 250ms;
    transition-timing-function: var(--ease-smooth);
  }

  .brand-mark:hover {
    opacity: 0.82;
  }

  .brand-badge {
    width: 32px;
    height: 32px;
    border-radius: var(--r-md);
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-ink);
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: -0.04em;
    position: relative;
  }

  .brand-badge::after {
    content: "";
    position: absolute;
    top: 5px;
    right: 5px;
    width: 5px;
    height: 5px;
    border-radius: var(--r-full);
    background-color: var(--teal);
  }

  .nav-links {
    display: none;
    align-items: center;
    gap: var(--sp-50);
  }

  @media (min-width: 820px) {
    .nav-links {
      display: flex;
    }
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    min-height: 40px;
    padding-inline: var(--sp-100);
    border-radius: var(--r-md);
    color: var(--ink-secondary);
    transition-property: color, background-color;
    transition-duration: 250ms;
    transition-timing-function: var(--ease-smooth);
    white-space: nowrap;
  }

  .nav-link:hover {
    color: var(--ink-primary);
    background-color: var(--bg-subtle);
  }

  .nav-link[aria-current="page"],
  .nav-link.is-active {
    color: var(--ink-primary);
    background-color: var(--bg-subtle);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: var(--sp-75);
  }

  /* Icon Toggle & Contextual Cross-Fade */
  .icon-btn {
    position: relative;
    display: inline-grid;
    place-items: center;
    min-width: 40px;
    min-height: 40px;
    border: 0;
    border-radius: var(--r-md);
    background-color: var(--bg-subtle);
    color: var(--ink-primary);
    cursor: pointer;
    box-shadow: var(--shadow-border);
    transition-property: background-color, transform, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: var(--ease-snappy);
  }

  .icon-btn:hover {
    box-shadow: var(--shadow-border-hover);
  }

  .icon-btn:active {
    transform: scale(0.96);
  }

  .icon-crossfade {
    position: relative;
    width: 18px;
    height: 18px;
  }

  .icon-crossfade > span {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    transition-property: opacity, transform, filter;
    transition-duration: 300ms;
    transition-timing-function: var(--ease-snappy);
  }

  /* Light vs Dark Icon state driven cleanly via CSS color-scheme / data-theme */
  .theme-icon-sun {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
  .theme-icon-moon {
    opacity: 0;
    transform: scale(0.25);
    filter: blur(4px);
  }

  @media (prefers-color-scheme: dark) {
    :root:not(:has(> head > meta[name="color-scheme"][content="light"])) .theme-icon-sun {
      opacity: 0;
      transform: scale(0.25);
      filter: blur(4px);
    }
    :root:not(:has(> head > meta[name="color-scheme"][content="light"])) .theme-icon-moon {
      opacity: 1;
      transform: scale(1);
      filter: blur(0px);
    }
  }

  :root[data-theme="dark"] .theme-icon-sun,
  :root:has(> head > meta[name="color-scheme"][content="dark"]) .theme-icon-sun {
    opacity: 0;
    transform: scale(0.25);
    filter: blur(4px);
  }

  :root[data-theme="dark"] .theme-icon-moon,
  :root:has(> head > meta[name="color-scheme"][content="dark"]) .theme-icon-moon {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }

  /* Contextual Copy Button Crossfade */
  .copy-icon-default {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
  .copy-icon-check {
    opacity: 0;
    transform: scale(0.25);
    filter: blur(4px);
    color: var(--teal);
  }
  [data-copied="true"] .copy-icon-default {
    opacity: 0;
    transform: scale(0.25);
    filter: blur(4px);
  }
  [data-copied="true"] .copy-icon-check {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }

  /* Architecture Diagram Grid (design-notes.html) */
  .arch-pipeline {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-200);
  }
  @media (min-width: 768px) {
    .arch-pipeline {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .arch-node {
    background-color: var(--bg-surface);
    border-radius: var(--r-xl);
    padding: var(--sp-300);
    box-shadow: var(--shadow-border);
    display: flex;
    flex-direction: column;
    gap: var(--sp-100);
  }

  /* Menu Open / Close morph icon (B7) */
  .menu-toggle {
    display: inline-grid;
  }

  @media (min-width: 820px) {
    .menu-toggle {
      display: none;
    }
  }

  .hamburger-lines {
    width: 18px;
    height: 12px;
    position: relative;
  }

  .hamburger-lines span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: currentColor;
    border-radius: 2px;
    transition-property: transform, opacity;
    transition-duration: 350ms;
    transition-timing-function: var(--ease-smooth);
  }

  .hamburger-lines span:nth-child(1) { top: 0; }
  .hamburger-lines span:nth-child(2) { top: 5.25px; }
  .hamburger-lines span:nth-child(3) { top: 10.5px; }

  .menu-toggle[aria-expanded="true"] .hamburger-lines span:nth-child(1) {
    transform: translateY(5.25px) rotate(45deg);
  }
  .menu-toggle[aria-expanded="true"] .hamburger-lines span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .menu-toggle[aria-expanded="true"] .hamburger-lines span:nth-child(3) {
    transform: translateY(-5.25px) rotate(-45deg);
  }

  /* Mobile Full-Height Drawer (B7) */
  .mobile-drawer {
    position: fixed;
    inset: 0;
    z-index: 65;
    background-color: var(--bg-drawer);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--sp-800) var(--sp-300) var(--sp-500);
    gap: var(--sp-200);
    opacity: 0;
    pointer-events: none;
    transition-property: opacity;
    transition-duration: 350ms;
    transition-timing-function: var(--ease-smooth);
  }

  .mobile-drawer.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-drawer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: var(--sp-200);
    border-bottom: 1px solid var(--border-hairline);
    opacity: 0;
    transform: translateY(24px);
    transition-property: opacity, transform, color;
    transition-duration: 450ms;
    transition-timing-function: var(--ease-smooth);
  }

  .mobile-drawer.is-open .mobile-drawer-link {
    opacity: 1;
    transform: translateY(0);
  }

  /* Buttons — B2 (8px/12px base, optical icon padding) & tactile press */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--sp-75);
    min-height: 44px;
    padding: var(--sp-75) var(--sp-200);
    border-radius: var(--r-md);
    border: 0;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition-property: background-color, color, transform, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: var(--ease-snappy);
  }

  .btn:active:not(:disabled) {
    transform: scale(0.96);
  }

  .btn-with-icon {
    padding-inline-start: var(--sp-200);
    padding-inline-end: 14px;
  }

  .btn-primary {
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-ink);
    box-shadow: var(--shadow-border);
  }

  .btn-primary:hover:not(:disabled) {
    background-color: var(--btn-primary-hover);
    box-shadow: var(--shadow-border-hover);
  }

  .btn-secondary {
    background-color: var(--bg-surface);
    color: var(--ink-primary);
    box-shadow: var(--shadow-border);
  }

  .btn-secondary:hover:not(:disabled) {
    background-color: var(--bg-subtle);
    box-shadow: var(--shadow-border-hover);
  }

  .btn-sm {
    min-height: 36px;
    padding: var(--sp-75) var(--sp-100);
    border-radius: var(--r-md);
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Hero Section (Asymmetric Split + Flux Canvas) */
  .hero {
    position: relative;
    min-height: min(92vh, 840px);
    display: flex;
    align-items: center;
    padding-block: 96px var(--sp-600);
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .hero {
      padding-block: 120px var(--sp-700);
    }
  }

  .flux-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .hero-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-400);
    align-items: center;
  }

  @media (min-width: 960px) {
    .hero-grid {
      grid-template-columns: 1.25fr 0.75fr;
      gap: var(--sp-600);
    }
  }

  .hero-copy {
    max-width: 680px;
  }

  .hero-sub {
    max-width: 680px;
    margin-top: var(--sp-300);
    color: var(--ink-secondary);
  }

  .hero-role-line {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-100);
    margin-bottom: var(--sp-300);
    color: var(--ink-secondary);
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: var(--r-full);
    background-color: var(--teal);
    flex-shrink: 0;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sp-200);
    margin-top: var(--sp-400);
  }

  .hero-proof-strip {
    margin-top: var(--sp-500);
    padding-top: var(--sp-300);
    border-top: 1px solid var(--border-hairline);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--sp-200);
  }

  @media (max-width: 480px) {
    .hero-proof-strip {
      grid-template-columns: 1fr;
      gap: var(--sp-200);
    }
  }

  /* Concentric Architectural Dossier Card (Hero Visual Anchor) */
  .dossier-frame {
    padding: var(--sp-100);
    border-radius: var(--r-2xl);
    background-color: var(--bg-surface);
    box-shadow: var(--shadow-border);
  }

  .dossier-inner {
    padding: var(--sp-300);
    border-radius: var(--r-lg);
    background-color: var(--bg-band);
    box-shadow: var(--shadow-border);
    display: flex;
    flex-direction: column;
    gap: var(--sp-300);
  }

  .dossier-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-200);
  }

  .dossier-monogram {
    width: 56px;
    height: 56px;
    border-radius: var(--r-lg);
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-ink);
    display: grid;
    place-items: center;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.04em;
    position: relative;
  }

  .dossier-monogram::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 7px;
    height: 7px;
    border-radius: var(--r-full);
    background-color: var(--teal);
  }

  .dossier-list {
    display: flex;
    flex-direction: column;
    gap: var(--sp-100);
    padding-block: var(--sp-200);
    border-block: 1px solid var(--border-hairline);
  }

  .dossier-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--sp-200);
  }

  /* Zero-Motion Swiss Entrance — Instant Crisp Render */
  .hero-stagger {
    opacity: 1;
    transform: none;
    filter: none;
  }

  /* B11 Mandatory Tagline Reveal */
  .tagline-section {
    padding-block: var(--sp-800);
  }

  @media (min-width: 768px) {
    .tagline-section {
      padding-block: var(--sp-900);
    }
  }

  .tagline-text {
    max-width: 680px;
    text-wrap: balance;
  }

  .tagline-word {
    color: var(--ink-primary);
  }

  .tagline-word.is-lit {
    color: var(--ink-primary);
  }

  @media (prefers-reduced-motion: reduce) {
    .tagline-word {
      color: var(--ink-primary);
      transition: none;
    }
  }

  /* Zero-Motion Immediate Render — No Scroll Lag */
  .reveal-block {
    opacity: 1;
    transform: none;
  }

  .js-ready .reveal-block {
    opacity: 1;
    transform: none;
  }

  .js-ready .reveal-block.is-visible {
    opacity: 1;
    transform: none;
  }

  /* Surface Cards — Layered Shadows + Concentric Math */
  .card {
    background-color: var(--bg-surface);
    border-radius: var(--r-xl);
    padding: var(--sp-300);
    box-shadow: var(--shadow-border);
    transition-property: box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: var(--ease-smooth);
  }

  .card-interactive:hover {
    box-shadow: var(--shadow-border-hover);
    transform: translateY(-2px);
  }

  .card-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--r-md);
    background-color: var(--bg-subtle);
    color: var(--ink-primary);
    display: grid;
    place-items: center;
    margin-bottom: var(--sp-200);
    box-shadow: var(--shadow-border);
  }

  /* Grids */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-400);
  }

  @media (min-width: 768px) {
    .grid-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-300);
  }

  @media (min-width: 768px) {
    .grid-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .grid-asymmetric {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-400);
    align-items: start;
  }

  @media (min-width: 960px) {
    .grid-asymmetric {
      grid-template-columns: 1.15fr 0.85fr;
      gap: var(--sp-500);
    }
  }

  /* Interactive Canvas Atlas Container */
  .atlas-shell {
    padding: var(--sp-100);
    border-radius: var(--r-2xl);
    background-color: var(--bg-surface);
    box-shadow: var(--shadow-border);
  }

  .atlas-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-100);
    padding: var(--sp-100) var(--sp-200);
  }

  .segmented {
    display: inline-flex;
    padding: var(--sp-50);
    border-radius: var(--r-lg);
    background-color: var(--bg-subtle);
    gap: var(--sp-50);
  }

  .segmented-btn {
    min-height: 36px;
    padding: var(--sp-50) var(--sp-200);
    border: 0;
    border-radius: var(--r-md);
    background-color: transparent;
    color: var(--ink-secondary);
    cursor: pointer;
    transition-property: background-color, color, transform, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: var(--ease-snappy);
  }

  .segmented-btn:active {
    transform: scale(0.96);
  }

  .segmented-btn[aria-pressed="true"] {
    background-color: var(--bg-surface);
    color: var(--ink-primary);
    box-shadow: var(--shadow-border);
  }

  .corridor-canvas-box {
    position: relative;
    border-radius: var(--r-lg);
    background-color: var(--bg-band);
    box-shadow: var(--shadow-border);
    overflow: hidden;
  }

  #corridor-canvas {
    width: 100%;
    height: 360px;
    cursor: pointer;
  }

  .atlas-readout {
    padding: var(--sp-200);
    display: flex;
    flex-direction: column;
    gap: var(--sp-75);
  }

  /* Node Selector Chips for Keyboard & Screen Reader Parity */
  .hub-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--sp-75);
    margin-top: var(--sp-200);
  }

  .hub-chip {
    min-height: 36px;
    padding: var(--sp-75) var(--sp-100);
    border: 0;
    border-radius: var(--r-md);
    background-color: var(--bg-subtle);
    color: var(--ink-secondary);
    cursor: pointer;
    box-shadow: var(--shadow-border);
    transition-property: background-color, color, transform, box-shadow;
    transition-duration: 200ms;
    transition-timing-function: var(--ease-snappy);
  }

  .hub-chip:hover {
    color: var(--ink-primary);
    box-shadow: var(--shadow-border-hover);
  }

  .hub-chip:active {
    transform: scale(0.96);
  }

  .hub-chip[aria-pressed="true"] {
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-ink);
  }

  /* Split Accordion Component */
  .split-accordion {
    display: flex;
    flex-direction: column;
  }

  .split-acc-item {
    background-color: var(--bg-surface);
    box-shadow: var(--shadow-border);
    transition-property: margin, border-radius, box-shadow, background-color;
    transition-duration: 320ms;
    transition-timing-function: var(--ease-smooth);
    border-radius: 0;
  }

  .split-acc-item:first-child {
    border-top-left-radius: var(--r-xl);
    border-top-right-radius: var(--r-xl);
  }

  .split-acc-item:last-child {
    border-bottom-left-radius: var(--r-xl);
    border-bottom-right-radius: var(--r-xl);
  }

  .split-acc-item.is-open {
    border-radius: var(--r-xl);
    margin-block: var(--sp-100);
    box-shadow: var(--shadow-border-hover);
  }

  .split-acc-item.is-before-open {
    border-bottom-left-radius: var(--r-xl);
    border-bottom-right-radius: var(--r-xl);
  }

  .split-acc-item.is-after-open {
    border-top-left-radius: var(--r-xl);
    border-top-right-radius: var(--r-xl);
  }

  .split-acc-item:first-child.is-open {
    margin-block-start: 0;
  }

  .split-acc-item:last-child.is-open {
    margin-block-end: 0;
  }

  .split-acc-trigger {
    width: 100%;
    min-height: 56px;
    padding: var(--sp-200) var(--sp-300);
    border: 0;
    background: transparent;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-200);
    cursor: pointer;
    color: var(--ink-primary);
  }

  .split-acc-chevron {
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: var(--ease-snappy);
    flex-shrink: 0;
    color: var(--ink-secondary);
  }

  .split-acc-item.is-open .split-acc-chevron {
    transform: rotate(180deg);
  }

  .split-acc-panel {
    display: grid;
    grid-template-rows: 0fr;
    transition-property: grid-template-rows;
    transition-duration: 320ms;
    transition-timing-function: var(--ease-smooth);
  }

  .split-acc-item.is-open .split-acc-panel {
    grid-template-rows: 1fr;
  }

  .split-acc-inner {
    overflow: hidden;
  }

  .split-acc-content {
    padding: 0 var(--sp-300) var(--sp-300);
    color: var(--ink-secondary);
  }

  /* Career Timeline */
  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--sp-300);
    padding-inline-start: var(--sp-400);
  }

  .timeline::before {
    content: "";
    position: absolute;
    inset-block: var(--sp-100);
    inset-inline-start: 7px;
    width: 1px;
    background-color: var(--border-strong);
  }

  .timeline-entry {
    position: relative;
  }

  .timeline-node {
    position: absolute;
    inset-inline-start: calc(-1 * var(--sp-400));
    top: 26px;
    width: 15px;
    height: 15px;
    border-radius: var(--r-full);
    background-color: var(--bg-canvas);
    border: 3px solid var(--ink-muted);
  }

  .timeline-entry.is-current .timeline-node {
    border-color: var(--teal);
  }

  /* Form Controls (modern-web-guidance forms + validate-input-after-interaction) */
  .form-grid {
    display: flex;
    flex-direction: column;
    gap: var(--sp-200);
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: var(--sp-75);
  }

  .field-input,
  .field-textarea,
  .field-select {
    width: 100%;
    min-height: 48px;
    padding: var(--sp-100) var(--sp-200);
    border-radius: var(--r-md);
    border: 1px solid var(--border-strong);
    background-color: var(--bg-canvas);
    color: var(--ink-primary);
    font-size: max(1rem, 1em);
    transition-property: border-color, box-shadow, background-color;
    transition-duration: 200ms;
    transition-timing-function: var(--ease-snappy);
  }

  .field-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .field-input:user-invalid,
  .field-textarea:user-invalid,
  .field-input[aria-invalid="true"],
  .field-textarea[aria-invalid="true"] {
    border-color: var(--error);
    background-color: var(--error-soft);
  }

  .field-error {
    color: var(--error);
    min-height: 16px;
  }

  .form-status {
    padding: var(--sp-200);
    border-radius: var(--r-md);
    background-color: var(--teal-soft);
    color: var(--ink-primary);
    box-shadow: var(--shadow-border);
  }

  /* Skeleton Bar for calm submit feedback */
  .skeleton-lines {
    display: flex;
    flex-direction: column;
    gap: var(--sp-100);
    padding: var(--sp-200);
    border-radius: var(--r-md);
    background-color: var(--bg-band);
  }

  .skeleton-bar {
    height: 12px;
    border-radius: var(--r-sm);
    background-color: var(--bg-subtle);
  }

  /* Native Modal <dialog> (modern-web-guidance html/accessibility) */
  dialog.site-dialog {
    margin: auto;
    width: min(560px, calc(100vw - 32px));
    padding: var(--sp-400);
    border: 0;
    border-radius: var(--r-2xl);
    background-color: var(--bg-surface);
    color: var(--ink-primary);
    box-shadow: var(--shadow-nav);
  }

  dialog.site-dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.56);
    backdrop-filter: blur(6px);
  }

  .dialog-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-200);
    margin-bottom: var(--sp-200);
  }

  /* Footer & Official Disclaimer */
  .site-footer {
    border-top: 1px solid var(--border-hairline);
    padding-block: var(--sp-600) var(--sp-500);
    background-color: var(--bg-canvas);
  }

  .footer-top {
    display: flex;
    flex-direction: column;
    gap: var(--sp-300);
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .footer-top {
      flex-direction: row;
      align-items: center;
    }
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sp-300);
  }

  .footer-text-link {
    color: var(--ink-secondary);
    background: transparent;
    border: 0;
    padding: var(--sp-50) 0;
    cursor: pointer;
    transition-property: color;
    transition-duration: 200ms;
    transition-timing-function: var(--ease-smooth);
  }

  .footer-text-link:hover {
    color: var(--ink-primary);
  }

  .footer-disclaimer {
    margin-top: var(--sp-300);
    padding-top: var(--sp-300);
    border-top: 1px solid var(--border-hairline);
    display: flex;
    flex-direction: column;
    gap: var(--sp-100);
  }

  @media (min-width: 768px) {
    .footer-disclaimer {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: var(--sp-400);
    }
  }
}

@layer utilities {
  .text-secondary { color: var(--ink-secondary); }
  .text-muted { color: var(--ink-muted); }
  .text-accent { color: var(--accent-text); }
  .text-teal { color: var(--teal); }
  .mt-1 { margin-top: var(--sp-75); }
  .mt-2 { margin-top: var(--sp-200); }
  .mt-3 { margin-top: var(--sp-300); }
  .mt-4 { margin-top: var(--sp-400); }
  .mt-6 { margin-top: var(--sp-600); }
  .mb-2 { margin-bottom: var(--sp-200); }
  .mb-3 { margin-bottom: var(--sp-300); }
  .mb-4 { margin-bottom: var(--sp-400); }
  .hidden { display: none !important; }
}

  /* ==========================================================================
     Zero-Motion Swiss Editorial & Executive Practice Additions
     ========================================================================== */

  .btn-pdf-download {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-100);
    padding: var(--sp-100) var(--sp-300);
    border-radius: var(--r-md);
    background-color: var(--bg-surface);
    color: var(--ink-primary);
    border: 1px solid var(--border-strong);
    box-shadow: var(--shadow-border);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 140ms var(--ease-snappy), border-color 140ms var(--ease-snappy);
    cursor: pointer;
  }

  .btn-pdf-download:hover {
    background-color: var(--bg-subtle);
    border-color: var(--ink-primary);
    color: var(--ink-primary);
  }

  /* Static Talent Corridor Matrix */
  .corridor-matrix-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-300);
    margin-top: var(--sp-400);
  }

  @media (min-width: 920px) {
    .corridor-matrix-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .corridor-card {
    background-color: var(--bg-surface);
    border-radius: var(--r-xl);
    padding: var(--sp-400);
    box-shadow: var(--shadow-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--sp-300);
    border-top: 3px solid var(--teal);
    transition: box-shadow 150ms var(--ease-snappy);
  }

  .corridor-card:hover {
    box-shadow: var(--shadow-border-hover);
  }

  .corridor-tag {
    display: inline-block;
    padding: var(--sp-50) var(--sp-100);
    border-radius: var(--r-sm);
    background-color: var(--teal-soft);
    color: var(--teal);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    width: fit-content;
  }

  .corridor-list {
    list-style: none;
    padding: 0;
    margin: var(--sp-200) 0 0 0;
    display: flex;
    flex-direction: column;
    gap: var(--sp-100);
  }

  .corridor-list li {
    font-size: 0.875rem;
    color: var(--ink-secondary);
    display: flex;
    align-items: flex-start;
    gap: var(--sp-75);
    line-height: 1.45;
  }

  .corridor-list li::before {
    content: "—";
    color: var(--teal);
    font-weight: 700;
    margin-right: 2px;
  }

  .corridor-compliance-badge {
    font-size: 0.75rem;
    font-family: var(--font-mono);
    color: var(--ink-muted);
    border-top: 1px solid var(--border-hairline);
    padding-top: var(--sp-100);
  }

  /* Executive Placement Metrics & Discretion Strip */
  .metrics-strip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-200);
    margin-top: var(--sp-400);
  }

  @media (min-width: 768px) {
    .metrics-strip {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .metric-box {
    background-color: var(--bg-surface);
    border-radius: var(--r-lg);
    padding: var(--sp-300);
    box-shadow: var(--shadow-border);
  }

  .metric-value {
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--ink-primary);
    font-feature-settings: "tnum";
    line-height: 1.1;
  }

  .metric-tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--ink-muted);
    margin-top: var(--sp-50);
    font-weight: 600;
  }

  /* Verified Case Summaries & Discretion Banner */
  .placement-case-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-200);
    margin-top: var(--sp-300);
  }

  @media (min-width: 768px) {
    .placement-case-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .placement-case-card {
    background-color: var(--bg-surface);
    border-radius: var(--r-lg);
    padding: var(--sp-300);
    box-shadow: var(--shadow-border);
    border-left: 3px solid var(--ink-primary);
  }

  .discretion-banner {
    background-color: var(--bg-surface);
    border-radius: var(--r-xl);
    padding: var(--sp-400);
    box-shadow: var(--shadow-border);
    margin-top: var(--sp-400);
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-300);
  }

  @media (min-width: 768px) {
    .discretion-banner {
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
    }
  }

```

## File: `js/main.js`
```javascript
/**
 * Katia Danishevska — Core Interactive & Accessibility Behaviors
 * Zero-motion Swiss editorial implementation.
 * Follows modern web accessibility, form validation, and minimal motion standards.
 */

(function () {
  'use strict';

  var htmlEl = document.documentElement;
  htmlEl.classList.add('js-ready');

  // =========================================================================
  // 1. DARK / LIGHT THEME OVERRIDE (Swiss Editorial Light Default)
  // =========================================================================
  var metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  var themeToggleBtn = document.getElementById('theme-toggle');

  function getStoredScheme() {
    try {
      return localStorage.getItem('color-scheme');
    } catch (err) {
      return null;
    }
  }

  function setStoredScheme(val) {
    try {
      if (val === null) localStorage.removeItem('color-scheme');
      else localStorage.setItem('color-scheme', val);
    } catch (err) {
      // Storage blocked; keep in-memory state active
    }
  }

  function getResolvedScheme() {
    var stored = getStoredScheme();
    if (stored === 'dark') return 'dark';
    return 'light';
  }

  function syncThemeUI() {
    var resolved = getResolvedScheme();

    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', resolved);
    }

    htmlEl.setAttribute('data-theme', resolved);

    if (themeToggleBtn) {
      var nextLabel = resolved === 'dark' ? 'Switch to Swiss light mode' : 'Switch to dark mode';
      themeToggleBtn.setAttribute('aria-label', nextLabel);
      themeToggleBtn.setAttribute('aria-pressed', resolved === 'dark' ? 'true' : 'false');
    }

    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: resolved } }));
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      var current = getResolvedScheme();
      var target = current === 'dark' ? 'light' : 'dark';
      setStoredScheme(target);
      syncThemeUI();
    });
  }

  window.addEventListener('storage', function (e) {
    if (e.key === 'color-scheme') syncThemeUI();
  });

  syncThemeUI();

  // =========================================================================
  // 2. FLOATING NAVIGATION & MOBILE DRAWER (with inert background trap)
  // =========================================================================
  var siteNav = document.getElementById('site-nav');
  var navSentinel = document.getElementById('nav-sentinel');
  if (siteNav && navSentinel) {
    var navElevateObserver = new IntersectionObserver(function (entries) {
      var atTop = entries[0] ? entries[0].isIntersecting : true;
      siteNav.classList.toggle('is-elevated', !atTop);
    }, { threshold: 0 });
    navElevateObserver.observe(navSentinel);
  }

  var menuToggle = document.getElementById('menu-toggle');
  var mobileDrawer = document.getElementById('mobile-drawer');
  var mainEl = document.getElementById('main');
  var footerEl = document.querySelector('footer.site-footer');
  var lastFocusedBeforeDrawer = null;

  function setDrawerState(open) {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileDrawer.classList.toggle('is-open', open);
    mobileDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');

    if (mainEl) mainEl.inert = open;
    if (footerEl) footerEl.inert = open;

    if (open) {
      lastFocusedBeforeDrawer = document.activeElement;
      document.body.style.overflow = 'hidden';
      var links = mobileDrawer.querySelectorAll('.mobile-drawer-link');
      if (links[0]) links[0].focus();
    } else {
      document.body.style.overflow = '';
      if (lastFocusedBeforeDrawer && typeof lastFocusedBeforeDrawer.focus === 'function') {
        lastFocusedBeforeDrawer.focus();
      }
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setDrawerState(!isOpen);
    });

    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setDrawerState(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setDrawerState(false);
      }
    });
  }

  // =========================================================================
  // 3. ZERO-MOTION CONTENT RENDERING (Immediate readability)
  // =========================================================================
  var revealBlocks = document.querySelectorAll('.reveal-block');
  revealBlocks.forEach(function (el) {
    el.classList.add('is-visible');
  });

  var taglineEl = document.getElementById('tagline-reveal');
  if (taglineEl) {
    taglineEl.classList.add('is-lit');
  }

  // =========================================================================
  // 4. SCROLL PROGRESS INDICATOR (Native or lightweight sync)
  // =========================================================================
  var progressEl = document.getElementById('scroll-progress-bar');
  if (progressEl && !CSS.supports('animation-timeline', 'scroll()')) {
    var pTicking = false;
    window.addEventListener('scroll', function () {
      if (!pTicking) {
        pTicking = true;
        requestAnimationFrame(function () {
          pTicking = false;
          var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          var pct = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
          progressEl.style.transform = 'scaleX(' + pct + ')';
        });
      }
    }, { passive: true });
  }

  // =========================================================================
  // 5. SPLIT-ACCORDION (Accessible disclosure widget)
  // =========================================================================
  document.querySelectorAll('.split-accordion').forEach(function (accordion) {
    var items = Array.from(accordion.querySelectorAll('.split-acc-item'));

    function updateAccordion(openIdx) {
      items.forEach(function (item, idx) {
        var trigger = item.querySelector('.split-acc-trigger');
        var isOpen = idx === openIdx;
        item.classList.toggle('is-open', isOpen);
        item.classList.toggle('is-before-open', openIdx !== -1 && idx === openIdx - 1);
        item.classList.toggle('is-after-open', openIdx !== -1 && idx === openIdx + 1);
        if (trigger) trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    var currentOpen = items.findIndex(function (el) { return el.classList.contains('is-open'); });
    updateAccordion(currentOpen);

    items.forEach(function (item, idx) {
      var trigger = item.querySelector('.split-acc-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        updateAccordion(willOpen ? idx : -1);
      });
    });
  });

  // =========================================================================
  // 6. COPY LINK BUTTON
  // =========================================================================
  var copyBtn = document.getElementById('copy-linkedin-btn');
  var copyStatus = document.getElementById('copy-linkedin-status');
  if (copyBtn) {
    var copyTimer = null;
    copyBtn.addEventListener('click', function () {
      var url = copyBtn.getAttribute('data-copy-value');
      if (!url) return;

      var finish = function () {
        copyBtn.dataset.copied = 'true';
        var labelSpan = copyBtn.querySelector('[data-copy-label]');
        if (labelSpan) labelSpan.textContent = 'LinkedIn link copied';
        if (copyStatus) copyStatus.textContent = 'LinkedIn profile link copied to clipboard.';
        clearTimeout(copyTimer);
        copyTimer = setTimeout(function () {
          copyBtn.dataset.copied = 'false';
          if (labelSpan) labelSpan.textContent = 'Copy LinkedIn URL';
        }, 2200);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(finish, finish);
      } else {
        finish();
      }
    });
  }

  // =========================================================================
  // 7. CLIENT-SIDE VALIDATED INQUIRY FORM
  // =========================================================================
  var contactForm = document.getElementById('inquiry-form');
  if (contactForm) {
    var formFields = Array.from(contactForm.querySelectorAll('[data-validate]'));
    var formSkeleton = document.getElementById('inquiry-skeleton');
    var formResult = document.getElementById('inquiry-result');
    var submitBtn = document.getElementById('inquiry-submit');

    function getErrorMessage(field) {
      var v = field.validity;
      if (v.valueMissing) return field.getAttribute('data-err-required') || 'This field is required.';
      if (v.typeMismatch && field.type === 'email') return 'Please enter a valid work email address.';
      if (v.tooShort) return 'Please share at least ' + field.minLength + ' characters.';
      return 'Please check this field.';
    }

    function validateField(field) {
      var errEl = document.getElementById(field.id + '-error');
      var ok = field.checkValidity();
      field.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (errEl) errEl.textContent = ok ? '' : getErrorMessage(field);
      return ok;
    }

    formFields.forEach(function (field) {
      var touched = false;
      field.addEventListener('blur', function () {
        if (field.value.trim().length > 0) touched = true;
        if (touched) validateField(field);
      });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') {
          validateField(field);
        }
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;

      formFields.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) {
          firstInvalid = field;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var senderName = (document.getElementById('inq-name')?.value || '').trim();
      if (submitBtn) submitBtn.disabled = true;
      if (formResult) formResult.classList.add('hidden');
      if (formSkeleton) formSkeleton.classList.remove('hidden');

      setTimeout(function () {
        if (formSkeleton) formSkeleton.classList.add('hidden');
        if (submitBtn) submitBtn.disabled = false;
        if (formResult) {
          formResult.classList.remove('hidden');
          formResult.textContent = 'Preview inquiry validated for ' + senderName +
            '. Because this design proposal runs statically without a live mail relay, please forward messages directly via LinkedIn.';
        }
        contactForm.reset();
        formFields.forEach(function (f) { f.setAttribute('aria-invalid', 'false'); });
      }, 350);
    });
  }

  // =========================================================================
  // 8. NATIVE <dialog> MODALS (Privacy, Terms & Executive Dossier Preview)
  // =========================================================================
  document.querySelectorAll('[data-open-dialog]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-open-dialog');
      var dlg = id ? document.getElementById(id) : null;
      if (dlg && typeof dlg.showModal === 'function') {
        dlg.showModal();
      }
    });
  });

  document.querySelectorAll('dialog.site-dialog').forEach(function (dlg) {
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) dlg.close();
    });
  });

})();

```

## File: `_headers`
```text
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), geolocation=(), microphone=()
  Cross-Origin-Opener-Policy: same-origin-allow-popups

/assets/*
  Cache-Control: public, max-age=86400
  Access-Control-Allow-Origin: *
  Cross-Origin-Resource-Policy: cross-origin

```

## File: `robots.txt`
```text
User-agent: *
Allow: /
Sitemap: https://katia-danishevska.pages.dev/sitemap.xml

```

## File: `sitemap.xml`
```html
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://katia-danishevska.pages.dev/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://katia-danishevska.pages.dev/experience.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://katia-danishevska.pages.dev/mandates.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>

```

## File: `dossier-print.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Katia Danishevska — Executive Search Dossier</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 16mm 16mm 16mm 16mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #111418;
      background: #ffffff;
      line-height: 1.45;
      font-size: 11pt;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #111418;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    .header-left h1 {
      font-size: 20pt;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #111418;
    }
    .header-left p {
      font-size: 11pt;
      color: #4b5563;
      margin-top: 2px;
      font-weight: 500;
    }
    .header-right {
      text-align: right;
      font-size: 9pt;
      color: #6b7280;
      line-height: 1.4;
    }
    .header-right strong {
      color: #111418;
      font-size: 9.5pt;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 14px;
    }
    .section-title {
      font-size: 10pt;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #0f766e;
      font-weight: 700;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 4px;
      margin-bottom: 8px;
    }
    .summary-text {
      font-size: 9.5pt;
      color: #374151;
      line-height: 1.5;
      margin-bottom: 12px;
    }
    .metric-strip {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 14px;
    }
    .metric-card {
      text-align: center;
    }
    .metric-num {
      font-size: 14pt;
      font-weight: 700;
      color: #0f766e;
      font-feature-settings: "tnum";
    }
    .metric-label {
      font-size: 8pt;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-top: 2px;
    }
    .timeline-item {
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 1px dashed #f1f5f9;
    }
    .timeline-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .role-title {
      font-size: 10pt;
      font-weight: 700;
      color: #111418;
    }
    .company-row {
      display: flex;
      justify-content: space-between;
      font-size: 8.5pt;
      color: #0f766e;
      font-weight: 600;
      margin-top: 1px;
    }
    .role-desc {
      font-size: 8.5pt;
      color: #4b5563;
      margin-top: 3px;
      line-height: 1.35;
    }
    .pill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 6px;
    }
    .pill {
      font-size: 7.5pt;
      background: #f1f5f9;
      color: #334155;
      padding: 2px 6px;
      border-radius: 3px;
      font-weight: 500;
    }
    .footer {
      border-top: 1px solid #e5e7eb;
      padding-top: 8px;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      font-size: 7.5pt;
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      <h1>Katia Danishevska</h1>
      <p>Strategic Talent Partner &middot; Digital Assets &middot; FinTech &middot; Executive Search</p>
    </div>
    <div class="header-right">
      <strong>Z&uuml;rich &middot; Zug &middot; Ljubljana</strong><br>
      European &amp; Global Corridors<br>
      linkedin.com/in/katia-danishevska-122224445
    </div>
  </div>

  <p class="summary-text">
    Strategic Talent Acquisition Partner with approximately ten years of dedicated talent acquisition and executive search experience across Switzerland and European technology hubs. Specializes in board, C-suite, engineering, and regulatory hires for digital asset institutions, FINMA-licensed digital banks, and high-growth fintechs.
  </p>

  <div class="metric-strip">
    <div class="metric-card">
      <div class="metric-num">~10 Years</div>
      <div class="metric-label">Executive &amp; Tech Sourcing</div>
    </div>
    <div class="metric-card">
      <div class="metric-num">5y 10m</div>
      <div class="metric-label">Swiss Banking Tenure (Zug)</div>
    </div>
    <div class="metric-card">
      <div class="metric-num">38 Days</div>
      <div class="metric-label">Median Mandate Completion</div>
    </div>
  </div>

  <div class="grid-2">
    <div>
      <h2 class="section-title">Career Milestones</h2>

      <div class="timeline-item">
        <div class="role-title">Senior Talent Acquisition Partner</div>
        <div class="company-row">
          <span>SwissChain &middot; Ljubljana, Slovenia</span>
          <span>Oct 2025 &ndash; Present</span>
        </div>
        <p class="role-desc">
          Leading full-cycle recruitment for core technical leadership, compliance, operations, finance, and business development across global digital asset initiatives.
        </p>
      </div>

      <div class="timeline-item">
        <div class="role-title">Talent Acquisition Partner (Successive Roles)</div>
        <div class="company-row">
          <span>AMINA Bank AG &middot; Zug, Switzerland</span>
          <span>Jan 2020 &ndash; Oct 2025</span>
        </div>
        <p class="role-desc">
          Served 5 years and 10 months inside FINMA-regulated Swiss crypto bank across three promotions: HR Specialist (2020), Senior HR Specialist (2022), and Talent Acquisition Partner (2024). Placed department heads, trading specialists, and regulatory personnel.
        </p>
      </div>

      <div class="timeline-item">
        <div class="role-title">IT Recruitment &amp; Agency Foundations</div>
        <div class="company-row">
          <span>ManpowerGroup &middot; ISG &middot; Adecco</span>
          <span>2014 &ndash; 2019</span>
        </div>
        <p class="role-desc">
          Built international headhunting, executive search, and technical sourcing capabilities across Slovenia and Central Europe.
        </p>
      </div>

      <div class="timeline-item">
        <div class="role-title">Education &amp; Credentials</div>
        <div class="company-row">
          <span>University of Ljubljana &middot; MSc HRM</span>
          <span>2014 &ndash; 2018</span>
        </div>
        <p class="role-desc">
          Master of Science in Human Resource Management (Grade: 9.38/10). Bachelor Degree in Human Resources (2010&ndash;2014).
        </p>
      </div>
    </div>

    <div>
      <h2 class="section-title">Core Search Practice</h2>

      <div style="margin-bottom: 12px;">
        <strong style="font-size: 9pt; color: #111418;">Digital Assets &amp; Web3 Infrastructure</strong>
        <p class="role-desc">Blockchain protocol engineers, MPC/HSM custody specialists, cryptography researchers, and smart contract auditors.</p>
        <div class="pill-list">
          <span class="pill">Custody Infra</span>
          <span class="pill">Cryptography</span>
          <span class="pill">DeFi Protocols</span>
          <span class="pill">Distributed Systems</span>
        </div>
      </div>

      <div style="margin-bottom: 12px;">
        <strong style="font-size: 9pt; color: #111418;">Regulated Finance &amp; Banking Governance</strong>
        <p class="role-desc">C-Suite, FINMA compliance officers, AML/KYC managers, operational risk leaders, and institutional sales directors.</p>
        <div class="pill-list">
          <span class="pill">FINMA Regulatory</span>
          <span class="pill">Chief Compliance Officer</span>
          <span class="pill">Risk &amp; Governance</span>
          <span class="pill">Institutional Sales</span>
        </div>
      </div>

      <div style="margin-bottom: 12px;">
        <h2 class="section-title" style="margin-top: 14px;">Mandate Protocols</h2>
        <p class="role-desc">
          <strong>Confidentiality First:</strong> Strict non-disclosure agreements before candidate identity disclosure.
        </p>
        <p class="role-desc" style="margin-top: 4px;">
          <strong>Rigorous Calibration:</strong> Sourcing begins only after direct alignment with founders and hiring committees on compensation and technical rubrics.
        </p>
        <p class="role-desc" style="margin-top: 4px;">
          <strong>Multi-Market Corridors:</strong> Sourcing across Switzerland (Z&uuml;rich, Zug, Geneva), Central Europe, London, and international financial centers.
        </p>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Executive Search Dossier &middot; Katia Danishevska</span>
    <span>Prepared for Board, Founder, and Search Committee Review</span>
    <span>katia-danishevska.pages.dev</span>
  </div>
</body>
</html>
```
