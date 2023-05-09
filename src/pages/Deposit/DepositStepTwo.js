import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { HiChevronLeft } from "react-icons/hi";
import { Button, Input } from "semantic-ui-react";

import { animatePage } from "../../animateConstant";
import InputComponents from "../../components/InputComponents/InputComponents";
import { DEPOSIT_AMOUNT } from "../../constant";
import InputCustom from "../../components/InputComponents/InputCustom";
import CloseComponent from "../../components/CloseComponent/CloseComponent";

const DepositSteoTwo = ({ chooseCurrency, setDepositStep, depositStep }) => {
  const [data, setData] = useState({});
  const [dataFocus, setDataFocus] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setDataFocus({ [e.target.name]: true });
  };

  return (
    <AnimateSharedLayout>
      <motion.section
        className="h-full flex flex-col justify-between"
        layout
        initial={depositStep === 1 ? "hiddenRight" : "hiddenLeft"}
        animate="visible"
        exit={depositStep === 1 ? "hiddenRight" : "hiddenLeft"}
        variants={animatePage}
      >
        <section>
          <div
            className={`flex items-center text-light-text text-4xl mb-[20px] justify-between`}
          >
            <HiChevronLeft onClick={() => setDepositStep(1)} />
            <CloseComponent />
          </div>
          <p className="text-3xl text-light-white font-extrabold text-center">
            Deposit
          </p>

          <section>
            <p className="text-center text-light-text my-[20px]">
              Enter the details of your {chooseCurrency}.
            </p>

            <section className="px-[8px]">
              <section className="mb-[24px]">
                <p className="text-xl font-extrabold text-light-white">
                  Deposit {chooseCurrency} now.
                </p>
                <InputCustom
                  placeholder={`Enter your ${chooseCurrency} type`}
                  type="text"
                  name="currency"
                  setDataProps={setData}
                  dataProps={data}
                  onChange={(e) => handleChange(e)}
                  onFocus={(e) => handleFocus(e)}
                  focusProps={dataFocus}
                />
              </section>
              <section className="grid items-center grid-cols-3 gap-[8px] mb-[20px]">
                {DEPOSIT_AMOUNT.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      className="!bg-second-color !border !border-solid border-light-text !text-light-text !px-[3px]"
                      content={`${chooseCurrency} ${item.amount}`}
                      onClick={() => setData({ ...data, amounts: item.amount })}
                    />
                  );
                })}
              </section>
              <section>
                <InputCustom
                  placeholder={`Enter your ${chooseCurrency} amount`}
                  type="number"
                  name="amounts"
                  setDataProps={setData}
                  dataProps={data}
                  onChange={(e) => handleChange(e)}
                  onFocus={(e) => handleFocus(e)}
                  focusProps={dataFocus}
                />
              </section>
            </section>
            <section className="mb-[24px]"></section>
          </section>
        </section>
        <section>
          {data.amounts && (
            <p className="text-light-text">
              {chooseCurrency}{" "}
              <span className="text-main-color font-bold">{data.amounts}</span>{" "}
              In your personal account
            </p>
          )}
          <Button
            className="!bg-third-color !text-white w-full"
            content="Deposit"
          />
        </section>
      </motion.section>
    </AnimateSharedLayout>
  );
};

export default DepositSteoTwo;
