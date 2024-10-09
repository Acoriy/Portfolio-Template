import Img1  from '../assets/img/project1.jpg'
import Img2  from '../assets/img/project2.jpg'
import Img3  from '../assets/img/project3.jpg'
import Img4  from '../assets/img/project4.jpg'
import Img5  from '../assets/img/project5.jpg'
import Img6  from '../assets/img/project6.jpg'

const Portfulio = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor dark:bg-[#161616] dark:text-white">
    <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">
      Portfolio
    </h1>

    <div className=" flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
      <div className=" w-full lg:w-1/4">
        <img
          className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          src={Img1}
          alt="img"
        />
      </div>
      <div className=" w-full lg:w-1/4">
        <img
          className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          src={Img2}
          alt="img"
        />
      </div>
      <div className=" w-full lg:w-1/4">
        <img
          className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          src={Img3}
          alt="img"
        />
      </div>
      <div className=" w-full lg:w-1/4">
        <img
          className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          src={Img4}
          alt="img"
        />
      </div>
      <div className=" w-full lg:w-1/4">
        <img
          className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          src={Img5}
          alt="img"
        />
      </div>
      <div className=" w-full lg:w-1/4">
        <img
          className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          src={Img6}
          alt="img"
        />
      </div>
    </div>
  </div>
  )
}

export default Portfulio
