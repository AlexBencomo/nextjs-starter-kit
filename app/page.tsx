export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import FooterSection from "@/components/homepage/footer";
import HeroSection from "@/components/homepage/hero-section";
import Integrations from "@/components/homepage/integrations";
import PricingTable from "./pricing/_component/pricing-table";

export default async function Home() {
  // Avoid server-side session access during build; default to no subscription
  const subscriptionDetails = { hasSubscription: false } as const;

  return (
    <>
      <HeroSection />
      <Integrations />
      <PricingTable subscriptionDetails={subscriptionDetails} />
      <FooterSection />
    </>
  );
}
