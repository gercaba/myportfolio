import React from "react";
import {skills} from "../Data/Data.js"
import {AiOutlineCheckSquare} from "react-icons/ai"
import {CiMedal} from "react-icons/ci"
import { useGeneralContext } from "../Context/GeneralContext.js";

export const Skills = () =>{

  const {darkMode, lenguage} = useGeneralContext()

    return(
        <section id="skills" className={`${!darkMode && "bg-green-100"}`}>
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <CiMedal className={`w-10 h-40 inline-block mb-4 ${darkMode ? "text-white":"text-stone-900"}`}  />
            <h1 className={`sm:text-4xl text-3xl font-Lato font-medium title-font mb-4 ${darkMode ? "text-white":"text-stone-900"}`}>
            {lenguage === 'ES' ? "Habilidades y tecnologías":"Skills & Tech"}
            </h1>
            <p className={`text-base leading-relaxed font-Lato xl:w-2/4 lg:w-3/4 mx-auto ${darkMode ? "text-white":"text-stone-600"}`}>
            {lenguage === 'ES' ?
            "A lo largo del BootCamp en Nuclio Digital School he tenido la oportunidad de desarrollar los diferentes proyectos usando las siguientes tecnologías, librerías, entornos o lenguajes de desarollo."
            :
            "Throughout the BootCamp at Nuclio Digital School I have had the opportunity to develop different projects using the following technologies, libraries, environments or development languages."}
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <AiOutlineCheckSquare className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-Lato font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

