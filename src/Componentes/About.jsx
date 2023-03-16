import React from "react";
import profilePictureSmall from "../Assets/profilePicture-small.jpeg"

export const About = (props) =>{

const darkMode = props.darkMode

    return(
        <section id="about" className={`${!darkMode && "bg-green-100"}`}>

        <div className={`container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ${!darkMode && ""}`}>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className={`title-font font-Lato sm:text-4xl text-3xl mb-4 font-medium  ${darkMode ? "text-white":"text-stone-900"}`}>
              Hola, soy Germán
              </h1>
              <h2 className={`title-font font-Lato sm:text-2xl text-3xl mb-4 font-medium  ${darkMode ? "text-white":"text-stone-900"}`}>
              <br className="hidden lg:inline-block" />Just starting but hoping it never ends
              </h2>
           
            <p className={`font-Lato mb-8 leading-relaxed  ${darkMode ? "text-white":"text-stone-600"}`}>
              Just starting but hoping it never ends
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Trabaja conmigo
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Mira mis trabajos anteriores
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={profilePictureSmall}
            />
          </div>
        </div>
      </section>
    )
}

