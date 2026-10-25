# Student portfolio

A nine-page Next.js student portfolio inspired by vintage botanical stationery: forest green, warm cream, blush stripes, serif typography, and scrapbook frames.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to verify a production build.

## Add real information

- `src/lib/portfolio.ts`: profile, navigation, projects, awards, activities, certificates, and gallery entries. All current entries are samples.
- `src/components/portfolio.tsx`: page sections and introductory copy, education timeline and sample grades, hobbies, career goals, and skill descriptions.
- `src/app/globals.css`: theme variables at the top, desktop layouts, and responsive breakpoints.
- `public/images/student-portrait.png`: fictional AI-generated sample portrait. Replace this with a real approved image, or change `profile.portrait`.
- `src/app/layout.tsx`: site-wide metadata and typography.

Routes: `/`, `/about`, `/education`, `/achievements`, `/activities`, `/projects`, `/skills`, `/gallery`, `/contact`.

The gallery and achievement filters, native image/certificate dialogs, mobile navigation, and expandable project details are implemented for the browser. Certificates are clearly labelled sample layouts, not issued documents. Project images are original vector illustrations. Replace them with actual project photos or screenshots when available.

The contact form prepares a mailto draft; it does not send, store, or claim delivery of messages. Replace the reserved `example.com` email before real use. Optional GitHub and LinkedIn URLs are hidden until supplied in the profile data.

For an under-18 portfolio, keep location at city/state level. Avoid full birth dates, phone numbers, home addresses, and private school records. Review certificates for private information before adding them.

## Sample portrait provenance

Created with the built-in image generation tool. Final asset: `public/images/student-portrait.png`.

Final generation prompt:

> Use case: photorealistic-natural. Asset type: fictional sample portrait for a Malaysian secondary school student portfolio website. A friendly 15-year-old Malaysian girl wearing an olive forest-green hijab and modest ivory long-sleeved blouse, holding two cream books against her chest, standing in a sunlit leafy school garden. Natural candid editorial portrait, waist up, subject centered, warmly smiling, soft film grain, muted forest green foliage, warm ivory and subtle blush tones, vintage analog film aesthetic. Portrait 4:5 composition. Age-appropriate school portrait. No text, no logos, no watermark. Fictional person, not based on any real individual.
