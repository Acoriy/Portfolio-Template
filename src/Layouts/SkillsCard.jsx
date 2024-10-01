/* eslint-disable react/prop-types */
const SkillsCard = ({title , val , width}) => {
  return (
    <div>
       <h1 className="text-xl tracking-[0.5px]">{title}</h1>
       <div>
          <h3 className="text-end">{val}</h3>
          <div className="w-full h-2 bg-slate-300 rounded-full">
             <div className={`${width} h-2 bg-brightColor rounded-full`}></div>
          </div>
       </div>
    </div>
  )
}

export default SkillsCard
