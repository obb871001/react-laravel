import { Outlet } from "react-router";
import Wrapper from "../components/Wrapper";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Singin/Signin";
import Promotion from "../pages/Promotion/Promotion";
import ReferCode from "../pages/ReferCode/ReferCode";

export const routes = [
  {
    path: "/",
    label: "home",
    element: (
      <div>
        <Wrapper>
          <Home />
        </Wrapper>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "signup",
        label: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        label: "signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "/promotions",
    label: "promotions",
    element: (
      <Wrapper>
        <Promotion />
      </Wrapper>
    ),
  },
  {
    path: "/refer-code",
    label: "refer-code",
    element: (
      <Wrapper>
        <ReferCode />
      </Wrapper>
    ),
  },
];
