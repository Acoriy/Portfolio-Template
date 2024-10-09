import LightPng from "../assets/img/sun.png";
import DarkPng from "../assets/img/moon.png";
// import { FaMoon , FaSun} from "react-icons/fa";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  };

  return <div className=" flex justify-start items-start pl-5 lg:justify-center lg:items-center  ">
     <img src={theme === "light" ? DarkPng : LightPng } 
     alt={theme === "light" ? "DarkPng" :"LightPng"}
     onClick={changeTheme} 
     className="w-10 lg:w-7 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
     />
  </div>;
};

export default DarkMode;
