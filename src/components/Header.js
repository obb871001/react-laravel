import { Button } from "semantic-ui-react";
import { stylesConfig } from "../helpers/stylesConfig";
import SignInUp from "./SignInUp/SignInUp";

const Header = () => {
  return (
    <header className="h-[60px] w-full fixed top-0 left-0 flex items-center justify-between px-common-padding-x z-[999] bg-second-color">
      {/* <img src={stylesConfig.mainLogo} className="object-cover w-[100px]" /> */}
      <p className="text-white">LOGO</p>
      <SignInUp Static />
    </header>
  );
};

export default Header;
