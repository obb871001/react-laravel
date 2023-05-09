import React, { useEffect } from "react";
import useDeviceType from "../hook/useDeviceType";
import PopWindow from "./PopWindow";

const OverflowHidden = ({ children }) => {
  const deviceType = useDeviceType();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [children]);
  return (
    <section>
      {deviceType === "PC" ? <PopWindow>{children}</PopWindow> : children}
    </section>
  );
};

export default OverflowHidden;
