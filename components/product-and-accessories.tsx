import type { NextPage } from "next";
import IPhone from "./i-phone";

const ProductAndAccessories: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[100px] pr-0 pl-1 box-border max-w-full text-left text-6xl text-black font-inter mq800:pb-[65px] mq800:box-border">
      <div className="h-[542px] flex-1 relative bg-gainsboro max-w-full z-[1] mq1125:h-auto mq1125:min-h-[542]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-full h-full hidden" />
        <button className="cursor-pointer [border:none] py-0.5 px-0 bg-gainsboro absolute top-[9px] left-[870px] flex flex-row items-start justify-start z-[3]">
          <div className="h-[76px] w-[198px] relative bg-gainsboro hidden" />
          <div className="bg-gainsboro flex flex-row items-start justify-start py-[27px] px-[42px] whitespace-nowrap z-[6]">
            <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
            <i className="h-[18px] w-28 relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[112px] z-[7]">
              IPHONE 15 PRO
            </i>
          </div>
        </button>
        <div className="absolute top-[9px] left-[1526px] bg-gainsboro w-[198px] h-[76px] z-[4]" />
        <div className="absolute top-[9px] left-[1307px] bg-gainsboro w-[198px] h-[76px] z-[3]" />
        <div className="absolute top-[9px] left-[1089px] bg-gainsboro w-[198px] h-[76px] z-[3]" />
        <div className="absolute top-[13px] left-[0px] bg-silver-100 w-full flex flex-row items-start justify-between py-0 pr-1 pl-[21px] box-border max-w-full gap-[20px] z-[5] mq1125:flex-wrap">
          <div className="self-stretch w-[1724px] relative bg-silver-100 hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
            <h2 className="m-0 w-[222px] h-[30px] relative text-inherit font-bold font-inherit inline-block z-[6] mq450:text-xl">
              IPHONE 15 SERIES
            </h2>
          </div>
          <div className="w-[631px] flex flex-row items-start justify-start gap-[16px] max-w-full mq800:flex-wrap">
            <IPhone
              iPHONE15PLUS="IPHONE 15 PLUS"
              propDisplay="inline-block"
              propMinWidth="120px"
            />
            <button className="cursor-pointer [border:none] pt-[25px] px-[60px] pb-[29px] bg-gainsboro flex flex-row items-start justify-start whitespace-nowrap z-[6] hover:bg-silver-200">
              <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
              <i className="h-[18px] w-[77px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[77px] z-[7]">
                IPHONE 15
              </i>
            </button>
            <button className="cursor-pointer [border:none] pt-[25px] px-[42px] pb-[29px] bg-gainsboro flex-[0.5907] flex flex-row items-start justify-start box-border min-w-[129px] whitespace-nowrap z-[6] hover:bg-silver-200 mq450:flex-1">
              <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
              <i className="h-[18px] w-[72px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[72px] z-[7]">
                Xem thêm
              </i>
            </button>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[27px] px-[26px] bg-gainsboro absolute top-[11px] left-[648px] flex flex-row items-start justify-start whitespace-nowrap z-[6] hover:bg-silver-200">
          <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
          <i className="h-[18px] w-[145px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[7]">
            IPHONE 15 PROMAX
          </i>
        </button>
        <div className="flex-1 bg-gainsboro grid flex-row items-end justify-start gap-[19.33px] min-h-[542px] max-w-full grid-cols-[repeat(4,_minmax(247px,_1fr))] mq800:grid-cols-[minmax(247px,_1fr)] mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(247px,_429px))]">
        <div className="self-stretch w-[1724px] relative bg-gainsboro hidden max-w-full" />
        <img
          className="h-[471px] w-[330px] relative max-w-full overflow-hidden max-h-full object-contain z-[6] mq800:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-48@2x.png"
        />
        <img
          className="h-[471px] w-[330px] relative max-w-full overflow-hidden max-h-full object-contain z-[6] mq800:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
        <img
          className="h-[471px] w-[330px] relative max-w-full overflow-hidden max-h-full object-contain z-[2] mq800:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-52@2x.png"
        />
        <img
          className="h-[471px] w-[330px] relative max-w-full overflow-hidden max-h-full object-contain z-[2] mq800:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-48@2x.png"
        />
      </div>
      </div>
    </div>
  );
};

export default ProductAndAccessories;
