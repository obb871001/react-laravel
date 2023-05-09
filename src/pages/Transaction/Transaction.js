import { useState } from "react";
import { motion } from "framer-motion";

import CloseDetailPage from "../../components/CloseComponent/CloseDetailPage";
import CommonTab from "../../components/TabComponent/CommonTab";
import CommonBorder from "../../components/BorderComponent/CommonBorder";
import { CURRENCY_SYMBOL } from "../../constant";
import { commonOpacity } from "../../animateConstant";
import { getFixedStyle } from "../../hook/useDeviceType";

const TAB = [
  { label: "Deposit", value: "Deposit" },
  { label: "Withdraw", value: "Withdraw" },
  { label: "Bonus", value: "Bonus" },
];

const Transaction = () => {
  const [tab, setTab] = useState(TAB[0].value);

  return (
    <motion.main
      initial={commonOpacity.initial}
      animate={commonOpacity.animate}
      exit={commonOpacity.exit}
      transition={commonOpacity.transition}
      className={` ${getFixedStyle()} bg-second-color `}
    >
      <CloseDetailPage title="Transaction" />
      <section className="py-common-padding-y">
        <section className="flex items-center">
          {TAB.map((item, index) => {
            return (
              <CommonTab
                key={index}
                setTab={setTab}
                tab={tab}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </section>
        <CommonBorder notMargin />
        <section>
          <div className="p-common-padding-x text-light-text text-lg">
            2023-04 {/* This is the transaction time */}
          </div>
          <section className="bg-third-color p-common-padding-x flex justify-between">
            <div className="flex flex-col justify-between">
              <p className="text-light-white text-lg font-semibold mb-[7px]">
                Online Transfer
              </p>
              <p className="text-light-text text-sm mb-0">
                2023-04-07 13:13:13
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-light-white text-lg font-semibold mb-[7px]">
                {CURRENCY_SYMBOL} 50.00
              </p>
              <p className="text-main-color text-sm mb-0">RECEIVED</p>
            </div>
          </section>
        </section>
      </section>
    </motion.main>
  );
};

export default Transaction;
