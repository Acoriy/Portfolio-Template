import hero from "../assets/img/hero.png";
import ButtonPage from "../Layouts/ButtonPage";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center   px-5 lg:px-32  bg-backgroundColor text-black dark:bg-[#161616] dark:text-white">
      <div className="flex flex-col space-y-4 items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 ">
        <h1 className="text-5xl font-semibold leading-tight mt-24">
          Im Alex Anderson
          <span className="text-brightColor font-semibold text-5xl"> Front-end </span>
          Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          reprehenderit, quos praesentium iusto earum obcaecati nesciunt.
          Corporis quasi ratione a.
        </p>

          <ButtonPage title={'HIRE ME'}/>
        
      </div>
      <div className="mt-20">
        <img src={hero} width={570} alt="Image"/>
      </div>
    </div>
  );
};

export default Home;
