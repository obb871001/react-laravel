import { useState, useEffect } from "react";

const isMobileUserAgent = () => {
  const userAgent =
    typeof window.navigator === "undefined" ? "" : navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
};

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("PC");

  useEffect(() => {
    if (isMobileUserAgent()) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("PC");
    }
  }, []);

  return deviceType;
};

export default useDeviceType;

export const getFixedStyle = (deviceType) => {
  const commonStyle =
    "fixed top-0 left-0 w-full h-full overflow-scroll no-scrollbar z-[9999]";
  const pcStyle =
    "w-[660px] h-[min(865px,70vh)] p-[15px] rounded-xl overflow-scroll no-scrollbar";

  return `${isMobileUserAgent() ? commonStyle : pcStyle}`;
};
