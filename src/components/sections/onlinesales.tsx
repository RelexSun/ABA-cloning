import CardComponent from "@/components/ui/card";
import onlinesales from "../../../data/onlinesales.json";
import icon1 from "../../../public/e-com.svg";
import icon2 from "../../../public/file.svg";
import icon3 from "../../../public/experience.svg";
import icon4 from "../../../public/qr.svg";
import icon5 from "../../../public/invoicing-tool.svg";
import icon6 from "../../../public/virtual-terminal.svg";

const OnlineSales = () => {
  const icon = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
      {onlinesales.map((data, index) => (
        <CardComponent
          key={data.id}
          title={data.title}
          description={data.discription}
          icon={icon[index]}
        />
      ))}
    </div>
  );
};

export default OnlineSales;
