import CardComponent from "@/components/ui/card";

const CardContainer = () => {
  const ecommerce =
    "Provide your clients with seamless checkout experience in your website or mobile app with simple API Integration.";
  return (
    <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3">
      <CardComponent title="E-Commerce" description={ecommerce} />
      <CardComponent title="E-Commerce" description={ecommerce} />
      <CardComponent title="E-Commerce" description={ecommerce} />
      <CardComponent title="E-Commerce" description={ecommerce} />
      <CardComponent title="E-Commerce" description={ecommerce} />
      <CardComponent title="E-Commerce" description={ecommerce} />
      <CardComponent title="E-Commerce" description={ecommerce} />
    </div>
  );
};

export default CardContainer;
