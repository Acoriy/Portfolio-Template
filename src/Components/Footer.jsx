import { FaFacebook, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="absolut bottom-0 left-0 bg-white w-full flex flex-col px-5 lg:px-32 py-5 pt-3 border border-t-1 border-l-0 dark:border-t-brightColor dark:bg-[#161616] dark:text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex flex-row items-center justify-center gap-10">
          <FaInstagram size={35} className="cursor-pointer hover:text-brightColor transition-transform duration-300 ease-in-out" />
          <FaFacebook size={35} className="cursor-pointer hover:text-brightColor transition-transform duration-300 ease-in-out" />
          <FaLinkedin size={35} className="cursor-pointer hover:text-brightColor transition-transform duration-300 ease-in-out" />
          <FaDiscord size={35} className="cursor-pointer hover:text-brightColor transition-transform duration-300 ease-in-out" />
        </div>
        <Link to="home" className="text-3xl font-bold text-center cursor-pointer">Alex.</Link>
      </div>
      <div className="w-full text-center  lg:text-lg pt-5">@copyright developed by <a href="https://sofyaneacoriy.netlify.app" className="text-brightColor font-bold hover:underline cursor-pointer" target="_blank">Sofyane Acoriy</a> | All rights reserved</div>
    </div>
  );
};

export default Footer;
