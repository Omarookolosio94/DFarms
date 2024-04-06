import logoImg from "assets/img/logo.png";
import { ABOUT_INFO } from "core/consts/dFarms";
import { active_link, btn, main_link } from "core/consts/styling";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="mt-20 bg-black py-40">
        <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center overflow-hidden text-white md:w-4/5">
          <h5 className="text-[28px] font-black uppercase md:text-[42px]">
            Get <span className="font-thin">In Touch</span>
          </h5>
          <p className="my-5 text-center">
            Reach out and let's grow together! Get in touch with Deka Farms
            today.
          </p>

          <div className="mt-10 w-full md:w-1/2">
            <a
              href={`mailto:${ABOUT_INFO?.contact?.Email}`}
              className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase hover:bg-brand`}
            >
              Send us a Message
            </a>
          </div>
        </div>
      </section>
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
                <p>{ABOUT_INFO?.contact?.Location}</p>

                <a
                  href={`mailto:${ABOUT_INFO?.contact?.Email}`}
                  className="hover:underline"
                >
                  {ABOUT_INFO?.contact?.Email}
                </a>

                <a
                  href={`tel:${ABOUT_INFO?.contact?.Phone}`}
                  className="hover:underline"
                >
                  {ABOUT_INFO?.contact?.Phone}
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
