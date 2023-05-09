import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import { animatePageNotOpacity } from "../../animateConstant";

import CloseDetailPage from "../../components/CloseComponent/CloseDetailPage";
import InboxItem from "./InboxItem";
import { useDispatch, useSelector } from "react-redux";
import { getFixedStyle } from "../../hook/useDeviceType";

const Inbox = () => {
  const detailState = useSelector((state) => state.isDetailPage);

  return (
    <AnimateSharedLayout>
      <main className={` ${getFixedStyle()} bg-second-color`}>
        <CloseDetailPage title="Inbox" />
        <motion.section
          layout
          initial={!detailState ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit={!detailState ? "hiddenRight" : "hiddenLeft"}
          variants={animatePageNotOpacity}
          className="p-common-padding-x"
        >
          <InboxItem
            title={`Inbox title`}
            content={`contentInbox content content contentcontentcontentcontentcontentcontent`}
          />
        </motion.section>
      </main>
    </AnimateSharedLayout>
  );
};

export default Inbox;
