import CardComponent from "@/components/ui/card";
import instoresales from "../../../data/instoresales.json";

const InStore = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3 mt-4">
      {instoresales.map((data) => (
        <CardComponent
          key={data.id}
          title={data.title}
          description={data.discription}
        />
      ))}
    </div>
  );
};

export default InStore;
