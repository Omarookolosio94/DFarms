import {
  btn,
  product_box,
  product_box_img,
  product_box_text,
} from "core/consts/styling";
import { addMetaData } from "core/helpers/seoHelpers";
import sackOfWheat from "assets/img/sackOfWheat.png";
import coldGrapes from "assets/img/coldGrapes.jpg";
import vegetables4 from "assets/img/vegetables3.jpg";
import fishery from "assets/img/fishery.jpeg";
import cows from "assets/img/cows.jpg";
import dates from "assets/img/dates.jpg";
import cornFields from "assets/img/cornField.jpg";
import { Link } from "react-router-dom";
import { scrollToSection } from "core/helpers/generalHelpers";
import { SERVICES, STATS } from "core/consts/systemconst";

const Home = () => {
  return (
    <>
      {addMetaData({
        title: "Deka Farms - Home",
        path: "home",
        description:
          "Welcome to Deka Farms, where agriculture meets innovation! At Deka Farms, we pride ourselves on our commitment to sustainable farming practices and providing top- quality products to our customers. From our fertile fields to your table, we strive for excellence in every aspect of our operation  ",
      })}

      <section className="bg-home h-[100vh]">
        <div className="h-full w-full bg-black bg-opacity-[.5]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center overflow-hidden md:w-4/5">
            <div className="w-full md:w-1/2">
              <h1 className="text-center text-[28px] font-bold uppercase text-white md:text-[42px]">
                Deka Farms Nigeria
              </h1>
              <p className="mb-10 mt-5 text-center text-white">
                Welcome to Deka Farms, where agriculture meets innovation! At
                Deka Farms, we pride ourselves on our commitment to sustainable
                farming practices and providing top-quality products to our
                customers. From our fertile fields to your table, we strive for
                excellence in every aspect of our operation
              </p>

              <div className="flex items-center justify-center">
                <button
                  onClick={() => scrollToSection("about-us")}
                  className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase text-white hover:bg-brand`}
                >
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="z-[1000] mt-[-60px] flex w-full items-center justify-center gap-2">
          <div className="h-[80px] w-[4px] rounded-full bg-brand"></div>
          <div className="h-[120px] w-[4px] rounded-full bg-brand"></div>
        </div>
      </section>

      <section
        id="about-us"
        className="mx-auto flex h-full w-11/12 flex-col items-center justify-center overflow-hidden pt-[120px] md:w-4/5"
      >
        <header className="mx-auto w-full text-center md:w-1/2">
          <span className="mr-2 text-[28px] font-bold uppercase md:text-[42px]">
            Special
          </span>
          <span className="text-[28px] font-thin uppercase md:text-[42px]">
            Offers
          </span>
          <p className="mt-5 text-black-shade">
            At Deka Farms, we offer a comprehensive range of agricultural
            services tailored to meet the needs of modern farmers and consumers
            alike. Our services include:
          </p>
        </header>

        <div className="my-20 grid w-full grid-cols-2 gap-3 md:grid-cols-6">
          {SERVICES?.length > 0 &&
            SERVICES?.map((service) => (
              <div
                key={service?.name}
                className="flex flex-col flex-wrap items-center justify-center gap-3 hover:cursor-pointer"
              >
                <img
                  src={service?.img}
                  alt={service?.name}
                  className="h-[60px] w-auto"
                />
                <p className="font-[500]">{service?.name}</p>
              </div>
            ))}
        </div>

        <h5 className="mb-20 w-full text-center text-[28px] font-black uppercase leading-none text-brand md:w-1/2 md:text-[60px]">
          Special Products For Most People
        </h5>

        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <div className="w-full md:w-1/3">
            <h5 className="text-[28px] font-black uppercase leading-none md:text-[42px]">
              About Deka
            </h5>
            <p className="text-[28px] font-thin uppercase leading-none md:text-[42px]">
              Farms, Nigeria
            </p>
            <div className="mt-10 hidden w-1/2 md:block">
              <Link
                to="/about"
                className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase hover:bg-brand`}
              >
                More About
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <img src={sackOfWheat} alt="" />
          </div>

          <div className="w-full text-black-shade md:w-1/3">
            <p>
              At the heart of Deka Farms is our dedicated team of farmers,
              agronomists, and support staff who work tirelessly to bring our
              vision to life.
            </p>
            <p className="mt-2">
              With years of experience and expertise in their respective fields,
              our team is united by a shared passion for farming and a desire to
              make a positive impact on the world around us.
            </p>

            <div className="mx-auto my-8 block w-full text-center md:hidden">
              <Link
                to="/about"
                className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase hover:bg-brand`}
              >
                More About
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-20 flex h-full w-11/12 flex-col items-center justify-center overflow-hidden bg-light-brand py-[60px] md:w-4/5 md:py-[120px]">
        <div className="grid grid-cols-1 content-center gap-5 md:grid-cols-4 md:gap-3">
          {STATS?.length > 0 &&
            STATS?.map((stat) => (
              <div
                key={stat?.name}
                className="flex items-center justify-center gap-3 hover:cursor-pointer"
              >
                <img
                  src={stat?.icon}
                  alt={stat?.name}
                  className="h-[60px] w-auto"
                />
                <div>
                  <p className="text-[28px] font-black leading-none md:text-[42px]">
                    {Number(stat?.stat).toLocaleString("en-US")}
                  </p>
                  <p className="font-extrabold text-[#9b8841]">{stat?.name}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="mx-auto flex h-full w-11/12 flex-col items-center justify-center overflow-hidden md:w-4/5">
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-4">
          <div className="col-span-full flex h-[325px] items-center overflow-hidden lg:col-span-2">
            <div>
              <h5 className="text-[28px] font-black uppercase leading-none md:text-[42px]">
                Deka <span className="font-thin">Products</span>
              </h5>

              <p className="my-5">
                Discover the bounty of Deka Farms with our premium selection of
                fresh, locally grown products. From crisp vegetables to juicy
                fruits, our offerings reflect our commitment to quality and
                sustainability.
              </p>

              <div className="flex justify-start">
                <Link
                  to="/products"
                  className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase hover:bg-brand`}
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>

          <div className={product_box}>
            <img
              src={coldGrapes}
              alt="Fruits"
              className={product_box_img}
              loading="lazy"
            />
            <p className={product_box_text}>Fruits</p>
          </div>

          <div className={product_box}>
            <img
              src={vegetables4}
              alt="Vegetables"
              loading="lazy"
              className={product_box_img}
            />
            <p className={product_box_text}>Vegetables</p>
          </div>

          <div className={product_box}>
            <img
              src={cows}
              alt="Livestocks"
              loading="lazy"
              className={product_box_img}
            />
            <p className={product_box_text}>Livestocks</p>
          </div>

          <div className={product_box}>
            <img
              src={fishery}
              alt="Fishery"
              loading="lazy"
              className={product_box_img}
            />
            <p className={product_box_text}>Fishery</p>
          </div>

          <div className={`${product_box} !bg-black lg:!col-span-2`}>
            <p className={product_box_text}>Over 12 variety of Crops</p>
          </div>

          <div className={`${product_box} lg:!col-span-2 lg:!col-start-2`}>
            <img
              src={cornFields}
              loading="lazy"
              alt="Wheat"
              className={product_box_img}
            />
            <p className={product_box_text}>Wheat</p>
          </div>

          <div className={product_box}>
            <img
              src={dates}
              loading="lazy"
              alt="Spices"
              className={product_box_img}
            />
            <p className={product_box_text}>Spices</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
