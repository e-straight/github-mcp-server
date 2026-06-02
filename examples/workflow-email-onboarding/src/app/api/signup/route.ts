import { start } from "workflow/api";
import { NextResponse } from "next/server";
import { handleUserSignup } from "@/workflows/user-signup";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const run = await start(handleUserSignup, [email]);

  return NextResponse.json({
    message: "User signup workflow started",
    runId: run.runId,
  });
}
