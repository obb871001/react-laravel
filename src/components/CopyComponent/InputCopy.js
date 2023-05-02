import { useDispatch } from "react-redux";
import { notice } from "../../redux/action/action";
import { Input } from "semantic-ui-react";

const InputCopy = ({ copyLink }) => {
  const dispatch = useDispatch();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyLink);
      dispatch(notice("Copied!", "success", 20));
    } catch (error) {
      dispatch(notice("Error!", "error", 20));
    }
  };

  return (
    <>
      <Input
        action={{
          icon: "clone",
          circular: true,
          link: true,
          className: "!bg-third-color !text-white copy-button",
          onClick: handleCopy,
        }}
        input={{
          className: "!bg-third-color !text-white",
          disabled: true,
          readOnly: true,
        }}
        value={copyLink}
        className="!border-border-light-color rounded-[5px] border w-full"
      />
    </>
  );
};

export default InputCopy;
