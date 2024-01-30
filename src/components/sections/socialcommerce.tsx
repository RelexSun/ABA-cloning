import CardComponent from "@/components/ui/card";
import solcialcommerce from "../../../data/socialcommerce.json";
import Image from "next/image";
import image from "../../../public/social_commerce.svg";
import icon1 from "../../../public/aba-merchant-app.svg";
import icon3 from "../../../public/invoicing-tool.svg";
import icon2 from "../../../public/experience.svg";

const SocialCommerce = () => {
  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
        <div className="flex justify-center sm:hidden ">
          <Image src={image} alt="social-commerce" className="" width={250} />
        </div>
        <CardComponent
          title={solcialcommerce[0].title}
          description={solcialcommerce[0].discription}
          icon={icon1}
        />
        <CardComponent
          title={solcialcommerce[1].title}
          description={solcialcommerce[1].discription}
          icon={icon2}
        />
        <div className="col-start-1">
          <CardComponent
            title={solcialcommerce[2].title}
            description={solcialcommerce[2].discription}
            icon={icon3}
          />
        </div>
        <div className="flex justify-end max-sm:hidden lg:hidden">
          <Image
            src={image}
            alt="social-commerce"
            className="absolute bottom-0 right-0 z-[-10]"
            width={250}
          />
        </div>
      </div>
      <div className="flex justify-end max-lg:hidden xl:hidden">
        <Image
          src={image}
          alt="social-commerce"
          className="absolute bottom-0 z-[-10]"
          width={400}
          height={400}
        />
      </div>
      <div className="flex justify-end max-xl:hidden">
        <Image
          src={image}
          alt="social-commerce"
          className="absolute top-0 z-[-10]"
        />
      </div>
    </div>
  );
};

export default SocialCommerce;
