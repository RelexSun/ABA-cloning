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
      <div className="max-[330px]:w-full max-sm:w-56 sm:mt-[67px] md:mt-[76px] lg:mt-[106px] xl:mt-[109px] 2xl:mt-[75px] 3xl:mt-[122px]">
        <h1 className="mb-3 sm:mb-[16px] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[38px]  sm:text-center font-bold -mt-[18px] 2xl:-mt-[2px] 3xl:mt-[26px] text-slate-600 sm:leading-[28px] md:leading-[48px] ">
          Payment Solutions for All Business Needs
        </h1>
      </div>
      <div className="w-full sm:w-[430px] md:w-[530px] xl:w-[720px] m-auto md:flex md:justify-center xl:mt-[24px]">
        <p className="sm:text-center text-[14px] md:text-[16px] xl:text-lg">
          ABA PayWay is developed for businesses of all sizes. Regardless of
          business type and its offerings you can easily accept cashless
          payments in both KHR and USD currencies.
        </p>
      </div>
      <div className="mt-[24px] xl:mt-[44px] 2xl:mt-[38px] 3xl:mt-[42px]">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default PaymentSection;
