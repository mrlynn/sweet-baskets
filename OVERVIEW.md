Sweet Baskets — Static Website Starter Plan

A clean, professional multi-page site built with Next.js (App Router) + Material UI.

⸻

1. Recommended Pages for Launch

For a young nonprofit, credibility and clarity matter more than having lots of content. These pages give Sweet Baskets legitimacy, a clear mission, and the required legal coverage.

Core public pages
	1.	Home — mission, story, how it works, donate + volunteer CTAs
	2.	About Sweet Baskets — founder story, why this work matters
	3.	Programs
	•	Children’s Hospital Baskets
	•	Elderly Care Baskets
	4.	Get involved
	•	Volunteer
	•	Host a basket drive
	•	Partner with your facility
	5.	Donate — simple donation explanation (even before integration)
	6.	Impact — placeholder stats (“2025 goals”, “pilot story”)
	7.	Contact

Required Legal + Trust Pages
8. Privacy policy
9. Terms of use
10. Cookie policy
11. Accessibility statement (WCAG 2.1 AA) — nonprofits are expected to provide one
12. Gift policy / donation disclaimer
13. IRS/Nonprofit status page — even if pending, you can include:

Sweet Baskets is applying for 501(c)(3) status; donations may be tax-deductible once approval is granted.

Optional but highly beneficial early pages
14. Frequently Asked Questions
15. Stories — a placeholder blog where future impact stories will live
16. Press / media kit — even a tiny one builds legitimacy

⸻

2. Basic Next.js App Router Directory Structure

This sets you up for a clean multi-page site with easy expansion.

/src
  /app
    /layout.js
    /globals.css
    /page.js               (Home)
    /about/page.js
    /programs/page.js
    /programs/children/page.js
    /programs/elderly/page.js
    /get-involved/page.js
    /donate/page.js
    /impact/page.js
    /contact/page.js

    /legal
      /privacy/page.js
      /terms/page.js
      /cookies/page.js
      /accessibility/page.js
      /gift-policy/page.js
      /nonprofit-status/page.js

    /faq/page.js
    /stories/page.js
    /press/page.js

  /components
    Header.js
    Footer.js
    Hero.js
    Section.js
    CTAButton.js
    PageHeader.js

Material UI will handle layout via <Container>, <Box>, and theme overrides.


3. Initial MUI Theme Setup (High-level sketch)

Palette that feels warm, caring, and grounded:
	•	Primary: soft teal/green (hope, care)
	•	Secondary: warm coral (human connection)
	•	Neutral: slate / soft grey
	•	Typography: clean rounded sans-serif like Inter or Nunito
	•	Component feel: gentle edges, soft shadows, lots of white space

Your engineer will set this in /src/theme.js and wrap the site via ThemeProvider in layout.js.

⸻

4. What the Home Page Should Contain (High-level copy + structure)

Hero section

Headline:
Small moments of kindness become lifelines of hope.

Tagline:
Sweet Baskets brings comfort to children in hospitals and elderly individuals who are homebound or in nursing care.

CTA buttons:
	•	Give a basket (primary)
	•	Volunteer (secondary)

MUI Components:
<Box>, <Typography>, <Button>, maybe a soft illustration background.

⸻

Mission (2–3 sentences)

Sweet Baskets was founded on a simple belief: a thoughtful, personalized basket can lift someone’s spirit at the exact moment they need it. We create and deliver care baskets to hospitalized children and older adults in nursing homes or at home. Each basket is built with compassion, curated with intention, and hand-delivered with kindness.

⸻

How It Works (3-step layout)
	1.	We gather comfort items.
Volunteers, donors, and partners contribute age-appropriate gifts and essentials.
	2.	We assemble Sweet Baskets with care.
Each basket is personalized to brighten someone’s day.
	3.	We deliver them with love.
To pediatric hospital rooms, nursing homes, and homebound seniors.

MUI Components:
<Grid>, <Card>, <CardContent>, icons for each step

⸻

Featured call-to-action strip

A wide, full-bleed section with a simple message:

Bring a moment of sweetness to someone who needs it.

CTA: Donate a basket today

⸻

Trust section (placeholder)
	•	“This year’s goal: 1,000 baskets delivered”
	•	“Volunteers active: [placeholder]”
	•	“Partner facilities: [placeholder]”

MUI: <Paper> counters, simple icons.

⸻

Footer
	•	Links to policies
	•	A tiny mission reminder
	•	© Sweet Baskets, a pending 501(c)(3) nonprofit organization

⸻

5. Engineering Setup: How to Get the Project Running
npx create-next-app@latest sweet-baskets --use-npm --ts false
cd sweet-baskets
Then:
	•	Create /src/theme.js
	•	Wrap <html> or <body> in <ThemeProvider theme={theme}>
	•	Add baseline: <CssBaseline />

⸻

6. Initial Placeholder Content for Legal Pages

I won’t include full legal text (your nonprofit should have counsel review), but your pages should include:

Privacy policy
	•	Data collected (email, volunteer forms, donations — even if future functionality)
	•	How information is used
	•	How cookies are used
	•	Contact for privacy requests

Terms of use
	•	Informational purpose
	•	User responsibilities
	•	Liability limitations
	•	Copyright
	•	Termination clause

Cookies
	•	Types used (analytics, essential)
	•	Opt-out instructions

Accessibility
	•	Statement of commitment
	•	Contact for accessibility issues
	•	WCAG 2.1 AA conformance goals

Donation/Gift policy
	•	How funds are allocated
	•	No refund policy (common for nonprofits)
	•	IRS acknowledgment information

⸻

7. Suggested Visual Style for Early Static Version
	•	Soft color palette, lots of white space
	•	Rounded corners, gentle shadows
	•	Natural photography or warm illustrations
	•	Consistent iconography
	•	Readable, friendly typography (Nunito, Inter, or MUI defaults with tweaks)
	•	Generous spacing — a site that feels calm and kind

⸻

8. What You Can Build First

To keep the project lean:
	1.	Homepage (finished copy + design first)
	2.	About
	3.	Get Involved
	4.	Donate (copy only)
	5.	Contact
	6.	Privacy + Terms + Cookies

That gives you a professional, trustworthy presence.
