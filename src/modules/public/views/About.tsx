import { addMetaData } from "core/helpers/seoHelpers";

const About = () => {
  return (
    <>
      {addMetaData({
        title: "DFarms - About",
        description: ""
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        About
      </div>
    </>
  );
};

export default About;
