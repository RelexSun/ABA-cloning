import CardComponent from "@/components/ui/card";
import payondelivery from "../../../data/payondelivery.json";
import Image from "next/image";
import image from "../../../public/delivery.svg";

const PayOn = () => {
  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 mt-4">
        <div className="flex justify-center sm:hidden ">
          <Image src={image} alt="social-commerce" className="" width={250} />
        </div>
        <CardComponent
          title={payondelivery[0].title}
          description={payondelivery[0].discription}
        />
        <CardComponent
          title={payondelivery[1].title}
          description={payondelivery[1].discription}
        />
        <div className="col-start-1">
          <CardComponent
            title={payondelivery[2].title}
            description={payondelivery[2].discription}
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

export default PayOn;
