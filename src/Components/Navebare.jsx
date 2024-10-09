import { Link } from "react-scroll";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import DarkMode from "../Layouts/DarkMode";

const Navebare = () => {
    const [isOpen , setIsOpen] = useState(false);

    const handleChange = ()=>{
        setIsOpen(!isOpen)
    }


    const CloseMenu = ()=>{
        setIsOpen(false);
    }

  return (
    <div className="fixed z-[10]  w-full  bg-white dark:bg-black dark:text-white">
       <div>
        <div className="lg:px-32 px-5 flex flex-row items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:shadow-[gray_0px_3px_8px] py-5 ">
            {/* logo */}
            <div>
               <Link to="home" className=" text-3xl font-bold cursor-pointer leading-tight "> Alex. </Link>
            </div>
           
            
            {/* Navebare */}
            <nav className="hidden lg:flex flex-row  gap-8">
                <Link to="home" spy={true} smooth={true} duration={500} className="text-xl font-semibold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out">Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="text-xl font-semibold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out">About Me</Link>
                <Link to="services" spy={true} smooth={true} duration={500} className="text-xl font-semibold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out">Services</Link>
                <Link to="education" spy={true} smooth={true} duration={500} className="text-xl font-semibold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out">Education</Link>
                <Link to="experences" spy={true} smooth={true} duration={500} className="text-xl font-semibold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out">Experience</Link>
                <Link to="portfulio" spy={true} smooth={true} duration={500} className="text-xl font-semibold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out">Portfulio</Link>
                <DarkMode/>
            </nav>
             {/* Icons */}
             <div className=" lg:hidden cursor-pointer ">
                {isOpen? (<AiOutlineClose size={35} onClick={handleChange}/>)
                  : (<HiOutlineMenuAlt1 size={35} onClick={handleChange}/>)
                }
            </div>
        </div>
        {/* navebare mobile  */}
        <nav className={`${isOpen? "translate-x-0" : "-translate-x-full"} lg:hidden bg-[#36454F] text-white font-semibold text-center w-full h-fit z-10 flex flex-col absolute left-0 top-20 pt-8 pb-6 gap-8 transition-transform duration-500 ease-in-out`}>
                <DarkMode/>
                <Link to="home" spy={true} smooth={true} duration={500} className="text-2xl font-bold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out" onClick={CloseMenu}>Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="text-2xl font-bold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out" onClick={CloseMenu}>About Me</Link>
                <Link to="services" spy={true} smooth={true} duration={500} className="text-2xl font-bold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out" onClick={CloseMenu}>Services</Link>
                <Link to="education" spy={true} smooth={true} duration={500} className="text-2xl font-bold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out" onClick={CloseMenu}>Education</Link>
                <Link to="experences" spy={true} smooth={true} duration={500} className="text-2xl font-bold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out" onClick={CloseMenu}>Experience</Link>
                <Link to="portfulio" spy={true} smooth={true} duration={500} className="text-2xl font-bold cursor-pointer hover:text-brightColor transition-colors duration-300 ease-in-out" onClick={CloseMenu}>Portfulio</Link>
            </nav>
       </div>
    </div>
  )
}

export default Navebare
