import { HashRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home/Home";
import { routes } from "./utils/routes";
import Signup from "./pages/Signup/Signup";
import { useState } from "react";
import Signin from "./pages/Singin/Signin";

function App() {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <main className="">
      <HashRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
          <Route
            path="*"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
        </Routes>
        <Signin />
        <Signup />
      </HashRouter>
    </main>
  );
}

export default App;
