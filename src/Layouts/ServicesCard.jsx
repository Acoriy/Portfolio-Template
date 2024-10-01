/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const ServicesCard = (props) => {
  return (
    <div className="flex flex-col items-center w-full lg:w-1/4 py-5 gap-4 bg-white hover:bg-[#111] hover:text-white hover:-translate-y-2 transition-all ease-in-out cursor-pointer rounded-md">
        <div className="text-center">
            <span>{props.icon}</span>
        </div>
        <h1 className="text-xl font-semibold ">{props.title}</h1>
        <p>blog, e-commerce</p>
    </div>
  )
}

export default ServicesCard
