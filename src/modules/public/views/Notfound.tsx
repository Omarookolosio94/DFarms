import { addMetaData } from "core/helpers/seoHelpers";

const Notfound = () => {
  return (
    <>
      {addMetaData({
        title: "DFarms - Notfound",
        description: "",
        path: "notfound"
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        Notfound
      </div>
    </>
  );
};

export default Notfound;
