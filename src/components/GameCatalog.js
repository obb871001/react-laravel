import { Icon } from "semantic-ui-react";
import { GAME_LIST } from "../helpers/gameList";
import ShowGameDetail from "./ShowGameDetail";
import { useRef, useState } from "react";
import { appName } from "../config";
import SwiperGameList from "./SwiperGameList/SwiperGameList";

const SlideRight = ({ slideNext }) => {
  return (
    <section
      onClick={() => slideNext()}
      className="trapezoid absolute top-0 right-0 "
    ></section>
  );
};
const SlideLeft = ({ slideNext }) => {
  return (
    <section
      onClick={() => slideNext()}
      className="trapezoid-reverse absolute top-0 left-0 "
    ></section>
  );
};

const ARRAY_TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const GameCatalog = ({
  mainTitle,
  gameType,
  showListCount,
  noWrap,
  hasBottomTitle,
  Autoplay,
}) => {
  const [openGameDetail, setOpenGameDetail] = useState(false);

  const swiperRef = useRef(null);

  const handleSlideRight = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="bg-game-background relative rounded-[30px] px-[20px] pt-[3px] pb-[20px] mb-[20px]">
      <SlideRight />
      <SlideLeft slideNext={handleSlideRight} />
      <section className="relative z-10">
        <section className="flex justify-between h-[53px] mb-[10px]">
          <div>
            <p className="text-white sm:text-2xl text-xl font-extrabold italic mb-[0px]">
              {mainTitle}
            </p>
            <p className="text-red-500 sm:text-2xl text-xl font-bold italic mb-[0px]">
              {gameType}
            </p>
          </div>
          {showListCount && (
            <div className="flex items-center gap-[5px] mb-[10px]">
              <div className="bg-[#16171B] py-[8px] px-[20px]  rounded-3xl text-light-text">
                ALL <span className="text-main-color font-bold">13</span>
              </div>
              <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-[#16171B]">
                <Icon
                  className="!text-light-text !mb-[5px] !ml-[3px]"
                  name="angle left"
                />
              </div>
              <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-[#16171B]">
                <Icon
                  className="!text-light-text !mb-[5px] !ml-[3px]"
                  name="angle right"
                />
              </div>
            </div>
          )}
        </section>
        <SwiperGameList
          swiperRef={swiperRef}
          setOpenGameDetail={setOpenGameDetail}
          autoplay={Autoplay}
          hasBottomTitle={hasBottomTitle}
        />
        {/* <section
          className={`flex gap-[10px] ${
            noWrap ? "flex-nowrap overflow-x-scroll" : "flex-wrap"
          }`}
        >
          {ARRAY_TEST.map((item, index) => {
            return (
              <div
                key={index}
                className={`rounded-[15px] ${
                  hasBottomTitle ? "h-[160px]" : "h-[140px]"
                } min-w-[110px] relative`}
                onClick={() => setOpenGameDetail(true)}
              >
                <div
                  style={{
                    backgroundImage: `url(${GAME_LIST[0].image})`,
                    backgroundSize: "100% 100%",
                  }}
                  className={`w-full h-full absolute rounded-[15px] bg-center bg-no-repeat ${
                    hasBottomTitle && "!h-[130px] rounded-b-[0px]"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 text-white flex flex-col items-center justify-center w-full pb-[8px] ${
                    hasBottomTitle &&
                    "h-[30px] bg-[#252828] rounded-b-[15px] pb-[0px] "
                  }`}
                >
                  <p className="text-xl font-bold mb-0">Aviator</p>
                  {hasBottomTitle || (
                    <p className="font-bold mb-0 px-[5px] bg-[rgb(255,255,255,.4)] rounded-full text-overflow w-[90%]">
                      {appName} Special
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </section> */}
      </section>
      <ShowGameDetail
        openGameDetail={openGameDetail}
        setOpenGameDetail={setOpenGameDetail}
      />
    </section>
  );
};

export default GameCatalog;
