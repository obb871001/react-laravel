import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoMail } from "react-icons/io5";
import { Icon } from "semantic-ui-react";
import { HiPhone } from "react-icons/hi";

import SignInUp from "../../components/SignInUp/SignInUp";
import { useDispatch, useSelector } from "react-redux";
import { closeSign } from "../../redux/action/action";
import MailSignup from "./MailSignup";
import PhoneSignup from "./PhoneSignup";
import { popUpVariant } from "../../animateConstant";

const Signup = () => {
  const [chooseSignupMethod, setChooseSignupMethod] = useState("mail");

  const signTrigger = useSelector((state) => state.isSignupTrigger);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {signTrigger === "signup" && (
        <main className="fixed top-0 left-0 w-full h-full z-[9999] bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-md">
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
            <section className="flex items-center justify-between h-[60px] px-common-padding-x">
              <SignInUp />
              <Icon
                onClick={() => dispatch(closeSign())}
                name="close"
                className="!mb-[8px] !text-2xl !text-white"
              />
            </section>
            <section
              className="w-full bg-second-color px-[32px] py-[36px]"
              style={{ height: "calc( 100% - 60px )" }}
            >
              <div className="flex items-center justify-center mb-[30px]">
                <div
                  className={`w-[30px] h-[30px] gap-[30px] rounded bg-light-text text-second-color ${
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
                  className={`w-[30px] h-[30px] gap-[30px] rounded bg-light-text text-second-color ${
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
