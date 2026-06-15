import { start } from "workflow/api";
import { NextResponse } from "next/server";
import { welcome } from "@/workflows/welcome";

export async function POST(request: Request) {
  const { userId } = await request.json();

  if (typeof userId !== "string" || userId.length === 0) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  const run = await start(welcome, [userId]);

  return NextResponse.json({
    message: "Welcome workflow started",
    runId: run.runId,
  });
}
