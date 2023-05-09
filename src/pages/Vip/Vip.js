import { useState } from "react";
import { Button, Progress } from "semantic-ui-react";

import Copy from "../../components/CopyComponent/Copy";
import ReferTitle from "../ReferCode/components/ReferTitle";
import { CURRENCY_SYMBOL, VIP_LIST } from "../../constant";
import { motion } from "framer-motion";
import { commonOpacity } from "../../animateConstant";

const Vip = () => {
  const [data, setData] = useState({
    userCode: "123456",
  });
  const { userCode } = data;

  return (
    <motion.main
      initial={commonOpacity.initial}
      animate={commonOpacity.animate}
      exit={commonOpacity.exit}
      transition={commonOpacity.transition}
      className="bg-second-color py-[15px] px-common-padding-x"
    >
      <section className="bg-footer-bg p-[25px] rounded-lg mb-[25px]">
        <div className="flex items-center mb-[10px]">
          <p className="text-xl text-light-white font-bold mb-0 mr-[10px]">
            User Name{" "}
            <span className="text-light-text text-sm">{`(${userCode})`}</span>
          </p>
          <Copy copyLink={userCode} />
        </div>
        <em className="text-4xl text-light-text font-black">VIP 1</em>
        <div>
          <p className="text-light-text text-center text-sm">55.89%</p>
          <Progress
            className="customUi !mb-[5px]"
            percent={55.89}
            size="tiny"
            success
          />
          <div className="flex items-center justify-between text-light-white mb-[15px]">
            <p className="mb-0">VIP 01</p>
            <p className="mb-0">VIP 02</p>
          </div>
          <p className="text-light-text text-sm">
            VIP experience level :{" "}
            <span className="text-light-white">447EXP</span>
          </p>
        </div>
      </section>

      <section className="mb-[25px]">
        <ReferTitle title="VIP offer 02" />
        <div className="w-[150px] text-white ">
          <p className="text-center bg-third-color rounded-t-lg py-[5px] mb-0 min-h-[30px]">
            Bonus
          </p>
          <div className="p-[12px] rounded-b-lg bg-footer-bg flex min-h-[75px] items-center justify-center">
            <p className="mb-0">{CURRENCY_SYMBOL} 100</p>
          </div>
        </div>
      </section>

      <section className="bg-footer-bg p-[25px] rounded-lg mb-[25px]">
        <div className="grid grid-cols-3 items-center text-light-white text-sm mb-[10px] px-[10px] font-bold">
          <p className="mb-0">Level</p>
          <p className="mb-0 text-center">Prizes</p>
          <p className="mb-0 text-end">Exp</p>
        </div>
        <section className="w-full h-[485px] no-scrollbar overflow-scroll">
          {VIP_LIST.map((item, index) => {
            return (
              <div
                key={index}
                className={`grid grid-cols-3 items-center text-light-text py-[8px] px-[10px] ${
                  index % 2 === 0 && "bg-second-color"
                }`}
              >
                <p className="mb-0">
                  VIP {index + 1 < 11 ? `0${index}` : index}
                </p>
                <p className="mb-0 text-center">
                  {CURRENCY_SYMBOL} {item.prize}
                </p>
                <p className="mb-0 text-end">{item.exp}</p>
              </div>
            );
          })}
        </section>
      </section>

      <section>
        <ReferTitle title="Increase VIP level" />
        <section className="bg-footer-bg p-[25px] rounded-lg mb-[25px]">
          <p className="text-light-white text-sm">
            The entrance to this exclusive club is by gameplay only. The best
            way is to keep playing and we will alert you when you reach the
            required level.
          </p>
          <Button className="!bg-main-color w-full" content="Play now" />
        </section>
      </section>
    </motion.main>
  );
};

export default Vip;
