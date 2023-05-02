import { useState } from "react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import { routes } from "./utils/routes";
import LoadingPage from "./components/Loading/LoadingPage";
import { useSelector } from "react-redux";
import ProgressBlock from "./components/ProgressBlock/ProgressBlock";

function App() {
  return (
    <main className="">
      <HashRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element}>
                {route.children?.map((child, index) => {
                  return (
                    <Route
                      key={index}
                      path={child.path}
                      element={child.element}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Routes>
      </HashRouter>
      <LoadingPage />
      <ProgressBlock />
    </main>
  );
}

export default App;
