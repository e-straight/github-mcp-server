/**
 * EXAMPLE — footer links (replace href="#" with real targets).
 */
import Link from "next/link"
import { FOOTER_FIX_LINKS, fixHref } from "@/lib/fixes"

const PRODUCT_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Mobile app", href: "/fixes" },
  { label: "Changelog", href: "/fixes" },
] as const

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
] as const

export function SiteFooter() {
  return (
    <footer>
      {/* Logo: href="/" not href="#" */}
      <Link href="/" className="flex items-center gap-2">
        FixNow
      </Link>

      <ul>
        {FOOTER_FIX_LINKS.map(({ label, slug }) => (
          <li key={slug}>
            <Link href={fixHref(slug)} className="text-sm text-muted-foreground">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Product / company / legal — use PRODUCT_LINKS, COMPANY_LINKS, LEGAL_LINKS */}
      <Link href="/fixes">See all fixes</Link>
    </footer>
  )
}
