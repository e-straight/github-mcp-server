/**
 * EXAMPLE — merge into your homepage fix grid (e.g. components/landing/common-fixes.tsx).
 *
 * Before:  <a href="#" ...>
 * After:   <Link href={fixHref(fix.slug)} ...>
 */
import Link from "next/link"
import { FIXES, fixHref } from "@/lib/fixes"

export function CommonFixes() {
  return (
    <section id="fixes" className="...">
      {/* ... section header unchanged ... */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FIXES.map((fix) => (
          <Link
            key={fix.slug}
            href={fixHref(fix.slug)}
            className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
          >
            {/* icon + title + description + duration — keep your existing markup */}
            <h3 className="font-medium">{fix.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {fix.description}
            </p>
            <span className="mt-auto text-xs font-medium text-primary">
              {fix.duration}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
