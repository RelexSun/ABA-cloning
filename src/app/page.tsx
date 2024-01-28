"use client";

import { useRef } from "react";
import BusinessSection from "@/components/sections/business-trusting";
import KeySection from "@/components/sections/key";
import PaymentSection from "@/components/sections/payment";
import SolutionSection from "@/components/sections/solution";
import DeveloperSection from "@/components/sections/developer";

export default function Home() {
  const secRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="mt-[5rem] max-[930px]:mt-[3rem] min-[1320px]:max-w-[1320px] min-[1140px]:max-w-[1140px] min-[960px]:max-w-[960px] min-[720px]:max-w-[720px] min-[540px]:max-w-[540px] min-[320px]:max-w-full m-auto">
        <SolutionSection secRef={secRef} />
        <div ref={secRef}>
          <BusinessSection />
        </div>
        <PaymentSection />
        <KeySection />
        <DeveloperSection />
      </div>
    </>
  );
}
