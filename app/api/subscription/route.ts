export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Note: Lazy import heavy modules inside the handler to avoid build-time evaluation
// which can break when Next collects page data.
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [{ auth }, { getSubscriptionDetails }] = await Promise.all([
      import("@/lib/auth"),
      import("@/lib/subscription"),
    ]);

    const result = await auth.api.getSession({
      headers: await headers(),
    });

    if (!result?.session?.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscriptionDetails = await getSubscriptionDetails();
    return NextResponse.json(subscriptionDetails);
  } catch (error) {
    console.error("Error fetching subscription details:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscription details" },
      { status: 500 }
    );
  }
}