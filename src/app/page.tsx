import BusinessSection from "@/components/sections/business-trusting";
import KeySection from "@/components/sections/key";
import PaymentSection from "@/components/sections/payment";
import SolutionSection from "@/components/sections/solution";
import DeveloperSection from "@/components/sections/developer";

export default function Home() {
  return (
    <div className="min-h-screen mt-[5rem]">
      <SolutionSection />
      <BusinessSection />
      <PaymentSection />
      <KeySection />
      <DeveloperSection />
    </div>
  );
}
