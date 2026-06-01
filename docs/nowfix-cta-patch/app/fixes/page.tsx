import Link from "next/link"
import { FIXES, fixHref } from "@/lib/fixes"

export const metadata = {
  title: "All fixes — FixNow",
  description: "Browse step-by-step guides for everyday tech problems.",
}

export default function FixesIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">All fixes</h1>
      <p className="mt-2 text-muted-foreground">
        Pick a problem and follow clear steps written for normal humans.
      </p>
      <ul className="mt-10 flex flex-col gap-4">
        {FIXES.map((fix) => (
          <li key={fix.slug}>
            <Link
              href={fixHref(fix.slug)}
              className="group flex flex-col gap-1 rounded-lg border border-border p-5 transition-colors hover:bg-secondary"
            >
              <span className="font-medium group-hover:text-foreground">
                {fix.title}
              </span>
              <span className="text-sm text-muted-foreground">
                {fix.description}
              </span>
              <span className="text-xs font-medium text-primary">
                {fix.duration}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
