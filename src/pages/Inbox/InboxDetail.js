import { motion, AnimateSharedLayout } from "framer-motion";

import { useSelector } from "react-redux";

import CloseDetailPage from "../../components/CloseComponent/CloseDetailPage";
import { animatePageNotOpacity } from "../../animateConstant";
import { getFixedStyle } from "../../hook/useDeviceType";

const InboxDetail = () => {
  const detailState = useSelector((state) => state.isDetailPage);

  return (
    <AnimateSharedLayout>
      <main className={` ${getFixedStyle()} bg-second-color z-[10000]`}>
        <CloseDetailPage title="Inbox 1" />
        <motion.section
          layout
          initial={detailState ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit={detailState ? "hiddenRight" : "hiddenLeft"}
          variants={animatePageNotOpacity}
          className="p-common-padding-x"
        >
          <p className="break-words text-light-white">
            CONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENT
          </p>
        </motion.section>
      </main>
    </AnimateSharedLayout>
  );
};

export default InboxDetail;
