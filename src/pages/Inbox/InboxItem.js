import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";

import InboxIcon from "../../images/Inbox/email.png";
import { goToDetailPage } from "../../redux/action/action";

const InboxItem = ({ title, content }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div
      className="bg-footer-bg p-common-padding-x rounded-lg flex mb-[10px] cursor-pointer"
      onClick={() => {
        navigate("1");
        dispatch(goToDetailPage());
      }}
    >
      <div className="w-[60px] h-[60px] mr-[15px] flex items-center justify-center rounded-full bg-second-color">
        <img className="w-[30px] object-cover" src={InboxIcon} />
      </div>
      <div className="flex flex-col justify-between w-[70%]">
        <p className="text-lg font-bold text-light-white">{title}</p>
        <p className="text-sm text-light-text text-overflow">{content}</p>
      </div>
    </div>
  );
};

export default InboxItem;
