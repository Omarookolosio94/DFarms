import logoImg from "assets/img/logo.png";
import { active_link, main_link } from "core/consts/styling";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#ffffff] text-black">
        <div className="mx-auto w-11/12 pt-[75px] md:w-4/5">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-10">
            <div className="w-full text-center md:w-1/3 md:text-start">
              <Link
                to="/home"
                className="mb-5 flex items-center justify-center gap-1 md:justify-start"
              >
                <img
                  src={logoImg}
                  alt="DFarms"
                  loading="lazy"
                  className="w-[80px]"
                />
              </Link>
              <p className="text-[12px]">
                Explore our website to learn more about our range of services,
                discover our diverse product offerings, and get to know the
                passionate team behind Deka Farms. Whether you're a seasoned
                farmer, a food enthusiast, or someone who simply appreciates the
                goodness of fresh produce, you've come to the right place.
              </p>
            </div>

            <div className="">
              <div className="flex flex-col items-center gap-2 text-[12px] md:items-end md:gap-5">
                <h1 className="uppercase text-black-shade">Contact</h1>
                <p>Deka Farms Nigeria</p>

                <a
                  href="mailto:oceanglobalchems@gmail.com"
                  className="hover:underline"
                >
                  contact@dekafarms.com
                </a>

                <a href="tel:+" className="hover:underline">
                  +234 701 900 0000
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto flex flex-col items-center justify-between gap-3 py-[40px] text-[12px] text-black-shade md:flex-row">
              <p>Deka Farms. All rights reserved.</p>
              <div className="flex gap-10">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? `${active_link} !text-black`
                      : `${main_link} !text-black`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? `${active_link} !text-black`
                      : `${main_link} !text-black`
                  }
                >
                  Services
                </NavLink>

                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? `${active_link} !text-black`
                      : `${main_link} !text-black`
                  }
                >
                  Products
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `${active_link} !text-black`
                      : `${main_link} !text-black`
                  }
                >
                  About
                </NavLink>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
