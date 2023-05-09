import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { notice } from "../../redux/action/action";

const Copy = ({ copyLink }) => {
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
    <Fragment>
      <Icon
        link
        onClick={handleCopy}
        name="clone"
        className="text-light-text text-xl !mb-[10px]"
      />
    </Fragment>
  );
};

export default Copy;
