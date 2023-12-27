import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start   lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">
          <li>
            <Link
              to="/"
              className=" text-black  py-2 px-3  w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              studentForm
            </Link>
          </li>

          <li>
            <Link
              to="/allStudent"
              className=" text-black  py-2 px-3  w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              AllStudent
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
