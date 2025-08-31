export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import type { auth as AuthType } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { OverviewTabs } from "./_components/overview-tabs";

export default async function Dashboard() {
  const { auth } = (await import("@/lib/auth")) as { auth: typeof AuthType };
  const result = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!result?.session?.userId) {
    redirect("/sign-in");
  }

  return (
    <section className="flex flex-col items-start justify-start p-6 w-full">
      <div className="w-full">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Overview
          </h1>
          <p className="text-muted-foreground">
            Key metrics, charts, and your tasks in one place.
          </p>
        </div>
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <OverviewTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
