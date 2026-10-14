# HeavenxCRM — marketing website

Public sales site for HeavenxCRM (by Technoheaven). React 19 + Vite + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # serve the built site
```

- Sections live in `src/sections/`, shared pieces in `src/components/`.
- The "Request your free demo" form (`src/sections/Contact.tsx`) has no backend: it posts to
  FormSubmit (formsubmit.co), which emails each request to `info@technoheaven.org`.
  The first submission sends an activation email to that inbox — click the link in it once,
  otherwise requests are not delivered.
- Plans show "Custom quote" — edit `src/sections/Plans.tsx` to add real prices.
