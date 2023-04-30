import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";

import { stylesConfig } from "../helpers/stylesConfig";

const carouselList = stylesConfig.carouselImages;

const Carousel = () => {
  return (
    <section className="py-common-padding-y">
      <Swiper
        className="mySwiper h-full w-full"
        loop={true}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => swiper}
        modules={[Autoplay]}
        effect="fade"
      >
        {carouselList.map((list, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={list}
                alt={list}
                className="h-[180px] w-full rounded-[8px] object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
