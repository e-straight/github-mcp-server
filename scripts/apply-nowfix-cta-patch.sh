#!/usr/bin/env bash
# Step 1: copy FixNow CTA patch files into your Next.js app root.
# Usage (from v0-linktree-clone-plan or any FixNow Next.js repo):
#   curl -fsSL https://raw.githubusercontent.com/garlobrian52/github-mcp-server/main/scripts/apply-nowfix-cta-patch.sh | bash
# Or, if you have this repo cloned:
#   ./scripts/apply-nowfix-cta-patch.sh /path/to/v0-linktree-clone-plan

set -euo pipefail

TARGET="${1:-.}"
SCRIPT_SOURCE="${BASH_SOURCE[0]:-}"
LOCAL_PATCH=""
PATCH_MODE="remote"
INTEGRATION_GUIDE="https://github.com/garlobrian52/github-mcp-server/blob/main/docs/nowfix-cta-patch/INTEGRATION.md"
FOOTER_EXAMPLE="https://github.com/garlobrian52/github-mcp-server/blob/main/docs/nowfix-cta-patch/components/site-footer.patch.example.tsx"

if [[ -n "${SCRIPT_SOURCE}" && -f "${SCRIPT_SOURCE}" ]]; then
  SCRIPT_DIR="$(cd "$(dirname "${SCRIPT_SOURCE}")" && pwd)"
  LOCAL_PATCH="${SCRIPT_DIR}/../docs/nowfix-cta-patch"
fi

if [[ -n "${LOCAL_PATCH}" && -f "${LOCAL_PATCH}/lib/fixes.ts" ]]; then
  PATCH_MODE="local"
  PATCH="${LOCAL_PATCH}"
  INTEGRATION_GUIDE="docs/nowfix-cta-patch/INTEGRATION.md"
  FOOTER_EXAMPLE="components/site-footer.patch.example.tsx"
fi

if [[ ! -f "${TARGET}/package.json" ]]; then
  echo "error: ${TARGET} does not look like a Next.js project (no package.json)" >&2
  exit 1
fi

mkdir -p "${TARGET}/lib" "${TARGET}/app/fixes/[slug]"

copy_patch_file() {
  local src="$1"
  local dest="$2"

  if [[ "${PATCH_MODE}" == "local" ]]; then
    cp "${PATCH}/${src}" "${dest}"
    return
  fi

  curl -gfsSL "https://raw.githubusercontent.com/garlobrian52/github-mcp-server/main/docs/nowfix-cta-patch/${src}" -o "${dest}"
}

copy_patch_file "lib/fixes.ts" "${TARGET}/lib/fixes.ts"
copy_patch_file "app/fixes/page.tsx" "${TARGET}/app/fixes/page.tsx"
copy_patch_file "app/fixes/[slug]/page.tsx" "${TARGET}/app/fixes/[slug]/page.tsx"

echo "Copied:"
echo "  lib/fixes.ts"
echo "  app/fixes/page.tsx"
echo "  app/fixes/[slug]/page.tsx"
echo ""
echo "Next (manual): wire homepage + footer per ${INTEGRATION_GUIDE}"
echo "  - Replace fix card href=\"#\" with Link href={fixHref(fix.slug)}"
echo "  - Hero: <Button asChild><Link href=\"/fixes\">Fix something now</Link></Button>"
echo "  - Footer + logo: see ${FOOTER_EXAMPLE}"
