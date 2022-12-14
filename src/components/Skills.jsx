import React from "react";
import { skillsFront, skillsBack } from "../helpers/services";

const Skills = () => {
  return (
    <section className="w-full bg-secondary-blue  flex flex-col items-center justify-center pb-10 ">
      <h1 className="text-secondary text-2xl lg:text-4xl mt-10">
        HABILIDADES TÉCNICAS
      </h1>

      <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:space-x-10 mt-10  p-4">
        <article className="w-4/5 lg:w-1/4 rounded border border-secondary p-4">
          <h2 className="text-center text-secondary-white text-lg">
            Front-end
          </h2>
          <div className="w-full grid grid-cols-3 gap-x-4 gap-y-4 justify-items-center  text-secondary-white ">
            {skillsFront.map((skill) => (
              <span
                key={skill.id}
                className="flex flex-col items-center justify-center"
              >
                <img src={skill.image} alt="tools" />
                <h2>{skill.name}</h2>
              </span>
            ))}
          </div>
        </article>

        <article className="w-4/5 lg:w-1/4    rounded border border-secondary p-4">
          <h2 className="text-center text-secondary-white text-lg">Back-end</h2>
          <div className="w-full grid grid-cols-3 gap-x-4 gap-y-4 justify-items-center  text-secondary-white ">
            {skillsBack.map((skill) => (
              <span
                key={skill.id}
                className="flex flex-col items-center justify-center"
              >
                <img src={skill.image} alt="" />
                <h2>{skill.name}</h2>
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
