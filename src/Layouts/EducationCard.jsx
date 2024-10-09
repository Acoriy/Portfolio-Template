// eslint-disable-next-line react/prop-types
const EducationCard = ({ title }) => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 py-4 dark:bg-black dark:text-white p-5">
      <div className="w-full lg:w-2/4 ">
        <h2 className="text-lg font-bold ">{title}</h2>
        <div className="mt-2">
          <p>Student</p>
          <p>Jan 1016 - Dec 2021</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mt-2 lg:mt-0">
          Certificate of web training
        </h2>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor incidunt quo, nulla dolore molestiae esse animi hic, placeat
          velit omnis quasi officia suscipit. Natus dignissimos reiciendis ut
          assumenda corrupti?
        </p>
        <div className="bg-slate-500 w-full h-0.5 mt-2 "></div>
      </div>
    </div>
  );
};

export default EducationCard;
