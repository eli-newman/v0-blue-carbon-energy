# Blue Carbon Materials Website

## Environments

| Env | URL | Vercel account | Deploys from |
|---|---|---|---|
| Production | https://www.bluecarbonmaterials.com/ | Luke's (`lukemathis99-4933s-projects`) | `main` |
| Staging | https://v0-blue-carbon-energy-website.vercel.app | Eli's (`elis-projects-c733ac17`) | `staging` |

- **Repo:** `eli-newman/v0-blue-carbon-energy` on GitHub
- Pushing to `main` deploys to the live site automatically. No `.vercel` link locally.
- Not related: bluecarbon.com is a different company (Mexico restoration site). Do not edit or reference it.
- Staging only works if Eli's Vercel project is linked to `eli-newman/v0-blue-carbon-energy` with production branch `staging`. The project was once linked to the old repo `v0-blue-carbon-energy-website`, which left it stuck on an old build. Verify the link before trusting staging.

## How to ship a change (agents: follow exactly)

1. Work on the `staging` branch, never directly on `main`.
2. Run `npx tsc --noEmit` and `npm run build`. Fix everything before pushing.
3. Commit and `git push origin staging`. This never touches the live site (only `main` does).
   Then deploy it to Eli's Vercel project (Git auto-deploy to that project is not firing yet, so use the CLI):
   `VERCEL_ORG_ID=team_85sN4A1nwWqNGT5XtmngLEDV VERCEL_PROJECT_ID=prj_UURRHLhip0Pp1Opomu0G7dUosQ5W vercel deploy --yes --scope elis-projects-c733ac17`
   (no `--prod`). It prints a preview URL. Previews are behind Vercel login: Eli can open them while logged in;
   agents fetch with `vercel curl <path> --deployment <url> --scope elis-projects-c733ac17 --yes`.
4. Check the changed pages on the preview URL (desktop and mobile widths, console clean, no broken images).
5. Tell the user what changed and give the staging link. **STOP and wait for the user to explicitly approve.** Approval for staging is not approval for production.
6. Only after the user says to ship it: merge `staging` into `main` and push `main`. That deploys to bluecarbonmaterials.com.
7. Confirm the live site shows the change.

Never push to `main`, force-push, or change Vercel project settings without the user's explicit go-ahead for that specific action.

## Dev
- `npm run dev` -> http://localhost:3000 (picks the next free port if busy)
- Framework: Next.js 16 (Turbopack)
- Project dir: `v0-blue-carbon-energy-website/`
- Site domain used in metadata, sitemap and robots: `https://www.bluecarbonmaterials.com`
