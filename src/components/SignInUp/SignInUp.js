import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { Button } from "semantic-ui-react";
import { openSignin, openSignup } from "../../redux/action/action";

const SignInUp = ({}) => {
  const dispatch = useDispatch();
  const isSign = useSelector((state) => state.isSignupTrigger);

  return (
    <section className="flex gap-[5px]">
      <Button
        content="SIGNIN"
        onClick={() => {
          dispatch(openSignin());
        }}
        className={`${
          isSign === "signin"
            ? "!bg-main-color !text-second-color"
            : "!bg-third-color !text-white"
        }`}
      />
      <Button
        content="SIGNUP"
        onClick={() => dispatch(openSignup())}
        className={`${
          isSign === "signup"
            ? "!bg-main-color !text-second-color"
            : "!bg-third-color !text-white"
        }`}
      />
    </section>
  );
};

export default SignInUp;
