import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoMail } from "react-icons/io5";
import { Icon } from "semantic-ui-react";
import { HiPhone } from "react-icons/hi";

import SignInUp from "../../components/SignInUp/SignInUp";
import MailSignup from "./MailSignup";
import PhoneSignup from "./PhoneSignup";
import { popUpVariant } from "../../animateConstant";
import { useNavigate } from "react-router";
import { getFixedStyle } from "../../hook/useDeviceType";
import { usePreviousPagePath } from "../../hook/usePreviousPagePath";

const Signup = () => {
  const [chooseSignupMethod, setChooseSignupMethod] = useState("mail");
  const [isClosing, setIsClosing] = useState(false);

  const navigate = useNavigate();
  const previousPage = usePreviousPagePath();

  return (
    <AnimatePresence>
      {!isClosing && (
        <main
          className={`${getFixedStyle()} bg-[rgba(0, 0, 0, 0.5)] sm:backdrop-blur-none backdrop-blur-md`}
        >
          <motion.section
            variants={popUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
            }}
            className="h-full"
          >
            <section className="flex items-center justify-between h-[60px] px-common-padding-x sm:bg-second-color">
              <SignInUp />
              <Icon
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    navigate(previousPage);
                  }, 200);
                }}
                name="close"
                className="!mb-[8px] !text-2xl !text-white cursor-pointer"
              />
            </section>
            <section
              className="w-full bg-second-color px-[32px] py-[36px]"
              style={{ height: "calc( 100% - 60px )" }}
            >
              <div className="flex items-center justify-center mb-[30px]">
                <div
                  className={`w-[30px] h-[30px] gap-[30px] rounded bg-light-text cursor-pointer text-second-color ${
                    chooseSignupMethod === "mail" && "!bg-main-color"
                  } flex items-center justify-center mx-[38px]`}
                  onClick={() => {
                    setChooseSignupMethod("mail");
                  }}
                >
                  <IoMail className="text-2xl" />
                </div>
                <div className="w-[.5px] h-[30px] bg-gray-500"></div>
                <div
                  className={`w-[30px] h-[30px] gap-[30px] rounded bg-light-text cursor-pointer text-second-color ${
                    chooseSignupMethod === "phone" && "!bg-main-color"
                  } flex items-center justify-center mx-[38px]`}
                  onClick={() => {
                    setChooseSignupMethod("phone");
                  }}
                >
                  <HiPhone className="text-2xl" />
                </div>
              </div>
              {chooseSignupMethod === "mail" ? <MailSignup /> : <PhoneSignup />}
            </section>
          </motion.section>
        </main>
      )}
    </AnimatePresence>
  );
};

export default Signup;
