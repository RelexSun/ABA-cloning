import CardComponent from "@/components/ui/card";
import onlinesales from "../../../data/onlinesales.json";

const OnlineSales = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
      {onlinesales.map((data) => (
        <CardComponent
          key={data.id}
          title={data.title}
          description={data.discription}
        />
      ))}
    </div>
  );
};

export default OnlineSales;
