import { motion } from "framer-motion";

import CloseDetailPage from "../../components/CloseComponent/CloseDetailPage";
import { PROMOTION_LIST } from "./PromotionList";
import { commonOpacity } from "../../animateConstant";
import { getFixedStyle } from "../../hook/useDeviceType";

const PromotionDetail = () => {
  return (
    <motion.main className={` ${getFixedStyle()} bg-second-color z-[10000]`}>
      <CloseDetailPage title={`Promotion Title`} />
      <section className="p-common-padding-x">
        <section className="w-full rounded-[10px] bg-third-color min-h-[145px] p-[16px] relative mb-[15px]">
          <div className="flex flex-col w-[40%]">
            <p className="text-white text-lg mb-[5px] font-semibold">
              Promotion 1
            </p>
            <p className="text-light-text text-sm font-light break-all">
              CONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENT
            </p>
          </div>

          <div className="overflow-hidden absolute top-0 left-0 w-full h-full rounded-[10px]">
            <span
              className="absolute right-0 h-[150px] w-[150px] blur-[50px]"
              style={{
                background:
                  "linear-gradient(45deg, rgb(93, 234, 121) 80%, rgb(82, 255, 203)) 20% center",
              }}
            ></span>
          </div>
          <img
            className="w-[150px] h-[160px] absolute top-0 right-0 object-cover"
            src={PROMOTION_LIST[0].background}
          />
        </section>
      </section>
    </motion.main>
  );
};

export default PromotionDetail;
