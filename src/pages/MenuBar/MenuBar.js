import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoMdClose } from "react-icons/io";

import { MENU_LIST } from "../../constant";

import { useNavigate } from "react-router";
import useDeviceType from "../../hook/useDeviceType";
import { useDispatch, useSelector } from "react-redux";
import { CloseMenu } from "../../redux/action/action";
import MenuItem from "./MenuItem";

const MenuBar = ({ setIsMenuOpen }) => {
  const deviceType = useDeviceType();

  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {/* {isMenuOpen === "Menu" && ( */}
      {deviceType === "PC" ? (
        <MenuItem />
      ) : (
        isMenuOpen && (
          <main
            className="fixed top-0 left-0 w-full h-full z-[9999] bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-md"
            onClick={() => {
              dispatch(CloseMenu());
            }}
          >
            <MenuItem />
          </main>
        )
      )}
      {/* )} */}
    </AnimatePresence>
  );
};

export default MenuBar;
