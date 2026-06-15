# FixNow — placeholder CTA patch

Fixes **24 `href="#"` placeholders** on [nowfix.pro](https://nowfix.pro/) by routing users to real pages.

## What this changes

| Element | Before | After |
|--------|--------|--------|
| Fix grid cards (×6) | `href="#"` | `/fixes/slow-wifi`, etc. |
| “Fix something now” (hero + bottom) | `<button>` or `#` | `/fixes` |
| “See all fixes” | `#fixes` anchor only | `/fixes` (keep `#fixes` on homepage if you want scroll) |
| Footer fix links (×5) | `#` | `/fixes/[slug]` |
| Footer product/company/legal | `#` | anchors (`#pricing`) or `/privacy`, etc. |
| Logo | `#` | `/` |

## Apply to `v0-linktree-clone-plan` (private repo on Vercel)

1. Copy into your Next.js app (adjust `@/` alias if needed):
   - `lib/fixes.ts` → `lib/fixes.ts`
   - `app/fixes/page.tsx` → `app/fixes/page.tsx`
   - `app/fixes/[slug]/page.tsx` → `app/fixes/[slug]/page.tsx`

2. **Homepage fix grid** — find the array/map that renders cards with `href="#"`. Import `FIXES` and `fixHref`:

   ```tsx
   import Link from "next/link"
   import { FIXES, fixHref } from "@/lib/fixes"

   // Replace <a href="#"> with:
   <Link href={fixHref(fix.slug)} className="group flex flex-col ...">
   ```

   Use the slugs in `lib/fixes.ts` or add a `slug` field to your existing fix objects.

3. **Hero** — wrap primary CTA with `Button asChild` + `Link href="/fixes"`. See `components/landing/hero.patch.example.tsx`.

4. **Footer** — see `components/site-footer.patch.example.tsx`. Map:
   - Wi‑Fi → `slow-wifi`
   - Slow computer → `sluggish-computer`
   - Phone → `phone-acting-up`
   - Printers → `printer-offline`
   - Passwords → `locked-out-account`

5. **Optional stub pages** for footer (`/about`, `/privacy`, …) or point them to `#` only until content exists.

6. Deploy to Vercel (production domain `nowfix.pro`).

## Verify locally

```bash
pnpm dev
# Visit http://localhost:3000/fixes
# Click each homepage fix card — URL should be /fixes/<slug>
```

## Slug reference

| Card title | URL |
|------------|-----|
| Slow or dropping Wi-Fi | `/fixes/slow-wifi` |
| Sluggish computer | `/fixes/sluggish-computer` |
| Phone acting up | `/fixes/phone-acting-up` |
| Printer stuck offline | `/fixes/printer-offline` |
| Locked out of an account | `/fixes/locked-out-account` |
| Streaming & smart TV glitches | `/fixes/streaming-tv-glitches` |
