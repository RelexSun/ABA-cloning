import { Button } from "@/components/ui/button";
import BusinessSection from "@/components/sections/business-trusting";
import KeySection from "@/components/sections/key";
import PaymentSection from "@/components/sections/payment";
import SolutionSection from "@/components/sections/solution";

export default function Home() {
  return (
    <div className="min-h-screen mt-[7rem]">
      <Button>Explore now</Button>
      <Button variant="outline">Explore now</Button>
      <BusinessSection />
      <KeySection />
      <PaymentSection />
      <SolutionSection />
    </div>
  );
}
