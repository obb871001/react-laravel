import { Outlet } from "react-router";
import Wrapper from "../components/Wrapper";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Singin/Signin";
import Promotion from "../pages/Promotion/Promotion";
import ReferCode from "../pages/ReferCode/ReferCode";
import Deposit from "../pages/Deposit/Deposit";
import PromotionDetail from "../pages/Promotion/PromotionDetail";
import BetRecord from "../pages/BetRecord/BetRecord";
import Transaction from "../pages/Transaction/Transaction";
import Inbox from "../pages/Inbox/Inbox";
import InboxDetail from "../pages/Inbox/InboxDetail";
import Rewards from "../pages/Rewards/Rewards";
import Vip from "../pages/Vip/Vip";
import DownloadApp from "../pages/App/DownloadApp";
import Task from "../pages/Task/Task";
import CheckIn from "../pages/CheckIn/CheckIn";

export const common_route = [
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
  {
    path: "deposit",
    label: "deposit",
    element: <Deposit />,
  },
  {
    path: "betRecord",
    label: "betRecord",
    element: <BetRecord />,
  },
  {
    path: "transaction",
    label: "transaction",
    element: <Transaction />,
  },
  {
    path: "inbox",
    label: "inbox",
    element: <Inbox />,
  },
  {
    path: "inbox/:inboxId",
    label: "inbox",
    element: <InboxDetail />,
  },
  {
    path: "promotioncontent",
    label: "promotions",
    element: <PromotionDetail />,
  },
  {
    path: "app",
    label: "app",
    element: <DownloadApp />,
  },
  {
    path: "checkin",
    label: "checkin",
    element: <CheckIn />,
  },
];

export const routes = [
  {
    path: "*",
    label: "home",
    element: (
      <div>
        <Wrapper>
          <Home />
        </Wrapper>
        <Outlet />
      </div>
    ),
  },

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
  },
  {
    path: "/promotion",
    label: "promotions",
    element: (
      <Wrapper>
        <Promotion />
        <Outlet />
      </Wrapper>
    ),
  },
  {
    path: "/refer-code",
    label: "refer-code",
    element: (
      <Wrapper>
        <ReferCode />
        <Outlet />
      </Wrapper>
    ),
  },
  {
    path: "/rewards",
    label: "rewards",
    element: (
      <Wrapper>
        <Rewards />
        <Outlet />
      </Wrapper>
    ),
  },
  {
    path: "/vip",
    label: "vip",
    element: (
      <Wrapper>
        <Vip />
        <Outlet />
      </Wrapper>
    ),
  },
  {
    path: "/task",
    label: "task",
    element: (
      <Wrapper>
        <Task />
        <Outlet />
      </Wrapper>
    ),
  },
];
