import { useState } from "react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import { common_route, routes } from "./utils/routes";
import LoadingPage from "./components/Loading/LoadingPage";
import { useSelector } from "react-redux";
import ProgressBlock from "./components/ProgressBlock/ProgressBlock";
import OverflowHidden from "./utils/OverflowHidden";
import MenuBar from "./pages/MenuBar/MenuBar";
import useDeviceType from "./hook/useDeviceType";
import ShouldHideMenu from "./utils/hideMenu";

function App() {
  const deviceType = useDeviceType();
  const hideMenu = ShouldHideMenu();

  return (
    <main className="">
      <HashRouter>
        {/* <MenuBar /> */}
        <section
          className={`${
            deviceType === "PC"
              ? hideMenu
                ? "pl-[64px]  w-full"
                : "pl-[320px] w-full"
              : ""
          }`}
        >
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element}>
                  {common_route?.map((child, index) => {
                    return (
                      <Route
                        key={index}
                        path={`${child.path}`}
                        element={
                          <OverflowHidden>{child.element}</OverflowHidden>
                        }
                      />
                    );
                  })}
                </Route>
              );
            })}
          </Routes>
        </section>
      </HashRouter>
      <LoadingPage />
      <ProgressBlock />
    </main>
  );
}

export default App;
