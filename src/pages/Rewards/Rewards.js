import { useState } from "react";
import { Button } from "semantic-ui-react";

import InputCustom from "../../components/InputComponents/InputCustom";
import CommonTab from "../../components/TabComponent/CommonTab";
import CommonBorder from "../../components/BorderComponent/CommonBorder";
import { motion } from "framer-motion";
import { commonOpacity } from "../../animateConstant";

const TAB = [
  { label: "Prizes", value: "Prizes" },
  { label: "Promotions", value: "Promotions" },
];

const Rewards = () => {
  const [tab, setTab] = useState(TAB[0].value);
  const [data, setData] = useState({});
  const [dataFocus, setDataFocus] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setDataFocus({ [e.target.name]: true });
  };

  return (
    <motion.main
      initial={commonOpacity.initial}
      animate={commonOpacity.animate}
      exit={commonOpacity.exit}
      transition={commonOpacity.transition}
      className="bg-second-color py-[15px]"
    >
      <section className="mb-[15px] px-common-padding-x">
        <p className="text-2xl font-bold text-light-white text-center mb-[8px]">
          My rewards
        </p>
        <p className="text-light-text text-sm font-semibold text-center">
          All your rewards are here.
        </p>
      </section>
      <section className="sm:flex gap-[30px]">
        <section className="w-full px-common-padding-x">
          <div className="bg-footer-bg px-common-padding-x py-[20px] rounded-xl">
            <p className="text-light-white font-bold text-xl">
              Redeem promo code
            </p>
            <div className="flex gap-[8px]">
              <InputCustom
                name="promoCode"
                placeholder="Enter your promo code"
                type="text"
                setDataProps={setData}
                dataProps={data}
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}
                focusProps={dataFocus}
              />
              <Button
                disabled={!data.promoCode}
                size="small"
                content="Submit"
                className="!bg-main-color "
              />
            </div>
          </div>
        </section>
        <section className="w-full mt-[24px]">
          <div className="flex items-center">
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
          </div>
          <CommonBorder notMargin />
        </section>
      </section>
    </motion.main>
  );
};

export default Rewards;
