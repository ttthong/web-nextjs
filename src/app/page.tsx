import type { NextPage } from "next";
import OutputManager from "../../components/output-manager";
import RecordKeeper from "../../components/record-keeper";
import FilterBank from "../../components/filter-bank";
import Modifier from "../components/modifier";
import VariableProcessor from "../../components/variable-processor";
import FrameComponent from "../../components/frame-component";
import ConditionProcessor from "../components/condition-processor";


const Index1: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[88px] box-border gap-[124px] tracking-[normal] mq450:gap-[31px] mq1125:gap-[62px]">
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[13px] max-w-full">
        <OutputManager />
        <RecordKeeper />
        <FilterBank />
        <Modifier />
        <VariableProcessor />

      </section>
      <FrameComponent />
      <ConditionProcessor />

    </div>
  );
};

export default Index1;
