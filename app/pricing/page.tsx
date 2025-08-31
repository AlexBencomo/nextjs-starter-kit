export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import PricingTable from "./_component/pricing-table";

export default async function PricingPage() {
  // Avoid server-side session access during build; default to no subscription
  const subscriptionDetails = { hasSubscription: false } as const;

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <PricingTable subscriptionDetails={subscriptionDetails} />;
    </div>
  );
}
