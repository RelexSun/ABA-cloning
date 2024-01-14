import CardContainer from "@/components/card-container";

const PaymentSection = () => {
  return (
    <div>
      <div className="w-60">
        <h1 className="text-2xl font-bold mb-3">
          Payment Solutions for All Business Needs
        </h1>
      </div>
      <p>
        ABA PayWay is developed for businesses of all sizes. Regardless of
        business type and its offerings you can easily accept cashless payments
        in both KHR and USD currencies.
      </p>
      <div className="mt-4">
        <CardContainer />
      </div>
    </div>
  );
};

export default PaymentSection;
