import { motion, AnimatePresence } from "framer-motion";

import { HiOutlineStar, HiStar } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { GAME_LIST } from "../helpers/gameList";
import { Button } from "semantic-ui-react";

const ShowGameDetail = ({ openGameDetail, setOpenGameDetail }) => {
  return (
    <AnimatePresence>
      {openGameDetail && (
        <main className="fixed top-0 left-0 w-full h-full z-[9999] bg-[rgba(0,0,0,0.5)]">
          <motion.section
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full min-h-[200px] rounded-t-xl bg-footer-bg py-[15px] px-[20px]"
          >
            <section className="flex items-start justify-between mb-[10px]">
              <section className="flex ">
                <div
                  style={{
                    backgroundImage: `url(${GAME_LIST[0].image})`,
                    backgroundSize: "100% 100%",
                  }}
                  className={`w-[140px] h-[140px] rounded-[10px] bg-center bg-no-repeat mr-[15px]`}
                />
                <div className="flex flex-col text-white">
                  <p className="text-xl font-bold mb-[5px]">GAME Name</p>
                  <p className="text-light-text text-sm mb-[20px]">GAME Type</p>
                  <HiStar className="text-3xl text-light-text" />
                </div>
              </section>
              <IoMdClose
                onClick={() => setOpenGameDetail(false)}
                className="text-3xl text-light-text"
              />
            </section>
            <section className="flex items-center justify-between">
              <Button className="!bg-second-color !text-light-text w-full !mr-[10px]">
                Test mode
              </Button>
              <Button className="!bg-main-color w-full">Real mode</Button>
            </section>
          </motion.section>
        </main>
      )}
    </AnimatePresence>
  );
};

export default ShowGameDetail;
