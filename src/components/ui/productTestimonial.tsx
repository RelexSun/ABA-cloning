import Image from "next/image";

import data1 from "../../../data/onlinesales.json";
import data2 from "../../../data/instoresales.json";
import data3 from "../../../data/socialcommerce.json";
import data4 from "../../../data/payondelivery.json";

import icon1 from "../../../public/e-com.svg";
import icon2 from "../../../public/file.svg";
import icon3 from "../../../public/experience.svg";
import icon4 from "../../../public/qr.svg";
import icon5 from "../../../public/invoicing-tool.svg";
import icon6 from "../../../public/virtual-terminal.svg";
import icon7 from "../../../public/aba-merchant-app.svg";
import icon8 from "../../../public/earth.svg";

export const OnlineSales = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
  return (
    <div className="grid grid-cols-2 gap-2">
      {data1.map((item, index) => (
        <div key={index} className="flex flex-row items-start gap-2">
          <Image
            src={icons[index]}
            alt="nav-icons"
            className="mt-1"
            width={20}
          />
          <div className="">
            <span className="font-bold">{item.title}</span>
            <p className="text-slate-400 text-[12px] ">{item.under_des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InStore = () => {
  const icons = [icon7, icon8, icon3, icon4, icon5];
  return (
    <div className="grid grid-cols-2 gap-2">
      {data2.map((item, index) => (
        <div key={index} className="flex flex-row items-start gap-2">
          <Image
            src={icons[index]}
            alt="nav-icons"
            className="mt-1"
            width={20}
          />
          <div className="">
            <span className="font-bold">{item.title}</span>
            <p className="text-slate-400 text-[12px] ">{item.under_des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SocialCommerce = () => {
  const icons = [icon7, icon3, icon5];
  return (
    <div className="grid grid-cols-2 gap-2">
      {data3.map((item, index) => (
        <div key={index} className="flex flex-row items-start gap-2">
          <Image
            src={icons[index]}
            alt="nav-icons"
            className="mt-1"
            width={20}
          />
          <div className="">
            <span className="font-bold">{item.title}</span>
            <p className="text-slate-400 text-[12px] ">{item.under_des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const PayOn = () => {
  const icons = [icon7, icon3, icon4];
  return (
    <div className="grid grid-cols-2 gap-2">
      {data4.map((item, index) => (
        <div key={index} className="flex flex-row items-start gap-2">
          <Image
            src={icons[index]}
            alt="nav-icons"
            className="mt-1"
            width={20}
          />
          <div className="">
            <span className="font-bold">{item.title}</span>
            <p className="text-slate-400 text-[12px] ">{item.under_des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
