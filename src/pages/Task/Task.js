import Banner from "../../images/Task/task-banner.jpg";
import PcBanner from "../../images/Task/task-banner-pc.jpg";
import AwardIcon from "../../images/Task/task-award_achieve.webp";

import { TiArrowSortedDown } from "react-icons/ti";

import { CURRENCY_SYMBOL } from "../../constant";
import { Button, Progress } from "semantic-ui-react";
import CommonTab from "../../components/TabComponent/CommonTab";
import { useState } from "react";
import CommonBorder from "../../components/BorderComponent/CommonBorder";
import useBounceAnimation from "../../hook/useBounce";
import { motion } from "framer-motion";
import AwardItem from "./AwardItem";
import useDeviceType from "../../hook/useDeviceType";

const ARRAY = [0, 1, 2, 3];

const TAB = [
  { label: "Newbie", value: "Newbie" },
  { label: "Daily", value: "Daily" },
  { label: "Weekly", value: "Weekly" },
];
const Task = () => {
  const [tab, setTab] = useState(TAB[0].value);
  const [getDaily, setGetDaily] = useState([]);
  const [controls, triggerBounce] = useBounceAnimation();

  const deviceType = useDeviceType();

  return (
    <main className="p-common-padding-x">
      <section className="relative h-[250px] sm:max-w-full max-w-[390px] rounded-lg overflow-hidden mb-[25px]">
        <img
          src={deviceType === "PC" ? PcBanner : Banner}
          className="object-cover sm:w-full sm:h-[285px]"
        />
        <div className="absolute top-[70px] left-[25px]">
          <p className="text-4xl text-main-color font-extrabold mb-[2px]">
            EARN POINTS
          </p>
          <p className="w-[130px] text-light-white text-sm font-semibold">
            Complete tasks to earn points
          </p>
        </div>
      </section>
      <section className="sm:flex gap-[20px]">
        <section className="bg-footer-bg w-full rounded-lg pt-[48px] px-[12px] pb-[12px]">
          <section className="mb-[25px]">
            <div className="grid grid-cols-4 gap-[4px]">
              {ARRAY.map((item, index) => {
                const shouldAnimate = getDaily.includes(index);

                return (
                  <AwardItem
                    index={index}
                    shouldAnimate={shouldAnimate}
                    setGetDaily={setGetDaily}
                    getDaily={getDaily}
                  />
                );
              })}
            </div>
          </section>

          <section className="relative h-[50px]">
            <Progress
              className="customUi customUiHeight !mb-[5px]"
              percent={55.89}
              size="tiny"
              success
            />
            <div className="grid grid-cols-4 absolute w-full top-[-2px]">
              {ARRAY.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between"
                  >
                    <div
                      id="circle"
                      className={`rounded-full ${
                        index === 1 || index === 0
                          ? "bg-main-color"
                          : "bg-second-color"
                      } w-[8px] h-[8px] mb-[20px]`}
                    ></div>
                    <p className="text-light-white text-xl">
                      {50 * (index + 1)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="flex items-center justify-between mt-[20px]">
            <div>
              <p className="text-light-text text-sm ">
                Expire time <span className="text-light-white">HH:MM:SS</span>
              </p>
            </div>
            <div>
              <p className="text-light-text text-sm ">
                Task points{" "}
                <span className="text-light-white">{CURRENCY_SYMBOL} 10</span>
              </p>
            </div>
          </section>
        </section>

        <section className="mt-[25px] w-full">
          <section className="flex items-center">
            {TAB.map((item, index) => {
              return (
                <CommonTab
                  key={index}
                  label={item.label}
                  value={item.value}
                  setTab={setTab}
                  tab={tab}
                />
              );
            })}
          </section>
          <CommonBorder notMargin />
          <section className="py-[25px]">
            {ARRAY.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-footer-bg rounded-lg p-common-padding-x flex items-stretch min-h-[100px] mb-[10px]"
                >
                  <div className="w-[55%]">
                    <p className="text-light-white font-extrabold mb-[0px]">
                      GIFT {index + 1}
                    </p>
                    <p className="text-light-text text-sm">GIFT Intro</p>
                  </div>
                  <div className="border-l border-third-color flex flex-col items-center justify-between px-common-padding-x">
                    <p className="text-light-white">{CURRENCY_SYMBOL} 10</p>
                    <Button
                      size="tiny"
                      className="!bg-main-color"
                      content="Already acquired"
                    />
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Task;
