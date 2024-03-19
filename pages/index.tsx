import type { NextPage } from "next";
import InputFieldContainer from "../components/input-field-container";
import ProductCategories from "../components/product-categories";
import IPhonePro from "../components/i-phone-pro";
import ProductImage from "../components/product-image";
import ProductAndAccessories from "../components/product-and-accessories";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const Index1: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[110px] box-border gap-[124px] tracking-[normal] text-left text-mini text-black font-inter mq450:gap-[31px] mq1125:gap-[62px]">
      <div className="w-[271px] h-[124px] relative bg-darkgray-200 hidden z-[0]" />
      <i className="w-[77px] h-[18px] relative leading-[18.4px] hidden font-thin [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[77px] z-[1]">
        IPHONE 15
      </i>
      <div className="w-[198px] h-[72px] relative bg-gainsboro hidden z-[2]" />
      <InputFieldContainer />
      <div className="self-stretch h-[542px] relative bg-gainsboro hidden z-[4]" />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <ProductCategories />
        <IPhonePro />
        <ProductImage />
        <div className="self-stretch grid flex-row items-start justify-start py-0 pr-1 pl-0 box-border gap-[18.5px] max-w-full grid-cols-[repeat(3,_minmax(422px,_1fr))] mq800:grid-cols-[minmax(422px,_1fr)] mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(422px,_732px))]">
          <div className="h-[526px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-31@2x.png"
            />
          </div>
          <img
            className="h-[524px] w-[562px] relative max-w-full overflow-hidden max-h-full object-cover min-h-[524px] mq800:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-32@2x.png"
          />
          <img
            className="h-[524px] w-[562px] relative max-w-full overflow-hidden max-h-full object-cover min-h-[524px] mq800:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-33@2x.png"
          />
        </div>
        <ProductAndAccessories />
        <FrameComponent1 />
      </section>
      <FrameComponent />
      <section className="self-stretch h-[709px] relative bg-gainsboro" />
    </div>
  );
};

export default Index1;
