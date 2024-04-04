import { btn } from "core/consts/styling";
import { addMetaData } from "core/helpers/seoHelpers";
import cowHead from "assets/img/cowhead.png";
import tillage from "assets/img/tillage.png";
import fruits from "assets/img/fruits.png";
import vegetables from "assets/img/vegetables.png";
import tractor from "assets/img/tractor.png";
import wheats from "assets/img/sackOfWheat.png";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      name: "Farm Livestock",
      img: cowHead,
    },
    {
      name: "Garden Tillage",
      img: tillage,
    },
    {
      name: "Fresh Fruits",
      img: fruits,
    },
    {
      name: "Vegetables",
      img: vegetables,
    },
    {
      name: "Agro Machinery",
      img: tractor,
    },
  ];

  return (
    <>
      {addMetaData({
        title: "DFarms - Home",
        description: "",
      })}

      <section className="bg-home h-[100vh]">
        <div className="h-full w-full bg-black bg-opacity-[.6]">
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
                  className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase text-white`}
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

      <section className="mx-auto flex h-full w-11/12 flex-col items-center justify-center overflow-hidden pt-[120px] md:w-4/5">
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

        <div className="my-20 grid w-full grid-cols-2 gap-3 md:grid-cols-5">
          {services?.length > 0 &&
            services?.map((service) => (
              <div
                key={service?.name}
                className="hover:cursor-pointer660  flex flex-col flex-wrap items-center justify-center gap-3"
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
                className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase`}
              >
                More About
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <img src={wheats} alt="" />
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

            <div className="my-8 w-1/2 mx-auto block text-center md:hidden">
              <Link
                to="/about"
                className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase`}
              >
                More About
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
