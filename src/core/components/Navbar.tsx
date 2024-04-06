import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "assets/img/logo.png";
import { Menu } from "react-feather";
import Sidenav from "./Sidenav";
import { active_link, main_link } from "core/consts/styling";
import { ABOUT_INFO } from "core/consts/dFarms";

const Navbar = ({ showLinks = true }: { showLinks?: boolean }) => {
  const [showSidenav, setSidenav] = useState(false);

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 bg-black bg-opacity-10 backdrop-blur-sm backdrop-filter
        `}
        style={{
          zIndex: 600,
        }}
      >
        <nav className="mx-auto my-1 flex w-11/12 items-center justify-between py-5 md:w-4/5">
          <Link to="/home" className="flex items-center gap-1">
            <img
              src={logoImg}
              alt="dfarms"
              loading="lazy"
              className="w-[80px]"
            />
          </Link>

          <div className="hidden items-center justify-between gap-5 sm:flex lg:gap-10">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? active_link : main_link)}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? active_link : main_link)}
            >
              Services
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? active_link : main_link)}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? active_link : main_link)}
            >
              About
            </NavLink>

            <a
              href={`mailto:${ABOUT_INFO?.contact?.Email}`}
              className="rounded-full bg-brand px-8 py-3 uppercase text-white"
            >
              Get In Touch
            </a>
          </div>
          <button
            className="ml-2 block sm:hidden"
            onClick={() => setSidenav(!showSidenav)}
          >
            <Menu className="text-white" />
          </button>
        </nav>
      </div>

      <Sidenav isOpen={showSidenav} close={() => setSidenav(false)} />
    </>
  );
};

export default Navbar;
