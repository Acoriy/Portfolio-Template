import Img1  from '../assets/img/project1.jpg'
import Img2  from '../assets/img/project2.jpg'
import Img3  from '../assets/img/project3.jpg'
import Img4  from '../assets/img/project4.jpg'
import Img5  from '../assets/img/project5.jpg'
import Img6  from '../assets/img/project6.jpg'

const Portfulio = () => {
  return (
   <div className="min-h-screen bg-backgroundColor flex flex-col px-5 lg:px-32">
     <h1 className="text-center font-semibold text-4xl pb-8 pt-24 lg:mb-4 lg:pt-16">
       Portfolio
     </h1>
   {/* <div className='pt-32 lg:pt-0'>
   </div> */}
   <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10 ">
     <div className="w-full lg:w-1/4">
       <img
         src={Img1}
         alt="image"
         className="rounded-md cursor-pointer transform transition-transform hover:scale-110 duration-300 ease-in-out "
       />
     </div>
     <div className="w-full lg:w-1/4">
       <img
         src={Img2}
         alt="image"
         className="rounded-md cursor-pointer transform transition-transform hover:scale-110 duration-300 ease-in-out "
       />
     </div>
     <div className="w-full lg:w-1/4">
       <img
         src={Img3}
         alt="image"
         className=" rounded-md cursor-pointer transform transition-transform hover:scale-110 duration-300 ease-in-out "
       />
     </div>
     <div className="w-full lg:w-1/4">
       <img
         src={Img4}
         alt="image"
         className=" rounded-md cursor-pointer transform transition-transform hover:scale-110 duration-300 ease-in-out "
       />
     </div>
     <div className="w-full lg:w-1/4">
       <img
         src={Img5}
         alt="image"
         className=" rounded-md cursor-pointer transform transition-transform hover:scale-110 duration-300 ease-in-out "
       />
     </div>
     <div className="w-full lg:w-1/4">
       <img
         src={Img6}
         alt="image"
         className=" rounded-md transform transition-transform hover:scale-110 duration-300 ease-in-out "
       />
     </div>
   </div>
 </div>
  )
}

export default Portfulio
