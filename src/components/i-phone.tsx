import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type IPhoneType = {
  iPHONE15PLUS?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const IPhone: NextPage<IPhoneType> = ({
  iPHONE15PLUS,
  propDisplay,
  propMinWidth,
}) => {
  const iPHONE15PLUSStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[132px]">
      <button className="cursor-pointer [border:none] pt-[25px] pb-[29px] pr-9 pl-[42px] bg-gainsboro self-stretch flex flex-row items-start justify-start whitespace-nowrap z-[6] hover:bg-silver-200">
        <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
        <i
          className="h-[18px] w-[120px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[120px] z-[7]"
          style={iPHONE15PLUSStyle}
        >
          {iPHONE15PLUS}
        </i>
      </button>
    </div>
  );
};

export default IPhone;
