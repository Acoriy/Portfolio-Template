import EducationCard from "../Layouts/EducationCard";

const Education = () => {
  return (
    <div className="scroll-smooth min-h-screen flex flex-col justify-center bg-backgroundColor lg:px-32 px-5 rounded-md dark:bg-[#161616] dark:text-white">
      <h1 className="text-4xl font-bold tracking-[0.5px] text-center mt-24 lg:mt-16 mb-8 lg:mb-7">
        Education
      </h1>
      <div className=" bg-[#fff] rounded-md">
        <EducationCard title = "Programing cours"/>
        <EducationCard title = "Web developer courses"/>
      </div>
    </div>
  );
};

export default Education;
