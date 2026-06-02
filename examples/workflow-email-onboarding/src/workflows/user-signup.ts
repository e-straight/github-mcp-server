import { sleep } from "workflow";
import {
  createUser,
  sendOnboardingEmail,
  sendWelcomeEmail,
} from "@/workflows/steps";

export async function handleUserSignup(email: string) {
  "use workflow";

  console.log(`Starting signup workflow for ${email}`);

  const user = await createUser(email);
  await sendWelcomeEmail(user);

  await sleep("5s");

  await sendOnboardingEmail(user);

  console.log("Workflow is complete! Run 'npx workflow web' to inspect your run");

  return { userId: user.id, status: "onboarded" as const };
}
