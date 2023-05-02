import { motion, AnimatePresence } from "framer-motion";

import { IoMdClose } from "react-icons/io";

import { MENU_LIST } from "../../constant";

const MenuBar = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuListKey = Object.keys(MENU_LIST);

  return (
    <AnimatePresence>
      {isMenuOpen === "Menu" && (
        <main className="fixed top-0 left-0 w-full h-full z-[9999] bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-md">
          <motion.section
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-[320px] h-full bg-second-color footer-shadow px-[16px]"
          >
            <section className="pt-[16px] w-full flex items-center justify-between text-white mb-[20px]">
              <p className="mb-0">LOGO</p>
              <IoMdClose
                className="text-3xl text-light-text"
                onClick={() => setIsMenuOpen("Home")}
              />
            </section>
            <section>
              {menuListKey.map((item, index) => {
                const menuChildrenArray = MENU_LIST[item];
                return (
                  <section className="bg-footer-bg p-[16px] rounded-[6px] mb-[20px]">
                    {menuChildrenArray.map((children, index) => {
                      return (
                        <div
                          className={`flex items-center text-[#E2E8E3] ${
                            index !== menuChildrenArray.length - 1 &&
                            "mb-[20px]"
                          } font-bold`}
                          key={index}
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
        </main>
      )}
    </AnimatePresence>
  );
};

export default MenuBar;
