import React from "react";
import profilePictureSmall from "../Assets/profilePicture-small.jpeg";
import { useDarkModeContext } from "../Context/DarkModeContext";
import gitLogo from "../Assets/Icons/gitLogo.png";
import linkedinLogo from "../Assets/Icons/linkedinLogo.png";

export const About = (props) => {
  const { darkMode } = useDarkModeContext();

  return (
    <section id="about" className={`${!darkMode && "bg-green-100"}`}>
      <div
        className={`container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ${
          !darkMode && ""
        }`}
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className={`title-font font-Lato sm:text-4xl text-3xl mb-4 font-medium  ${
              darkMode ? "text-white" : "text-stone-900"
            }`}
          >
            Hola, soy Germán
          </h1>
          <h2
            className={`title-font font-Lato sm:text-2xl text-3xl mb-4 font-medium  ${
              darkMode ? "text-white" : "text-stone-900"
            }`}
          >
            <br className="hidden lg:inline-block" />
            Just starting but hoping it never ends
          </h2>

          <p
            className={`font-Lato mb-8 leading-relaxed  ${
              darkMode ? "text-white" : "text-stone-600"
            }`}
          >
            Just starting but hoping it never ends
          </p>
          <div className="flex justify-center justify-items-center">
            <a
              href="#projects"
              className={`inline-flex font-Lato border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg ${darkMode ? "bg-green-300 text-stone-900" :"bg-gray-800 text-white"}`}
            >
              Projects
            </a>
          </div>
          <div className="flex flex-row justify-items-center">
            <img src={gitLogo} className="h-10 mt-5 mr-10" />
            <img src={linkedinLogo} className="h-10 mt-5" />
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
  );
};
