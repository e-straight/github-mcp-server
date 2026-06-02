# Workflow email onboarding example

A minimal [Workflow DevKit](https://useworkflow.dev) + [Next.js](https://nextjs.org) example that sends onboarding emails with [Resend](https://resend.com).

## Install

```bash
cd examples/workflow-email-onboarding
npm install
```

The project depends on:

- `workflow` — durable workflows with `"use workflow"` and `"use step"`
- `resend` — email delivery inside step functions

## Configure

Copy the environment template and add your Resend credentials:

```bash
cp .env.example .env.local
```

Required:

- `RESEND_API_KEY` — from the Resend dashboard

Optional:

- `RESEND_FROM` — defaults to `Acme <onboarding@resend.dev>`

## Run locally

```bash
npm run dev
```

Trigger the signup workflow (welcome email now, check-in after 7 days):

```bash
curl -X POST --json '{"email":"hello@example.com"}' http://localhost:3000/api/signup
```

Trigger the personalized welcome workflow:

```bash
curl -X POST --json '{"userId":"user_123"}' http://localhost:3000/api/welcome
```

Inspect runs:

```bash
npx workflow web
npx workflow inspect runs
```

## What this demonstrates

### Workflow orchestration

`src/workflows/user-signup.ts` creates a user, sends a welcome email, sleeps for 7 days without holding a server open, then sends a follow-up email.

### Step functions with Resend

`src/workflows/steps.ts` keeps side effects in `"use step"` functions. Steps have full Node.js access, automatic retries, and use `FatalError` for non-retryable failures (for example, invalid API keys or rejected email payloads).

### Personalized welcome flow

`src/workflows/welcome.ts` chains `getUser` → `generateEmail` → `sendEmail` as separate durable steps.

## Deploy

Deploy to Vercel for production-grade durable execution. No extra Workflow configuration is required beyond `withWorkflow()` in `next.config.ts`.

## Project layout

```text
src/
  app/api/
    signup/route.ts    # POST /api/signup
    welcome/route.ts   # POST /api/welcome
  workflows/
    steps.ts           # "use step" functions (Resend, user lookup)
    user-signup.ts     # 7-day onboarding workflow
    welcome.ts         # personalized welcome workflow
```
