// eslint-disable-next-line react/prop-types
const CardSkils = ({ val, width, title }) => {
  return (
    <div className="mt-6">
      <h1 className="text-lg mb-[-20px]">{title}</h1>
      <div>
        <h3 className="text-end tracking-[0.5px] ">{val}</h3>
        <div className="w-full bg-slate-300 rounded-full">
          <div className={`${width} h-2 bg-brightColor rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkils;
