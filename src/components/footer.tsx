import Image from "next/image";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="bg-[#011730] pb-10 sm:pb-16 md:pb-[43px] lg:pb-[47px] xl:pb-[45px] relative">
      <div className="px-3.5 pt-8 sm:block md:hidden lg:hidden 2xl:hidden container">
        <div className="border w-40 h-[30px]"></div>
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
        <div className="grid grid-cols-2 sm:grid-cols-3">
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

      <div className="md:block sm:hidden lg:hidden 2xl:hidden pt-8 container">
        <div className="grid grid-cols-3 mt-3 px-3.5">
          <div className="border w-40 h-[30px]"></div>
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

      <div className="lg:block sm:hidden md:hidden 2xl:hidden container">
        <div className="grid grid-cols-3 mt-3 px-3.5">
          <div className="border w-40 h-[34px]"></div>
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

      <div className="2xl:block sm:hidden md:hidden lg:hidden container flex">
        <div className="flex justify-between pt-[47px] lg:pl-3.5 xl:pl-0">
          <div className="border w-40 h-[34px]"></div>
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
    </div>
  );
};
