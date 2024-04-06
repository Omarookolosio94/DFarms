import { addMetaData } from "core/helpers/seoHelpers";
import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";
import sackOfWheat from "assets/img/sackOfWheat.png";
import { btn } from "core/consts/styling";
import { ABOUT_INFO } from "core/consts/dFarms";
import { STATS } from "core/consts/systemconst";

const About = () => {
  return (
    <>
      {addMetaData({
        title: "DFarms - About",
        description:
          "Discover the story behind Deka Farms, where innovation, sustainability, and a passion for agriculture converge. Learn about our dedicated team and our commitment to creating real value through sustainable practices and innovative solutions. Join us on our journey to transform the agricultural landscape and create a better, more sustainable future for farming.",
      })}

      <section className="bg-about h-[70vh]">
        <div className="h-full w-full bg-black bg-opacity-[.6]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-start justify-center overflow-hidden md:w-4/5">
            <div className="w-full md:w-1/2">
              <h1 className="text-[28px] font-bold uppercase leading-none text-white md:text-[42px]">
                <span className="font-thin">About</span>
                <br /> Company
              </h1>
              <p className="mb-10 mt-5 text-white">
                At Deka Farms, we're more than just a farm - we're a community
                dedicated to cultivating goodness and nourishing the land.
              </p>

              <div className="flex items-center text-[14px] uppercase text-white">
                <Link to="/home">Home</Link>
                <ChevronRight className="h-[12px]" />
                <span className="text-brand">About</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-20 flex h-full w-11/12 flex-col items-center justify-center gap-5 overflow-hidden md:w-4/5 md:flex-row">
        <div className="w-full md:w-1/2">
          <h5 className="text-[28px] font-black uppercase leading-none md:text-[42px]">
            Welcome to Deka Farms: <br />
            <span className="font-thin">
              Where Agriculture Meets Innovation
            </span>
          </h5>

          <p className="my-5">
            At Deka Farms, we're not just an agriculture farm - we're a team
            dedicated to creating value through sustainable practices,
            innovation, and a passion for agriculture. Just like you, we believe
            in the power of strategy, storytelling, and digital products to
            transform brands and create meaningful experiences.
          </p>
          <p className="my-5">
            Our team is comprised of individuals with a diverse range of talents
            and expertise. From farmers and agronomists to web developers and
            creatives, we come together to do something truly special. Whether
            we're tending to our crops, crafting beautiful websites, or
            developing innovative agricultural solutions, our goal is always the
            same: to create things of real value.
          </p>
          <p className="my-5">
            At Deka Farms, sustainability is at the heart of everything we do.
            We believe in farming in harmony with nature, using practices that
            promote soil health, biodiversity, and ecosystem resilience. From
            our fields to your table, we're committed to delivering the highest
            quality produce while minimizing our environmental impact.
          </p>

          <div className="my-10 w-full md:w-1/2">
            <a
              href={`mailto:${ABOUT_INFO?.contact?.Email}`}
              className={`${btn} rounded-full border-2 border-brand bg-transparent !px-12 !py-3 uppercase hover:bg-brand`}
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src={sackOfWheat} alt="" />
        </div>
      </section>

      <section className="mx-auto my-20 flex h-full w-11/12 flex-col items-center justify-center overflow-hidden py-[60px] md:w-4/5 md:py-[120px]">
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
    </>
  );
};

export default About;
