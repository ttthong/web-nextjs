import type { NextPage } from "next";
import AccessoryLabel from "./accessory-label";

const OutputManager: NextPage = () => {
  return (
    <header className="self-stretch h-[138px] flex flex-row items-end justify-start max-w-full text-left text-6xl text-black font-inter">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch h-[97px] bg-gainsboro flex flex-row items-start justify-start relative gap-[20px] max-w-full">
          <div className="self-stretch w-[1728px] relative bg-gainsboro hidden max-w-full z-[0]" />
          <div className="flex-[0.9939] bg-gainsboro flex flex-row items-start justify-end pt-9 px-px pb-[31px] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[97px] w-[330px] relative bg-gainsboro hidden max-w-full" />
            <div className="h-[30px] w-[236px] relative inline-block box-border pl-5 z-[2]">
              Smartphone Store
            </div>
          </div>
          <div className="self-stretch flex-1 relative bg-gainsboro max-w-full z-[1]" />
          <h2 className="my-0 mx-[!important] h-[30px] w-[229px] absolute bottom-[31px] left-[460px] text-inherit font-normal font-inherit inline-block whitespace-nowrap z-[2]">
            Tìm kiếm sản phẩm
          </h2>
          <div className="flex-[0.9455] bg-gainsboro flex flex-row items-start justify-end pt-9 px-[9px] pb-[31px] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[97px] w-[330px] relative bg-gainsboro hidden max-w-full" />
            <div className="h-[30px] w-[226px] relative inline-block box-border pl-5 z-[2]">
              Tra cứu bảo hành
            </div>
          </div>
          <h2 className="my-0 mx-[!important] h-[30px] w-[226px] absolute right-[342px] bottom-[31px] text-inherit font-normal font-inherit inline-block whitespace-nowrap z-[2]">
            Hệ thống cửa hàng
          </h2>
          <div className="self-stretch flex-1 relative bg-gainsboro max-w-full z-[1]" />
          <div className="flex-[0.7121] bg-gainsboro flex flex-row items-start justify-center pt-9 pb-[31px] pr-5 pl-[75px] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[97px] w-[330px] relative bg-gainsboro hidden max-w-full" />
            <h2 className="m-0 h-[30px] w-[107px] relative text-inherit font-normal font-inherit inline-block min-w-[107px] z-[2]">
              Giỏ hàng
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-[0.9919] bg-gainsboro flex flex-row items-start justify-between py-0 pr-3.5 pl-0 box-border relative max-w-full gap-[20px] z-[2] ml-[-1728px] text-mini">
        <div className="self-stretch w-[1728px] relative bg-gainsboro hidden max-w-full z-[0]" />
        <div className="w-[1437px] flex flex-row items-start justify-start gap-[19.67px] max-w-full">
          <div className="flex-[0.9091] bg-gainsboro flex flex-row items-start justify-end pt-2.5 px-[33px] pb-4 z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[49px] relative inline-block min-w-[49px] z-[4]">
              Iphone
            </div>
          </div>
          <div className="bg-gainsboro flex flex-row items-start justify-start pt-2.5 pb-4 pr-11 pl-[51px] z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[31px] relative inline-block min-w-[31px] z-[4]">
              Ipad
            </div>
          </div>
          <div className="bg-gainsboro flex flex-row items-start justify-start pt-2.5 pb-4 pr-[37px] pl-11 z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[45px] relative inline-block min-w-[45px] z-[4]">
              Watch
            </div>
          </div>
          <AccessoryLabel propTop="487px" />
          <div className="bg-gainsboro flex flex-row items-start justify-start pt-2.5 pb-4 pr-[22px] pl-9 whitespace-nowrap z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[68px] relative inline-block min-w-[68px] z-[4]">
              Âm thanh
            </div>
          </div>
          <div className="bg-gainsboro flex flex-row items-start justify-start pt-2.5 pb-4 pr-[26px] pl-[39px] whitespace-nowrap z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[61px] relative inline-block min-w-[61px] z-[4]">
              Phụ kiện
            </div>
          </div>
          <div className="flex-1 bg-gainsboro flex flex-row items-start justify-end pt-2.5 px-[30px] pb-4 whitespace-nowrap z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[55px] relative inline-block min-w-[55px] z-[4]">
              Trả góp
            </div>
          </div>
          <div className="flex-[0.8788] bg-gainsboro flex flex-row items-start justify-end pt-2.5 px-[34px] pb-4 whitespace-nowrap z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[49px] relative inline-block min-w-[49px] z-[4]">
              Thu cũ
            </div>
          </div>
          <div className="bg-gainsboro flex flex-row items-start justify-start pt-2.5 pb-4 pr-[45px] pl-[50px] z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[31px] relative inline-block min-w-[31px] z-[4]">
              Sale
            </div>
          </div>
          <div className="flex-[0.9091] bg-gainsboro flex flex-row items-start justify-end pt-2.5 px-[33px] pb-4 whitespace-nowrap z-[3]">
            <div className="h-11 w-[126px] relative bg-gainsboro hidden" />
            <div className="h-[18px] w-[50px] relative inline-block min-w-[50px] z-[4]">
              Tin tức
            </div>
          </div>
        </div>
        <div className="h-full w-[126px] absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] bg-gainsboro z-[3]" />
        <div className="w-[149px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-center">
          <div className="self-stretch h-[18px] relative inline-block whitespace-nowrap z-[4]">
            Đăng nhập / Đăng ký
          </div>
        </div>
      </div>
    </header>
  );
};

export default OutputManager;
