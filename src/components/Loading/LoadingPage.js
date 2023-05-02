import { AnimatePresence, motion } from "framer-motion";
import { ImSpinner } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { loading, loadingDestroy } from "../../redux/action/action";

const LoadingPage = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-[99999999] bg-[rgb(0,0,0,0.5)]"
        >
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            exit={{ transform: "scale(0)" }}
            transition={{ duration: 0.2, ease: "" }}
          >
            <ImSpinner className="animate-spin text-[40px] text-white" />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
