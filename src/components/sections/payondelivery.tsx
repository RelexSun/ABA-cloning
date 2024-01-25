import CardComponent from "@/components/ui/card";
import payondelivery from "../../../data/payondelivery.json";

const PayOn = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
      {payondelivery.map((data) => (
        <CardComponent
          key={data.id}
          title={data.title}
          description={data.discription}
        />
      ))}
    </div>
  );
};

export default PayOn;
