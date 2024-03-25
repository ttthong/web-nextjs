import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ComposerType = {
  thiGianITr?: string;
  thiGianT730NgyITr?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Composer: NextPage<ComposerType> = ({
  thiGianITr,
  thiGianT730NgyITr,
  propWidth,
}) => {
  const thiGianIStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="bg-darkgray-200 flex flex-col items-start justify-start pt-9 px-[66px] pb-[26px] box-border gap-[14px] max-w-full text-center text-xl text-white font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="w-[417px] h-[124px] relative bg-darkgray-200 hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-0 pr-[68px] pl-[65px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <i
          className="h-6 w-[152px] relative inline-block font-extralight [-webkit-text-stroke:2px_#000] z-[1] mq450:text-base"
          style={thiGianIStyle}
        >
          {thiGianITr}
        </i>
      </div>
      <i className="w-[285px] h-6 relative inline-block font-extralight text-gray-400 [-webkit-text-stroke:1px_#000] z-[1] mq450:text-base">
        {thiGianT730NgyITr}
      </i>
    </div>
  );
};

export default Composer;
