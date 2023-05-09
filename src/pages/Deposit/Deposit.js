import { useState } from "react";
import { motion } from "framer-motion";

import DepositStepTwo from "./DepositStepTwo";
import SelectMethod from "./components/SelectMethod";
import DepositStepOne from "./DepositStepOne";

const Deposit = () => {
  const [chooseCurrency, setChooseCurrency] = useState("PHP");
  const [depositStep, setDepositStep] = useState(1);
  // {depositStep === 2 && (
  //   <HiChevronLeft onClick={() => setDepositStep(1)} />
  // )}
  return (
    <main className="fixed top-0 left-0 w-full h-full z-[9999] bg-[rgb(0,0,0,0.6)] flex items-center justify-center px-common-padding-x">
      <section className="bg-second-color max-h-[70vh] h-full w-[660px] rounded-xl px-[.5rem] pt-[.5rem] pb-[1rem]">
        {depositStep === 1 && (
          <DepositStepOne
            setDepositStep={setDepositStep}
            setChooseCurrency={setChooseCurrency}
            depositStep={depositStep}
          />
        )}
        {depositStep === 2 && (
          <DepositStepTwo
            setDepositStep={setDepositStep}
            chooseCurrency={chooseCurrency}
            depositStep={depositStep}
          />
        )}
      </section>
    </main>
  );
};

export default Deposit;
