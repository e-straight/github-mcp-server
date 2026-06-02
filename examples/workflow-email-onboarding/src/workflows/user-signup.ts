import { sleep } from "workflow";
import {
  createUser,
  sendOneWeekCheckInEmail,
  sendWelcomeEmail,
} from "@/workflows/steps";

export async function userSignup(email: string) {
  "use workflow";

  console.log(`Starting signup workflow for ${email}`);

  const user = await createUser(email);
  await sendWelcomeEmail(email);

  // Pause for 7 days without consuming compute resources.
  await sleep("7 days");
  await sendOneWeekCheckInEmail(email);

  console.log(`Signup workflow complete for ${user.id}`);

  return { userId: user.id, status: "done" as const };
}
