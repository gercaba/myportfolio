import React from "react";
import {skillsWhitLogo } from "../Data/Data.js";
import { CiMedal } from "react-icons/ci";
import { useGeneralContext } from "../Context/GeneralContext.js";

export const Skills = () => {
  const { darkMode, lenguage } = useGeneralContext();

  return (
    <section id="skills" className={`${darkMode ? "bg-[#2A303C]" :"bg-green-100"}`}>
      <div className="container px-5 pb-10 mx-auto">
        <div className="text-center mb-20">
          <CiMedal
            className={`w-10 h-32 inline-block  ${
              darkMode ? "text-white" : "text-stone-900"
            }`}
          />
          <h1
            className={`sm:text-4xl text-3xl font-Lato font-medium title-font mb-4 ${
              darkMode ? "text-white" : "text-stone-900"
            }`}
          >
            {lenguage === "ES" ? "Habilidades y tecnologías" : "Skills & Tech"}
          </h1>
          <p
            className={`text-base leading-relaxed font-Lato xl:w-2/4 lg:w-3/4 mx-auto ${
              darkMode ? "text-white" : "text-stone-600"
            }`}
          >
            {lenguage === "ES"
              ? "A lo largo del BootCamp en Nuclio Digital School he tenido la oportunidad de desarrollar los diferentes proyectos usando las siguientes tecnologías, librerías, entornos y lenguajes de desarollo."
              : "Throughout the BootCamp at Nuclio Digital School I had the opportunity to develop different projects using the following technologies, libraries, environments and development languages."}
          </p>
        </div>
        <div className="flex h-full flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skillsWhitLogo.map((skill) => (
            <div key={skill.title} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-6 items-center">
                <img alt="logo" className="h-6 mr-4" src={skill.logo} />
                <span className="title-font font-Lato font-medium text-white">
                  {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
