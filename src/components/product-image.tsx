import type { NextPage } from "next";
import ProductName from "./product-name";

const ProductImage: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-3.5 pr-0.5 pl-0 box-border gap-[7px] max-w-full text-center text-xl text-white font-inter">
      <div className="self-stretch bg-darkgray-200 overflow-x-auto flex flex-row items-end justify-between max-w-full gap-[20px]">
        <div className="self-stretch w-[1724px] relative bg-darkgray-200 shrink-0 hidden" />
        <div className="w-[854px] shrink-0 flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-[calc(100%_-_712px)]">
          <div className="flex-1 bg-darkgray-200 flex flex-col items-center justify-start pt-9 pb-[26px] pr-5 pl-[22px] box-border gap-[14px] min-w-[271px] max-w-full z-[2]">
            <div className="w-[417px] h-[124px] relative bg-darkgray-200 hidden max-w-full" />
            <i className="w-[197px] h-6 relative inline-block font-extralight [-webkit-text-stroke:2px_#000] z-[3] mq450:text-base">
              Giao hàng toàn quốc
            </i>
            <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[3px] text-gray">
              <i className="h-6 w-[181px] relative inline-block font-extralight [-webkit-text-stroke:1px_#000] z-[3] mq450:text-base">
                Free ship nội thành
              </i>
            </div>
          </div>
          <ProductName
            thiGianITr="Thời gian đổi trả"
            thiGianT730NgyITr="Thời gian từ 7 - 30 ngày đổi trả"
            propWidth="154px"
          />
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[26px]">
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[21px] pl-5">
              <i className="h-6 w-[214px] relative inline-block font-extralight [-webkit-text-stroke:2px_#000] z-[1] mq450:text-base">
                Hỗ trợ kỹ thuật trọn đời
              </i>
            </div>
            <i className="w-[255px] h-6 relative inline-block font-extralight text-gray [-webkit-text-stroke:1px_#000] whitespace-nowrap z-[1] mq450:text-base">
              Giờ làm việc từ 8:30 - 21:00
            </i>
          </div>
        </div>
        <ProductName
          thiGianITr="Thanh toán linh hoạt"
          thiGianT730NgyITr="Thanh toán Visa, ATM, tín dụng,..."
          propWidth="194px"
        />
      </div>
      <div className="self-stretch bg-black flex flex-row items-start justify-start pt-[37px] px-2.5 pb-[38px] box-border max-w-full text-left text-6xl">
        <div className="h-[105px] w-[1724px] relative bg-black hidden max-w-full" />
        <i className="h-[30px] w-[432px] relative leading-[30.4px] inline-block font-thin [text-shadow:2px_0_0_#f5f5f5,_0_2px_0_#f5f5f5,_-2px_0_0_#f5f5f5,_0_-2px_0_#f5f5f5] max-w-full box-border pr-5 z-[1] mq450:text-xl">
          Khách hàng của Smarthphone Store
        </i>
      </div>
    </div>
  );
};

export default ProductImage;
