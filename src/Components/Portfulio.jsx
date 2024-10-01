import Img1  from '../assets/img/project1.jpg'
import Img2  from '../assets/img/project2.jpg'
import Img3  from '../assets/img/project3.jpg'
import Img4  from '../assets/img/project4.jpg'
import Img5  from '../assets/img/project5.jpg'
import Img6  from '../assets/img/project6.jpg'

const Portfulio = () => {
  return (
    <div className='bg-backgroundColor min-h-screen flex flex-col justify-center items-center px-5 lg:px-32'>
       <h1 className='text-4xl font-bold text-center pt-24 lg:pt-16 pb-8 lg:mb-4 tracking-[0.5px]'>Portfulio</h1>
       <div className='flex felx-col lg:flex-row  flex-wrap gap-10 items-center justify-center '>
         <div className='w-full lg:w-1/4 '>
            <img className='hover:scale-110 transform transition-transform duration-300  cursor-pointer rounded-md'
             src={Img1}  alt="Image" />
         </div>
         <div className='w-full lg:w-1/4'>
            <img className='hover:scale-110 transform transition-transform duration-300  cursor-pointer rounded-md'
             src={Img2} alt="Image2" />
         </div>
         <div className='w-full lg:w-1/4'>
            <img className='hover:scale-110 transform transition-transform duration-300  cursor-pointer rounded-md'
            src={Img3} alt="Image3" />
         </div>
         <div className='w-full lg:w-1/4'>
            <img className='hover:scale-110 transform transition-transform duration-300  cursor-pointer rounded-md'
             src={Img4} alt="Image4" />
         </div>
         <div className='w-full lg:w-1/4'>
            <img  className='hover:scale-110 transform transition-transform duration-300  cursor-pointer rounded-md'
            src={Img5} alt="Image5" />
         </div>
         <div className='w-full lg:w-1/4'>
            <img className='hover:scale-110 transform transition-transform duration-300  cursor-pointer rounded-md' 
             src={Img6} alt="Image6" />
         </div>
       </div>
    </div>
  )
}

export default Portfulio
