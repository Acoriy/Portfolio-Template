import EducationCard from "../Layouts/EducationCard";

const Expiriences = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor dark:bg-[#161616] dark:text-white ">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        Work History
      </h1>

      <div className=" bg-white  rounded-md">
        <EducationCard title="Lead Web Designer" />
        <EducationCard title="Junior Web Designer" />
      </div>
    </div>
  );
};

export default Expiriences;
