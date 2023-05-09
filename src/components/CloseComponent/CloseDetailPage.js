import { FaArrowLeft } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router";
import { usePreviousPagePath } from "../../hook/usePreviousPagePath";

const CloseDetailPage = ({ title }) => {
  const navigate = useNavigate();
  const previousPage = usePreviousPagePath();
  return (
    <section className="h-[60px] px-common-padding-x bg-extra-black py-common-padding-y relative flex items-center justify-center">
      <FaArrowLeft
        className="absolute absolute-center !left-[30px] text-2xl text-gray-600 cursor-pointer"
        onClick={() => navigate(previousPage)}
      />
      <p className="mb-0 text-light-white text-lg font-semibold text-center">
        {title}
      </p>
    </section>
  );
};

export default CloseDetailPage;
