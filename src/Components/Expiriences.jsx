import EducationCard from '../Layouts/EducationCard';

const Expiriences = () => {
  return (  
    <div className="bg-backgroundColor min-h-screen flex flex-col justify-center  px-5 lg:px-32 scroll-smooth">
       <h1 className="text-4xl font-bold text-center mt-24 tracking-[0.5px] mb-8 lg:mb-7">Work History</h1>
       <div className="bg-white rounded-md p-5 ">
          <EducationCard title={"Lead Web Designer"}/>
          <EducationCard title={"Junior Web Designer"}/>
       </div>
    </div>
  )
}

export default Expiriences
