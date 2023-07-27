import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../Logo";
import { CartWidget, MenuIcon } from "../Icons";
import NavMobile from "./NavMobile";

const NavBar = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <div className="fixed  block top-0 w-full shadow-md z-50 bg-gray-50">
      <div className="relative flex items-center px-4 py-4">
        <Link onClick={() => setDisplay("hidden")} to="/">
          <Logo />
        </Link>

        <div className="flex items-center ml-4 lg:ml-8 space-x-4 text-md tracking-normal font-normal">
          <div className="hidden xl:block space-x-6 ">
            <Link
              to="/category/interior"
              
            >
              Interior
            </Link>
            <Link
              to="/category/exterior"
              
            >
              Exterior
            </Link>
            <Link
              to="/category/contacto"
           
            >
              Contacto
            </Link>
          </div>
          <Link to="/cart" className="absolute right-14">
            <CartWidget />
          </Link>

          <div className="absolute right-4 xl:hidden">
            <div
              onClick={() =>
                display === "hidden"
                  ? setDisplay("block")
                  : setDisplay("hidden")
              }
            >
              <MenuIcon display={display} />
            </div>
          </div>
          <NavMobile display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
