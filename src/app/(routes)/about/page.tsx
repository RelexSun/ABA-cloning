import Image from "next/image";
import HQ from "../../../../public/aba-hq.webp";
import BG from "../../../../public/bg-about-us.svg";

const About = () => {
  return (
    <div className="grid items-center lg:w-[900px] xl:w-[1100px] 2xl:w-[1220px] min-[1500px]:w-[1440px] m-auto max-[962px]:px-10 max-md:px-0  min-[962px]:grid-cols-2 mt-20 md:mt-24 xl:mt-28 2xl:mb-[100px] 3xl:mb-[130px]">
      <div className="xl:w-[496px] 2xl:w-[600px] 3xl:w-[700px] lg:mb-[80px]">
        <h1 className="text-[28px] max-sm:hidden mt-6 md:mt-0 md:text-[30px] lg:text-[42px] xl:text-[48px] font-semibold text-slate-700 leading-[48px] xl:leading-[56px] md:leading-[46px] 2xl:leading-[76px]">
          About Us
        </h1>
        <p className="text-[16px] xl:text-xl mt-8">
          <b>PayWay is an online payment gateway</b> powered by ABA Bank that
          allows online businesses of all sizes to receive payments using ABA
          PAY as well as through Visa, Mastercard or UnionPay debit and credit
          cards.
        </p>
        <p className="text-[16px] xl:text-xl mt-8">
          ABA Bank, one of the top three commercial banks in Cambodia with{" "}
          <b>more than 85 branches</b>, and more than <b>1,000 ATMs</b> and cash
          deposit machines across the country. ABA offers the entire spectrum of
          services to customer segments covering SMEs, micro businesses, and
          individuals with an array of modern financial services.
        </p>
        <p className="text-[16px] xl:text-xl mt-8">
          The major shareholder of ABA Bank is National Bank of Canada (the
          sixth largest bank in Canada), which holds 99.99% of ABA shares (as of
          January 1, 2020).
        </p>
      </div>
      <div className=" relative max-[962px]:row-start-1">
        <div className=" lg:m-14 md:mb-10">
          <Image src={HQ} alt="hq" />
        </div>
        <Image src={BG} alt="bg" className="absolute top-0 right-0 z-[-1]" />
      </div>
    </div>
  );
};

export default About;
