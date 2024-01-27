import CardComponent from "@/components/ui/card";
import instoresales from "../../../data/instoresales.json";
import Image from "next/image";
import image from "../../../public/physical_store.svg";

const InStore = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
      {instoresales.map((data) => (
        <CardComponent
          key={data.id}
          title={data.title}
          description={data.discription}
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
