import { useState } from "react";
import CloseDetailPage from "../../components/CloseComponent/CloseDetailPage";
import { CURRENCY_SYMBOL, DAILY_REWARDS } from "../../constant";

import Coin from "../../images/CheckIn/coin.png";
import BigGift from "../../images/CheckIn/BigGift.webp";
import Check from "../../images/CheckIn/check.png";
import { motion } from "framer-motion";
import { commonOpacity } from "../../animateConstant";
import { getFixedStyle } from "../../hook/useDeviceType";

const checkInStyle = "linear-gradient(180deg,#816bf2,#7047e5)";
const alreadyCheckInStyle = "linear-gradient(180deg,#d1d0d0,#bababa)";

const DailyList = [0, 1, 2, 3, 4, 5, 6];
const CheckIn = () => {
  const [checkDaily, setCheckDaily] = useState([]);

  return (
    <motion.main
      initial={commonOpacity.initial}
      animate={commonOpacity.animate}
      exit={commonOpacity.exit}
      transition={commonOpacity.transition}
      className={`bg-second-color ${getFixedStyle()}`}
    >
      <CloseDetailPage title="Check-in" />
      <section className={`p-common-padding-x `}>
        <section
          className="rounded-lg min-h-[300px] w-full py-[20px] px-[20px]  mb-[25px]"
          style={{ backgroundImage: `${checkInStyle}` }}
        >
          <p className="text-3xl font-bold text-light-white text-center">
            Already checked in{" "}
          </p>
          <section className="grid grid-cols-4 gap-[12px]">
            {DailyList.map((item, index) => {
              return (
                <section
                  className={`${
                    index === DailyList.length - 1 && "col-span-2"
                  } relative cursor-pointer`}
                >
                  <div
                    key={index}
                    onClick={() => {
                      if (!checkDaily.includes(index)) {
                        setCheckDaily((prev) => [...prev, index]);
                      }
                    }}
                    className={`
                  ${
                    checkDaily.includes(index)
                      ? "filter-gray bg-[linear-gradient(180deg,#d1d0d0,#bababa)]"
                      : "bg-[rgb(146,119,248,.5)] "
                  }
                  h-[95px] w-full common-box-shadow rounded-lg py-[4px] px-[7px] flex flex-col justify-between`}
                  >
                    <p className="text-light-white text-xl mb-0">
                      0{index + 1}
                    </p>
                    <img
                      src={index === DailyList.length - 1 ? BigGift : Coin}
                      className={`${
                        index === DailyList.length - 1 ? "w-[70px]" : "w-[30px]"
                      } self-center`}
                    />
                    <p className="text-light-white text-center mb-0">
                      {CURRENCY_SYMBOL} 10
                    </p>
                  </div>
                  {checkDaily.includes(index) && (
                    <img
                      className="absolute right-[-21px] top-[-34px]"
                      src={Check}
                    />
                  )}
                </section>
              );
            })}
          </section>
        </section>

        <section className="bg-footer-bg py-[15px] px-common-padding-x rounded-lg ">
          <p className="text-center text-light-white text-2xl font-bold">
            Rules
          </p>
          <section>
            {DAILY_REWARDS.map((item, index) => {
              return (
                <p className="text-light-text text-xs mb-[7px]" key={index}>
                  {item}
                </p>
              );
            })}
          </section>
        </section>
      </section>
    </motion.main>
  );
};

export default CheckIn;
