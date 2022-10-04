import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = ({ text, path }) => {
  return (
    <div className="py-4 bg-pink-600 text-white">
      <div className="container mx-auto lg:w-8/12 md:w-10/12 w-11/12 flex justify-between items-center">
        <div className="w-fullr">
          <span className="text-3xl font-bold">QKConverter</span>
        </div>
        <div className="w-full text-end">
          <NavLink to={path}>
            <button className="border px-6 py-4 hover:bg-white hover:text-black rounded-sm duration-500">
              {text}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
