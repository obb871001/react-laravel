import { useNavigate } from "react-router";
import { PROMOTION_BANNER_BACKGROUND, PROMOTION_LIST } from "./PromotionList";
import { motion } from "framer-motion";
import { commonOpacity } from "../../animateConstant";
import { useDispatch } from "react-redux";
import { goToDetailPage } from "../../redux/action/action";

const Promotion = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <motion.main className="px-common-padding-x py-common-padding-y">
      <p className="text-center font-semibold text-lg text-white lg:text-5xl">
        Promotions
      </p>
      <section className="mt-[16px] md:grid grid-cols-3 gap-[10px]">
        {PROMOTION_LIST.map((promotion, index) => {
          const sectionColor = PROMOTION_BANNER_BACKGROUND[index % 3];

          return (
            <section
              key={index}
              className="w-full rounded-[10px] bg-third-color min-h-[145px] p-[16px] relative cursor-pointer mb-[15px]"
              onClick={() => {
                navigate(`promotioncontent`);
              }}
            >
              <div className="flex flex-col w-[40%]">
                <p className="text-white text-lg mb-[5px] font-semibold">
                  Promotion{index + 1}
                </p>
                <p className="text-light-text text-sm font-light break-all">
                  CONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENT
                </p>
              </div>
              <div className="overflow-hidden absolute top-0 left-0 w-full h-full rounded-[10px]">
                <span
                  className="absolute right-0 h-[150px] w-[150px] blur-[50px]"
                  style={{
                    background: sectionColor,
                  }}
                ></span>
              </div>
              <img
                className="w-[150px] h-[160px] absolute top-0 right-0 object-cover"
                src={promotion.background}
              />
            </section>
          );
        })}
      </section>
    </motion.main>
  );
};

export default Promotion;
