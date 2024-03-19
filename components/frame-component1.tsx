import type { NextPage } from "next";
import IPhone from "./i-phone";
import AccessoryLabel from "./accessory-label";

const FrameComponent1: NextPage = () => {
  return (
    <div className="self-stretch h-[1587px] relative max-w-full text-left text-6xl text-black font-inter mq1350:h-auto mq1350:min-h-[1587]">
      <div className="absolute top-[-71px] left-[0px] bg-gainsboro w-[1724px] h-[542px] hidden" />
      <img
        className="absolute top-[1px] left-[1398px] w-[329px] h-[470px] object-cover z-[1]"
        alt=""
        src="/accessory-label@2x.png"
      />
      <div className="absolute top-[-71px] left-[0px] bg-silver-100 w-full flex flex-row items-start justify-between py-0 pr-0 pl-[25px] box-border max-w-full gap-[20px] mq1350:flex-wrap mq1350:pl-5 mq1350:pr-5 mq1350:pb-5 mq1350:box-border">
        <div className="self-stretch w-[1724px] relative bg-silver-100 hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
          <h2 className="m-0 w-[223px] h-[30px] relative text-inherit font-bold font-inherit inline-block mq450:text-xl">
            IPHONE 14 SERIES
          </h2>
        </div>
        <div className="w-[1075px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq1125:flex-wrap">
          <IPhone
            iPHONE15PLUS="IPHONE 14 PROMAX"
            propDisplay="inline-block"
            propMinWidth="unset"
          />
          <button className="cursor-pointer [border:none] p-[27px] bg-gainsboro flex-[0.7423] flex flex-row items-start justify-start box-border min-w-[112px] whitespace-nowrap hover:bg-silver-200 mq450:flex-1">
            <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
            <i className="h-[18px] w-28 relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[112px]">
              IPHONE 14 PRO
            </i>
          </button>
          <button className="cursor-pointer [border:none] py-[27px] pr-9 pl-[42px] bg-gainsboro flex flex-row items-start justify-start whitespace-nowrap hover:bg-silver-200">
            <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
            <i className="h-[18px] w-[120px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[120px]">
              IPHONE 14 PLUS
            </i>
          </button>
          <button className="cursor-pointer [border:none] py-[27px] px-[59px] bg-gainsboro flex flex-row items-start justify-start whitespace-nowrap hover:bg-silver-200">
            <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
            <i className="h-[18px] w-[78px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[78px]">
              IPHONE 14
            </i>
          </button>
          <button className="cursor-pointer [border:none] py-[27px] px-14 bg-gainsboro flex-[0.4433] flex flex-row items-start justify-start box-border min-w-[112px] whitespace-nowrap hover:bg-silver-200 mq450:flex-1">
            <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
            <i className="h-[18px] w-[72px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[72px]">
              Xem thêm
            </i>
          </button>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[330px] h-[471px] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/rectangle-53@2x.png"
      />
      <img
        className="absolute top-[1px] left-[350px] w-[329px] h-[470px] object-cover z-[4]"
        loading="lazy"
        alt=""
        src="/rectangle-54@2x.png"
      />
      <img
        className="absolute top-[1px] left-[699px] w-[329px] h-[470px] object-cover z-[4]"
        loading="lazy"
        alt=""
        src="/accessory-label@2x.png"
      />
      <img
        className="absolute top-[1px] left-[1048px] w-[329px] h-[470px] object-cover z-[4]"
        alt=""
        src="/rectangle-54@2x.png"
      />
      <div className="absolute top-[487px] left-[0px] bg-gainsboro w-[1724px] h-[542px] hidden" />
      <img
        className="absolute top-[559px] left-[1398px] w-[329px] h-[470px] object-cover z-[1]"
        alt=""
        src="/accessory-label@2x.png"
      />
      <AccessoryLabel
        iPHONE13SERIES="IPHONE 13 SERIES"
        iPHONE13PROMAX="IPHONE 13 PROMAX"
        iPHONE13PRO="IPHONE 13 PRO"
        iPHONE13="IPHONE 13"
        propTop="487px"
        propMinWidth3="112px"
        propMinWidth5="78px"
      />
      <img
        className="absolute top-[558px] left-[0px] w-[330px] h-[471px] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/rectangle-53@2x.png"
      />
      <img
        className="absolute top-[559px] left-[350px] w-[329px] h-[470px] object-cover z-[3]"
        loading="lazy"
        alt=""
        src="/rectangle-54@2x.png"
      />
      <img
        className="absolute top-[559px] left-[699px] w-[329px] h-[470px] object-cover z-[4]"
        alt=""
        src="/accessory-label@2x.png"
      />
      <img
        className="absolute top-[559px] left-[1048px] w-[329px] h-[470px] object-cover z-[4]"
        alt=""
        src="/rectangle-54@2x.png"
      />
      <div className="absolute top-[1045px] left-[0px] bg-gainsboro w-[1724px] h-[542px] hidden" />
      <img
        className="absolute top-[1117px] left-[1398px] w-[329px] h-[470px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle-78@2x.png"
      />
      <AccessoryLabel
        iPHONE13SERIES="IPAD"
        iPHONE13PROMAX="IPAD PRO"
        iPHONE13PRO="IPAD AIR"
        iPHONE13="IPAD 10.2"
        propTop="1045px"
        propMinWidth="58px"
        propFlex="0.8837"
        propMinWidth1="72px"
        propDisplay="inline-block"
        propMinWidth2="69px"
        propMinWidth3="62px"
        propFlex1="0.9302"
        propMinWidth4="72px"
        propMinWidth5="67px"
      />
      <img
        className="absolute top-[1116px] left-[0px] w-[330px] h-[471px] object-cover z-[3]"
        loading="lazy"
        alt=""
        src="/rectangle-84@2x.png"
      />
      <img
        className="absolute top-[1117px] left-[350px] w-[329px] h-[470px] object-cover z-[3]"
        loading="lazy"
        alt=""
        src="/rectangle-78@2x.png"
      />
      <img
        className="absolute top-[1117px] left-[699px] w-[329px] h-[470px] object-cover z-[4]"
        loading="lazy"
        alt=""
        src="/rectangle-86@2x.png"
      />
      <img
        className="absolute top-[1117px] left-[1048px] w-[329px] h-[470px] object-cover z-[4]"
        loading="lazy"
        alt=""
        src="/rectangle-87@2x.png"
      />
    </div>
  );
};

export default FrameComponent1;
