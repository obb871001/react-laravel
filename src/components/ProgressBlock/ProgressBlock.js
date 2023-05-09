import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Progress, Segment } from "semantic-ui-react";
import { clearNotice } from "../../redux/action/action";
import { IoCloseOutline } from "react-icons/io5";

const ProgressBlock = ({}) => {
  const [percent, setPercent] = useState(0);

  const dispatch = useDispatch();
  const progressProps = useSelector((state) => state.isNotice);
  const { content, type, timer, show } = progressProps;

  useEffect(() => {
    setPercent(0);
    if (show) {
      const interval = setInterval(
        () => {
          setPercent((prevPercent) => {
            if (prevPercent >= 100) {
              clearInterval(interval);
              setPercent(0);
              return 100;
            }
            return prevPercent + 1;
          });
        },
        timer ? timer : 30
      );
      setTimeout(
        () => {
          dispatch(clearNotice());
        },
        timer ? timer * 100 : 3000
      );

      return () => {
        clearInterval(interval);
        clearTimeout();
      };
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed absolute-center !top-[60px] z-[999999]"
        >
          <Segment className="flex items-center">
            {type === "success" && (
              <Icon name="check" className="text-green-500" />
            )}
            {type === "warning" && (
              <Icon name="exclamation circle" className="text-yellow-500" />
            )}
            {type === "error" && (
              <Icon name="close icon" className="text-red-500" />
            )}
            {content}
            <Progress
              percent={percent}
              inverted
              attached="bottom"
              success={type === "success"}
              warning={type === "warning"}
              error={type === "error"}
            />
            <IoCloseOutline
              onClick={() => dispatch(clearNotice())}
              className="ml-[10px] text-xl"
            />
          </Segment>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ProgressBlock;
