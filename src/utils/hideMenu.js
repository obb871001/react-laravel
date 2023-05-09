import { useMemo } from "react";
import useDeviceType from "../hook/useDeviceType";
import { useSelector } from "react-redux";

export default function ShouldHideMenu() {
  const deviceType = useDeviceType();
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  return useMemo(() => {
    return deviceType === "PC" && !isMenuOpen;
  }, [isMenuOpen, deviceType]);
}
