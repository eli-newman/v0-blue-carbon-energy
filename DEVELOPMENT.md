# Development workflow

How we build, review and ship the Blue Carbon Materials website. There are three stages: local, staging, production. Nothing reaches production without an explicit go-ahead.

## Stages at a glance

| Stage | Where it runs | Branch | Who sees it |
|---|---|---|---|
| Local | `http://localhost:3000` (next free port if busy) | `staging` (working copy) | Only the developer |
| Staging | Eli's Vercel project, preview URL | `staging` | Eli, behind Vercel login |
| Production | https://www.bluecarbonmaterials.com | `main` | Everyone |

- **Repo:** `eli-newman/v0-blue-carbon-energy` on GitHub
- **Staging Vercel project:** `elis-projects-c733ac17/v0-blue-carbon-energy-website`
- **Production Vercel project:** `lukemathis99-4933s-projects/v0-blue-carbon-energy` (deploys `main` automatically)
- `bluecarbon.com` is an unrelated company. Do not edit or reference it.

## 1. Local

```bash
git checkout staging
npm install
npm run dev        # http://localhost:3000
```

- Stack: Next.js 16 (Turbopack), React, Tailwind, App Router.
- Work only on `staging`, never directly on `main`.
- Edit, look at it in the browser, and check phone and tablet widths too (320px up to 1440px). Nothing should scroll sideways and nothing should sit under the fixed header.
- Copy lives in `lib/language-context.tsx` (English and Spanish) and in the `content` objects at the top of some pages. Update both languages.
- Writing rule: no em dashes anywhere in the site text. Use a plain " - ".

Before every push:

```bash
npx tsc --noEmit   # must pass
npm run build      # must pass
```

Vercel builds with an older TypeScript than a fresh local install (it follows `pnpm-lock.yaml`), so a line that compiles locally can still fail the Vercel build. Always run the build before pushing.

## 2. Staging

```bash
git add -A
git commit -m "Describe the change"
git push origin staging          # never touches the live site
```

Git auto-deploy to the staging Vercel project does not fire yet, so deploy a preview with the CLI:

```bash
VERCEL_ORG_ID=team_85sN4A1nwWqNGT5XtmngLEDV \
VERCEL_PROJECT_ID=prj_UURRHLhip0Pp1Opomu0G7dUosQ5W \
vercel deploy --yes --scope elis-projects-c733ac17
```

This prints a preview URL (no `--prod`). Previews are behind Vercel login, so open them while logged in. To fetch a page from a script:

```bash
vercel curl /contact --deployment <preview-url> --scope elis-projects-c733ac17 --yes
```

Check the changed pages on the preview: desktop and phone widths, no broken images, console clean. Then send the preview link to Eli and **stop**. Approval for staging is not approval for production.

## 3. Production

Only after Eli says to ship it:

```bash
git checkout main
git pull --ff-only origin main
git merge --ff-only staging
git push origin main             # deploys to bluecarbonmaterials.com
git checkout staging
```

Vercel (Luke's project) builds in about 30 seconds. Then confirm the live site: key pages return 200, the change is visible, no console errors.

Never push `main`, force-push, or change Vercel project settings without an explicit go-ahead for that specific action.

## Notes

- **Contact forms:** there are none. The Contact and Partners pages link to email and phone. A form needs an email provider (for example Resend) with an API key and a recipient set in the production Vercel project. The earlier form code is in git history (commit `3053bd3`).
- **Icons:** the favicon set lives in `public/` (`favicon.ico`, `icon-48.png`, `icon-192.png`, `icon.svg`, `apple-icon.png`) and is declared in `app/layout.tsx`. The header shows text only, no logo image.
- **Image cache:** if you replace an image but keep the same filename, delete `.next/dev/cache/images` or the dev server keeps serving the old one.
- **Domain used in metadata, sitemap and robots:** `https://www.bluecarbonmaterials.com`.
