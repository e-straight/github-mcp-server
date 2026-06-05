import Link from "next/link"
import { notFound } from "next/navigation"
import { FIXES, getFixBySlug } from "@/lib/fixes"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return FIXES.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const fix = getFixBySlug(slug)
  if (!fix) return { title: "Fix not found — FixNow" }
  return {
    title: `${fix.title} — FixNow`,
    description: fix.description,
  }
}

export default async function FixGuidePage({ params }: Props) {
  const { slug } = await params
  const fix = getFixBySlug(slug)
  if (!fix) notFound()

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/fixes"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← All fixes
      </Link>
      <p className="mt-6 text-xs font-medium text-primary">{fix.duration}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{fix.title}</h1>
      <p className="mt-3 text-muted-foreground">{fix.description}</p>
      <ol className="mt-10 list-decimal space-y-4 pl-5 text-sm leading-relaxed">
        {fix.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <div className="mt-12 rounded-lg border border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
        Still stuck?{" "}
        <Link href="/sign-up" className="font-medium text-foreground underline">
          Create a free account
        </Link>{" "}
        to save devices and unlock more guides.
      </div>
    </main>
  )
}
