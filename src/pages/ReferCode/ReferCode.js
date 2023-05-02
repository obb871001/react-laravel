import Person1 from "../../images/ReferCode/person_1.webp";
import Arrow from "../../images/ReferCode/exchange.webp";
import PersonTree from "../../images/ReferCode/person_g_4.png";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { notice } from "../../redux/action/action";
import InputCopy from "../../components/CopyComponent/InputCopy";
import ReferTitle from "./components/ReferTitle";
import { RULES } from "./components/Rule";

const ReferCode = () => {
  const dispatch = useDispatch();
  return (
    <main className="px-common-padding-x py-common-padding-y">
      <section
        className="p-[24px] rounded-[5px] text-white"
        style={{
          background: "linear-gradient(219.1deg,#9aff98,#2654ca 101.02%)",
        }}
      >
        <p className="font-extrabold text-[18px] text-center mb-[5px]">
          Invite friends and earn money!
        </p>
        <p className="font-extrabold text-xs text-[15px] text-center">
          Receive up to
          <span className="text-main-color mx-[7px] text-base">₱ 1,000</span>
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
      <section className="my-[24px]">
        <ReferTitle title={`My referral`} />
        <section className="bg-third-color p-[16px] rounded-[10px] text-white">
          <p className="font-extrabold mb-[5px]">Referral link</p>
          <InputCopy copyLink={`http://link/c0opq`} />
          <p className="font-extrabold my-[5px]">Referral Code</p>
          <InputCopy copyLink={`c0opq`} />
        </section>
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
                <p className="text-xs font-semibold">
                  {index + 1}. {rule.title}
                </p>
                <div className="list-disc">
                  {rule.details.map((detail, index) => {
                    return (
                      <li
                        className="text-xs mb-[5px] text-light-text"
                        key={index}
                      >
                        {detail}
                      </li>
                    );
                  })}
                </div>
                <p className="text-xs font-semibold text-gold-text my-[10px]">
                  Reward Calculation:
                </p>
                <div className="list-disc">
                  {rule.calculation.map((detail, index) => {
                    return (
                      <li
                        className="text-xs mb-[5px] text-light-text"
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
    </main>
  );
};

export default ReferCode;
