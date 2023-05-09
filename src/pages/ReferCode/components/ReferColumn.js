import { CURRENCY_SYMBOL } from "../../../constant";

const ReferColumn = ({ border, title, value }) => {
  return (
    <section>
      <p className="mb-[10px] font-semibold text-light-text sm:text-2xl">
        {title}
      </p>
      <p className="mb-[10px] font-extrabold text-2xl text-white sm:text-3xl">
        {CURRENCY_SYMBOL} {value}
      </p>
      {border && (
        <div className="w-full h-[.1px] bg-input-border-light-color mb-[10px]"></div>
      )}
    </section>
  );
};

export default ReferColumn;
