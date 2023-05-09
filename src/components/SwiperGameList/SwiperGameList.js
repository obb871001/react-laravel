import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";
import { GAME_LIST } from "../../helpers/gameList";
import { appName } from "../../config";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

const ARRAY_TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SwiperGameList = ({
  hasBottomTitle,
  autoplay,
  setOpenGameDetail,
  swiperRef,
}) => {
  return (
    <Swiper
      ref={swiperRef}
      className="mySwiper h-full w-full"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => swiper}
      modules={autoplay && [Autoplay]}
      effect="fade"
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 25,
        },
      }}
    >
      {ARRAY_TEST.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              key={index}
              className={`rounded-[15px] h-[160px] min-w-[110px] relative cursor-pointer`}
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperGameList;
