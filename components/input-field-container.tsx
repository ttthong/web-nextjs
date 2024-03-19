import type { NextPage } from "next";

const InputFieldContainer: NextPage = () => {
  return (
    <section className="w-[1724px] my-0 mx-[!important] absolute top-[1462px] left-[0px] flex flex-row items-start justify-start max-w-full">
      <img
        className="h-[471px] w-[330px] absolute my-0 mx-[!important] right-[-5px] bottom-[0px] object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/rectangle-52@2x.png"
      />
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
    </section>
  );
};

export default InputFieldContainer;
