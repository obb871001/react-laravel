import { AnimatePresence, motion } from "framer-motion";

import CloseComponent from "../../components/CloseComponent/CloseComponent";
import { appName } from "../../config";
import { popUpVariant } from "../../animateConstant";
import { useState } from "react";
import { getFixedStyle } from "../../hook/useDeviceType";

const DownloadApp = () => {
  const [isClosing, setIsClosing] = useState(false);

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.main
          variants={popUpVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
          }}
          className={`${getFixedStyle()} bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-md flex items-center justify-center px-[10px]`}
        >
          <section className="bg-second-color pb-[25px] pt-[10px] px-[15px] rounded-xl text-light-white max-w-[450px] w-full">
            <section className="flex items-center mb-[10px] justify-end text-3xl">
              <CloseComponent delay setProps={setIsClosing} />
            </section>
            <p className="text-lg font-semibold">
              Quickly access {appName} on iPhone
            </p>
            <p>
              You can add an icon to the iPhone home screen to access {appName}.
            </p>
            <p>
              On the website, click the share button, then click 'Add to Home
              Screen'.
            </p>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default DownloadApp;
