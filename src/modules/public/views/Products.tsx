import { PRODUCTS } from "core/consts/systemconst";
import { addMetaData } from "core/helpers/seoHelpers";
import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      {addMetaData({
        title: "DFarms - Products",
        description:
          "Explore the bountiful selection of fresh and sustainably grown products at Deka Farms. From farm-fresh fruits and vegetables to organic meats and homemade preserves, our diverse range of offerings promises quality and flavour you can trust. Browse our catalog to discover the goodness of Deka Farms delivered straight to your doorstep.",
      })}
      <section className="bg-products h-[70vh]">
        <div className="h-full w-full bg-black bg-opacity-[.1]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-start justify-center overflow-hidden md:w-4/5">
            <div className="w-full md:w-1/2">
              <h1 className="text-[28px] font-bold uppercase text-white md:text-[42px]">
                Products
              </h1>

              <p className="mb-10 mt-5 text-white">
                Indulge in the Harvest of Goodness with Deka Farms! Our
                commitment to excellence shines through in every product we
                offer, from the freshest fruits and vegetables to premium meats
                and homemade preserves. Explore our diverse selection and
                experience the difference that quality and sustainability make
                in every bite.
              </p>

              <div className="flex items-center text-[14px] uppercase text-white">
                <Link to="/home">Home</Link>
                <ChevronRight className="h-[12px]" />
                <span className="text-brand">Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {PRODUCTS?.length > 0 &&
        PRODUCTS?.map((product, index) => (
          <section
            key={product?.title}
            className={`mx-auto my-20 flex h-full w-11/12 items-center justify-center gap-5 overflow-hidden md:w-4/5 ${(index + 1) % 2 > 0 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"}`}
          >
            <div className="w-full md:w-1/2">
              <h5 className="text-[28px] font-black md:text-[42px]">
                {product?.title}
              </h5>

              <p className="my-5">{product?.description}</p>
            </div>
            <div className="flex h-[30vh] w-full items-center overflow-hidden md:h-[50vh] md:w-1/2">
              <img src={product?.imgUrl} alt="" className="-mt-[10vh]" />
            </div>
          </section>
        ))}
      ≈
    </>
  );
};

export default Products;
