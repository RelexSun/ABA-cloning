import React from "react";
import { GoArrowRight } from "react-icons/go";

const ApiSection = () => {
  const apiIntegration = [
    "General",
    "Create Transaction",
    "Check Transaction API",
    "Push Back Notification",
    "Refund Transaction",
    "Transaction List API",
    "Pre-Authorization",
    "Account-On-File (AOF)",
    "Card-On-File (COF)",
    "Exchange rate",
    "Payment Link",
    "Merchant Portal",
    "Whitelist",
  ];

  const plugins = ["Magneto", "Woo Commerce", "Presta Shop"];

  const design = [
    "Merchant integration guideline",
    "Credential on files",
    "QR on Invoice",
  ];

  const other = ["Register", "Test Card Number"];

  return (
    <>
      <div className="rounded-xl shadow-xl p-8 grid lg:hidden gap-4 md:hidden sm:hidden">
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            API Integration
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400" />
          {apiIntegration.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            PayWay Plugins
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400" />
          {plugins.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            Design Guidelines
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400" />
          {design.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2 ">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            Other
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400 " />
          {other.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
      </div>
      <div className="rounded-xl shadow-xl p-8 sm:grid lg:hidden gap-2 md:hidden sm:grid-cols-2 max-sm:hidden">
        <div className="flex flex-col gap-5">
          <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
            <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
              API Integration
            </span>
            <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
            {apiIntegration.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mb-2 text-slate-500"
              >
                <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                  <GoArrowRight className="text-cyan-600" size={18} />
                </div>
                <button>
                  <li className="hover:text-cyan-500 text-left">{item}</li>
                </button>
              </div>
            ))}
          </ul>
          <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
            <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
              Design Guidelines
            </span>
            <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
            {design.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mb-2 text-slate-500"
              >
                <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                  <GoArrowRight className="text-cyan-600" size={18} />
                </div>
                <button>
                  <li className="hover:text-cyan-500 text-left">{item}</li>
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
            <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
              PayWay Plugins
            </span>
            <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
            {plugins.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mb-2 text-slate-500"
              >
                <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                  <GoArrowRight className="text-cyan-600" size={18} />
                </div>
                <button>
                  <li className="hover:text-cyan-500 text-left">{item}</li>
                </button>
              </div>
            ))}
          </ul>
          <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2 ">
            <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
              Other
            </span>
            <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
            {other.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mb-2 text-slate-500"
              >
                <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                  <GoArrowRight className="text-cyan-600" size={18} />
                </div>
                <button>
                  <li className="hover:text-cyan-500 text-left">{item}</li>
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-xl shadow-xl p-8 md:grid lg:hidden gap-2 md:grid-cols-3 sm:hidden max-sm:hidden">
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            API Integration
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
          {apiIntegration.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            PayWay Plugins
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
          {plugins.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <div className="flex flex-col gap-5">
          <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
            <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
              Design Guidelines
            </span>
            <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
            {design.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mb-2 text-slate-500"
              >
                <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                  <GoArrowRight className="text-cyan-600" size={18} />
                </div>
                <button>
                  <li className="hover:text-cyan-500 text-left">{item}</li>
                </button>
              </div>
            ))}
          </ul>
          <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2 ">
            <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
              Other
            </span>
            <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
            {other.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mb-2 text-slate-500"
              >
                <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                  <GoArrowRight className="text-cyan-600" size={18} />
                </div>
                <button>
                  <li className="hover:text-cyan-500 text-left">{item}</li>
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-xl shadow-xl p-8 lg:grid lg:grid-cols-4 gap-2 sm:hidden md:hidden max-sm:hidden">
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            API Integration
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400 mt-1 mb-2" />
          {apiIntegration.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            PayWay Plugins
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400 mt-2 mb-4" />
          {plugins.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            Design Guidelines
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400 mt-2 mb-4" />
          {design.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
        <ul className="text-[16px] xl:text-lg font-light flex flex-col gap-2 ">
          <span className="text-lg lg:text-xl text-cyan-700 font-semibold">
            Other
          </span>
          <hr className="w-[25%] border-[1.5px] text-slate-400 mt-2 mb-4" />
          {other.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 text-slate-500"
            >
              <div className=" bg-cyan-500 bg-opacity-20 rounded-md p-1">
                <GoArrowRight className="text-cyan-600" size={18} />
              </div>
              <button>
                <li className="hover:text-cyan-500 text-left">{item}</li>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ApiSection;
