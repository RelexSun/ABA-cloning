import CardComponent from "@/components/ui/card";
import instoresales from "../../../data/instoresales.json";
import Image from "next/image";
import image from "../../../public/physical_store.svg";
import icon1 from "../../../public/earth.svg";
import icon2 from "../../../public/aba-merchant-app.svg";
import icon3 from "../../../public/experience.svg";
import icon4 from "../../../public/qr.svg";
import icon5 from "../../../public/invoicing-tool.svg";

const InStore = () => {
  const icon = [icon1, icon2, icon3, icon4, icon5];
  return (
    <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
      {instoresales.map((data, index) => (
        <CardComponent
          key={data.id}
          title={data.title}
          description={data.discription}
          icon={icon[index]}
        />
      ))}
      <div className="max-[575px]:row-start-1">
        <Image
          src={image}
          alt="physical-store"
          className="mx-auto"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default InStore;
