import { useNavigate } from "react-router";

import { GoThreeBars } from "react-icons/go";

import { MENU_LIST } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, selectMenu } from "../../redux/action/action";
import { Button, Popup } from "semantic-ui-react";

const MiniMenu = () => {
  const menuListKey = Object.keys(MENU_LIST);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selectMenuNow = useSelector((state) => state.isMenuSelect);

  return (
    <section className="w-[64px] fixed left-0 top-0 h-full bg-second-color footer-shadow">
      <section>
        <section className="hover:bg-footer-bg cursor-pointer transition duration-300 p-[16px] rounded-[6px] ">
          <div
            className={`flex items-center justify-center text-[#E2E8E3] font-bold`}
            onClick={() => dispatch(openMenu())}
          >
            <GoThreeBars className="text-2xl mr-[10px]" />
          </div>
        </section>
        {menuListKey.map((item, index) => {
          const menuChildrenArray = MENU_LIST[item];
          return (
            <section className="rounded-[6px] mb-[25px]">
              {menuChildrenArray.map((children, index) => {
                return (
                  <>
                    <Popup
                      trigger={
                        <div
                          className={`${
                            selectMenuNow === children.text &&
                            "!text-main-color !bg-third-color"
                          } flex items-center hover:bg-third-color cursor-pointer transition duration-300 p-[16px] justify-center text-[#E2E8E3] font-bold`}
                          key={index}
                          onClick={() => {
                            dispatch(selectMenu(children.text));
                            navigate(children.link);
                          }}
                        >
                          {children.icon}
                        </div>
                      }
                      position="right center"
                      content={children.text}
                    />
                  </>
                );
              })}
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default MiniMenu;
