// import SkillsCard from "../Layouts/SkillsCard";

import CardSkils from "../Layouts/CardSkils";

const About = () => {
  // const skill1 = "w-11/12";
  // const skill2 = "w-4/5";
  // const skill3 = "w-2/3";

  const skill1 = "w-11/12";
  const skill2 = "w-4/5";
  const skill3 = "w-2/3";

  return (
    <div className="min-h-screen bg-backgroundColor lg:px-32 px-5 pt-32 !scroll-smooth">
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <div className="space-y-3 w-full pt-16">
        <h1 className="text-4xl font-semibold">Im Alex Anderson</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit officia quod sint consequuntur cupiditate sed iste
          impedit asperiores quibusdam soluta.
        </p>
      </div>
      <div className="pt-8">
      <h1 className="text-4xl font-semibold mb-4">My Skills</h1>
      <CardSkils title={"HTML5"} val={'95%'} width={skill1} />
      <CardSkils title={"CSS3"} val={'85%'} width={skill2} />
      <CardSkils title={"Javascript"} val={'70%'} width={skill3} />
      </div>
    </div>
  );
};

export default About;
