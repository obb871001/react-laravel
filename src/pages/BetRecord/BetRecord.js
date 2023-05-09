import { motion } from "framer-motion";
import { useState } from "react";

import { Select } from "semantic-ui-react";

import { commonOpacity } from "../../animateConstant";
import CloseDetailPage from "../../components/CloseComponent/CloseDetailPage";
import CommonBorder from "../../components/BorderComponent/CommonBorder";
import Record from "./components/Record";
import CommonTab from "../../components/TabComponent/CommonTab";
import { getFixedStyle } from "../../hook/useDeviceType";

const TAB = [
  {
    label: "Total Bet",
    value: "Total Bet",
  },
  {
    label: "Total Win",
    value: "Total Win",
  },
];

const BetRecord = () => {
  const [tab, setTab] = useState(TAB[0].value);

  return (
    <motion.main
      initial={commonOpacity.initial}
      animate={commonOpacity.animate}
      exit={commonOpacity.exit}
      transition={commonOpacity.transition}
      className={`${getFixedStyle()} bg-second-color`}
    >
      <CloseDetailPage title={`Bet record`} />
      <section className="">
        <div className="flex items-center gap-[10px] px-common-padding-x pt-common-padding-y">
          <Select
            placeholder="All"
            className="!bg-third-color !border !border-solid !rounded-xl !min-w-[49%]"
            options={[{ key: "All", value: "All", text: "All" }]}
          />
          <Select
            placeholder="2023-04-07"
            className="!bg-third-color !border !border-solid !rounded-xl !min-w-[49%]"
            options={[
              { key: "2023-04-07", value: "2023-04-07", text: "2023-04-07" },
            ]}
          />
        </div>
        <CommonBorder />
        <section className="flex items-center">
          {TAB.map((item, index) => {
            return (
              <CommonTab
                key={index}
                setTab={setTab}
                tab={tab}
                value={item.value}
                label={item.label}
              />
            );
          })}
        </section>
      </section>
      <div className="h-[10px] w-full bg-extra-black"></div>
      <section className="">
        <Record
          gameName={`GAME Name`}
          bettingTime={`2023-08-07 13:13:22`}
          bet={100}
          winLose={0}
        />
      </section>
    </motion.main>
  );
};

export default BetRecord;
