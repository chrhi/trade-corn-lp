import { LandingFaq } from "@/components/landing/landing-faq";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingOutcomes } from "@/components/landing/landing-outcomes";
import { LandingPricing } from "@/components/landing/landing-pricing";
import { LandingSteps } from "@/components/landing/landing-steps";
import { LandingTrustStrip } from "@/components/landing/landing-trust-strip";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main id="main" className="flex-1">
        <LandingHero />
        <LandingTrustStrip />
        <LandingOutcomes />
        <LandingFeatures />
        <LandingSteps />
        <LandingPricing />
        <LandingFaq />
      </main>
      <LandingFooter />
    </>
  );
}
