import { FaFacebook, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full bg-[#fff]  flex items-center flex-col lg:flex-row justify-between px-5 lg:px-32 p-5 ">
      <div className="flex flex-row items-center gap-10 pt-3 lg:pt-0">
        <FaInstagram
          size={32}
          className="cursor-pointer hover:text-brightColor transition-all duration-300 ease-in-out"
        />
        <FaFacebook
          size={32}
          className="cursor-pointer hover:text-brightColor transition-all duration-300 ease-in-out"
        />
        <FaLinkedin
          size={32}
          className="cursor-pointer hover:text-brightColor transition-all duration-300 ease-in-out"
        />
        <FaDiscord
          size={32}
          className="cursor-pointer hover:text-brightColor transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-row cursor-pointer items-center mt-5 lg:mt-0">
        <Link to="home" className="text-3xl font-bold">Alex.</Link>
      </div>
      
      <div className="pt-4 pb-3 lg:pb-0">
        @copyright developed by 
        <a href="https://sofyaneacoriy.netlify.app" className="font-bold hover:underline hover:text-brightColor transition-transform duration-500 ease-in-out cursor-pointer" target="_blank"> Sofyane Acoriy </a> | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
