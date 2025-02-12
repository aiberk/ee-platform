import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "@/stack";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentIcon, Users } from "lucide-react";

import { usecases, sensormodules } from "@/data/landing";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  return (
    <>
      <Hero
        capsuleText="100% Open-source & Free"
        capsuleLink="https://stacktemplate.com"
        title="Extendable IOT Platform"
        subtitle="Capture, Analyze, and Act on data from your custom IOT Module"
        primaryCtaText="Get Started"
        primaryCtaLink={stackServerApp.urls.signUp}
        secondaryCtaText="Learn More"
        secondaryCtaLink="#features"
        credits={<>Crafted with ❤️ by </>}
      />

      <div id="features" />
      <FeatureGrid
        title="Use Cases"
        subtitle="Unlock the power of IOT"
        items={usecases}
      />
      <FeatureGrid
        title="Modules"
        subtitle="Unlock the power of IOT"
        items={sensormodules}
      />

      {/* <div id="pricing" />
      <PricingGrid
        title="Pricing"
        subtitle="Flexible plans for every team."
        items={[
          {
            title: "Basic",
            price: "Free",
            description: "For individuals and small projects.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required"
            ],
            buttonText: "Get Started",
            buttonHref: stackServerApp.urls.signUp
          },
          {
            title: "Pro",
            price: "$0.00",
            description: "Ideal for growing teams and businesses.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required"
            ],
            buttonText: "Upgrade to Pro",
            isPopular: true,
            buttonHref: stackServerApp.urls.signUp
          },
          {
            title: "Enterprise",
            price: "Still Free",
            description: "For large organizations.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required"
            ],
            buttonText: "Contact Us",
            buttonHref: stackServerApp.urls.signUp
          }
        ]}
      /> */}
    </>
  );
}
