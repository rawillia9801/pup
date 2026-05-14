# Codex Build Instructions — Pup-Lift Website

## Mission

Build the `PUPP` / `puppp` repository into a polished Next.js website that mirrors the uploaded Pup-Lift page designs as closely as possible.

The uploaded screenshots are the source of truth. Do not reinterpret them as a generic landing page. Do not substitute cartoon CSS drawings for the puppies, bottle, blanket puppy, woman-with-puppy, QR card, or product imagery. The final site should look like the screenshots, with matching layout, typography, colors, spacing, borders, shadows, cards, and page structure.

This is a multi-page website, not a single-page anchor layout.

## Uploaded Reference Images

Use these uploaded images as visual specifications:

1. `Pup Lift 1.(3).png` — Home page
2. `Pup Lift 2. Emergency Steps(2).png` — Emergency Steps page
3. `Pup Lift 3.  Prevention(2).png` — Prevention page
4. `Pup Lift 4. Aftercare(2).png` — Aftercare page
5. `Pup Lift 5. FAQ(2).png` — FAQ page
6. `Pup Lift 6. Contact(2).png` — Contact page

Each page must be implemented as a real route:

```txt
/
/what-is-hypoglycemia
/emergency-steps
/prevention
/aftercare
/faq
/contact
```

The navigation must link to real pages, not `#section` anchors pretending to be pages.

## Non-Negotiable Visual Requirements

1. Use the screenshots as direct visual reference.
2. Use real image assets or carefully cropped/generated assets for:
   - hero Chihuahua puppy
   - Pup-Lift dropper bottle
   - sleeping puppy in blanket
   - woman holding Chihuahua
   - QR card / phone + bottle visuals
3. Do not draw puppies using CSS circles, emojis, abstract blobs, or placeholder shapes.
4. Do not draw the bottle as a generic tall object. It must read clearly as a white oral glucose/dropper bottle with a Pup-Lift label and QR code.
5. Match the soft, premium, warm veterinary-adjacent design language.
6. Preserve accessibility: text, buttons, FAQ items, forms, and links must be real HTML.
7. Visual photo/product areas may use image assets, but cards and readable text should not be flattened screenshots.
8. The site should be deployable on Vercel.
9. Contact form/backend-ready areas should be structured for Supabase integration, but do not block the visual build waiting for backend implementation.

## Tech Stack

Use:

- Next.js App Router
- React components
- CSS Modules or global CSS, whichever gives better design fidelity
- Lucide React for line icons
- Supabase-ready contact form structure
- Vercel-ready project configuration

Recommended structure:

```txt
app/
  layout.jsx
  page.jsx
  what-is-hypoglycemia/page.jsx
  emergency-steps/page.jsx
  prevention/page.jsx
  aftercare/page.jsx
  faq/page.jsx
  contact/page.jsx
components/
  Header.jsx
  Footer.jsx
  Logo.jsx
  PageHero.jsx
  ProductBottle.jsx
  QuickTopicRow.jsx
  Card.jsx
  FAQAccordion.jsx
  ContactForm.jsx
  EmergencyCard.jsx
  FeatureRow.jsx
  Journey.jsx
public/
  images/
    home-hero-puppy-bottle.png
    emergency-hero-puppy-bottle.png
    prevention-hero-puppy-bottle.png
    aftercare-hero-puppy-bottle.png
    faq-hero-puppy-bottle.png
    contact-hero-puppy-bottle.png
    sleeping-puppy-blanket.png
    woman-chihuahua.png
    qr-card-bottle.png
    pup-lift-bottle.png
```

## Design Language

### Mood

Soft, warm, calm, premium, polished, trustworthy, educational, emergency-support product website.

The visual tone should match the screenshots exactly: cream backgrounds, peach/orange accents, muted teal typography, thin rounded borders, subtle shadows, and elegant serif headlines.

### Colors

Use approximate palette:

```css
:root {
  --cream-bg: #fbf4ea;
  --cream-card: #fffaf3;
  --white: #ffffff;
  --teal-dark: #1f5960;
  --teal: #2f7178;
  --teal-soft: #d9edf0;
  --peach: #f2b48f;
  --peach-light: #fde5d6;
  --orange: #d88543;
  --orange-soft: #f6c89f;
  --brown: #7b5137;
  --text-dark: #2f4c52;
  --text-muted: #6d7778;
  --border: #efd7c3;
  --shadow: rgba(80, 45, 20, 0.08);
}
```

Avoid stark black. Text should be teal-gray, brown-gray, or warm muted tones.

### Fonts

Use Google fonts or local equivalents:

- Headings/logo/decorative script: `Cormorant Garamond`, `Playfair Display`, or similar elegant serif
- Body/nav/buttons: `Inter`, `Nunito Sans`, or similar clean sans-serif

Approximate sizing:

- Hero page title: 48–64px desktop
- Italic hero subtitle line: large peach serif italic
- Body copy: 14–16px
- Small nav: 12px
- Card headings: 17–22px
- Footer text: 11–14px

## Global Layout

The screenshots are approximately 1000px wide and tall vertical pages. Recreate as a centered site with:

- max-width around 1000px
- warm off-white page background
- thin tan outer border/radius where visible
- inner page padding around 26–56px depending section
- cards with 16–20px border radius
- peach/tan borders
- very subtle shadows

## Header Requirements

There are two header identities across the images:

### Home / Prevention / Aftercare / Emergency pages

Use Pup-Lift logo on the left:

- droplet icon with paw inside
- `Pup-Lift`
- subtitle `EMERGENCY SUPPORT FOR TINY HEARTS`

Nav:

- Home
- What Is Hypoglycemia
- Emergency Steps
- Prevention
- Aftercare
- FAQ
- Contact

Right actions:

- Dark teal `Emergency Steps` button with heart icon
- Outlined `SWVA Chihuahua` button

Active nav item has small peach underline.

### FAQ / Contact pages

These show Southwest Virginia Chihuahua logo on the left and have:

- nav links
- highlighted active FAQ/Contact
- coral `Pup-Lift Home` button
- outlined `Back to Main Site` button

Build a reusable header component that can switch variants per page.

## Home Page Route `/`

Use `Pup Lift 1.(3).png` as the exact source.

### Hero

Left copy:

```txt
Pup-Lift:
Emergency Support
for Hypoglycemia Episodes

Fast, calm guidance for Chihuahua owners when a puppy becomes weak, limp, cold, shaky, or unresponsive.
```

Buttons:

- `Start Emergency Steps`
- `Learn Prevention`

Trust note:

```txt
Created for tiny hearts. Backed by experience.
```

Visual:

- large cream/tan Chihuahua puppy facing camera
- product bottle beside puppy
- emergency card on right

Emergency card:

```txt
Puppy unresponsive?
Start here.

1 Warm the puppy gently but quickly.
2 Rub Pup-Lift on gums or under tongue.
3 Monitor closely and call a veterinarian.

Act fast. You can save your puppy’s life.
```

### Quick Topic Row

Six cards:

1. What Hypoglycemia Is
2. Signs to Look For
3. How to Administer Pup-Lift
4. What to Do After
5. Prevention Tips
6. Important Disclaimer

### Main Grid

Two rows of three cards:

1. What Is Hypoglycemia?
2. Common Causes
3. Warning Signs
4. How to Administer Pup-Lift
5. After Administering
6. Prevention Matters

Use the same text from the screenshot/brief.

### Feature Row

Left: `Preventable, But Serious` with real sleeping puppy in blanket image.

Right: `Scan the bottle for instant instructions` with phone + bottle/QR visual.

### Journey Row

`A Simple Emergency Journey` with four horizontal steps:

1. Notice Symptoms
2. Administer Pup-Lift
3. Warm & Monitor
4. Feed & Follow Up

### FAQ/Story Row

Left FAQ card with three small FAQ blocks.

Right story card with woman holding/kissing Chihuahua image.

### Footer

Multi-column branded footer matching screenshot.

## Emergency Steps Page `/emergency-steps`

Use `Pup Lift 2. Emergency Steps(2).png` as the source.

Hero:

```txt
Emergency Steps
What to do when your puppy is weak, cold, shaky, collapsed, or unresponsive.
```

Left explanation copy and CTA buttons:

- `Start Step 1`
- `When to Call a Vet`

Right side card:

```txt
If your puppy is unresponsive
1 Warm the puppy gently but quickly.
2 Rub Pup-Lift on the gums or under the tongue.
3 Wait briefly and watch for improvement.
4 Repeat tiny amounts every 3–5 minutes if needed.
5 Call your veterinarian or an emergency vet if symptoms are severe or not improving.

Stay calm. Act fast.
You can save a life.
```

Build all visible sections from the screenshot:

- quick info row
- category nav row
- 7-step emergency card grid
- Dose & Frequency / DO / DO NOT cards
- Emergency Warning Signs section
- Call Your Vet Immediately card
- Aftercare: What to Do Next
- disclaimer strip
- FAQ row
- footer

## Prevention Page `/prevention`

Use `Pup Lift 3. Prevention(2).png` as the source.

Hero:

```txt
Prevention
How to help prevent hypoglycemia before it starts.
```

Right card:

```txt
Daily Prevention Basics
1 Feed on schedule
2 Keep warm
3 Limit overexertion
4 Watch for early signs
5 Keep Pup-Lift nearby

Good prevention can stop an emergency before it begins.
```

Build all visible sections:

- prevention checklist and risk CTA
- quick basics row
- category nav row
- four main cards
- Statistics & Fast Facts
- When Risk Is Higher
- Daily Prevention Routine
- Prevention Supplies to Keep Nearby
- Signs to Watch Even During Prevention
- What Owners Should Remember
- disclaimer strip
- FAQ row
- footer

## Aftercare Page `/aftercare`

Use `Pup Lift 4. Aftercare(2).png` as the source.

Hero:

```txt
Aftercare
What to do after your puppy begins to respond.
```

Right card:

```txt
Immediate Aftercare
1 Keep puppy warm.
2 Watch closely for 30–60 minutes.
3 Offer a small meal once fully alert.
4 Continue checking energy, temperature, and responsiveness.
5 Contact a veterinarian if symptoms return or the puppy worsens.

Early recovery still needs close observation.
```

Build all visible sections:

- recovery checklist CTA
- when to call vet CTA
- aftercare quick row
- tab/category row
- four main cards
- fast facts row
- recovery timeline
- What To Offer After Pup-Lift
- What To Avoid During Recovery
- When Veterinary Care Is Still Needed
- call vet card
- preventing another episode
- what owners should write down
- disclaimer strip
- FAQ row
- footer

## FAQ Page `/faq`

Use `Pup Lift 5. FAQ(2).png` as the source.

Header variant uses Southwest Virginia Chihuahua logo.

Hero:

```txt
Knowledge. Preparedness. Peace of Mind.
FAQ
We’re Here to Help
```

Hero copy:

```txt
Find quick answers to the most common questions about hypoglycemia and using Pup-Lift™.

Can’t find what you need?
Contact our team — we’re happy to help.
```

Button:

```txt
Contact Our Team
```

Right side visual:

- Chihuahua puppy on blanket
- Pup-Lift bottle
- QR card

Main content:

- large FAQ accordion card with all visible questions
- right sidebar with:
  - Need Immediate Help?
  - Important Reminder
  - Pup-Lift Always Within Reach
  - The Southwest Virginia Chihuahua Promise
- footer matching screenshot

FAQ questions visible in screenshot:

1. What is hypoglycemia in puppies?
2. How do I know if my puppy has hypoglycemia?
3. How often does hypoglycemia happen in puppies?
4. Is hypoglycemia covered under the health guarantee?
5. How is Pup-Lift™ (Karo Syrup) different from sugar or honey?
6. How much Pup-Lift™ should I give my puppy?
7. How often can I repeat doses if needed?
8. Can I use Pup-Lift™ preventively?
9. What if my puppy won’t swallow the syrup?
10. When should I contact my veterinarian?
11. Can hypoglycemia cause long-term damage?
12. Should I keep Pup-Lift™ with me when I travel?
13. How should I store Pup-Lift™?
14. Where can I learn more?

## Contact Page `/contact`

Use `Pup Lift 6. Contact(2).png` as the source.

Header variant uses Southwest Virginia Chihuahua logo.

Hero:

```txt
We’re Here for You. Always.
Contact Us
We Care. We Listen.
```

Hero body:

```txt
Have a question about Pup-Lift™, hypoglycemia, or your puppy’s health and care?
We’re here to help and happy to support you every step of the way.
```

Build visible sections:

- four trust cards row
- contact form card
- other ways to reach us card
- bottom reassurance card
- footer

Contact form fields:

- First Name
- Last Name
- Email Address
- Phone Number optional
- Subject
- How can we help you?
- Privacy Policy checkbox
- Send Message button

Make the form ready to wire to Supabase later.

## Asset Strategy

Do not fake photo-real areas with CSS blobs. Use actual image assets.

Acceptable options:

1. Crop visual areas from the uploaded screenshots and place them in `/public/images`.
2. Generate matching assets separately and save them as files.
3. Use the uploaded screenshot itself as a temporary background only for visual calibration, then replace with cropped assets and real HTML.

Required assets:

```txt
/public/images/home-hero.png
/public/images/home-sleeping-puppy.png
/public/images/home-qr-bottle.png
/public/images/home-woman-chihuahua.png
/public/images/pup-lift-bottle.png
/public/images/faq-hero.png
/public/images/contact-hero.png
/public/images/emergency-hero.png
/public/images/prevention-hero.png
/public/images/aftercare-hero.png
```

## Implementation Workflow for Codex

1. Inspect all uploaded screenshot files.
2. Create or verify the Next.js project structure.
3. Build reusable components:
   - Header
   - Footer
   - Logo
   - Hero
   - ProductBottle
   - EmergencyCard
   - InfoCard
   - QuickTopicRow
   - Timeline/Journey
   - FAQAccordion
   - ContactForm
4. Build Home first until it visually matches screenshot.
5. Build Emergency Steps page.
6. Build Prevention page.
7. Build Aftercare page.
8. Build FAQ page.
9. Build Contact page.
10. Ensure all nav links go to real routes.
11. Run the app locally and compare every page against screenshots.
12. Fix spacing, sizing, colors, and image placements until close.

## Strict Do Not Do List

Do not:

- make the pages a single-page anchor site
- create fake tabs instead of pages
- use emojis as primary icons
- use CSS blobs as puppies
- use CSS blobs as bottles
- use a generic bottle shape that looks unrelated to Pup-Lift
- flatten the whole screenshot into one background image
- leave nav links broken
- omit uploaded page designs
- skip FAQ/Contact/Aftercare/Prevention/Emergency pages
- claim the site matches until visually verified

## Success Criteria

The implementation is successful only when:

- Home looks like `Pup Lift 1.(3).png`
- Emergency Steps looks like `Pup Lift 2. Emergency Steps(2).png`
- Prevention looks like `Pup Lift 3.  Prevention(2).png`
- Aftercare looks like `Pup Lift 4. Aftercare(2).png`
- FAQ looks like `Pup Lift 5. FAQ(2).png`
- Contact looks like `Pup Lift 6. Contact(2).png`
- The visual assets look like real Chihuahua/product/lifestyle imagery
- Each page is its own route
- The layout is responsive
- The text is real HTML
- Cards, buttons, FAQ, and forms are accessible
- The repo can build and deploy on Vercel

## Final Request to Codex

Please rebuild the website in the `PUP' repository to mirror the uploaded Pup-Lift screenshots as closely as possible. Treat the screenshots as the design contract. Use real routes, reusable components, real image assets, and production-quality styling. Prioritize visual fidelity over generic code neatness, while keeping text and interactions accessible.
