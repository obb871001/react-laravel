import { useState } from "react";

import { BiMessageSquareAdd } from "react-icons/bi";
import { GiHamburgerMenu, GiPokerHand } from "react-icons/gi";
import { RiHomeSmileFill, RiVipCrownFill } from "react-icons/ri";
import { IoGift } from "react-icons/io5";
import MenuBar from "../pages/MenuBar/MenuBar";
import { useLocation, useNavigate } from "react-router";
import { loading, loadingDestroy, openMenu } from "../redux/action/action";
import { useDispatch } from "react-redux";

const iconStyle = "text-2xl";

const Footer = () => {
  const [isFooterOpen, setIsFooterOpen] = useState("Home");

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const FOOTER_LIST = [
    {
      icon: <GiHamburgerMenu className={iconStyle} />,
      text: "Menu",
    },
    {
      icon: <IoGift className={iconStyle} />,
      text: "Rewards",
      link: "rewards",
    },
    {
      icon: <RiHomeSmileFill className={iconStyle} />,
      text: "Home",
      link: "",
    },
    {
      icon: <RiVipCrownFill className={iconStyle} />,
      text: "VIP",
      link: "vip",
    },
    {
      icon: <BiMessageSquareAdd className={iconStyle} />,
      text: "App",
      link: "app",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[60px] bg-footer-bg footer-shadow grid grid-cols-5 py-common-padding-y z-[999]">
      {FOOTER_LIST.map((footer, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col items-center justify-between ${
              location.pathname === `/${footer.link?.toLocaleLowerCase()}`
                ? "text-main-color"
                : "text-white"
            } `}
            onClick={() => {
              setIsFooterOpen(footer.text);
              if (footer.text === "Menu") {
                dispatch(openMenu());
              } else if (footer.text === "App") {
                navigate("app");
              } else {
                dispatch(loading());

                setTimeout(() => {
                  navigate(`/${footer.link}`);
                  dispatch(loadingDestroy());
                }, 200);
              }
            }}
          >
            {footer.icon}
            <p className="mb-0 font-bold">{footer.text}</p>
          </div>
        );
      })}
      {/* <MenuBar isMenuOpen={isFooterOpen} setIsMenuOpen={setIsFooterOpen} /> */}
    </footer>
  );
};

export default Footer;
