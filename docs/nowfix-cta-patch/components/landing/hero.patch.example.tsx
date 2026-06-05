/**
 * EXAMPLE — hero primary CTA (Fix something now).
 *
 * Before: <Button>Fix something now</Button>  or  <a href="#">...</a>
 * After:  <Button asChild><Link href="/fixes">...</Link></Button>
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroCTAs() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <Button asChild size="lg" className="w-full sm:w-auto">
        <Link href="/fixes">Fix something now</Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
        <Link href="#how-it-works">Watch the demo</Link>
      </Button>
    </div>
  )
}
