import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { ResearchSection, BusinessSection, DataSection, CareerSection } from "@/components/sections/HomeSections";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <ResearchSection />
      <BusinessSection />
      <DataSection />
      <CareerSection />
      <LeadForm />
    </>
  );
}
