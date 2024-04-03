import { addMetaData } from "core/helpers/seoHelpers";

const SingleProduct = () => {

  return (
    <>
      {addMetaData({
        title: "DFarms - SingleProduct",
        description: ""
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        SingleProduct
      </div>
    </>
  );
};

export default SingleProduct;
