import { IoCloseOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router";
import { usePreviousPagePath } from "../../hook/usePreviousPagePath";

const CloseComponent = ({ delay, setProps }) => {
  const navigate = useNavigate();
  const previousPage = usePreviousPagePath();

  return (
    <IoCloseOutline
      onClick={() => {
        if (delay) {
          setProps(true);
          setTimeout(() => {
            navigate(previousPage);
          }, 200);
        } else {
          navigate(previousPage);
        }
      }}
    />
  );
};

export default CloseComponent;
