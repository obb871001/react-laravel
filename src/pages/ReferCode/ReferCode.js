import Person1 from "../../images/ReferCode/person_1.webp";
import Arrow from "../../images/ReferCode/exchange.webp";
import PersonTree from "../../images/ReferCode/person_g_4.png";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { notice } from "../../redux/action/action";
import InputCopy from "../../components/CopyComponent/InputCopy";
import ReferTitle from "./components/ReferTitle";
import { RULES } from "./components/Rule";
import ReferWrap from "./components/ReferWrap";
import { HiChevronRight } from "react-icons/hi";
import { CURRENCY_SYMBOL } from "../../constant";
import ReferColumn from "./components/ReferColumn";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { commonOpacity } from "../../animateConstant";

const statisticsList = [
  {
    text: "Reward total",
    value: 100,
    symbol: true,
  },
  {
    text: "Register total",
    value: 100,
  },
  {
    text: "Deposit total",
    value: 100,
  },
  {
    text: "Yesterday's register",
    value: 100,
  },
  {
    text: "Yesterday's deposit",
    value: 100,
  },
];

const ReferCode = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <motion.main
      initial={commonOpacity.initial}
      animate={commonOpacity.animate}
      exit={commonOpacity.exit}
      transition={commonOpacity.transition}
      className="px-common-padding-x py-common-padding-y"
    >
      <section
        className="p-[24px] rounded-[5px] text-white"
        style={{
          background: "linear-gradient(219.1deg,#9aff98,#2654ca 101.02%)",
        }}
      >
        <p className="font-extrabold text-[18px] text-center mb-[5px] sm:text-lg">
          Invite friends and earn money!
        </p>
        <p className="font-extrabold text-xs text-[15px] text-center sm:text-lg">
          Receive up to
          <span className="text-main-color mx-[7px] text-base">
            {CURRENCY_SYMBOL} 1,000
          </span>
          in rewards and
          <span className="text-main-color mx-[7px] text-base">0.60%</span>a
          commission
        </p>
        <section className="mt-[16px] flex flex-col items-center justify-center">
          <div className="w-[46px] p-[2px] rounded-[6px] bg-[#b4ffdf]">
            <div className="bg-[#4EE0B5] w-full flex flex-col items-center justify-center rounded-[6px]">
              <p className="text-xs text-center text-white font-extrabold mb-[2px]">
                You
              </p>
              <img src={Person1} className="object-cover w-[30px] h-[32px]" />
            </div>
          </div>
          <div className="mt-[10px] relative">
            <p className="absolute top-[15px] right-[45px]">Bet</p>
            <img className="w-[40px] object-cover" src={Arrow} />
            <p className="absolute top-[15px] left-[45px]">Rewards</p>
          </div>
          <div className="mt-[10px] relative">
            <img src={PersonTree} />
            <div className="absolute flex flex-col items-center absolute-center !top-[75px]">
              <p className="mb-[30px]">Level 1</p>
              <p className="mb-[30px]">Level 2</p>
              <p>Level 3</p>
            </div>
          </div>
        </section>
      </section>
      <section className="mt-[24px] mb-[10px]">
        <ReferTitle title={`My referral`} />
      </section>
      <section className="sm:flex gap-[30px] sm:bg-third-color rounded-[10px]">
        <section className="mb-[24px] w-full">
          <ReferWrap>
            <p className="font-extrabold mb-[5px] sm:text-2xl sm:mt-[20px]">
              Referral link
            </p>
            <InputCopy copyLink={`http://link/c0opq`} />
            <p className="font-extrabold my-[5px] sm:text-2xl sm:mt-[20px]">
              Referral Code
            </p>
            <InputCopy copyLink={`c0opq`} />
          </ReferWrap>
        </section>

        <section className="mb-[24px] w-full">
          <ReferWrap>
            <section className="flex items-center justify-between mb-[20px]">
              <p className="mb-0 font-extrabold sm:text-2xl">Statistics</p>
              <div
                className="text-main-color flex items-center sm:text-lg cursor-pointer"
                onClick={() => navigate("betRecord")}
              >
                <p className="mb-0 font-bold">History</p>
                <HiChevronRight className="text-lg" />
              </div>
            </section>
            <section>
              {statisticsList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`p-[8px] flex items-center justify-between ${
                      index % 2 === 0 && "bg-second-color sm:bg-transparent"
                    } rounded-lg sm:mb-[10px]`}
                  >
                    <p className="mb-0 text-light-text font-semibold xl:text-xl sm:text-lg text-sm">
                      {item.text}
                    </p>
                    <p className="font-bold sm:text-3xl">
                      {item.symbol && CURRENCY_SYMBOL} {item.value}
                    </p>
                  </div>
                );
              })}
            </section>
          </ReferWrap>
        </section>
      </section>

      <section className="mb-[10px] mt-[24px]">
        <ReferTitle title={`My rewards`} />
        <ReferWrap>
          <ReferColumn title="First deposit" value="0.00" border />
          <ReferColumn title="First deposits of yesterday" value="0.00" />
        </ReferWrap>
      </section>

      <section className="my-[24px]">
        <ReferWrap>
          <ReferColumn title="Betting rewards" value="0.00" border />
          <ReferColumn title="Betting rewards of yesterday" value="0.00" />
        </ReferWrap>
      </section>

      <section className="my-[24px]">
        <ReferTitle title={`Rules`} />
        <section className="bg-third-color p-[16px] rounded-[10px] text-white">
          {RULES.map((rule, index) => {
            return (
              <div
                key={index}
                className={`${index !== RULES.length - 1 && "mb-[20px]"}`}
              >
                <p className="text-xs font-semibold sm:text-xl">
                  {index + 1}. {rule.title}
                </p>
                <div className="list-disc">
                  {rule.details.map((detail, index) => {
                    return (
                      <li
                        className="text-xs sm:text-sm mb-[5px] text-light-text"
                        key={index}
                      >
                        {detail}
                      </li>
                    );
                  })}
                </div>
                <p className="text-xs font-semibold text-gold-text my-[10px] sm:text-xl">
                  Reward Calculation:
                </p>
                <div className="list-disc">
                  {rule.calculation.map((detail, index) => {
                    return (
                      <li
                        className="text-xs sm:text-sm mb-[5px] text-light-text"
                        key={index}
                      >
                        {detail}
                      </li>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </motion.main>
  );
};

export default ReferCode;
