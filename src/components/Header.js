import { Button } from "semantic-ui-react";
import { stylesConfig } from "../helpers/stylesConfig";
import SignInUp from "./SignInUp/SignInUp";
import useDeviceType from "../hook/useDeviceType";
import { useNavigate } from "react-router";

const Header = () => {
  const deviceType = useDeviceType();

  const navigate = useNavigate();

  return (
    <header
      className={`${
        deviceType === "PC" ? "w-full" : "w-full"
      } sm:h-[80px] h-[60px] fixed top-0 right bg-second-color z-[999] header-shadow flex items-center justify-between`}
    >
      <section className="flex items-center justify-between px-common-padding-x w-full sm:max-w-[1344px] sm:mx-auto h-full">
        <p className="text-white cursor-pointer" onClick={() => navigate("/")}>
          LOGO
        </p>
        <SignInUp Static />

        {/* <img src={stylesConfig.mainLogo} className="object-cover w-[100px]" /> */}
      </section>
    </header>
  );
};

export default Header;
