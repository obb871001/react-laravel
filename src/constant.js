import { RiVipCrownFill } from "react-icons/ri";
import { AiTwotoneSound } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbPokerChip, TbMessage } from "react-icons/tb";
import { BsCashCoin, BsListCheck } from "react-icons/bs";
import { IoGift } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { RiHomeSmileFill } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";

const iconStyle = "text-2xl mr-[10px]";

export const COMMON_FIXED_STYLE =
  "fixed top-0 left-0 w-full h-full overflow-scroll no-scrollbar z-[9999]";

export const CURRENCY_SYMBOL = "₱";

export const MENU_LIST = {
  Home: [
    {
      icon: <RiHomeSmileFill className={iconStyle} />,
      text: "Home",
      link: "/",
    },
  ],
  First: [
    {
      icon: <RiVipCrownFill className={iconStyle} />,
      text: "VIP",
      link: "/vip",
    },
    {
      icon: <BsCashCoin className={iconStyle} />,
      text: "Transaction",
      link: "transaction",
    },
    {
      icon: <AiTwotoneSound className={iconStyle} />,
      text: "Promotions",
      link: "/promotion",
    },
    { icon: <TbMessage className={iconStyle} />, text: "Inbox", link: "inbox" },
    {
      icon: <HiOutlineClipboardList className={iconStyle} />,
      text: "Todo",
      link: "todo",
    },
    {
      icon: <TbPokerChip className={iconStyle} />,
      text: "Roulette",
      link: "roulette",
    },
    {
      icon: <BsListCheck className={iconStyle} />,
      text: "Task",
      link: "/task",
    },
    {
      icon: <HiShare className={iconStyle} />,
      text: "Refer-Code",
      link: "/refer-code",
    },
    {
      icon: <FaRegCalendarCheck className={iconStyle} />,
      text: "CheckIn",
      link: "checkin",
    },
  ],
  Second: [
    {
      icon: <IoGift className={iconStyle} />,
      text: "Rewards",
      link: "/rewards",
    },
  ],
  Third: [
    {
      icon: <BiMessageSquareAdd className={iconStyle} />,
      text: "App",
      link: "app",
    },
  ],
};

export const DEPOSIT_AMOUNT = [
  { amount: 100 },
  { amount: 200 },
  { amount: 500 },
  { amount: 1000 },
  { amount: 2000 },
  { amount: 5000 },
];

export const VIP_LIST = [
  { prize: 0, exp: 0 },
  { prize: 3, exp: 800 },
  { prize: 10, exp: 4000 },
  { prize: 20, exp: 10000 },
  { prize: 50, exp: 20000 },
  { prize: 100, exp: 40000 },
  { prize: 200, exp: 80000 },
  { prize: 500, exp: 160000 },
  { prize: 1000, exp: 320000 },
  { prize: 2000, exp: 640000 },
  { prize: 5000, exp: 1280000 },
  { prize: 10000, exp: 2560000 },
  { prize: 20000, exp: 5120000 },
  { prize: 50000, exp: 10240000 },
  { prize: 100000, exp: 20480000 },
];

export const DAILY_REWARDS = [
  "Seven-day login bonus",
  "Conditions for each day of login:",
  "Day 1: Log in to the platform to receive the bonus.",
  "Day 2: Place accumulated bets of 10 BRL to receive the bonus.",
  "Day 3: Log in to the platform to receive the bonus.",
  "Day 4: Make a top-up of any amount to receive the bonus.",
  "Day 5: Log in to the platform to receive the bonus.",
  "Day 6: Place accumulated bets of 20 BRL to receive the bonus.",
  "Day 7: Redeem the reward upon logging into the platform on the day, win up to 100 BRL and deposit bonus items.",
  "Bet the login bonus 10 times to make a withdrawal.",
];
