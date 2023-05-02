import { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

import event1 from "../../images/EventListSelect/active_01.webp";
import event2 from "../../images/EventListSelect/active_02.webp";
import event3 from "../../images/EventListSelect/active_03.webp";
import event7 from "../../images/EventListSelect/active_07.webp";
import event4 from "../../images/EventListSelect/active_04.webp";
import SearchItem from "./SearchItem";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loading, loadingDestroy } from "../../redux/action/action";

const EVENTS_LIST = [
  {
    icon: event2,
    label: "",
    link: "/promotions",
  },
  {
    icon: event3,
    label: "",
  },
  {
    icon: event4,
    label: "",
  },
  {
    icon: event1,
    label: "",
    link: "/refer-code",
  },
  {
    icon: event7,
    label: "",
  },
];

const EventListSelect = () => {
  const [searchItem, setSearchItem] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="border-t border-[#262828]">
      <section
        className={`${
          searchItem && "flex-col !items-start"
        } flex items-center justify-between py-common-padding-y border-t border-common-border relative`}
      >
        {searchItem ? (
          <SearchItem setSearchItem={setSearchItem} searchItem={searchItem} />
        ) : (
          <>
            <motion.div
              initial={{ width: "0" }}
              animate={{ width: "auto" }}
              exit={{ width: "auto" }}
              className="flex gap-[8px]"
            >
              {EVENTS_LIST.map((event, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      dispatch(loading());
                      setTimeout(() => {
                        navigate(event.link);
                        dispatch(loadingDestroy());
                      }, 500);
                    }}
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-common-border"
                  >
                    <img src={event.icon} alt={event.icon} />
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "auto" }}
              exit={{ width: "auto" }}
              className="flex items-center justify-center"
            >
              <div className="w-[34px] h-[34px] border rounded-full bg-common-border border-light-border flex items-center justify-center">
                <Icon
                  link
                  onClick={() => setSearchItem(true)}
                  name="search"
                  className="!mb-[5px] !ml-[3px] font-light !text-light-text"
                />
              </div>
            </motion.div>
          </>
        )}
      </section>
    </section>
  );
};

export default EventListSelect;
