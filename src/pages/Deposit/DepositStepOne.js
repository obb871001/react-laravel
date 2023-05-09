import { AnimateSharedLayout, motion } from "framer-motion";

import { IoCloseOutline } from "react-icons/io5";

import SelectMethod from "./components/SelectMethod";

import { animatePage } from "../../animateConstant";
import CloseComponent from "../../components/CloseComponent/CloseComponent";

const DepositStepOne = ({ setChooseCurrency, setDepositStep, depositStep }) => {
  return (
    <AnimateSharedLayout>
      <motion.section
        layout
        initial={depositStep === 1 ? "hiddenRight" : "hiddenLeft"}
        animate="visible"
        exit={depositStep === 1 ? "hiddenRight" : "hiddenLeft"}
        variants={animatePage}
      >
        <div
          className={`flex items-center text-light-text text-4xl mb-[20px] justify-end`}
        >
          <CloseComponent />
        </div>
        <p className="text-3xl text-light-white font-extrabold text-center">
          Deposit
        </p>

        <section>
          <p className="text-center text-light-text my-[20px]">
            Select the deposit method.
          </p>
          <section className="mb-[24px]">
            <p className="font-extrabold text-xl text-light-white mb-[10px]">
              Recommend
            </p>
            <SelectMethod
              setChooseCurrency={setChooseCurrency}
              setDepositStep={setDepositStep}
              method={`PHP`}
            />
          </section>
          <section className="mb-[24px]">
            <p className="font-extrabold text-xl text-light-white mb-[10px]">
              Other
            </p>
            <SelectMethod
              setChooseCurrency={setChooseCurrency}
              setDepositStep={setDepositStep}
              method={`USDT TRC20`}
            />
          </section>
        </section>
      </motion.section>
    </AnimateSharedLayout>
  );
};

export default DepositStepOne;
