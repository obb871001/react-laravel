import { useNavigate } from "react-router";
import { usePreviousPagePath } from "../hook/usePreviousPagePath";

const PopWindow = ({ children }) => {
  const navigate = useNavigate();
  const previousPage = usePreviousPagePath();
  return (
    <main
      className={`fixed top-0 left-0 w-full h-full overflow-scroll no-scrollbar z-[9999] flex items-center justify-center bg-[rgb(0,0,0,0.5)] `}
      onClick={() => navigate(previousPage)}
    >
      <section
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </section>
    </main>
  );
};

export default PopWindow;
