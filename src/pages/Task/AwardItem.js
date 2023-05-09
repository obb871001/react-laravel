import { CURRENCY_SYMBOL } from "../../constant";
import useBounceAnimation from "../../hook/useBounce";

import { TiArrowSortedDown } from "react-icons/ti";

import AwardIcon from "../../images/Task/task-award_achieve.webp";
import { motion } from "framer-motion";

const AwardItem = ({ index, shouldAnimate, setGetDaily, getDaily }) => {
  const [controls, triggerBounce] = useBounceAnimation();
  return (
    <div
      key={index}
      onClick={() => {
        if (!getDaily.includes(index)) {
          triggerBounce();
          setGetDaily((prev) => [...prev, index]);
        }
      }}
      className={`w-full cursor-pointer h-[75px] rounded-lg bg-second-color relative flex flex-col items-center justify-center text-light-white text-xl`}
    >
      <motion.img
        animate={controls}
        initial={{ scale: 1 }}
        className={`absolute absolute-center !top-[-47%] lg:!left-[47px] !left-[20px] ${
          getDaily.includes(index) ? "grayscale-0" : "grayscale"
        } w-[60px]`}
        src={AwardIcon}
      />
      <p className="mb-0 mt-[20px] font-bold">{CURRENCY_SYMBOL}</p>
      <p className="text-lg mb-0">5</p>
      <TiArrowSortedDown className="absolute absolute-center !top-[101%] text-second-color" />
    </div>
  );
};

export default AwardItem;
