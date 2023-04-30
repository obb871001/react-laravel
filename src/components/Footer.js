import { useState } from "react";

import { GiHamburgerMenu, GiPokerHand } from "react-icons/gi";
import { RiHomeSmileFill, RiVipCrownFill } from "react-icons/ri";
import { IoGift } from "react-icons/io5";

const iconStyle = "text-2xl";

const FOOTER_LIST = [
  { icon: <GiHamburgerMenu className={iconStyle} />, text: "Menu" },
  { icon: <GiPokerHand className={iconStyle} />, text: "Games" },
  { icon: <RiHomeSmileFill className={iconStyle} />, text: "Home" },
  { icon: <RiVipCrownFill className={iconStyle} />, text: "VIP" },
  { icon: <IoGift className={iconStyle} />, text: "Gift" },
];

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("Home");

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[60px] bg-footer-bg footer-shadow grid grid-cols-5 py-common-padding-y z-[999]">
      {FOOTER_LIST.map((footer, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col items-center justify-between ${
              isMenuOpen === footer.text ? "text-main-color" : "text-white"
            } `}
            onClick={() => setIsMenuOpen(footer.text)}
          >
            {footer.icon}
            <p className="mb-0 font-bold">{footer.text}</p>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
