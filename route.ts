import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "SuperHub AI",
    mode: "starter-scaffold",
    integrations: {
      database: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      ai: Boolean(process.env.AI_API_KEY),
      payments: Boolean(process.env.PAYMENT_PROVIDER),
    },
  });
}
