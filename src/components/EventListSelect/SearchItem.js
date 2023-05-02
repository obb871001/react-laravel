import { AnimatePresence, motion } from "framer-motion";
import { Input } from "semantic-ui-react";
import SearchBox from "./SearchBox";

const SearchItem = ({ setSearchItem, searchItem }) => {
  return (
    <AnimatePresence>
      <section className="w-full min-h-[40px]">
        <div
          onClick={() => {
            setSearchItem(false);
          }}
          className="fixed top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.5)] z-[999]"
        ></div>
        <motion.div
          initial={{ transform: "scaleX(0)" }}
          animate={{ transform: "scaleX(1)" }}
          transition={{ duration: 0.2, ease: "" }}
          style={{ transformOrigin: "top right" }}
          className="h-full py-common-padding-y w-full relative z-[1000]"
        >
          <Input
            iconPosition="left"
            className="w-full"
            icon={{ name: "search", circular: true, link: true }}
            input={{ className: "!bg-third-color" }}
            placeholder="Search..."
          ></Input>
        </motion.div>
      </section>
      <SearchBox />
    </AnimatePresence>
  );
};

export default SearchItem;
