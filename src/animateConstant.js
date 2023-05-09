export const popUpVariant = {
  initial: { y: "20%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  exit: { opacity: 0 },
};

export const animatePage = {
  visible: { x: 0, opacity: 1 },
  hiddenRight: { x: -100, opacity: 0 },
  hiddenLeft: { x: 100, opacity: 0 },
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const animatePageNotOpacity = {
  visible: { x: 0 },
  hiddenRight: { x: -100 },
  hiddenLeft: { x: 100 },
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const commonOpacity = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: "easeInOut" },
};
