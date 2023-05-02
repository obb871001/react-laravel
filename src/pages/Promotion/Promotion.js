import { PROMOTION_BANNER_BACKGROUND, PROMOTION_LIST } from "./PromotionList";

const Promotion = () => {
  return (
    <main className="px-common-padding-x py-common-padding-y">
      <p className="text-center font-semibold text-lg text-white">Promotions</p>
      <section className="mt-[16px]">
        {PROMOTION_LIST.map((promotion, index) => {
          const sectionColor = PROMOTION_BANNER_BACKGROUND[index % 3];

          return (
            <section
              key={index}
              className="w-full rounded-[10px] bg-third-color min-h-[145px] p-[16px] relative mb-[15px]"
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
    </main>
  );
};

export default Promotion;
