import { addMetaData } from "core/helpers/seoHelpers";

const Services = () => {

  return (
    <>
      {addMetaData({
        title: "DFarms - Services",
        description: ""
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        Services
      </div>
    </>
  );
};

export default Services;
