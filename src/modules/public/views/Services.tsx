import { SERVICES, STATS } from "core/consts/systemconst";
import { addMetaData } from "core/helpers/seoHelpers";
import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";
import crops from "assets/img/youngCrops.jpg";

const Services = () => {
  return (
    <>
      {addMetaData({
        title: "Deka Farms - Services",
        description:
          "Discover the supplementary offerings at Deka Farms tailored to enhance your agricultural operations. From soil health management and irrigation solutions to pest control services and organic certification assistance, our comprehensive range of additional services is designed to meet your diverse needs. Contact us today to learn more about how Deka Farms can support your farming endeavours and maximize your success.",
      })}

      <section className="bg-service h-[70vh]">
        <div className="h-full w-full bg-black bg-opacity-[.2]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-start justify-center overflow-hidden md:w-4/5">
            <div className="w-full md:w-1/2">
              <h1 className="text-[28px] font-bold uppercase text-white md:text-[42px]">
                Services
              </h1>
              <p className="mb-10 mt-5 text-white">
                At Deka Farms, we're dedicated to providing a diverse range of
                agricultural solutions tailored to meet your unique needs.
              </p>

              <div className="flex items-center text-[14px] uppercase text-white">
                <Link to="/home">Home</Link>
                <ChevronRight className="h-[12px]" />
                <span className="text-brand">Services</span>
              </div>
            </div>
          </div>
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
            From crop cultivation to specialized consulting services, we're here
            to support you every step of the way. Explore our comprehensive
            offerings below and discover how we can help you achieve your
            farming goals.
          </p>
        </header>

        <div className="my-20 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES?.length > 0 &&
            SERVICES?.map((service) => (
              <div
                key={service?.name}
                className="flex gap-5 py-4 hover:cursor-pointer"
              >
                <img
                  src={service?.img}
                  alt={service?.name}
                  className="h-[56px] w-[56px]"
                />
                <div>
                  <p className="mb-2 font-extrabold">{service?.name}</p>
                  <p>{service?.description}</p>
                </div>
              </div>
            ))}
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

      <section className="mx-auto flex h-full w-11/12 flex-col-reverse items-center justify-center gap-5 overflow-hidden md:w-4/5 md:flex-row">
        <div className="w-full md:w-1/2">
          <h5 className="text-[28px] font-black md:text-[42px]">
            Farm <span className="font-thin">Information</span>
          </h5>

          <p className="my-5">
            <span className="font-[500]">
              Deka Farms is your trusted partner for all your agricultural
              needs. With a dedication to sustainable practices and a passion
              for excellence, we offer a wide range of services designed to
              support farmers and enthusiasts at every stage of their journey.
            </span>
            From crop cultivation to livestock rearing and agro-tourism
            experiences, we provide expert guidance and personalized solutions
            to help you achieve success in your farming endeavors.
          </p>

          <p>
            Our team of experienced agronomists and farmers is committed to
            providing top-notch service and support. Whether you're a seasoned
            farmer looking to optimize your operations or a newcomer seeking
            guidance, we're here to help. At Deka Farms, we believe in fostering
            strong relationships with our customers and communities, and we're
            dedicated to making a positive impact on the world around us. Get in
            touch with us today to learn more about how Deka Farms can help you
            grow and thrive.
          </p>
        </div>
        <div className="h-[40vh] w-full overflow-hidden md:h-[60vh] md:w-1/2">
          <img src={crops} alt="" className="-mt-[20vh]" />
        </div>
      </section>
    </>
  );
};

export default Services;
