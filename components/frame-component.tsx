import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[26px] pr-px pl-0 box-border max-w-full text-left text-6xl text-black font-inter">
      <div className="h-[542px] flex-1 relative bg-gainsboro max-w-full z-[1]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-full h-full hidden" />
        <img
          className="absolute top-[72px] left-[1398px] w-[329px] h-[470px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/rectangle-89@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-silver-100 w-[1724px] flex flex-row items-start justify-start py-[21px] px-[25px] box-border max-w-full z-[3]">
          <div className="h-[72px] w-[1724px] relative bg-silver-100 hidden max-w-full" />
          <b className="h-[30px] w-[204px] relative inline-block z-[4] mq450:text-xl">
            PHỤ KIỆN APPLE
          </b>
        </div>
        <img
          className="absolute top-[71px] left-[0px] w-[330px] h-[471px] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/rectangle-95@2x.png"
        />
        <img
          className="absolute top-[72px] left-[350px] w-[329px] h-[470px] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/rectangle-96@2x.png"
        />
        <img
          className="absolute top-[72px] left-[699px] w-[329px] h-[470px] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/rectangle-97@2x.png"
        />
        <img
          className="absolute top-[72px] left-[1048px] w-[329px] h-[470px] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/rectangle-98@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
