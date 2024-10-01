import Img1 from "../assets/img/project1.jpg";
import Img2 from "../assets/img/project2.jpg";
import Img3 from "../assets/img/project3.jpg";
import Img4 from "../assets/img/project4.jpg";
import Img5 from "../assets/img/project5.jpg";
import Img6 from "../assets/img/project6.jpg";

const PortfulioTeste = () => {
  return (
    <div className="min-h-screen bg-backgroundColor px-5 lg:px-32 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center tracking-[0.5px]  lg:pt-24 pt-16 pb-8 lg:mb-7">Portfulio</h1>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 ">
        <div className="w-full lg:w-1/4">
          <img className="cursor-pointer rounded-md  hover:scale-110 transform transition-transform duration-300 ease-in-out"
            src={Img1} alt="image" />
        </div>
        <div className="w-full lg:w-1/4">
          <img className="cursor-pointer rounded-md  hover:scale-110 transform transition-transform duration-300 ease-in-out" 
           src={Img2} alt="image" />
        </div>
        <div className="w-full lg:w-1/4">
          <img className="cursor-pointer rounded-md  hover:scale-110 transform transition-transform duration-300 ease-in-out"
           src={Img3} alt="image" />
        </div>
        <div className="w-full lg:w-1/4">
          <img className="cursor-pointer rounded-md  hover:scale-110 transform transition-transform duration-300 ease-in-out"
           src={Img4} alt="image" />
        </div>
        <div className="w-full lg:w-1/4">
          <img className="cursor-pointer rounded-md  hover:scale-110 transform transition-transform duration-300 ease-in-out"
           src={Img5} alt="image" />
        </div>
        <div className="w-full lg:w-1/4">
          <img className="cursor-pointer rounded-md  hover:scale-110 transform transition-transform duration-300 ease-in-out"
           src={Img6} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default PortfulioTeste;
