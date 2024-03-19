import type { NextPage } from "next";

const IPhonePro: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[17px] max-w-full text-center text-31xl text-black font-inter mq1350:flex-wrap">
      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[669px] max-w-full mq800:min-w-full">
        <div className="h-[calc(100%_-_2px)] w-[1724px] absolute my-0 mx-[!important] top-[2px] right-[-694px] bottom-[0px] bg-gainsboro" />
        <img
          className="h-[507px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-20@2x.png"
        />
      </div>
      <div className="h-[507px] w-[681px] flex flex-col items-end justify-start gap-[47px] min-w-[681px] max-w-full mq800:gap-[23px] mq800:min-w-full mq1350:flex-1">
        <img
          className="self-stretch h-[187px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-21@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-1 box-border gap-[23px] max-w-full">
          <div className="self-stretch bg-darkgray-100 flex flex-row items-start justify-center py-8 pr-5 pl-[23px] box-border max-w-full z-[1]">
            <div className="h-[125px] w-[679px] relative bg-darkgray-100 hidden max-w-full" />
            <div className="h-[61px] w-[246px] relative inline-block z-[2] mq450:text-11xl mq800:text-21xl">
              1900.0091
            </div>
          </div>
          <div className="self-stretch bg-darkgray-100 flex flex-row items-start justify-center pt-[26px] px-5 pb-[27px] box-border max-w-full z-[1] text-11xl">
            <div className="h-[125px] w-[679px] relative bg-darkgray-100 hidden max-w-full" />
            <h1 className="m-0 h-[72px] w-[392px] relative text-inherit font-normal font-inherit whitespace-pre-wrap inline-block z-[2] mq450:text-lg mq800:text-5xl">
              <p className="m-0"> Nâng cấp gói bảo hành</p>
              <p className="m-0">Màn hình - Nguồn - Face ID</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhonePro;
