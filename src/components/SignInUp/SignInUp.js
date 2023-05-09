import { useLocation, useNavigate } from "react-router";

import { Button } from "semantic-ui-react";

const SignInUp = ({ Static }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  return (
    <section className="flex gap-[5px]">
      <Button
        content="SIGNIN"
        onClick={() => {
          navigate("/signin");
        }}
        className={`${
          Static
            ? "!bg-third-color !text-white"
            : location.pathname === "/signin"
            ? "!bg-main-color !text-second-color"
            : "!bg-third-color !text-white"
        }`}
      />
      <Button
        content="SIGNUP"
        onClick={() => {
          navigate("/signup");
        }}
        className={`${
          Static
            ? "!bg-main-color !text-second-color"
            : location.pathname === "/signup"
            ? "!bg-main-color !text-second-color"
            : "!bg-third-color !text-white"
        }`}
      />
    </section>
  );
};

export default SignInUp;
