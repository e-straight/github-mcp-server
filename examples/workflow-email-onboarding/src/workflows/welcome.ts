import {
  generateEmail,
  getUser,
  sendEmail,
} from "@/workflows/steps";

export async function welcome(userId: string) {
  "use workflow";

  const user = await getUser(userId);
  const { subject, body } = await generateEmail({
    name: user.name,
    plan: user.plan,
  });
  const { status } = await sendEmail({
    to: user.email,
    subject,
    body,
  });

  return { status, subject, body };
}
