import { BsAndroid, BsWordpress } from "react-icons/bs";
import ServicesCard from "../Layouts/ServicesCard"
import { BiCodeAlt } from "react-icons/bi";
import { GrApple } from "react-icons/gr";
import { AiOutlineCodepen } from "react-icons/ai";
import { PiGameController } from "react-icons/pi";

const Services = () => {
  const icon1 = <BiCodeAlt size={55} className="text-brightColor"/>
  const icon2 = <BsAndroid size={55} className="text-brightColor"/>
  const icon3 = <GrApple size={55} className="text-brightColor"/>
  const icon4 = <AiOutlineCodepen size={55} className="text-brightColor"/>
  const icon5 = <PiGameController size={55} className="text-brightColor"/>
  const icon6 = <BsWordpress size={55} className="text-brightColor"/>
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-backgroundColor lg:px-32 px-5 pt-32">
       <div>
          <h1 className="text-center text-4xl font-bold mb-8">Services</h1>
          <div className="flex flex-wrap justify-center items-center mt-4 gap-5">
             <ServicesCard icon ={icon1} title = {"Web Devlopment"}/>
             <ServicesCard icon ={icon2} title = {"App Devlopment"}/>
             <ServicesCard icon ={icon3} title = {"Ios Devlopment"}/>
             <ServicesCard icon ={icon4} title = {"Freelancing"}/>
             <ServicesCard icon ={icon5} title = {"Game Devlopment"}/>
             <ServicesCard icon ={icon6} title = {"Wordpress"}/>
          </div>
       </div>
    </div>
  )
}

export default Services
