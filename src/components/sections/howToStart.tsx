import Image from "next/image";
import { Button } from "../ui/button";
import icon1 from "../../../public/register-sandbox-icon.svg";
import icon2 from "../../../public/setupintegration-icon.svg";
import icon3 from "../../../public/test-go-live-icon.svg";
import sm1 from "../../../public/sm-register-sandbox.svg";
import sm2 from "../../../public/sm-setup-integration.svg";
import sm3 from "../../../public/sm-test-go-live.svg";
import md1 from "../../../public/md-register-sandbox.svg";
import md2 from "../../../public/md-setup-integration.svg";
import md3 from "../../../public/md-test-go-live.svg";
import lg1 from "../../../public/lg-register-sandbox.svg";
import lg2 from "../../../public/lg-setup-integration.svg";
import lg3 from "../../../public/lg-test-go-live.svg";
import xl1 from "../../../public/xl-register-sandbox.svg";
import xl2 from "../../../public/xl-setup-integration.svg";
import xl3 from "../../../public/xl-test-go-live.svg";
import xxl1 from "../../../public/2xl-register-sandbox.svg";
import xxl2 from "../../../public/2xl-setup-integration.svg";
import xxl3 from "../../../public/2xl-test-go-live.svg";

const HowToStart = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h1 className="text-[28px] mt-6 md:mt-0 md:text-[30px] lg:text-[42px] xl:text-[48px] font-bold text-slate-700 leading-[48px] xl:leading-[56px] md:leading-[46px] 2xl:leading-[76px]">
        How to Start
      </h1>
      {/* ------------phone------------------ */}
      <div className="flex flex-col w-full sm:hidden gap-44">
        <div className="flex flex-col items-center relative">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center  bg-white shadow-lg">
            <Image src={icon1} alt="icon-1" />
          </div>
          <span className="mt-5 font-bold text-lg ">
            <b>1.</b> Register sandbox
          </span>
          <div className="mt-2">
            <p className=" text-center w-56 text-s m">
              The PayWay sandbox account allows you to test your implementation
              in the sandbox environment.
            </p>
          </div>
          <Button
            variant="outline"
            className="text-cyan-500 mt-7 hover:shadow-cyan-500 hover:shadow-2xl"
          >
            Register Now
          </Button>
          <div className="absolute top-0 z-[-1]">
            <Image src={sm1} alt="sm1" width={500} className="" />
          </div>
        </div>

        <div className="flex flex-col items-center relative text-white">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
            <Image src={icon2} alt="icon-2" />
          </div>
          <span className="mt-5 font-bold text-lg ">
            <b>2.</b> Setup integration
          </span>
          <div className="mt-2">
            <p className="w-56 text-center text-sm ">
              Use sandbox credentials sent to your registered email and get
              ready to test payments on your software solution. Additionally, to
              save time on the integration, you can use plugins officially
              developed by Advanced Bank of Asia.
            </p>
          </div>
          <div className="absolute top-0 z-[-1]">
            <Image src={sm2} alt="sm2" width={500} className="" />
          </div>
        </div>

        <div className="flex relative flex-col items-center ">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
            <Image src={icon3} alt="icon-3" />
          </div>
          <span className="mt-5 font-bold text-lg ">
            <b>3.</b> Test & Go Live
          </span>
          <div className="mt-2">
            <p className="w-56 text-center text-sm ">
              Test your implementation in Sandbox mode by simulating the buyer
              experience as buyers navigate through the PayWay checkout on your
              website. Take your integration live by just replace your Sandbox
              keys with your Production credentials.
            </p>
          </div>
          <div className="absolute top-0 z-[-1]">
            <Image src={sm3} alt="sm3" width={500} className="" />
          </div>
        </div>
      </div>

      {/* ----------------sm-------------------- */}
      <div className="sm:flex sm:flex-col w-full md:hidden max-sm:hidden gap-40">
        <div className="flex flex-col items-center relative">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center  bg-white shadow-lg">
            <Image src={icon1} alt="icon-1" />
          </div>
          <span>
            <b>1.</b> Register sandbox
          </span>
          <p className="w-[400px] text-center text-sm">
            The PayWay sandbox account allows you to test your implementation in
            the sandbox environment.
          </p>
          <Button
            variant="outline"
            className="text-cyan-500 hover:shadow-cyan-500 hover:shadow-2xl"
          >
            Register Now
          </Button>
          <div className="absolute top-0 z-[-1]">
            <Image src={md1} alt="md1" width={1000} />
          </div>
        </div>

        <div className="flex flex-col relative items-center text-white">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
            <Image src={icon2} alt="icon-2" />
          </div>
          <span>
            <b>2.</b> Setup integration
          </span>
          <p className="w-[400px] text-center text-sm">
            Use sandbox credentials sent to your registered email and get ready
            to test payments on your software solution. Additionally, to save
            time on the integration, you can use plugins officially developed by
            Advanced Bank of Asia.
          </p>
          <div className="absolute top-5 z-[-1]">
            <Image src={md2} alt="md2" width={1000} />
          </div>
        </div>

        <div className="flex relative flex-col items-center ">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
            <Image src={icon3} alt="icon-3" />
          </div>
          <span>
            <b>3.</b> Test & Go Live
          </span>
          <p className="w-[400px] text-center text-sm">
            Test your implementation in Sandbox mode by simulating the buyer
            experience as buyers navigate through the PayWay checkout on your
            website. Take your integration live by just replace your Sandbox
            keys with your Production credentials.
          </p>
          <div className="absolute top-0 z-[-1]">
            <Image src={md3} alt="md3" width={1000} />
          </div>
        </div>
      </div>

      {/* ----------------md-------------------- */}
      <div className="md:flex md:flex-col max-md:hidden lg:hidden gap-40">
        <div className="flex flex-col items-center relative">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center  bg-white shadow-lg">
            <Image src={icon1} alt="icon-1" />
          </div>
          <span>
            <b>1.</b> Register sandbox
          </span>
          <p className="w-[400px] text-center text-sm">
            The PayWay sandbox account allows you to test your implementation in
            the sandbox environment.
          </p>
          <Button
            variant="outline"
            className="text-cyan-500 hover:shadow-cyan-500 hover:shadow-2xl"
          >
            Register Now
          </Button>
          <div className="absolute w-[750px] top-0 z-[-1]">
            <Image src={lg1} alt="lg1" width={1000} />
          </div>
        </div>

        <div className="flex flex-col relative items-center text-white">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
            <Image src={icon2} alt="icon-2" />
          </div>
          <span>
            <b>2.</b> Setup integration
          </span>
          <p className="w-[400px] text-center text-sm">
            Use sandbox credentials sent to your registered email and get ready
            to test payments on your software solution. Additionally, to save
            time on the integration, you can use plugins officially developed by
            Advanced Bank of Asia.
          </p>
          <div className="absolute w-[750px] top-5 z-[-1]">
            <Image src={lg2} alt="lg2" width={1000} />
          </div>
        </div>

        <div className="flex relative flex-col items-center ">
          <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
            <Image src={icon3} alt="icon-3" />
          </div>
          <span>
            <b>3.</b> Test & Go Live
          </span>
          <p className="w-[400px] text-center text-sm">
            Test your implementation in Sandbox mode by simulating the buyer
            experience as buyers navigate through the PayWay checkout on your
            website. Take your integration live by just replace your Sandbox
            keys with your Production credentials.
          </p>
          <div className="absolute w-[750px] top-0 z-[-1]">
            <Image src={lg3} alt="lg3" width={1000} />
          </div>
        </div>
      </div>

      {/* ----------------lg-------------------- */}
      <div className="lg:grid h-72 lg:grid-cols-3 lg:items-center max-lg:hidden xl:hidden gap-8">
        <div className="flex flex-col w-[300px] items-start relative">
          <div className="p-4 flex flex-col gap-2">
            <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center  bg-white shadow-lg">
              <Image src={icon1} alt="icon-1" />
            </div>
            <span className="mt-5">
              <b>1.</b> Register sandbox
            </span>
            <p className="w-52 text-[12px]">
              The PayWay sandbox account allows you to test your implementation
              in the sandbox environment.
            </p>
          </div>
          <Button
            variant="outline"
            className="text-cyan-500 hover:shadow-cyan-500 hover:shadow-2xl"
          >
            Register Now
          </Button>
          <div className="absolute top-7 z-[-1]">
            <Image src={xl1} alt="xl1" />
          </div>
        </div>

        <div className="flex flex-col w-[250px] relative items-start text-white">
          <div className="p-4 flex flex-col gap-2">
            <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
              <Image src={icon2} alt="icon-2" />
            </div>
            <span className="mt-5">
              <b>2.</b> Setup integration
            </span>
            <p className="w-52 text-[12px]">
              Use sandbox credentials sent to your registered email and get
              ready to test payments on your software solution. Additionally, to
              save time on the integration, you can use plugins officially
              developed by Advanced Bank of Asia.
            </p>
          </div>
          <div className="absolute top-16  z-[-1]">
            <Image src={xl2} alt="xl2" />
          </div>
        </div>

        <div className="flex relative w-[300px] flex-col items-start ">
          <div className="p-4 flex flex-col gap-2">
            <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
              <Image src={icon3} alt="icon-3" />
            </div>
            <span className="mt-5">
              <b>3.</b> Test & Go Live
            </span>
            <p className="w-52 text-[12px]">
              Test your implementation in Sandbox mode by simulating the buyer
              experience as buyers navigate through the PayWay checkout on your
              website. Take your integration live by just replace your Sandbox
              keys with your Production credentials.
            </p>
          </div>
          <div className="absolute top-7 z-[-1]">
            <Image src={xl3} alt="xl3" />
          </div>
        </div>
      </div>

      {/* ----------------xl-------------------- */}
      <div className="xl:flex xl:flex-row xl:justify-between border xl:w-[1200px] max-xl:hidden gap-24">
        <div className="flex flex-col w-[500px] items-start relative">
          <div className="p-4 flex flex-col gap-2">
            <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center  bg-white shadow-lg">
              <Image src={icon1} alt="icon-1" />
            </div>
            <span className="mt-5">
              <b>1.</b> Register sandbox
            </span>
            <p className="w-52 text-[12px]">
              The PayWay sandbox account allows you to test your implementation
              in the sandbox environment.
            </p>
          </div>
          <Button
            variant="outline"
            className="text-cyan-500 hover:shadow-cyan-500 hover:shadow-2xl"
          >
            Register Now
          </Button>
          <div className="absolute top-7 z-[-1]">
            <Image src={xxl1} alt="xl1" />
          </div>
        </div>

        <div className="flex flex-col w-[400px] relative items-start text-white">
          <div className="p-4 flex flex-col gap-2">
            <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
              <Image src={icon2} alt="icon-2" />
            </div>
            <span className="mt-5">
              <b>2.</b> Setup integration
            </span>
            <p className="w-52 text-[12px]">
              Use sandbox credentials sent to your registered email and get
              ready to test payments on your software solution. Additionally, to
              save time on the integration, you can use plugins officially
              developed by Advanced Bank of Asia.
            </p>
          </div>
          <div className="absolute top-16  z-[-1]">
            <Image src={xxl2} alt="xl2" />
          </div>
        </div>

        <div className="flex relative w-[500px] flex-col items-start ">
          <div className="p-4 flex flex-col gap-2">
            <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg bg-white">
              <Image src={icon3} alt="icon-3" />
            </div>
            <span className="mt-5">
              <b>3.</b> Test & Go Live
            </span>
            <p className="w-52 text-[12px]">
              Test your implementation in Sandbox mode by simulating the buyer
              experience as buyers navigate through the PayWay checkout on your
              website. Take your integration live by just replace your Sandbox
              keys with your Production credentials.
            </p>
          </div>
          <div className="absolute top-7 z-[-1]">
            <Image src={xxl3} alt="xl3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToStart;
