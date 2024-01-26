import { Button } from "./ui/button";
import Image from "next/image";
import footerLogo from "../../public/pw-logo-footer.svg";

export const Footer = () => {
  return (
    <div className="bg-[#011730] w-full pb-10 mt-20 sm:pb-16 md:pb-[43px] lg:pb-[47px] xl:pb-[45px] relative">
      <div className="px-10 pt-8 sm:hidden md:hidden lg:hidden 2xl:hidden container">
        <Image
          src={footerLogo}
          alt="footer logo img"
          style={{
            height: "30px",
            width: "auto",
          }}
        />

        <div className="grid grid-cols-2 mt-8">
          <div className="flex">
            <Button className="mr-3"></Button>
            <Button></Button>
          </div>
          <div className="flex items-center">
            <Button></Button>
            <span className="text-lg text-white font-light opacity-50 leading-6 font-roboto  ml-3">
              Phone number
            </span>
          </div>
        </div>
        <hr className="bg-white opacity-10 mt-[30px]" />
        <div className="grid grid-cols-2 ">
          <div className="mt-4">
            <ul className="text-sm text-white font-light ">
              <li className="text-white font-medium text-base">Products</li>
              <div className="text-white text-xs opacity-50 mt-2.5">
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="">
            <div className="mt-[17px] font-roboto">
              <ul>
                <li className="text-white font-medium text-base">Developers</li>
                <div className="text-white text-xs opacity-50 mt-2.5">
                  <a>
                    <li className="text-s12 mt-[12px] leading-[18px]">
                      API Integration
                    </li>
                  </a>
                  <a>
                    <li className="text-s12 mt-[12px] leading-[18px]">
                      PayWay Plugins
                    </li>
                  </a>
                  <a>
                    <li className="text-s12 mt-[12px] leading-[18px]">
                      Integration Guideline
                    </li>
                  </a>
                  <a>
                    <li className="text-s12 mt-[12px] leading-[18px]">
                      Test Card Numbers
                    </li>
                  </a>
                </div>
              </ul>
            </div>
            <div className="mt-10 font-roboto">
              <div className="mt-[17px] font-roboto">
                <ul>
                  <li className="text-white font-medium text-base">
                    Developers
                  </li>
                  <div className="text-white text-xs opacity-50 mt-2.5">
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        Facebook
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        YouTube
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        LinkedIn
                      </li>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------- */}

      <div className="sm:block max-sm:hidden lg:hidden 2xl:hidden pt-8 container">
        <div className="grid grid-cols-3 mt-3 px-3.5">
          <Image
            src={footerLogo}
            alt="footer logo img"
            style={{
              height: "34px",
              width: "auto",
            }}
          />

          <div className="flex">
            <Button className="mr-3"></Button>
            <Button></Button>
          </div>
          <div className="flex items-center">
            <Button></Button>
            <span className="text-lg text-white font-light opacity-50 leading-6 font-roboto  ml-3">
              Phone number
            </span>
          </div>
        </div>

        <hr className="bg-white opacity-10 mt-[30px]" />

        <div className="grid grid-cols-3 mt-3 px-3.5 pt-5">
          <div className="">
            <ul className="text-sm text-white font-light ">
              <li className="text-white font-medium text-base">Products</li>
              <div className="text-white text-xs opacity-50 mt-2.5">
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="text-white font-medium text-base">Developers</li>
              <div className="text-white text-xs opacity-50 mt-2.5">
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    PayWay Plugins
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    Integration Guideline
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    Test Card Numbers
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="">
            <div className="font-roboto">
              <div className="font-roboto">
                <ul>
                  <li className="text-white font-medium text-base">
                    Developers
                  </li>
                  <div className="text-white text-xs opacity-50 mt-2.5">
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        Facebook
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        YouTube
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        LinkedIn
                      </li>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------- */}

      <div className="pt-10 px-24 lg:flex lg:justify-start gap-20 max-sm:hidden sm:hidden md:hidden 2xl:hidden container">
        <div className="flex flex-col gap-10 mt-3 px-3.5">
          <Image
            src={footerLogo}
            alt="footer logo img"
            style={{
              height: "49px",
              width: "auto",
            }}
          />

          <div className="flex">
            <Button className="mr-3"></Button>
            <Button></Button>
          </div>
          <div className="flex items-center">
            <Button></Button>
            <span className="text-lg text-white font-light opacity-50 leading-6 font-roboto ml-3 text-nowrap">
              Phone number
            </span>
          </div>
        </div>
        <hr className="bg-white opacity-10 mt-[30px]" />
        <div className="grid grid-cols-3 gap-24 mt-3 px-3.5 pt-5">
          <div className="">
            <ul className="text-sm text-white font-light ">
              <li className="text-white font-medium text-base">Products</li>
              <div className="text-white text-xs opacity-50 mt-2.5">
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="text-white font-medium text-base">Developers</li>
              <div className="text-white text-xs opacity-50 mt-2.5">
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    PayWay Plugins
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    Integration Guideline
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    Test Card Numbers
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="">
            <div className="font-roboto">
              <div className="font-roboto">
                <ul>
                  <li className="text-white font-medium text-base">
                    Developers
                  </li>
                  <div className="text-white text-xs opacity-50 mt-2.5">
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        Facebook
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        YouTube
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        LinkedIn
                      </li>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------- */}

      <div className="pt-6 2xl:flex max-sm:hidden 2xl:gap-32 sm:hidden md:hidden lg:hidden container ">
        <div className="flex flex-col items-start gap-10 pt-[47px] lg:pl-3.5 xl:pl-0">
          <Image
            src={footerLogo}
            alt="footer logo img"
            style={{
              height: "49px",
              width: "auto",
            }}
          />
          <div className="flex">
            <Button className="mr-3"></Button>
            <Button></Button>
          </div>
          <div className="flex">
            <Button></Button>
            <span className="text-lg text-white font-light opacity-50  font-roboto  ml-3">
              Phone number
            </span>
          </div>
        </div>

        <hr className="bg-white opacity-10 mt-[30px]" />

        <div className="grid grid-cols-4 mt-3 px-3.5 pt-5 gap-32">
          <div className="">
            <ul className="text-sm text-white font-light ">
              <li className="text-white font-medium text-base">Products</li>
              <div className="text-white text-xs opacity-50 mt-2.5">
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-[13px] mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="text-white font-medium text-base">Developers</li>
              <div className="text-white text-xs opacity-50 mt-2.5 ">
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    API Integration
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    PayWay Plugins
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    Integration Guideline
                  </li>
                </a>
                <a>
                  <li className="text-s12 mt-[12px] leading-[18px]">
                    Test Card Numbers
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="">
            <div className="font-roboto">
              <div className="font-roboto">
                <ul>
                  <li className="text-white font-medium text-base">
                    Developers
                  </li>
                  <div className="text-white text-xs opacity-50 mt-2.5">
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        Facebook
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        YouTube
                      </li>
                    </a>
                    <a>
                      <li className="text-s12 mt-[12px] leading-[18px]">
                        LinkedIn
                      </li>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[4%]"></div>
        </div>
      </div>
    </div>
  );
};
