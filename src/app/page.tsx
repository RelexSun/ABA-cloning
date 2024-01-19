"use client";

import BusinessSection from "@/components/sections/business-trusting";
import KeySection from "@/components/sections/key";
import PaymentSection from "@/components/sections/payment";
import SolutionSection from "@/components/sections/solution";
import DeveloperSection from "@/components/sections/developer";
import { useRef } from "react";

export default function Home() {
  const scroll = useRef<HTMLDivElement>(null);
  return (
    <div className="mt-[5rem]">
      <SolutionSection />
      <BusinessSection />
      <PaymentSection />
      <KeySection />
      <DeveloperSection />
    </div>
  );
}
