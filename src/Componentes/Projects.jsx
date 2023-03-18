import React from "react";
import {projects} from "../Data/Data.js"
import {BsCodeSlash} from "react-icons/bs"
import { useGeneralContext } from "../Context/GeneralContext.js";



export const Projects = () =>{

  const {darkMode, lenguage} = useGeneralContext()
   

    return(
        <section id="projects" className={`text-gray-400 ${darkMode ? "bg-gray-900 body-font" : "bg-green-200"}`}>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BsCodeSlash className={`mx-auto inline-block w-10 h-40 mb-4 ${darkMode ? "text-white":"text-stone-900"}`} />
          <h1 className={`sm:text-4xl font-Lato text-3xl  mb-4 ${darkMode ? "text-white":"text-stone-900"}`}>
            {lenguage === 'ES' ? "Proyectos":"Projects"}
          </h1>
          <p className={`lg:w-2/3 mx-auto font-Lato leading-relaxed text-base ${darkMode ? "text-white":"text-stone-600"}`}>
          {lenguage === 'ES' ?
           "Durante el BootCamp realizamos diferentes retos de corto alcance en tiempo que permitieron afizanzar los conocimientos para poder realizar el proyecto final que es la realización de un Clon de Slack."
           :
           "During the BootCamp we carried out different short-range challenges in time that allowed us to consolidate our knowledge to be able to carry out the final project, which is the creation of a Slack Clone."}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noreferrer"
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-fit h-full object-cover object-center"
                  src={project.image}
                  
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    )
}

