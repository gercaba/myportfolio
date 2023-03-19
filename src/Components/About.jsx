import React from "react";
import profilePictureSmall from "../Assets/Profile/profilePicture-small.jpeg";
import { useGeneralContext } from "../Context/GeneralContext";
import linkedinLogoBlack from "../Assets/Icons/linkedinBlack.png";
import linkedinLogoWhite from "../Assets/Icons/linkedinWhite.png";
import gitLogoBlack from "../Assets/Icons/gitBlack.png";
import gitLogoWhite from "../Assets/Icons/gitWhite.png";
import mycv from "../Assets/Profile/German_CV_ES_2023_2.png"
import cvFile from "../Assets/Profile/German_CV_ES_2023_2.pdf"
import DownloadButton from "./DownloadButton";

export const About = (props) => {
  const { darkMode, lenguage } = useGeneralContext();
  console.log("lenguage", lenguage);

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
            {lenguage === "ES"
              ? "Hola, soy Germán"
              : "Hello, my name is Germán"}
          </h1>
          <h2
            className={`title-font font-Lato sm:text-2xl text-3xl mb-4 font-medium  ${
              darkMode ? "text-white" : "text-stone-900"
            }`}
          >
            <br className="hidden lg:inline-block" />

            {lenguage === "ES"
              ? "Junior Full Stack Developer"
              : "Junior Full Stack Developer"}
          </h2>

          <p
            className={`font-Lato mb-8 leading-relaxed  ${
              darkMode ? "text-white" : "text-stone-600"
            }`}
          >
            {lenguage === "ES"
              ? "Empezando pero esperando que nunca se acabe"
              : "Just starting but hoping it never ends"}
          </p>
          <div className="flex flex-row">
            <div className="flex justify-center justify-items-center mr-6">
              <a
                href="#projects"
                className={`btn inline-flex normal-case font-normal font-Lato border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg ${
                  darkMode
                    ? "bg-green-300 text-stone-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                {lenguage === "ES" ? "Proyectos" : "Projects"}
              </a>
            </div>
            <div className="flex justify-center justify-items-center">
              <label
                htmlFor="my-modal-3"  
                className={`btn inline-flex font-Lato normal-case font-normal border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white text-lg rounded ${
                  darkMode
                    ? "bg-green-300 text-stone-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                {lenguage === "ES" ? "Ver CV" : "View CV"}
                
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative w-full">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                     
                      <img alt='my cv' src={mycv}/>
                      <DownloadButton file={cvFile}/>
                    
                  </div>
                </div>
            
            </div>
          </div>
          <div className="flex flex-row justify-around align-middle mt-6">
            <div className="">
              <a
                href="https://github.com/gercaba"
                target="_blank"
                rel="noreferrer"
              >
                {darkMode ? (
                  <img
                    alt="logo git"
                    src={gitLogoWhite}
                    className="h-10 mr-6 transform hover:-translate-y-1 hover:scale-130 "
                  />
                ) : (
                  <img
                    alt="logo git"
                    src={gitLogoBlack}
                    className="h-10  mr-6 hover:-translate-y-1 hover:scale-130 "
                  />
                )}
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/gercaba/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                {darkMode ? (
                  <img
                    alt="logo linkedin"
                    src={linkedinLogoWhite}
                    className="h-10 hover:-translate-y-1 hover:scale-130 "
                  />
                ) : (
                  <img
                    alt="logo linkedin"
                    src={linkedinLogoBlack}
                    className="h-10 hover:-translate-y-1 hover:scale-130 "
                  />
                )}
              </div>
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
  );
};
