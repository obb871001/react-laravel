import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoMdClose } from "react-icons/io";

import { MENU_LIST } from "../../constant";

import { useNavigate } from "react-router";
import useDeviceType from "../../hook/useDeviceType";
import { useDispatch, useSelector } from "react-redux";
import { CloseMenu, selectMenu } from "../../redux/action/action";
import MiniMenu from "./MiniMenu";
import ShouldHideMenu, { shouldHideMenu } from "../../utils/hideMenu";

const MenuItem = () => {
  const menuListKey = Object.keys(MENU_LIST);
  const deviceType = useDeviceType();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  const hideMenu = ShouldHideMenu();

  const [selectTab, setSelectTab] = useState("Home");

  return hideMenu ? (
    <MiniMenu />
  ) : (
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-[320px] fixed left-0 top-0 h-full bg-second-color footer-shadow px-[16px] overflow-y-scroll no-scrollbar"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <section className="pt-[16px] w-full flex items-center justify-between text-white mb-[20px]">
        <p className="mb-0">LOGO</p>
        <IoMdClose
          className="text-3xl text-light-text cursor-pointer"
          onClick={() => dispatch(CloseMenu())}
        />
      </section>
      <section>
        {menuListKey.map((item, index) => {
          const menuChildrenArray = MENU_LIST[item];
          return (
            <section className="bg-footer-bg rounded-[6px] mb-[20px] ">
              {menuChildrenArray.map((children, index) => {
                return (
                  <div
                    className={`flex items-center text-[#E2E8E3] font-bold hover:bg-third-color cursor-pointer transition duration-300 p-[16px]`}
                    key={index}
                    onClick={() => {
                      navigate(children.link);
                      dispatch(selectMenu(children.text));
                      if (deviceType === "Mobile") {
                        dispatch(CloseMenu());
                      }
                    }}
                  >
                    {children.icon}
                    <p className="mb-0">{children.text}</p>
                  </div>
                );
              })}
            </section>
          );
        })}
      </section>
    </motion.section>
  );
};

export default MenuItem;
