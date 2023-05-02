import { Fragment, useState } from "react";
import { motion } from "framer-motion";

import ShowGameDetail from "../ShowGameDetail";

import { GAME_LIST } from "../../helpers/gameList";

const SearchBox = () => {
  const [openGameDetail, setOpenGameDetail] = useState(false);

  return (
    <Fragment>
      <motion.section
        initial={{ transform: "scaleX(0)" }}
        animate={{ transform: "scaleX(1)" }}
        transition={{ duration: 0.2, ease: "" }}
        style={{ transformOrigin: "top right" }}
        className="mt-[10px] rounded-[6px] border border-light-border bg-third-color px-common-padding-x py-common-padding-y w-full relative z-[1000] overflow-hidden"
      >
        <p className="text-white text-sm">Recommend</p>
        <section className="w-full">
          <section className="flex items-center">
            <div
              className="min-w-[36px] h-[36px] bg-center bg-cover rounded-[6px] mr-[10px]"
              style={{ backgroundImage: `url(${GAME_LIST[0].image})` }}
            ></div>
            <div
              className="flex flex-col justify-center w-full"
              onClick={() => setOpenGameDetail(true)}
            >
              <p className="mb-0 text-white font-semibold">GAME Name</p>
              <p className="mb-0 text-light-text text-sm font-semibold">
                GAME Type
              </p>
            </div>
          </section>
        </section>
      </motion.section>
      {openGameDetail && (
        <ShowGameDetail
          setOpenGameDetail={setOpenGameDetail}
          openGameDetail={openGameDetail}
        />
      )}
    </Fragment>
  );
};

export default SearchBox;
