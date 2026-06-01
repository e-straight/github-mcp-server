#!/usr/bin/env bash
# Step 1: copy FixNow CTA patch files into your Next.js app root.
# Usage (from v0-linktree-clone-plan or any FixNow Next.js repo):
#   curl -fsSL https://raw.githubusercontent.com/garlobrian52/github-mcp-server/main/scripts/apply-nowfix-cta-patch.sh | bash
# Or, if you have this repo cloned:
#   ./scripts/apply-nowfix-cta-patch.sh /path/to/v0-linktree-clone-plan

set -euo pipefail

TARGET="${1:-.}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PATCH="${SCRIPT_DIR}/../docs/nowfix-cta-patch"

if [[ ! -f "${PATCH}/lib/fixes.ts" ]]; then
  echo "error: patch not found at ${PATCH}" >&2
  exit 1
fi

if [[ ! -f "${TARGET}/package.json" ]]; then
  echo "error: ${TARGET} does not look like a Next.js project (no package.json)" >&2
  exit 1
fi

mkdir -p "${TARGET}/lib" "${TARGET}/app/fixes/[slug]"

cp "${PATCH}/lib/fixes.ts" "${TARGET}/lib/fixes.ts"
cp "${PATCH}/app/fixes/page.tsx" "${TARGET}/app/fixes/page.tsx"
cp "${PATCH}/app/fixes/[slug]/page.tsx" "${TARGET}/app/fixes/[slug]/page.tsx"

echo "Copied:"
echo "  lib/fixes.ts"
echo "  app/fixes/page.tsx"
echo "  app/fixes/[slug]/page.tsx"
echo ""
echo "Next (manual): wire homepage + footer per docs/nowfix-cta-patch/INTEGRATION.md"
echo "  - Replace fix card href=\"#\" with Link href={fixHref(fix.slug)}"
echo "  - Hero: <Button asChild><Link href=\"/fixes\">Fix something now</Link></Button>"
echo "  - Footer + logo: see components/site-footer.patch.example.tsx"
