import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useDeviceType from "../hook/useDeviceType";
import MenuBar from "../pages/MenuBar/MenuBar";

const Wrapper = ({ children }) => {
  const deviceType = useDeviceType();
  return (
    <main className="md:overflow-x-scroll">
      <Header />
      <section className="sm:py-[80px] py-[60px] max-w-[1344px] w-full lg:min-w-[1280px] mx-auto md:bg-pc-bg">
        <MenuBar />

        {children}
        {deviceType === "PC" || <Footer />}
      </section>
    </main>
  );
};

export default Wrapper;
