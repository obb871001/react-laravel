import Wrapper from "../components/Wrapper";
import Home from "../pages/Home/Home";

export const routes = [
  {
    path: "/",
    label: "home",
    element: <Wrapper children={<Home />} />,
  },
];
