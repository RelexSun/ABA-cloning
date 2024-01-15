import Tabs from "@/components/tabs";
import OnlineSales from "@/components/sections/onlinesales";
import InStore from "./instoresales";
import PayOn from "./payondelivery";
import SocialCommerce from "./socialcommerce";
import { TabProps } from "../../../types/interface";
import { motion } from "framer-motion";

const PaymentSection = () => {
  const tabs: TabProps[] = [
    { label: "for online sales", content: <OnlineSales /> },
    { label: "for in-store sales", content: <InStore /> },
    { label: "for social commerce", content: <SocialCommerce /> },
    { label: "for pay-on-delivery", content: <PayOn /> },
  ];
  return (
    <div>
      <div className="w-80">
        <h1 className="text-2xl font-bold mb-3">
          Payment Solutions for All Business Needs
        </h1>
      </div>
      <p>
        ABA PayWay is developed for businesses of all sizes. Regardless of
        business type and its offerings you can easily accept cashless payments
        in both KHR and USD currencies.
      </p>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default PaymentSection;
