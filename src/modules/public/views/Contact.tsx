import { addMetaData } from "core/helpers/seoHelpers";

const Contact = () => {

  return (
    <>
      {addMetaData({
        title: "DFarms - Contact",
        description: "",
        path: "contact"
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        Contact
      </div>
    </>
  );
};

export default Contact;
