import { addMetaData } from "core/helpers/seoHelpers";

const Products = () => {

  return (
    <>
      {addMetaData({
        title: "DFarms - Products",
        description: ""
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        Products
      </div>
    </>
  );
};

export default Products;
