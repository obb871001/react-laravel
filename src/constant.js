import { RiVipCrownFill } from "react-icons/ri";
import { AiTwotoneSound } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbPokerChip } from "react-icons/tb";
import { IoGift } from "react-icons/io5";

const iconStyle = "text-2xl mr-[10px]";

export const MENU_LIST = {
  First: [
    { icon: <RiVipCrownFill className={iconStyle} />, text: "VIP" },
    { icon: <AiTwotoneSound className={iconStyle} />, text: "Inbox" },
    { icon: <HiOutlineClipboardList className={iconStyle} />, text: "Todo" },
    { icon: <TbPokerChip className={iconStyle} />, text: "Roulette" },
  ],
  Second: [{ icon: <IoGift className={iconStyle} />, text: "Gift" }],
};
