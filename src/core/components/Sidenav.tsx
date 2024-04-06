import React from "react";
import { activeSidenavLink, sidenavLink } from "core/consts/styling";
import { NavLink } from "react-router-dom";
import { XCircle } from "react-feather";

const Sidenav = ({
  close,
  isOpen = false,
}: {
  close?: any;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`fixed h-full w-full bg-[#24292c] transition-all duration-500 ease-in-out ${
        isOpen ? "-left-0" : "-left-[100vw]"
      }`}
      style={{
        zIndex: 1000,
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-[.8]">
        <nav className="relative mx-auto flex h-[80vh] w-11/12 items-center justify-between md:w-4/5">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <NavLink
              to="/home"
              onClick={() => close()}
              className={({ isActive }) =>
                isActive ? activeSidenavLink : sidenavLink
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => close()}
              className={({ isActive }) =>
                isActive ? activeSidenavLink : sidenavLink
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => close()}
              className={({ isActive }) =>
                isActive ? activeSidenavLink : sidenavLink
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => close()}
              className={({ isActive }) =>
                isActive ? activeSidenavLink : sidenavLink
              }
            >
              About
            </NavLink>

          </div>
          <div
            className="absolute right-[30px] top-[30px] text-white"
            onClick={() => close()}
          >
            <XCircle  />
          </div>
        </nav>
        <div>
          <p className="text-center font-ui-sans text-xs  text-black-shade">
            Deka Farms. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
