import { btn } from "core/consts/styling";
import { addMetaData } from "core/helpers/seoHelpers";

const Home = () => {
  return (
    <>
      {addMetaData({
        title: "DFarms - Home",
        description: "",
      })}

      <section className="bg-home h-[100vh]">
        <div className=" h-full w-full bg-black bg-opacity-[.6]">
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

      <section>
       
      </section>
    </>
  );
};

export default Home;
