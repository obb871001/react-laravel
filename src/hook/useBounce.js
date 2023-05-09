import { useAnimation } from "framer-motion";

const useBounceAnimation = (shouldAnimate) => {
  const controls = useAnimation();

  const triggerBounce = async () => {
    // if (!shouldAnimate) return;
    await controls.start({
      scale: 1.2,
      y: -10,
      transition: { duration: 0.2, type: "spring", stiffness: 300 },
    });
    controls.start({
      scale: 1,
      y: 0,
      transition: { duration: 0.2, type: "spring", stiffness: 300 },
    });
  };

  return [controls, triggerBounce];
};

export default useBounceAnimation;
