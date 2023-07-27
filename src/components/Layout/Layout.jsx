import React from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Banner />
      <main className="block bg-gray-100 pt-14 mb-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
