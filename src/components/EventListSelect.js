import { Icon } from "semantic-ui-react";
import event1 from "../images/EventListSelect/active_01.webp";
import event2 from "../images/EventListSelect/active_02.webp";
import event3 from "../images/EventListSelect/active_03.webp";
import event4 from "../images/EventListSelect/active_04.webp";
import event7 from "../images/EventListSelect/active_07.webp";

const EVENTS_LIST = [
  {
    icon: event2,
  },
  {
    icon: event3,
  },
  {
    icon: event4,
  },
  {
    icon: event1,
  },
  {
    icon: event7,
  },
];

const EventListSelect = () => {
  return (
    <section className="border-t border-[#262828]">
      <section className="flex items-center justify-between py-common-padding-y border-t border-common-border">
        <div className="flex gap-[8px]">
          {EVENTS_LIST.map((event, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-common-border"
              >
                <img src={event.icon} alt={event.icon} />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[34px] h-[34px] border rounded-full bg-common-border border-light-border flex items-center justify-center">
            <Icon
              name="search"
              className="!mb-[5px] !ml-[3px] font-light !text-light-text"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default EventListSelect;
