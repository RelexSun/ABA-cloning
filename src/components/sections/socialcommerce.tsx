import CardComponent from "@/components/ui/card";
import solcialcommerce from "../../../data/socialcommerce.json";

const SocialCommerce = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
      {solcialcommerce.map((data) => (
        <CardComponent
          key={data.id}
          title={data.title}
          description={data.discription}
        />
      ))}
    </div>
  );
};

export default SocialCommerce;
