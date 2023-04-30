import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <main className="py-[60px]">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Wrapper;
