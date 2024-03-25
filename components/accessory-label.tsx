import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type AccessoryLabelType = {
  iPHONE13SERIES?: string;
  iPHONE13PROMAX?: string;
  iPHONE13PRO?: string;
  iPHONE13?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth4?: CSSProperties["minWidth"];
  propMinWidth5?: CSSProperties["minWidth"];
};

const AccessoryLabel: NextPage<AccessoryLabelType> = ({
  iPHONE13SERIES,
  iPHONE13PROMAX,
  iPHONE13PRO,
  iPHONE13,
  propTop,
  propMinWidth,
  propFlex,
  propMinWidth1,
  propDisplay,
  propMinWidth2,
  propMinWidth3,
  propFlex1,
  propMinWidth4,
  propMinWidth5,
}) => {
  const accessoryLabelStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const iPHONE13SERIESStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propMinWidth1]);

  const iPHONE13PROMAXStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propDisplay, propMinWidth2]);

  const iPHONE13PROStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const frameButton1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth4,
    };
  }, [propFlex1, propMinWidth4]);

  const iPHONE13Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth5,
    };
  }, [propMinWidth5]);

  return (
    <div
      className="absolute top-[487px] left-[0px] bg-silver-100 w-full flex flex-row items-start justify-between py-0 pr-0 pl-[25px] box-border max-w-full gap-[20px] text-left text-6xl text-black font-inter mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:pb-5 mq1125:box-border"
      style={accessoryLabelStyle}
    >
      <div className="self-stretch w-[1724px] relative bg-silver-100 hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0 z-[3]">
        <h2
          className="m-0 w-[223px] h-[30px] relative text-inherit font-bold font-inherit inline-block mq450:text-xl"
          style={iPHONE13SERIESStyle}
        >
          {iPHONE13SERIES}
        </h2>
      </div>
      <div className="w-[853px] flex flex-row items-start justify-center gap-[20.33px] max-w-full z-[2] mq800:flex-wrap">
        <button
          className="cursor-pointer [border:none] py-[27px] px-[26px] bg-gainsboro flex flex-row items-start justify-start whitespace-nowrap hover:bg-silver-200"
          style={frameButtonStyle}
        >
          <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
          <i
            className="h-[18px] w-[145px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]"
            style={iPHONE13PROMAXStyle}
          >
            {iPHONE13PROMAX}
          </i>
        </button>
        <button className="cursor-pointer [border:none] py-[27px] px-[42px] bg-gainsboro flex flex-row items-start justify-start whitespace-nowrap hover:bg-silver-200">
          <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
          <i
            className="h-[18px] w-28 relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[112px]"
            style={iPHONE13PROStyle}
          >
            {iPHONE13PRO}
          </i>
        </button>
        <button
          className="cursor-pointer [border:none] py-[27px] px-[59px] bg-gainsboro flex flex-row items-start justify-start whitespace-nowrap hover:bg-silver-200"
          style={frameButton1Style}
        >
          <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
          <i
            className="h-[18px] w-[78px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[78px]"
            style={iPHONE13Style}
          >
            {iPHONE13}
          </i>
        </button>
        <button className="cursor-pointer [border:none] py-[27px] px-14 bg-gainsboro flex-1 flex flex-row items-start justify-start box-border min-w-[72px] whitespace-nowrap hover:bg-silver-200">
          <div className="h-[72px] w-[198px] relative bg-gainsboro hidden" />
          <i className="h-[18px] w-[72px] relative text-mini leading-[18.4px] inline-block font-thin font-inter text-black text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[72px]">
            Xem thêm
          </i>
        </button>
      </div>
    </div>
  );
};

export default AccessoryLabel;