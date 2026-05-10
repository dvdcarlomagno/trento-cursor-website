# Cursor Meetup Trento Website

![Cursor Ambassador Banner](public/images/readme-banner.png)

Official website for the Trento Cursor community meetup.

## Quick Start

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## What You Can Edit

Only these areas are intended for content updates:

### 1) Featured projects (homepage)

File: `content/featured-projects.ts`

You can edit:
- `name`
- `description`
- `url`
- `author`
- `coverImage`
- `featuredProjectsPrUrl`

### 2) Event details

Primary file: `content/events.ts`

You can edit:
- event `title`
- `date` and `displayDate`
- `attendees`
- `location`
- `lumaUrl`
- `thumbnail`
- `galleryImages`
- `status`
- `recapPath`

Recap content file: `content/recaps/cursor-meetup-trento-1.ts`

You can edit:
- recap `title`, `date`, `attendees`
- `summary`
- `highlights`
- `resources`
- `photos`
- host metadata (`name`, `logo`, `url`)

## What You Should NOT Edit

To avoid breaking the website structure/design, do not edit these unless you are doing development work:

- `app/page.tsx`
- `components/*`
- `lib/*`
- `app/recaps/[slug]/page.tsx`
- `content/locales/*`
- `content/site.config.ts`

If you need layout changes, create a dev task/PR instead of direct content edits.

## Images

- Event images live in `public/images/events/`
- Sponsor logos live in `public/images/partners/`
- Use local image paths (for example `/images/events/event-thumb.jpg`)
- Keep images optimized for web (compressed JPG/PNG/WebP)

## Vercel Deployment (Ready)

This project is ready to deploy on Vercel as-is:

- Framework: Next.js (App Router)
- Build command: `pnpm run build`
- Output: automatic Next.js output
- Remote image domains: not required (local assets only)

### Deploy Steps

1. Push repository to GitHub.
2. Import project in Vercel.
3. Keep default settings (`pnpm`, Next.js auto-detected).
4. Deploy.

### Local Verification Before Deploy

```bash
pnpm run build
```

## License

MIT. See `LICENSE`.
